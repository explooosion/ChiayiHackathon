import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Population } from '../class/population';

@Injectable()
export class PopulationStructureService {

  private popu: Population;
  private popuArr: Population[];

  private fileUrl: string = 'assets/data/';
  private fileExtend: string = '.csv';

  constructor(private http: Http) { }

  /**
   * 讀取人口數量CSV（地區）
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
        this.popu = new Population();
        this.popu.no = data[0];
        this.popu.year = data[1];
        this.popu.season = data[2];
        this.popu.year_season = data[3];
        this.popu.city = data[4];

        this.popu.total_population = data[5];
        this.popu.total_population_increase = data[6];

        this.popu.births = data[7];
        this.popu.deaths = data[8];
        this.popu.immigrants = data[9];
        this.popu.emigrants = data[10];

        this.popu.natural_increase_rate = data[11];
        this.popu.social_increase_rate = data[12];
        this.popu.total_increase_rate = data[13];

        lines.push(this.popu);
      }

      this.popuArr = lines;

    } // for

    return this.popuArr;
  }

  /**
   * 人口數量百分比（地區，編號）
   * @param city 
   * @param no 
   */
  public getPopulationPercent(city: string, no: number) {

    // f(x) = B3+(C3*A3)+(D3*(A3*A3))
    var res = [];
    var fx = null;
    switch (city) {
      case 'Chiayi':
        fx = new Population().FxChiayi;
        break;
      case 'Yunlin':
        fx = new Population().FxYunlin;
        break;
    }

    for (let i = 0; i < 3; i++) {

      var v = fx[i].a + (fx[i].b * no) + (fx[i].c * (no * no));
      if (i == 0) {
        res.push(Number(v).toFixed(0));
      } else {
        res.push(Number(v).toFixed(4));
      }
      //console.log(`${res} = ${fx[i].a} + ${fx[i].b} * ${no} + ${fx[i].c} * ${no} * ${no}`);
    }
    return res;

  }


}