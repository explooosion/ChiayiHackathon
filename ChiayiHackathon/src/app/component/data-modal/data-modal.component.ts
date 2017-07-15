import { Component, OnInit } from '@angular/core';
import { PopulationStructureService } from '../../service/population-structure.service';
import { YearStructureService } from '../../service/year-structure.service';

declare let jquery: any;
declare let $: any;
declare let DataTable: any;
@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.css'],
  providers: [PopulationStructureService, YearStructureService]
})
export class DataModalComponent implements OnInit {

  popuData: any[] = [];
  yearData: any[] = [];
  constructor(
    private popuService: PopulationStructureService,
    private yearService: YearStructureService,
  ) { }

  ngOnInit() {
    this.getPopuCSV();
    this.getYearCSV();
  }

  // 人口數量變動
  async getPopuCSV() {
    await this.popuService.readCsv('Population_Chiayi')
      .subscribe(
      result => {
        this.popuData = result;
      });
    await this.popuService.readCsv('Population_Yunlin')
      .subscribe(
      result => {
        this.popuData = this.popuData.concat(result);
        setTimeout(() => { $('#PopuTable').DataTable({ "order": [[4, "asc"]] }); }, 500);
      });
  }

  // 年齡結構指標
  async getYearCSV() {
    await this.yearService.readCsv('YearStructure_Chiayi')
      .subscribe(
      result => {
        this.yearData = result;
      });
    await this.yearService.readCsv('YearStructure_Yunlin')
      .subscribe(
      result => {
        this.yearData = this.yearData.concat(result);
        setTimeout(() => { $('#YearTable').DataTable({ "order": [[4, "asc"]] }); }, 500);
      });
  }
}
