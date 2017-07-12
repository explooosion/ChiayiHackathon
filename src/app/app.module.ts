import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { DataModalComponent } from './component/data-modal/data-modal.component';
import { MapModalComponent } from './component/map-modal/map-modal.component';
import { NavbarModalComponent } from './component/navbar-modal/navbar-modal.component';

import { ChartsModule } from 'ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';
import { FooterModalComponent } from './component/footer-modal/footer-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DataModalComponent,
    MapModalComponent,
    NavbarModalComponent,
    FooterModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      language: 'zh-TW'
    }),
    ChartsModule,
    NouisliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
