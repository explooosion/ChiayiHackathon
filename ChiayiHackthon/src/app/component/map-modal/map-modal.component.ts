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

  // 圖層資料
  geoLayerTaiwan: Object = null;
  geoLayerHospi: Object = null;
  geoLayerSecure: Object = null;
  geoLayerCare: Object = null;
  geoLayerTemple: Object = null;
  geoLayerBurglary: Object = null;

  // 圖層是否顯示
  geoLayerShowTaiwan: boolean = false;
  geoLayerShowHospi: boolean = false;
  geoLayerShowSecure: boolean = false;
  geoLayerShowCare: boolean = false;
  geoLayerShowTemple: boolean = false;
  geoLayerShowBurglary: boolean = false;

  // 點位訊息小窗
  infowinLat: number = 23.458987;
  infowinLng: number = 120.29294219999997;
  infowinMsg: string[] = ['', '', ''];
  infowinIsOpen: boolean = false;

  // 年齡結構 - 卷軸
  yearActiveSlider: string = null;
  yearValueSlider: number = 1;
  yearDateSlider: string = `${new Date().getFullYear().toString()}-${new Date().getMonth().toString()}`;

  // 人口結構 - 卷軸
  popuActiveSlider: string = null;
  popuValueSlider: number = 41;
  popuDateSlider: string = `${new Date().getFullYear().toString()}-${new Date().getMonth().toString()}`;

  // 年齡結構 - 圖表
  //yearData: any[] = [];
  // yearDataFilter: any[] = []; // 儲存卷軸對應的No.資料
  yearDataPercent: any[] = [50, 50, 50]; // 年齡結構百分比[A群,B群,C群]

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
          max: 1000000
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
        { id: 11, name: '直轄市、縣市界線' }
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
      ]
    }
  ];

  constructor(
    private popuService: PopulationStructureService,
    private yearService: YearStructureService,
    private gmapService: GMapsService,
    private layerService: LayerService,
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

    await this.layerService.getTaiwanLayer()
      .subscribe(
      result => {
        this.zone.run(() => {
          this.geoLayerTaiwan = result;
        });
      });

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

                this.layerService.getHospiGeoJson(result);

                await this.layerService.getPointerLayer('hospi', '長照ABC')
                  .subscribe(
                  result => {
                    this.zone.run(() => {
                      this.geoLayerHospi = this.layerService.getHospiGeoJson(result);
                    });
                  });
              });
            });
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

    this.zoom = 14;

    await this.gmapService.getLatLan(this.addr)
      .subscribe(
      result => {
        //必須使用zone 觀察整個 view 否則會導致延遲
        this.zone.run(() => {
          this.lat = result.lat();
          this.lng = result.lng();
          this.saveMarker(result.lat(), result.lng());
        });
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
    let icon;
    switch (feature.getProperty('group')) {
      case 'hospi':

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

          default:
            icon = 'assets/images/hospi.png';
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
    }
    return {
      icon: icon,
      visible: true,
      fillColor: 'green',
      fillOpacity: 0.2,
      strokeColor: 'green',
      strokeWeight: 1,
      strokeOpacity: 0.8,
    };
  }

  /**
   * 下拉式選單 - 年齡結構
   * @param city 
   */

  public optionYearChange(city: any) {
    console.log(city);
    this.yearDataPercent = this.yearService.getStructurePercent(city, this.yearValueSlider);
    this.yearActiveSlider = ''; // 選擇縣市後才可以滑動 Slider
  }

  /**
   * 卷軸 - 年齡結構
   * @param no 
   */
  public onYearSliderChange(no: number) {
    this.yearDataPercent = this.yearService.getStructurePercent(this.cityYearSelect, no);
    let _mon = no % 12 == 0 ? 12 : no % 12;
    let _year = no / 12 == 0 ? 2012 : Math.floor(no / 12) + 2012;
    this.yearDateSlider = `${_year}-${_mon}`;
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
    this.popuDateSlider = `${_year}-${_mon}`;

    let popuf = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no)[0]);
    let popu14 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, 32)[0]);
    let popu15 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, 36)[0]);
    let popu16 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, 40)[0]);
    let popu17 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, 44)[0]);
    this.barChartData = [{ data: [popu14, popu15, popu16, popu17, popuf], label: this.cityPopuSelect }];

    let bartmpLabels = ['2014', '2015', '2016', '2017', `${_year}-${_mon}(季)`];
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

    this.updateChildNodesCheckBox(node, $event.target.checked);
    this.updateParentNodesCheckBox(node.parent);

    switch (node.id) {
      case 1:
      case 11:
        this.geoLayerShowTaiwan = !this.geoLayerShowTaiwan;
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
      case 2:
        if (node.data.checked) {
          this.geoLayerShowSecure = true;
          this.geoLayerShowHospi = true;
          this.geoLayerShowCare = true;
          this.geoLayerShowTemple = true;
          this.geoLayerShowBurglary = true;

        } else {
          this.geoLayerShowSecure = false;
          this.geoLayerShowHospi = false;
          this.geoLayerShowCare = false;
          this.geoLayerShowTemple = false;
          this.geoLayerShowBurglary = false;
        }
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
