import { Component, Input, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = '高齡化社會發展趨勢之預測評估';
  constructor() { }

  ngOnInit() {

  }

}
