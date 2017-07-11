import { Component, Input, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Angular4 Demo Gmap';

  constructor() { }

  ngOnInit() {
  }

}
