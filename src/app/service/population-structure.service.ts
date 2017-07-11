import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Population } from '../class/population';

@Injectable()
export class PopulationStructureService {

  private csvUrl: string = 'assets/data/YearStructure_Chiayi.csv';
  private population: Population;
  private populationArr: Population[];

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

        this.population = new Population();
        this.population.year = data[0];
        this.population.season = data[1];
        this.population.year_season = data[2];
        this.population.city = data[3];

        this.population.total_population = data[4];
        this.population.total_population_increase = data[5];

        this.population.births = data[6];
        this.population.deaths = data[7];
        this.population.immigrants = data[8];
        this.population.emigrants = data[9];

        this.population.natural_increase_rate = data[10];
        this.population.social_increase_rate = data[11];
        this.population.total_increase_rate = data[12];

        lines.push(this.population);
      }

      this.populationArr = lines;

    } // for

    return this.populationArr;
  }

}