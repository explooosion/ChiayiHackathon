import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Care } from '../class/care';
import { Temple } from '../class/temple';
import { GeoJson, Features, Geometry } from '../class/geo-json';

@Injectable()
export class LayerService {

  private templeGeoJson: GeoJson = new GeoJson();
  private careGeoJson: GeoJson = new GeoJson();

  private featureArr: Features[];
  private features: Features;

  private temple: Temple;
  private care: Care;
  private templeArr: Temple[];
  private careArr: Care[];

  private fileUrl: string = 'assets/layer/';
  private fileCategory: string = '';
  private fileExtend: string = '.csv';

  private fileUrlMap: string = 'assets/layer/map/county.json';
  constructor(private http: Http) { }

  public getTaiwanLayer() {
    return this.http.get(this.fileUrlMap)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res.json());
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  public getTempleLayer(category: string, city: string) {
    return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
      .map(this.saveTemple);
  }

  public getCareLayer(category: string, city: string) {
    return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
      .map(this.saveCare);
  }

  public saveTemple(res: Response): Temple[] {
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    let lines = [];
    for (let i = 1; i < allTextLines.length; i++) {

      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        this.temple = new Temple(
          data[0],  // TempleName
          data[1],  // LordGod
          data[2],  // Area
          data[3],  // Address
          data[4],  // lat
          data[5]   // lng
        );

        lines.push(this.temple);
      }
      this.templeArr = lines;

    } // fro

    return this.templeArr;
  }

  public saveCare(res: Response): Care[] {
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    let lines = [];
    for (let i = 1; i < allTextLines.length; i++) {

      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        this.care = new Care(
          data[0],  // CareName
          data[6],  // Service
          data[1],  // Area
          data[4],  // Address
          data[11],  // lat
          data[12]   // lng
        );

        lines.push(this.care);
      }
      this.careArr = lines;

    } // fro

    return this.careArr;
  }

  public getTempleGeoJson(temple: any[]): GeoJson {

    temple.forEach(element => {
      this.templeGeoJson.features.push(
        new Features(
          {
            group: 'temple',
            address: element.Address,
            LordGod: element.element,
            TempleName: element.TempleName,
            lat: Number(element.lat),
            lng: Number(element.lng),
          },
          new Geometry('Point', [Number(element.lng), Number(element.lat)])
        )
      );
    });

    return JSON.parse(JSON.stringify(this.templeGeoJson));
  }

  public getCareGeoJson(care: any[]): GeoJson {

    care.forEach(element => {
      this.careGeoJson.features.push(
        new Features(
          {
            group: 'care',
            address: element.Address,
            Service: element.Service,
            CareName: element.CareName,
            lat: Number(element.lat),
            lng: Number(element.lng),
          },
          new Geometry('Point', [Number(element.lng), Number(element.lat)])
        )
      );
    });

    return JSON.parse(JSON.stringify(this.careGeoJson));
  }
}
