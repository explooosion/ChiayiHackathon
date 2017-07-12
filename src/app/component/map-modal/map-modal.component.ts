import { Component, Input, NgZone, OnInit, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper, AgmDataLayer } from '@agm/core';

import { GMapsService } from '../../service/gmaps.service';
import { LayerService } from '../../service/layer.service';

import { Marker } from '../../class/marker';


declare var google: any;
declare var jquery: any;
declare var $: any;
declare var Slider: any;

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css'],
  providers: [GMapsService, LayerService, Marker]
})
export class MapModalComponent implements OnInit {

  lat: number = 23.4791187;
  lng: number = 120.44113820000007;
  radius: number = 50000;
  color: string = '#FECE00';
  addr: string = "̨嘉義火車站";
  geoJsonObject: Object = null;
  timelineValue: number = 46;
  value: number = 0;

  // Char Doughnut
  doughnutChartLabels: string[] = ['18~65 成年人', '65~ 老年人', '~18 未成年'];
  doughnutChartData: number[] = [650, 210, 140];
  doughnutChartType: string = 'doughnut';

  // Radar
  public radarChartLabels: string[] = ['食', '衣', '住', '行', '育', '樂'];
  public radarChartData: any = [
    { data: [85, 75, 92, 67, 82, 79], label: '嘉義縣', },
    { data: [79, 72, 85, 75, 91, 87], label: '雲林縣' }
  ];
  public radarChartType: string = 'radar';
  public colors: any = [{
    borderColor: 'rgba(54,162,235,.8)',
    backgroundColor: 'rgba(54,162,235,.3)',
    pointBackgroundColor: '#36A2EB',
    pointBorderColor: '#fff'
    // [colors]="colors" 
  }];

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true, scales: {
      yAxes: [{
        ticks: {
          min: 60,
          max: 80
        }
      }]
    }
  };
  public barChartLabels: string[] = ['2016', '2017', '2018', '2019'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 68, 72, 75, 74], label: '雲林縣' },
    { data: [63, 62, 65, 68, 69], label: '嘉義縣' }
  ];

  constructor(
    private gmapService: GMapsService,
    private layerService: LayerService,
    private zone: NgZone,
    private marker: Marker
  ) { }

  ngOnInit() {

    this.getLayer();

    // With JQuery
    // $("#timeline").slider().on("slide", function (slideEvt) {
    //   $("#ex6SliderVal").text(slideEvt.value);
    // }).on("change", function (slideEvt) {
    //   $("#ex6SliderVal").text(slideEvt.value.newValue);
    // });

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

}
