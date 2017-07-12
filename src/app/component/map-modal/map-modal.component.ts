import { Component, Input, NgZone, OnInit, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper, AgmDataLayer } from '@agm/core';

import { GMapsService } from '../../service/gmaps.service';
import { LayerService } from '../../service/layer.service';

import { YearStructureService } from '../../service/year-structure.service';
import { PopulationStructureService } from '../../service/population-structure.service';

import { Marker } from '../../class/marker';
import { City } from '../../class/city';

declare var wNumb: any;
declare var google: any;
declare var jquery: any;
declare var $: any;
declare var Slider: any;

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css'],
  providers: [GMapsService, LayerService, Marker,
    YearStructureService, PopulationStructureService]
})
export class MapModalComponent implements OnInit {

  lat: number = 23.4791187;
  lng: number = 120.44113820000007;
  radius: number = 100;
  color: string = '#FECE00';
  addr: string = "̨嘉義火車站";
  geoJsonObject: Object = null;
  geoJsonObjectIsAdd: boolean = false;

  // Slider Config - YearStructure
  yearActiveSlider: string = 'false';
  yearValueSlider: number = 1;
  yearDateSlider: string = `${new Date().getFullYear().toString()}-${new Date().getMonth().toString()}`;

  // Slider Config - PopuLation
  popuActiveSlider: string = 'false';
  popuValueSlider: number = 41;
  popuDateSlider: string = `${new Date().getFullYear().toString()}-${new Date().getMonth().toString()}`;

  // DataStore - YearStructure
  yearData: any[] = [];
  yearDataFilter: any[] = []; // 儲存卷軸對應的No.資料
  yearDataPercent: any[] = [50, 50, 50]; // 年齡結構百分比[A群,B群,C群]

  // DataStore - PopulationStructure
  popuData: any[] = [];
  popuDataFilter: any[] = [];
  popuDataPercent: any[] = [50, 50, 50];

  // DropDown - YearStructure
  cityYearSelect = new City().cityGroup[0];
  cityYearGroup: any[] = new City().cityGroup;

  // DropDown - PopulationStructure
  cityPopuSelect = new City().cityGroup[0];
  cityPopuGroup: any[] = new City().cityGroup;

  // Char-Doughnut Config
  doughnutChartLabels: string[] = ['~17', '18~65', '65~',];
  doughnutChartData: number[] = [650, 210, 140];
  doughnutChartType: string = 'doughnut'; // 改讀取 yearDataPercent

  // Char-Radar Config
  radarChartLabels: string[] = ['食', '衣', '住', '行', '育', '樂'];
  radarChartData: any = [
    { data: [85, 75, 92, 67, 82, 79], label: '嘉義縣', },
    { data: [79, 72, 85, 75, 91, 87], label: '雲林縣' }
  ];
  radarChartType: string = 'radar';
  colors: any = [{
    borderColor: 'rgba(54,162,235,.8)',
    backgroundColor: 'rgba(54,162,235,.3)',
    pointBackgroundColor: '#36A2EB',
    pointBorderColor: '#fff'
    // [colors]="colors" 
  }];

  // Char-BarChart Config
  barChartOptions: any = {
    scaleOverride: true,
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 1000000
        }
      }]
    }
  };
  barChartLabels: string[] = ['2014', '2015', '2016', '2017', '自訂年(季)'];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  barChartData: any[] = [
    { data: [524787, 519659, 514201, 508414, 505412], label: '雲林縣' }
  ];

  constructor(
    private yearService: YearStructureService,
    private popuService: PopulationStructureService,
    private gmapService: GMapsService,
    private layerService: LayerService,
    private zone: NgZone,
    private marker: Marker
  ) { }

  ngOnInit() {

    this.getYearCSV();
  }

  async setCircle() {
    await this.gmapService.getLatLan(this.addr)
      .subscribe(
      result => {
        //必須使用zone 觀察整個 view 否則會導致延遲
        this.zone.run(() => {
          this.lat = result.lat();
          this.lng = result.lng();
          this.saveMarker(result.lat(), result.lng());
        });
      },
      error => console.log(error),
      () => console.log('Geocoding completed!')
      );
  }

  saveMarker(lat: number, lng: number) {
    this.marker.lat = lat;
    this.marker.lng = lng;
  }

  async getLayer() {
    await this.layerService.getTaiwanLayer()
      .subscribe(
      result => {
        this.zone.run(() => {
          this.geoJsonObject = result;
        });
      },
      error => {
        console.log(error);
      });
  }

  layerControl() {

    // 請顛倒做
    if (!this.geoJsonObjectIsAdd) {
      this.getLayer();
    } else {
      this.zone.run(() => {
        this.geoJsonObject = null;
      });
    }
  }

  styleFunc(feature) {
    // get level - 0/1
    //var level = feature.getProperty('level');
    var color = 'green';
    // only show level one features
    //var visibility = level == 1 ? true : false;
    return {
      icon: 'assets/images/door.png',
      fillColor: color,
      fillOpacity: 0.2,
      strokeColor: color,
      strokeWeight: 1,
      strokeOpacity: 0.8,
      // make layer 1 features visible
      // visible: visibility
    };
  }

  optionYearChange(city: any) {
    this.yearDataPercent = this.yearService.getStructurePercent(city.enName, this.yearValueSlider);
    this.yearActiveSlider = ''; // 選擇縣市後才可以滑動 Slider
  }

  onYearSliderChange(no: number) {
    this.yearDataPercent = this.yearService.getStructurePercent(this.cityYearSelect.enName, no);
    var _mon = no % 12 == 0 ? 12 : no % 12;
    var _year = no / 12 == 0 ? 2012 : Math.floor(no / 12) + 2012;
    this.yearDateSlider = `${_year}-${_mon}`;
  }

  optionPopuChange(city: any) {
    this.popuDataPercent = this.popuService.getPopulationPercent(city.enName, this.yearValueSlider)[0];
    this.popuActiveSlider = ''; // 選擇縣市後才可以滑動 Slider

    this.onPopuSliderChange(41);
  }

  onPopuSliderChange(no: number) {
    this.popuDataPercent = this.popuService.getPopulationPercent(this.cityPopuSelect.enName, no);
    var _mon = no % 4 == 0 ? 4 : no % 4;
    var _year = no / 4 == 0 ? 2007 : Math.floor(no / 4) + 2007;
    this.popuDateSlider = `${_year}-${_mon}`;

    var popuf = Number(this.popuService.getPopulationPercent(this.cityPopuSelect.enName, no)[0]);
    var popu14 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect.enName, 32)[0]);
    var popu15 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect.enName, 36)[0]);
    var popu16 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect.enName, 40)[0]);
    var popu17 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect.enName, 44)[0]);
    this.barChartData = [{ data: [popu14, popu15, popu16, popu17, popuf], label: this.cityPopuSelect.chName }];

    var bartmpLabels = ['2014', '2015', '2016', '2017', `${_year}-${_mon}(季)`];
    this.barChartLabels.length = 0;
    for (let i = 0; i < bartmpLabels.length; i++) {
      this.barChartLabels.push(bartmpLabels[i]);
    }
  }

  async getYearCSV() {
    await this.yearService.readCsv('YearStructure_Chiayi')
      .subscribe(
      result => {
        this.yearData = result;
      });
  }

}
