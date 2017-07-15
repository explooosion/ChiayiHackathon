import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Yearstructure } from '../class/yearstructure';

@Injectable()
export class YearStructureService {

  private ys: Yearstructure;
  private ysArr: Yearstructure[];

  private fileUrl: string = 'assets/data/';
  private fileExtend: string = '.csv';

  constructor(private http: Http) { }

  /**
   * 讀取年齡結構CSV（地區）
   * @param fn 
   */
  public readCsv(fn: string) {
    return this.http.get(this.fileUrl + fn + this.fileExtend)
      .map(this.extractData);
  }

  private extractData(res: Response) {

    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');

    let lines = [];

    for (let i = 1; i < allTextLines.length; i++) {

      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {

        this.ys = new Yearstructure();
        this.ys.no = data[0];
        this.ys.year = data[1];
        this.ys.month = data[2];
        this.ys.yearmonth = data[3];
        this.ys.city = data[4];

        this.ys.zero_twelve = data[5];
        this.ys.twelve_seventeen = data[6];

        this.ys.twenty = data[7];
        this.ys.sixty_five = data[8];
        this.ys.twnty_sixty = data[9];
        this.ys.seventeen_twenty = data[10];

        this.ys.zero_twenty = data[11];
        this.ys.zero_seventeen = data[12];
        this.ys.seventeen_sixty = data[13];

        lines.push(this.ys);
      }

      this.ysArr = lines;

    } // for

    return this.ysArr;
  }

  /**
   * 人口結構百分比（地區，編號）
   * @param city 
   * @param no 
   */
  public getStructurePercent(city: string, no: number) {

    // f(x) = A+B*no+c*no*no
    var res = [];
    var fx = null;
    switch (city) {
      case 'Chiayi':
        fx = new Yearstructure().FxChiayi;
        break;
      case 'Yunlin':
        fx = new Yearstructure().FxYunlin;
        break;
    }

    for (let i = 0; i < 3; i++) {

      var v = fx[i].a + fx[i].b * no + fx[i].c * no * no;
      res.push(Number(v).toFixed(6));
      //console.log(`${res} = ${fx[i].a} + ${fx[i].b} * ${no} + ${fx[i].c} * ${no} * ${no}`);
    }
    return res;
  }

}
