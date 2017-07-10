import { Component, Input, NgZone, OnInit, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper, AgmDataLayer } from '@agm/core';

import { GMapsService } from './service/gmaps.service';
import { Marker } from './class/marker';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GMapsService, Marker]
})
export class AppComponent {
  title: string = 'Angular4 Demo Gmap';
  lat: number = 23.4791187;
  lng: number = 120.44113820000007;
  radius: number = 500;
  color: string = '#FECE00';
  addr: string = "̨嘉義火車站";

  constructor(
    private gmapService: GMapsService,
    private zone: NgZone,
    private marker: Marker
  ) { }


  setCircle() {
    this.gmapService.getLatLan(this.addr)
      .subscribe(
      result => {
        //needs to run inside zone to update the map
        //必須使用zone 觀察整個 view 否則會導致延遲
        this.zone.run(() => {
          this.lat = result.lat();
          this.lng = result.lng();
        });
      },
      error => console.log(error),
      () => console.log('Geocoding completed!')
      );
  }
 

  /*getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
      .map((res: Response) => res.json());
  }*/

  // 接下來要實作 http get 抓取 資料

}
