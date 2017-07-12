import { Component, Input, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = '預測未來的高齡化社會的發展趨勢';
  constructor() { }

  ngOnInit() {

  }

}
