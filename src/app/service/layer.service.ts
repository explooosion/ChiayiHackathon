import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GeoJson, Features, Geometry } from '../class/geo-json';
import { Care } from '../class/care';
import { Temple } from '../class/temple';
import { Secure } from '../class/secure';
import { Burglary } from '../class/burglary';

@Injectable()
export class LayerService {

  private templeGeoJson: GeoJson = new GeoJson();
  private careGeoJson: GeoJson = new GeoJson();
  private secureGeoJson: GeoJson = new GeoJson();
  private burglaryGeoJson: GeoJson = new GeoJson();


  private temple: Temple;
  private care: Care;
  private secure: Secure;
  private burglary: Burglary;

  private templeArr: Temple[];
  private careArr: Care[];
  private secureArr: Secure[];
  private burglaryArr: Burglary[];

  private fileUrl: string = 'assets/layer/';
  private fileCategory: string = '';
  private fileExtend: string = '.csv';

  private fileUrlMap: string = 'assets/layer/map/county.json';
  constructor(private http: Http) { }

  public getTaiwanLayer() {
    return this.http.get(this.fileUrlMap)
      .map(this.saveTaiwan);
  }

  private saveTaiwan(res: Response) {
    return res.json() || {};
  }

  public getTempleLayer(category: string, city: string) {
    return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
      .map(this.saveTemple);
  }

  public getCareLayer(category: string, city: string) {
    return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
      .map(this.saveCare);
  }

  public getSecureLayer(category: string, city: string) {
    return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
      .map(this.saveSecure);
  }

  public getBurglaryLayer(category: string, city: string) {
    return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
      .map(this.saveSecure);
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
          data[0],    // CareName
          data[6],    // Service
          data[1],    // Area
          data[4],    // Address
          data[11],   // lat
          data[12]    // lng
        );

        lines.push(this.care);
      }
      this.careArr = lines;

    } // fro

    return this.careArr;
  }

  public saveSecure(res: Response): Secure[] {
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    let lines = [];
    for (let i = 1; i < allTextLines.length; i++) {

      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        this.secure = new Secure(
          data[0],  // address
          data[1],  // lat
          data[2],  // lng 
        );

        lines.push(this.secure);
      }
      this.secureArr = lines;

    } // fro

    return this.secureArr;
  }

  public saveBurglary(res: Response): Burglary[] {
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    let lines = [];
    for (let i = 1; i < allTextLines.length; i++) {

      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        this.burglary = new Burglary(
          data[0],  // address
          data[1],  // lat
          data[2],  // lng
          data[3]  // Address
        );

        lines.push(this.burglary);
      }
      this.burglaryArr = lines;

    } // fro

    return this.burglaryArr;
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

  public getSecureGeoJson(secure: any[]): GeoJson {

    secure.forEach(element => {
      this.secureGeoJson.features.push(
        new Features(
          {
            group: 'secure',
            address: element.address,
            lat: Number(element.lat),
            lng: Number(element.lng),
          },
          new Geometry('Point', [Number(element.lng), Number(element.lat)])
        )
      );
    });
    return JSON.parse(JSON.stringify(this.secureGeoJson));
  }

  public getBurglaryGeoJson(burglary: any[]): GeoJson {

    burglary.forEach(element => {
      this.burglaryGeoJson.features.push(
        new Features(
          {
            group: 'burglary',
            address: element.address,
            date: element.date,
            lat: Number(element.lat),
            lng: Number(element.lng),
          },
          new Geometry('Point', [Number(element.lng), Number(element.lat)])
        )
      );
    });

    return JSON.parse(JSON.stringify(this.burglaryGeoJson));
  }
}
