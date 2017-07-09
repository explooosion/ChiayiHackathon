import { Injectable, NgZone } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { Observable, Observer } from 'rxjs';

declare var google: any;

@Injectable()
export class GMapsService extends GoogleMapsAPIWrapper {
  constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
    super(__loader, __zone);
  }

  getLatLan(address: string) {
    console.log('Getting Address - ', address);
    let geocoder = new google.maps.Geocoder();
    let res = null;
    // return Observable.create(observer => {
    //   geocoder.geocode({ 'address': address }, function (results, status) {
    //     if (status == google.maps.GeocoderStatus.OK) {
    //       observer.next(results[0].geometry.location);
    //       observer.complete();
    //     } else {
    //       console.log('Error - ', results, ' & Status - ', status);
    //       observer.next({});
    //       observer.complete();
    //     }
    //   });
    // })

    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        // observer.next(results[0].geometry.location);
        // observer.complete();
        res = results[0].geometry.location;
        console.log(new Date(), res, 1);
      }
    });

    console.log(new Date(), res, 2);
    return res;
  }
}