import { Component, OnInit } from '@angular/core';
import { PopulationStructureService } from '../../service/population-structure.service';
import { YearStructureService } from '../../service/year-structure.service';

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

  getPopuCSV() {
    this.popuService.readCsv()
      .subscribe(
      result => {
        this.popuData = result;
        console.log('popuData', this.popuData);
      });
  }

  getYearCSV() {
    this.yearService.readCsv()
      .subscribe(
      result => {
        this.yearData = result;
        console.log('yearData', this.yearData);
      });
  }
}
