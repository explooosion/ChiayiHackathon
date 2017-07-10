import { Component, Input, NgZone, OnInit, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper, AgmDataLayer } from '@agm/core';

import { GMapsService } from './service/gmaps.service';
import { LayerService } from './service/layer.service';
import { PopulationStructureService } from './service/population-structure.service';

import { Marker } from './class/marker';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GMapsService, LayerService, Marker, PopulationStructureService]
})
export class AppComponent implements OnInit {
  title: string = 'Angular4 Demo Gmap';
  lat: number = 23.4791187;
  lng: number = 120.44113820000007;
  radius: number = 50000;
  color: string = '#FECE00';
  addr: string = "̨嘉義火車站";
  geoJsonObject: Object;
  csvData: any[] = [];

  constructor(
    private populationService: PopulationStructureService,
    private gmapService: GMapsService,
    private layerService: LayerService,
    private zone: NgZone,
    private marker: Marker
  ) { }

  ngOnInit() {
    this.getLayer();
    this.getPopuCSV();
  }

  setCircle() {
    this.gmapService.getLatLan(this.addr)
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

  getLayer() {
    this.layerService.getTaiwanLayer()
      .subscribe(
      result => {
        this.geoJsonObject = result;
        //console.log(result);
      },
      error => {
        console.log(error);
      });
  }

  getPopuCSV() {
    this.populationService.readCsv()
      .subscribe(
      result => {
        this.csvData = result;
        console.log(this.csvData);
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
