import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GeoJson, Features, Geometry } from '../class/geo-json';

import { Hospi } from '../class/hospi';
import { Secure } from '../class/secure';
import { Care } from '../class/care';
import { Temple } from '../class/temple';
import { Burglary } from '../class/burglary';
import { School } from '../class/school';

@Injectable()
export class LayerService {

  private hospiGeoJson: GeoJson = new GeoJson();
  private secureGeoJson: GeoJson = new GeoJson();
  private careGeoJson: GeoJson = new GeoJson();
  private templeGeoJson: GeoJson = new GeoJson();
  private burglaryGeoJson: GeoJson = new GeoJson();
  private schoolGeoJson: GeoJson = new GeoJson();
  private abcGeoJson: GeoJson = new GeoJson();

  private hospi: Hospi;
  private abc: Hospi;
  private secure: Secure;
  private care: Care;
  private temple: Temple;
  private burglary: Burglary;
  private school: School;

  private hospiArr: Hospi[];
  private abcArr: Hospi[];
  private secureArr: Secure[];
  private careArr: Care[];
  private templeArr: Temple[];
  private burglaryArr: Burglary[];
  private schoolArr: School[];

  private fileUrl: string = 'assets/layer/';
  private fileExtend: string[] = ['.csv', '.json'];

  private countyUrl: string = 'assets/layer/map/county.json';
  private townUrl: string = 'assets/layer/map/town.json';

  // SHP > GEO
  // npm install mapshaper -g
  // mapshaper TOWN_MOI_1060525.shp -o encoding=big5 format=geojson TOWN_MOI_1060525.json
  constructor(private http: Http) { }

  /**
   * 讀取地區 County JSON（GeoJson）
   */
  public getGeoJsonLayer(type: string) {
    return this.http.get(this.fileUrl + 'map/' + type + this.fileExtend[1])
      .map((res) => {
        return res.json() || {}
      });
  }

  /**
   * 讀取指標 CSV（監視器、醫院診所、照護機構、宗教建設、竊盜紀錄）
   * @param category 
   * @param city 
   */
  public getPointerLayer(category: string, city: string) {
    return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend[0])
      .map(
      (res) => {
        switch (category) {
          case 'hospi':
            return this.saveHospi(res);

          case 'abc':
            return this.saveABC(res);

          case 'secure':
            return this.saveSecure(res);

          case 'care':
            return this.saveCare(res);

          case 'temple':
            return this.saveTemple(res);

          case 'burglary':
            return this.saveBurglary(res);

          case 'school':
            return this.saveSchool(res);
        }
      }
      );
  }

  /**
   * Layer - 宗教建設
   * @param res 
   */
  public saveTemple(res: Response): Temple[] {
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    let lines = [];
    for (let i = 1; i < allTextLines.length; i++) {

      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        this.temple = new Temple(
          data[0],  // name
          data[1],  // lordgod
          data[2],  // area
          data[3],  // address
          data[4],  // lat
          data[5]   // lng
        );

        lines.push(this.temple);
      }
      this.templeArr = lines;

    }
    return this.templeArr;
  }

  /**
   * Layer - 照護機構
   * @param res 
   */
  public saveCare(res: Response): Care[] {
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    let lines = [];
    for (let i = 1; i < allTextLines.length; i++) {

      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        this.care = new Care(
          data[0],    // name
          data[6],    // service
          data[1],    // area
          data[4],    // address
          data[11],   // lat
          data[12]    // lng
        );

        lines.push(this.care);
      }
      this.careArr = lines;

    }
    return this.careArr;
  }

  /**
   * Layer - 監視器
   * @param res 
   */
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

    }
    return this.secureArr;
  }

  /**
   * Layer - 竊盜紀錄
   * @param res 
   */
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
          data[3]   // date
        );

        lines.push(this.burglary);
      }
      this.burglaryArr = lines;

    }
    return this.burglaryArr;
  }

  /**
   * Layer - 醫院診所
   * @param res 
   */
  public saveHospi(res: Response): Hospi[] {
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    let lines = [];
    for (let i = 1; i < allTextLines.length; i++) {

      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        this.hospi = new Hospi(
          data[0],  // address
          data[1],  // lat
          data[2],  // lng
          data[3],  // Address
          data[4] == null ? '' : data[4], // level
        );

        lines.push(this.hospi);
      }
      this.hospiArr = lines;

    }
    return this.hospiArr;
  }

  /**
   * Layer - 學校地點
   * @param res 
   */
  public saveSchool(res: Response): School[] {
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    let lines = [];
    for (let i = 1; i < allTextLines.length; i++) {

      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        this.school = new School(
          data[0],    // name
          data[1],    // address
          data[2],   // lat
          data[3],   // lng
          data[4]    // city
        );

        lines.push(this.school);
      }
      this.schoolArr = lines;

    }
    return this.schoolArr;
  }

  /**
     * Layer - 長照
     * @param res 
     */
  public saveABC(res: Response): Hospi[] {
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    let lines = [];
    for (let i = 1; i < allTextLines.length; i++) {

      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        this.abc = new Hospi(
          data[0],  // address
          data[1],  // lat
          data[2],  // lng
          data[3],  // Address
          data[4] == null ? '' : data[4], // level
        );

        lines.push(this.abc);
      }
      this.abcArr = lines;

    }
    return this.abcArr;
  }

  /**
   * GeoJson - 宗教建設
   * @param temple 
   */
  public getTempleGeoJson(temple: any[]): GeoJson {

    temple.forEach(element => {
      this.templeGeoJson.features.push(
        new Features(
          {
            group: 'temple',
            name: element.name,
            address: element.address,
            lat: Number(element.lat),
            lng: Number(element.lng),
            lordgod: element.lordgod,
          },
          new Geometry('Point', [Number(element.lng), Number(element.lat)])
        )
      );
    });

    return JSON.parse(JSON.stringify(this.templeGeoJson));
  }

  /**
   * GeoJson - 照護機構
   * @param care 
   */
  public getCareGeoJson(care: any[]): GeoJson {

    care.forEach(element => {
      this.careGeoJson.features.push(
        new Features(
          {
            group: 'care',
            name: element.name,
            address: element.address,
            lat: Number(element.lat),
            lng: Number(element.lng),
            service: element.service,
          },
          new Geometry('Point', [Number(element.lng), Number(element.lat)])
        )
      );
    });

    return JSON.parse(JSON.stringify(this.careGeoJson));
  }

  /**
   * GeoJson - 監視器
   * @param secure 
   */
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

  /**
   * GeoJson - 竊盜紀錄
   * @param burglary 
   */
  public getBurglaryGeoJson(burglary: any[]): GeoJson {

    burglary.forEach(element => {
      this.burglaryGeoJson.features.push(
        new Features(
          {
            group: 'burglary',
            address: element.address,
            lat: Number(element.lat),
            lng: Number(element.lng),
            date: element.date,
          },
          new Geometry('Point', [Number(element.lng), Number(element.lat)])
        )
      );
    });
    return JSON.parse(JSON.stringify(this.burglaryGeoJson));
  }

  /**
   * GeoJson - 醫院診所
   * @param hospi 
   */
  public getHospiGeoJson(hospi: any[]): GeoJson {

    hospi.forEach(element => {
      this.hospiGeoJson.features.push(
        new Features(
          {
            group: 'hospi',
            name: element.name,
            address: element.address,
            lat: Number(element.lat),
            lng: Number(element.lng),
            level: element.level
          },
          new Geometry('Point', [Number(element.lng), Number(element.lat)])
        )
      );
    });
    return JSON.parse(JSON.stringify(this.hospiGeoJson));
  }

  /**
   * GeoJson - 長照
   * @param hospi 
   */
  public getABCGeoJson(abc: any[]): GeoJson {

    abc.forEach(element => {
      this.abcGeoJson.features.push(
        new Features(
          {
            group: 'abc',
            name: element.name,
            address: element.address,
            lat: Number(element.lat),
            lng: Number(element.lng),
            level: element.level
          },
          new Geometry('Point', [Number(element.lng), Number(element.lat)])
        )
      );
    });
    return JSON.parse(JSON.stringify(this.abcGeoJson));
  }

  /**
 * GeoJson - 學校地點
 * @param school 
 */
  public getSchoolGeoJson(school: any[]): GeoJson {

    school.forEach(element => {
      this.schoolGeoJson.features.push(
        new Features(
          {
            group: 'school',
            name: element.name,
            address: element.address,
            lat: Number(element.lat),
            lng: Number(element.lng)
          },
          new Geometry('Point', [Number(element.lng), Number(element.lat)])
        )
      );
    });
    return JSON.parse(JSON.stringify(this.schoolGeoJson));
  }
}
