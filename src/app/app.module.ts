import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { DataModalComponent } from './component/data-modal/data-modal.component';
import { MapModalComponent } from './component/map-modal/map-modal.component';
import { NavbarModalComponent } from './component/navbar-modal/navbar-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DataModalComponent,
    MapModalComponent,
    NavbarModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      language: 'zh-TW'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
