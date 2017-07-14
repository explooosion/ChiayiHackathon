import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

/**
 * Component
 */
import { DataModalComponent } from './component/data-modal/data-modal.component';
import { MapModalComponent } from './component/map-modal/map-modal.component';
import { NavbarModalComponent } from './component/navbar-modal/navbar-modal.component';
import { FooterModalComponent } from './component/footer-modal/footer-modal.component';

/**
 * Plugin
 */
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';
import { TreeModule } from 'angular-tree-component';
import { ColorPickerModule } from 'ngx-color-picker';

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
      apiKey: 'AIzaSyDT7xIZ1hGuhosRMMHp7euLSjKmJUgRip8',
      language: 'zh-TW'
    }),
    ChartsModule,
    NouisliderModule,
    TreeModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
