import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Temple } from '../class/temple';
import { GeoJson, Features, Geometry } from '../class/geo-json';

@Injectable()
export class TempleService {

  private temple: Temple;
  private templeArr: Temple[];

  private templeGeoJson: GeoJson;

  private fileUrl: string = 'assets/layer/temple/';
  private fileExtend: string = '.csv';

  constructor(private http: Http) { }

  public readCsv(city: string) {
    return this.http.get(this.fileUrl + city + this.fileExtend)
      .map(this.extractData);
  }

  private extractData(res: Response): Temple[] {

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

  public getGeoJson(): GeoJson {

    this.templeGeoJson = new GeoJson();
    this.templeGeoJson.features.push(new Features(
      {
        door: '1'
      },
      new Geometry('Point', [120.44158360000006, 23.4812722])
    ));

    return this.templeGeoJson;
  }

}
