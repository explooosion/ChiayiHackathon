import { Component, Input, NgZone, OnInit, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { GMapsService } from '../../service/gmaps.service';
import { LayerService } from '../../service/layer.service';

import { YearStructureService } from '../../service/year-structure.service';
import { PopulationStructureService } from '../../service/population-structure.service';

import { Marker } from '../../class/marker';
import { City } from '../../class/city';
import { Hospi } from '../../class/Hospi';
import { Secure } from '../../class/secure';
import { Temple } from '../../class/temple';
import { Burglary } from '../../class/burglary';


import { MapsAPILoader } from '@agm/core';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css'],
  providers: [
    GMapsService,
    LayerService,
    YearStructureService,
    Marker,
    PopulationStructureService,
  ]
})
export class MapModalComponent implements OnInit {

  bounds;
  // 初始資料
  lat: number = 23.4589877;
  lng: number = 120.29294219999997;
  zoom: number = 14;
  radius: number = 1000; // 半徑(公尺)
  color: string = 'rgba(253,216,55,0.57)';
  addr: string = "̨嘉義縣政府";

  // 分析統計
  countHospi: number = 7;
  countSecure: number = 17;
  countCare: number = 3;
  countTemple: number = 2;
  countBurglary: number = 1;
  countSchool: number = 0;
  countABC: number = 0;

  // 圖層資料
  geoLayerCounty: Object = null;
  geoLayerTown: Object = null;
  geoLayerVillage: Object = null;
  geoLayerHospi: Object = null;
  geoLayerSecure: Object = null;
  geoLayerCare: Object = null;
  geoLayerTemple: Object = null;
  geoLayerBurglary: Object = null;
  geoLayerSchool: Object = null;
  geoLayerABC: Object = null;

  // 圖層是否顯示
  geoLayerShowCounty: boolean = false;
  geoLayerShowTown: boolean = false;
  geoLayerShowVillage: boolean = false;
  geoLayerShowHospi: boolean = false;
  geoLayerShowSecure: boolean = false;
  geoLayerShowCare: boolean = false;
  geoLayerShowTemple: boolean = false;
  geoLayerShowBurglary: boolean = false;
  geoLayerShowSchool: boolean = false;
  geoLayerShowABC: boolean = false;

  // 點位訊息小窗
  infowinLat: number = 23.458987;
  infowinLng: number = 120.29294219999997;
  infowinMsg: string[] = ['', '', ''];
  infowinIsOpen: boolean = false;

  // 年齡結構 - 卷軸
  yearActiveSlider: string = null;
  yearValueSlider: number = 1;
  yearDateSlider: string = `${new Date().getFullYear().toString()}年 - ${new Date().getMonth().toString()}月`;

  // 人口結構 - 卷軸
  popuActiveSlider: string = null;
  popuValueSlider: number = 41;
  popuDateSlider: string = `${new Date().getFullYear().toString()}年 - 第${new Date().getMonth().toString()}季`;

  // 年齡結構 - 圖表
  //yearData: any[] = [];
  // yearDataFilter: any[] = []; // 儲存卷軸對應的No.資料
  yearDataPercent: any[] = [50, 50, 50]; // 年齡結構百分比[A群,B群,C群]
  yearCountOldMan: number[] = [1, 2, 3, 4];
  yearCountMale: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  yearCountPercent: number = 51.13;


  // 人口結構 - 圖表
  popuData: any[] = [];
  popuDataFilter: any[] = [];
  popuDataPercent: any[] = [50, 50, 50];

  // 年齡結構 - 下拉式選單 
  cityYearSelect: string = new City().cityGroup[1].enName;
  cityYearGroup: any[] = new City().cityGroup;

  // 人口結構 - 下拉式選單
  cityPopuSelect: string = new City().cityGroup[1].enName;
  cityPopuGroup: any[] = new City().cityGroup;

  // 圖表 - 年齡結構分析
  doughnutChartLabels: string[] = ['~17', '18~65', '65~',];
  doughnutChartData: number[] = [650, 210, 140];
  doughnutChartType: string = 'doughnut'; // 改讀取 yearDataPercent

  // 圖表 - 區域社福評估
  radarChartLabels: string[] = ['監視', '醫院', '照護', '宗教', '竊盜'];
  radarChartData: any = [
    { data: [17, 7, 3, 2, 1], label: '嘉義縣' }
  ];
  radarChartType: string = 'radar';
  radarChartOptions: any = [{
    borderColor: 'rgba(54,162,235,.8)',
    backgroundColor: 'rgba(54,162,235,.3)',
    pointBackgroundColor: '#36A2EB',
    pointBorderColor: '#fff'
    // [colors]="colors" 
  }];

  // 圖表 - 人口數量預測
  barChartOptions: any = {
    scaleOverride: true,
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 800000
        }
      }]
    }
  };
  barChartLabels: string[] = ['2014', '2015', '2016', '2017', '自訂年(季)'];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  barChartData: any[] = [
    { data: [524787, 519659, 514201, 508414, 505412], label: '雲林縣' }
  ];

  // 圖層清單
  nodes = [
    {
      id: 1,
      name: '地區圖層',
      isExpanded: true,
      children: [
        { id: 11, name: '直轄市、縣市界線' },
        { id: 12, name: '鄉鎮市區界線' },
        /*{ id: 13, name: '村里界圖' }*/
      ]
    },
    {
      id: 2,
      name: '指標圖層',
      isExpanded: true,
      children: [
        { id: 21, name: '監視器' },
        { id: 22, name: '醫院診所' },
        { id: 23, name: '照護機構' },
        { id: 24, name: '宗教建設' },
        { id: 25, name: '竊盜紀錄' },
        { id: 26, name: '國民中學' },
        { id: 27, name: '長照ABC' },
      ]
    }
  ];

  constructor(
    private popuService: PopulationStructureService,
    private yearService: YearStructureService,
    private gmapService: GMapsService,
    private layerService: LayerService,
    private mapsAPILoader: MapsAPILoader,
    private zone: NgZone,
    private marker: Marker
  ) { }

  ngOnInit() {

    // 載入圖層資料
    this.LoadAllLayer();

    // 載入圖表資料
    this.optionPopuChange('Chiayi');
    this.optionYearChange('Chiayi');
  }

  /**
   * 載入所有圖層
   */
  public async LoadAllLayer() {

    console.log(`Load: start ${new Date()}`);
    await this.layerService.getGeoJsonLayer('county')
      .subscribe(
      result => {
        this.zone.run(() => {
          this.geoLayerCounty = result;
          console.log(`Load: County ${new Date()}`);
        });
      });

    await this.layerService.getGeoJsonLayer('town')
      .subscribe(
      result => {
        this.zone.run(() => {
          this.geoLayerTown = result;
          console.log(`Load: Town ${new Date()}`);
        });
      });

    /*await this.layerService.getGeoJsonLayer('village')
      .subscribe(
      result => {
        this.zone.run(async () => {
          this.geoLayerVillage = result;
          console.log(`Load: Village ${new Date()}`);
        });
      });*/

    await this.layerService.getPointerLayer('secure', 'Chiayi')
      .subscribe(
      result => {
        this.zone.run(async () => {

          this.layerService.getSecureGeoJson(result);

          await this.layerService.getPointerLayer('secure', 'Yunlin')
            .subscribe(
            result => {
              this.zone.run(() => {
                this.geoLayerSecure = this.layerService.getSecureGeoJson(result);
                console.log(`Load: Secure ${new Date()}`);
              });
            });
        });
      });

    await this.layerService.getPointerLayer('burglary', 'Chiayi')
      .subscribe(
      result => {
        this.zone.run(async () => {

          this.layerService.getBurglaryGeoJson(result);

          await this.layerService.getPointerLayer('burglary', 'Yunlin')
            .subscribe(
            result => {
              this.zone.run(() => {
                this.geoLayerBurglary = this.layerService.getBurglaryGeoJson(result);
                console.log(`Load: Burglary ${new Date()}`);
              });
            });
        });
      });

    await this.layerService.getPointerLayer('care', 'Chiayi')
      .subscribe(
      result => {
        this.zone.run(async () => {

          this.layerService.getCareGeoJson(result);

          await this.layerService.getPointerLayer('care', 'Yunlin')
            .subscribe(
            result => {
              this.zone.run(() => {
                this.geoLayerCare = this.layerService.getCareGeoJson(result);
                console.log(`Load: Care ${new Date()}`);
              });
            });
        });
      });

    await this.layerService.getPointerLayer('temple', 'Chiayi')
      .subscribe(
      result => {
        this.zone.run(async () => {

          this.layerService.getTempleGeoJson(result);

          await this.layerService.getPointerLayer('temple', 'Yunlin')
            .subscribe(
            result => {
              this.zone.run(() => {
                this.geoLayerTemple = this.layerService.getTempleGeoJson(result);
                console.log(`Load: Temple ${new Date()}`);
              });
            });
        });
      });

    await this.layerService.getPointerLayer('hospi', 'Chiayi')
      .subscribe(
      result => {
        this.zone.run(async () => {

          this.layerService.getHospiGeoJson(result);

          await this.layerService.getPointerLayer('hospi', 'Yunlin')
            .subscribe(
            result => {
              this.zone.run(async () => {

                this.geoLayerHospi = this.layerService.getHospiGeoJson(result);
                console.log(`Load: Hospi ${new Date()}`);

              });
            });
        });
      });

    await this.layerService.getPointerLayer('abc', 'abc')
      .subscribe(
      result => {
        this.zone.run(async () => {

          this.geoLayerABC = this.layerService.getABCGeoJson(result);
          console.log(`Load: ABC ${new Date()}`);
        });
      });

    await this.layerService.getPointerLayer('school', 'ChiaYu')
      .subscribe(
      result => {
        this.zone.run(async () => {

          this.geoLayerSchool = this.layerService.getSchoolGeoJson(result);
          console.log(`Load: School ${new Date()}`);

        });
      });
  }

  /**
   * 座標點選 EVENT
   * @param e 
   */
  public geoLayerClick(e) {

    let feature = e.feature.f;
    this.infowinLat = feature.lat + 0.00008;
    this.infowinLng = feature.lng;
    this.infowinMsg[0] = feature.name;
    this.infowinMsg[1] = feature.address;

    if (feature.level) {
      this.infowinMsg[2] = `長照等級：${feature.level}`;
    } else if (feature.date) {
      this.infowinMsg[2] = `事件時間：${feature.date}`;
    } else if (feature.lordgod) {
      this.infowinMsg[2] = `寺廟主神：${feature.lordgod}`;
    } else {
      this.infowinMsg[2] = null;
    }
    this.infowinIsOpen = true;
  }

  /**
   * 環域分析 EVENT
   */
  public analyticsPointer() {

    this.countSecure = 0;
    this.countCare = 0;
    this.countTemple = 0;
    this.countHospi = 0;
    this.countSchool = 0;
    this.countABC = 0;

    this.geoLayerHospi['features'].forEach(async (element) => {
      let lat = Number(element.geometry.coordinates[1]);
      let lng = Number(element.geometry.coordinates[0]);
      let p2 = [lat, lng];
      await this.gmapService.getDistance([this.lat, this.lng], p2)
        .subscribe(
        result => {
          this.zone.run(() => {
            if (result <= this.radius) {
              this.countHospi++;
            }
          });
        });
    });

    this.geoLayerABC['features'].forEach(async (element) => {
      let lat = Number(element.geometry.coordinates[1]);
      let lng = Number(element.geometry.coordinates[0]);
      let p2 = [lat, lng];
      await this.gmapService.getDistance([this.lat, this.lng], p2)
        .subscribe(
        result => {
          this.zone.run(() => {
            if (result <= this.radius) {
              this.countABC++;
            }
          });
        });
    });

    this.geoLayerTemple['features'].forEach(async (element) => {
      let lat = Number(element.geometry.coordinates[1]);
      let lng = Number(element.geometry.coordinates[0]);
      let p2 = [lat, lng];
      await this.gmapService.getDistance([this.lat, this.lng], p2)
        .subscribe(
        result => {
          this.zone.run(() => {
            if (result <= this.radius) {
              this.countTemple++;
            }
          });
        });
    });

    this.geoLayerCare['features'].forEach(async (element) => {
      let lat = Number(element.geometry.coordinates[1]);
      let lng = Number(element.geometry.coordinates[0]);
      let p2 = [lat, lng];
      await this.gmapService.getDistance([this.lat, this.lng], p2)
        .subscribe(
        result => {
          this.zone.run(() => {
            if (result <= this.radius) {
              this.countCare++;
            }
          });
        });
    });

    this.geoLayerSecure['features'].forEach(async (element) => {
      let lat = Number(element.geometry.coordinates[1]);
      let lng = Number(element.geometry.coordinates[0]);
      let p2 = [lat, lng];
      await this.gmapService.getDistance([this.lat, this.lng], p2)
        .subscribe(
        result => {
          this.zone.run(() => {
            if (result <= this.radius) {
              this.countSecure++;
            }
          });
        });
    });

    this.geoLayerBurglary['features'].forEach(async (element) => {
      let lat = Number(element.geometry.coordinates[1]);
      let lng = Number(element.geometry.coordinates[0]);
      let p2 = [lat, lng];
      await this.gmapService.getDistance([this.lat, this.lng], p2)
        .subscribe(
        result => {
          this.zone.run(() => {
            if (result <= this.radius) {
              this.countBurglary++;
            }
          });
        });
    });

    this.geoLayerSchool['features'].forEach(async (element) => {
      let lat = Number(element.geometry.coordinates[1]);
      let lng = Number(element.geometry.coordinates[0]);
      let p2 = [lat, lng];
      await this.gmapService.getDistance([this.lat, this.lng], p2)
        .subscribe(
        result => {
          this.zone.run(() => {
            if (result <= this.radius) {
              this.countSchool++;
            }
          });
        });
    });

    // 分析完後要更新圖表 - 區域社福評估
    this.radarChartData = [
      {
        data: [
          this.countSecure,
          this.countHospi,
          this.countCare,
          this.countTemple,
          this.countBurglary],
        label: this.addr
      }
    ];

  }

  /**
   * 繪製圓形區域 EVENT
   */
  public async setCircle() {

    await this.gmapService.getLatLan(this.addr)
      .subscribe(
      result => {
        //必須使用zone 觀察整個 view 否則會導致延遲
        this.zone.run(() => {
          this.lat = result.lat();
          this.lng = result.lng();
          this.saveMarker(result.lat(), result.lng());
          this.mapsAPILoader.load().then(() => {
            this.bounds = new window['google'].maps.LatLngBounds(new window['google'].maps.LatLng(this.lat, this.lng));
          }
          )

        });
        this.zoom = 10;
      },
      error => console.log(error),
      () => console.log('Geocoding completed!')
      );
  }

  /**
   * 當前座標
   * @param lat 
   * @param lng 
   */
  public saveMarker(lat: number, lng: number) {
    this.marker.lat = lat;
    this.marker.lng = lng;
  }

  /**
   * 圖層樣式
   * @param feature 
   */
  public styleLayer(feature) {

    console.log(feature);
    if ($('.gmap-loading').css('display') != 'none') {
      setTimeout(() => {
        $('.gmap-loading').hide();
      }, 3000);
    }

    let icon, visible = true, color = 'green';
    // console.log(feature);

    if (feature.getProperty('VILLNAME') != undefined) {
      console.log('load 村里');
      if (
        feature.getProperty('COUNTYNAME') == '雲林縣' ||
        feature.getProperty('COUNTYNAME') == '嘉義縣' ||
        feature.getProperty('COUNTYNAME') == '嘉義市'
      ) {
        color = 'red';
        visible = true;
      } else {
        visible = false;
      }
    } else if (feature.getProperty('COUNTYNAME') != undefined && feature.getProperty('COUNTYENG') == undefined) {
      console.log('load 鄉鎮');
      if (
        feature.getProperty('COUNTYNAME') == '雲林縣' ||
        feature.getProperty('COUNTYNAME') == '嘉義縣' ||
        feature.getProperty('COUNTYNAME') == '嘉義市'
      ) {
        color = 'blue';
        visible = true;
      } else {
        visible = false;
      }
    } else if (feature.getProperty('address') != undefined) {
      visible = true;
    } else if (feature.getProperty('COUNTYENG') != '') {
      console.log('load 縣市');
      if (
        feature.getProperty('COUNTYENG') == 'Chiayi County' ||
        feature.getProperty('COUNTYENG') == 'Chiayi City' ||
        feature.getProperty('COUNTYENG') == 'Yunlin County'
      ) {
        color = 'green';
        visible = true;
      } else {
        visible = false;
      }
    }

    switch (feature.getProperty('group')) {
      case 'hospi':
        icon = 'assets/images/hospi.png';
        break;

      case 'abc':
        switch (feature.getProperty('level')) {
          case 'A':
            icon = 'assets/images/a.png';
            break;

          case 'B':
            icon = 'assets/images/b.png';
            break;

          case 'C':
            icon = 'assets/images/c.png';
            break;
        }
        break;

      case 'secure':
        icon = 'assets/images/secure.png';
        break;

      case 'burglary':
        icon = 'assets/images/burglary.png';
        break;

      case 'care':
        icon = 'assets/images/care.png';
        break;

      case 'temple':
        icon = 'assets/images/temple.png';
        break;

      case 'school':
        icon = 'assets/images/school.png';
        break;
    }

    return {
      icon: icon,
      visible: visible,
      fillColor: color,
      fillOpacity: 0.2,
      strokeColor: color,
      strokeWeight: 1,
      strokeOpacity: 0.8,
    };
  }

  /**
   * 下拉式選單 - 年齡結構
   * @param city 
   */

  public optionYearChange(city: any) {
    this.yearDataPercent = this.yearService.getStructurePercent(city, this.yearValueSlider);
    this.yearActiveSlider = ''; // 選擇縣市後才可以滑動 Slider

    // 扶養比
    this.yearCountPercent = Number(Number((Number(this.yearDataPercent[0]) + Number(this.yearDataPercent[2])) / this.yearDataPercent[1] * 100).toFixed(2));
    var old = Number(this.yearCountPercent / 10);
    this.yearCountOldMan = [];
    for (let i = 1; i <= old; i++) {
      this.yearCountOldMan.push(i);
    }
    var man = 10;
    this.yearCountMale = [];
    for (let j = 1; j <= man; j++) {
      this.yearCountMale.push(j);
    }
  }

  /**
   * 卷軸 - 年齡結構
   * @param no 
   */
  public onYearSliderChange(no: number) {
    this.yearDataPercent = this.yearService.getStructurePercent(this.cityYearSelect, no);
    let _mon = no % 12 == 0 ? 12 : no % 12;
    let _year = no / 12 == 0 ? 2012 : Math.floor(no / 12) + 2012;
    this.yearDateSlider = `${_year}年 - ${_mon}月`;

    // 扶養比
    this.yearCountPercent = Number(Number((Number(this.yearDataPercent[0]) + Number(this.yearDataPercent[2])) / this.yearDataPercent[1] * 100).toFixed(2));
    var old = Number(this.yearCountPercent / 10);
    this.yearCountOldMan = [];
    for (let i = 1; i <= old; i++) {
      this.yearCountOldMan.push(i);
    }
    var man = 10;
    this.yearCountMale = [];
    for (let j = 1; j <= man; j++) {
      this.yearCountMale.push(j);
    }
  }

  /**
   * 下拉式選單 - 人口結構
   * @param city 
   */
  public optionPopuChange(city: any) {
    this.popuDataPercent = this.popuService.getPopulationPercent(city, this.yearValueSlider)[0];
    this.popuActiveSlider = ''; // 選擇縣市後才可以滑動 Slider
    this.onPopuSliderChange(41);
  }

  /**
   * 卷軸 - 年齡結構
   * @param no 
   */
  public onPopuSliderChange(no: number) {
    this.popuDataPercent = this.popuService.getPopulationPercent(this.cityPopuSelect, no);
    let _mon = no % 4 == 0 ? 4 : no % 4;
    let _year = no / 4 == 0 ? 2007 : Math.floor(no / 4) + 2007;
    this.popuDateSlider = `${_year}年 - 第${_mon}季`;

    let popuNow = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no)[0]);
    let popu1 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no + 4)[0]);
    let popu2 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no + 8)[0]);
    let popu3 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no + 12)[0]);
    let popu4 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no + 16)[0]);
    this.barChartData = [{ data: [popuNow, popu1, popu2, popu3, popu4], label: this.cityPopuSelect }];

    let bartmpLabels = [
      `${_year}-${_mon}(季)`,
      `${_year + 1}`,
      `${_year + 2}`,
      `${_year + 3}`,
      `${_year + 4}`,
    ];
    this.barChartLabels.length = 0;
    for (let i = 0; i < bartmpLabels.length; i++) {
      this.barChartLabels.push(bartmpLabels[i]);
    }
  }

  /**
   * 圖層控制
   * @param node 
   * @param event 
   */
  public check(node, $event) {

    if (!node.data.checked) $('.gmap-loading').show();

    this.updateChildNodesCheckBox(node, $event.target.checked);
    this.updateParentNodesCheckBox(node.parent);

    switch (node.id) {
      case 1:
        if (node.data.checked) {
          this.geoLayerShowCounty = true;
          this.geoLayerShowTown = true;
          this.geoLayerShowVillage = true;
        } else {
          this.geoLayerShowCounty = false;
          this.geoLayerShowTown = false;
          this.geoLayerShowVillage = false;
        }
        break;
      case 11:
        this.geoLayerShowCounty = !this.geoLayerShowCounty;
        break;
      case 12:
        this.geoLayerShowTown = !this.geoLayerShowTown;
        break;
      case 13:
        this.geoLayerShowVillage = !this.geoLayerShowVillage;
        break;

      case 2:
        if (node.data.checked) {
          this.geoLayerShowSecure = true;
          this.geoLayerShowHospi = true;
          this.geoLayerShowCare = true;
          this.geoLayerShowTemple = true;
          this.geoLayerShowBurglary = true;
          this.geoLayerShowSchool = true;
          this.geoLayerShowABC = true;

        } else {
          this.geoLayerShowSecure = false;
          this.geoLayerShowHospi = false;
          this.geoLayerShowCare = false;
          this.geoLayerShowTemple = false;
          this.geoLayerShowBurglary = false;
          this.geoLayerShowSchool = false;
          this.geoLayerShowABC = false;
        }
        break;
      case 21:
        this.geoLayerShowSecure = !this.geoLayerShowSecure;
        break;
      case 22:
        this.geoLayerShowHospi = !this.geoLayerShowHospi;
        break;
      case 23:
        this.geoLayerShowCare = !this.geoLayerShowCare;
        break;
      case 24:
        this.geoLayerShowTemple = !this.geoLayerShowTemple;
        break;
      case 25:
        this.geoLayerShowBurglary = !this.geoLayerShowBurglary;
        break;
      case 26:
        this.geoLayerShowSchool = !this.geoLayerShowSchool;
        break;
      case 27:
        this.geoLayerShowABC = !this.geoLayerShowABC;
        break;
    }
  }

  /**
   * check 連動
   * @param node 
   * @param checked 
   */
  public updateChildNodesCheckBox(node, checked) {
    node.data.checked = checked;
    if (node.children) {
      node.children.forEach((child) => this.updateChildNodesCheckBox(child, checked));
    }
  }

  /**
   * check 連動
   * @param node 
   */
  public updateParentNodesCheckBox(node) {
    if (node && node.level > 0 && node.children) {
      let allChildChecked = true;
      let noChildChecked = true;

      for (let child of node.children) {
        if (!child.data.checked) {
          allChildChecked = false;
        } else if (child.data.checked) {
          noChildChecked = false;
        }
      }

      if (allChildChecked) {
        node.data.checked = true;
        node.data.indeterminate = false;
      } else if (noChildChecked) {
        node.data.checked = false;
        node.data.indeterminate = false;
      } else {
        node.data.checked = true;
        node.data.indeterminate = true;
      }
      this.updateParentNodesCheckBox(node.parent);
    }
  }
}
