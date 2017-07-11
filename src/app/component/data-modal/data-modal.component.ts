import { Component, OnInit } from '@angular/core';
import { PopulationStructureService } from '../../service/population-structure.service';
import { YearStructureService } from '../../service/year-structure.service';

declare var jquery: any;
declare var $: any;
declare var DataTable: any;
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

  async getPopuCSV() {
    await this.popuService.readCsv()
      .subscribe(
      result => {
        this.popuData = result;
        //console.log('popuData', this.popuData);
      });
  }

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
        setTimeout(() => { $('.dataTable').DataTable({ "order": [[4, "asc"]] }); }, 500);
      });
  }
}
