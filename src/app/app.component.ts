import { Component, Input, NgZone, OnInit, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';

import { GMapsService } from './service/gmaps.service';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GMapsService]
})
export class AppComponent extends GoogleMapsAPIWrapper {
  title: string = 'Angular4 Demo Gmap';
  lat: number = 24.1375758;
  lng: number = 120.68660550000004;
  radius: number = 500;
  color: string = '#FECE00';
  addr: string = "台中火車站";

  constructor(
    private gmap: GMapsService,
    private __loader: MapsAPILoader,
    private __zone: NgZone) {
    super(__loader, __zone);
  }

  setCircle() {

    let geocoder = new google.maps.Geocoder();

    let la, ln;
    geocoder.geocode({ 'address': this.addr }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        let res = results[0].geometry.location;
        la = res.lat();
        ln = res.lng();
      } else {
        console.log('geocode not found');
      }
    });

    setTimeout(() => {
      this.lat = Number(la);
      this.lng = Number(ln);
    }, 10);

  }

}
