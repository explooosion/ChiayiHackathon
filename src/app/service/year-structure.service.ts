import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Yearstructure } from '../class/yearstructure';

@Injectable()
export class YearStructureService {

  private csvUrl: string = 'assets/data/YearStructure_Chiayi.csv';
  private yearstructure: Yearstructure;
  private yearstructureArr: Yearstructure[];

  constructor(private http: Http) { }

  readCsv() {
    return this.http.get(this.csvUrl)
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

        this.yearstructure = new Yearstructure();
        this.yearstructure.no = data[0];
        this.yearstructure.year = data[1];
        this.yearstructure.month = data[2];
        this.yearstructure.yearmonth = data[3];
        this.yearstructure.city = data[4];

        this.yearstructure.zero_twelve = data[5];
        this.yearstructure.twelve_seventeen = data[6];

        this.yearstructure.twenty = data[7];
        this.yearstructure.sixty_five = data[8];
        this.yearstructure.twnty_sixty = data[9];
        this.yearstructure.seventeen_twenty = data[10];

        this.yearstructure.zero_twenty = data[11];
        this.yearstructure.zero_seventeen = data[12];
        this.yearstructure.seventeen_sixty = data[13];

        lines.push(this.yearstructure);
      }

      this.yearstructureArr = lines;

    } // for

    return this.yearstructureArr;
  }

}
