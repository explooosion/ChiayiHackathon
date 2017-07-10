import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PopulationStructureService {

  private csvUrl: string = 'assets/data/data.csv';

  constructor(private http: Http) { }

  readCsv() {

    let headers = new Headers();
    headers.append('Content-type', 'application/csv;charset=utf-8');
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.csvUrl, options)
      .map(this.extractData);
  }

  private extractData(res: Response) {

    console.log(res);
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];

    for (let i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
    }
    return lines;
  }

}
