webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar-modal></app-navbar-modal>\r\n<header>\r\n  <h1>{{title}}</h1>\r\n</header>\r\n<app-map-modal></app-map-modal>\r\n<app-data-modal></app-data-modal>\r\n<app-footer-modal></app-footer-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = '高齡化社會發展趨勢之預測評估';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_data_modal_data_modal_component__ = __webpack_require__("../../../../../src/app/component/data-modal/data-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_map_modal_map_modal_component__ = __webpack_require__("../../../../../src/app/component/map-modal/map-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_navbar_modal_navbar_modal_component__ = __webpack_require__("../../../../../src/app/component/navbar-modal/navbar-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_footer_modal_footer_modal_component__ = __webpack_require__("../../../../../src/app/component/footer-modal/footer-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ngx_color_picker__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * Component
 */




/**
 * Plugin
 */





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__component_data_modal_data_modal_component__["a" /* DataModalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__component_map_modal_map_modal_component__["a" /* MapModalComponent */],
            __WEBPACK_IMPORTED_MODULE_7__component_navbar_modal_navbar_modal_component__["a" /* NavbarModalComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_footer_modal_footer_modal_component__["a" /* FooterModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDT7xIZ1hGuhosRMMHp7euLSjKmJUgRip8',
                language: 'zh-TW'
            }),
            __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_11_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_12_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_color_picker__["ColorPickerModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/class/burglary.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Burglary; });
var Burglary = (function () {
    function Burglary(address, lat, lng, date) {
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.date = date;
    }
    return Burglary;
}());

//# sourceMappingURL=burglary.js.map

/***/ }),

/***/ "../../../../../src/app/class/care.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Care; });
var Care = (function () {
    function Care(CareName, Service, Area, Address, lat, lng) {
        this.CareName = CareName;
        this.Service = Service;
        this.Area = Area;
        this.Address = Address;
        this.lat = lat;
        this.lng = lng;
    }
    return Care;
}());

//# sourceMappingURL=care.js.map

/***/ }),

/***/ "../../../../../src/app/class/city.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return City; });
var City = (function () {
    function City() {
        this.cityGroup = [
            {
                chName: '雲林縣',
                enName: 'Yunlin'
            },
            {
                chName: '嘉義縣',
                enName: 'Chiayi'
            }
        ];
    }
    return City;
}());

//# sourceMappingURL=city.js.map

/***/ }),

/***/ "../../../../../src/app/class/geo-json.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Geometry; });
/**
 * GeoJson 接口
 */
var GeoJson = (function () {
    function GeoJson() {
        this.type = 'FeatureCollection';
        this.features = [];
    }
    return GeoJson;
}());

/**
 * Features - 單筆資料之集合
 */
var Features = (function () {
    function Features(properties, geometry) {
        this.type = 'Feature';
        this.properties = properties;
        this.geometry = geometry;
    }
    return Features;
}());

/**
 * Geometry - 點位的座標屬性
 */
var Geometry = (function () {
    function Geometry(type, coordinates) {
        this.type = type;
        this.coordinates = coordinates;
    }
    return Geometry;
}());

//# sourceMappingURL=geo-json.js.map

/***/ }),

/***/ "../../../../../src/app/class/hospi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hospi; });
var Hospi = (function () {
    function Hospi(name, address, lat, lng, level) {
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.level = level;
    }
    return Hospi;
}());

//# sourceMappingURL=hospi.js.map

/***/ }),

/***/ "../../../../../src/app/class/marker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Marker; });
var Marker = (function () {
    function Marker() {
        this.lat = 0;
        this.lng = 0;
    }
    return Marker;
}());

//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "../../../../../src/app/class/population.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Population; });
/**
 * 人口數量變動
 */
var Population = (function () {
    function Population() {
        this.FxChiayi = [
            {
                a: 553948.1425,
                b: -581.785489,
                c: -10.297091
            }, {
                a: 0.278969,
                b: -0.073024,
                c: 0.000845
            }, {
                a: -1.50288,
                b: 0.141537,
                c: -0.003555
            }
        ];
        this.FxYunlin = [
            {
                a: 728300.0431,
                b: -540.313088,
                c: -7.064001
            }, {
                a: 0.075185,
                b: -0.030418,
                c: 0.000209
            }, {
                a: -1.428443,
                b: 0.173646,
                c: -0.004368
            }
        ];
    }
    return Population;
}());

//# sourceMappingURL=population.js.map

/***/ }),

/***/ "../../../../../src/app/class/secure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Secure; });
var Secure = (function () {
    function Secure(address, lat, lng) {
        this.address = address;
        this.lat = lat;
        this.lng = lng;
    }
    return Secure;
}());

//# sourceMappingURL=secure.js.map

/***/ }),

/***/ "../../../../../src/app/class/temple.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Temple; });
/**
 * 廟宇資料接口
 */
var Temple = (function () {
    function Temple(TempleName, LordGod, Area, Address, lat, lng) {
        this.TempleName = TempleName;
        this.LordGod = LordGod;
        this.Area = Area;
        this.Address = Address;
        this.lat = lat;
        this.lng = lng;
    }
    return Temple;
}());

//# sourceMappingURL=temple.js.map

/***/ }),

/***/ "../../../../../src/app/class/yearstructure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Yearstructure; });
/**
 * 年齡結構指標
 */
var Yearstructure = (function () {
    function Yearstructure() {
        this.FxChiayi = [
            {
                a: 18.112324,
                b: -0.057336,
                c: -0.000037
            }, {
                a: 66.130632,
                b: 0.036181,
                c: -0.000201
            }, {
                a: 15.757043,
                b: 0.021155,
                c: 0.000238
            }
        ];
        this.FxYunlin = [
            {
                a: 19.770272,
                b: -0.048179,
                c: -0.000027
            }, {
                a: 64.945902,
                b: 0.036008,
                c: -0.000258
            }, {
                a: 15.283826,
                b: 0.012171,
                c: 0.000285
            }
        ];
    }
    return Yearstructure;
}());

//# sourceMappingURL=yearstructure.js.map

/***/ }),

/***/ "../../../../../src/app/component/data-modal/data-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-lg {\r\n  max-width: 90%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/data-modal/data-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"ysDataTable\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">年齡結構指標</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"table-responsive\">\r\n            <table id=\"YearTable\" class=\"table table-striped table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No.</th>\r\n                  <th>year</th>\r\n                  <th>month</th>\r\n                  <th>yearmonth</th>\r\n                  <th>city</th>\r\n                  <th>zero_twelve</th>\r\n                  <th>twelve_seventeen</th>\r\n                  <th>twenty</th>\r\n                  <th>sixty_five</th>\r\n                  <th>twnty_sixty</th>\r\n                  <th>seventeen_twenty</th>\r\n                  <th>zero_twenty</th>\r\n                  <th>zero_seventeen</th>\r\n                  <th>seventeen_sixty</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let data of yearData\">\r\n                  <td>{{data.no}}</td>\r\n                  <td>{{data.year}}</td>\r\n                  <td>{{data.month}}</td>\r\n                  <td>{{data.yearmonth}}</td>\r\n                  <td>{{data.city}}</td>\r\n                  <td>{{data.zero_twelve}}</td>\r\n                  <td>{{data.twelve_seventeen}}</td>\r\n                  <td>{{data.twenty}}</td>\r\n                  <td>{{data.sixty_five}}</td>\r\n                  <td>{{data.twnty_sixty}}</td>\r\n                  <td>{{data.seventeen_twenty}}</td>\r\n                  <td>{{data.zero_twenty}}</td>\r\n                  <td>{{data.zero_seventeen}}</td>\r\n                  <td>{{data.seventeen_sixty}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"popuDataTable\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">人口數量變動</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"table-responsive\">\r\n            <table id=\"PopuTable\" class=\"table table-striped table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No.</th>\r\n                  <th>year</th>\r\n                  <th>season</th>\r\n                  <th>year_season</th>\r\n                  <th>city</th>\r\n                  <th>total_population</th>\r\n                  <th>total_population_increase</th>\r\n                  <th>births</th>\r\n                  <th>deaths</th>\r\n                  <th>immigrants</th>\r\n                  <th>emigrants</th>\r\n                  <th>natural_increase_rate</th>\r\n                  <th>social_increase_rate</th>\r\n                  <th>total_increase_rate</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let data of popuData\">\r\n                  <td>{{data.no}}</td>\r\n                  <td>{{data.year}}</td>\r\n                  <td>{{data.season}}</td>\r\n                  <td>{{data.year_season}}</td>\r\n                  <td>{{data.city}}</td>\r\n                  <td>{{data.total_population}}</td>\r\n                  <td>{{data.total_population_increase}}</td>\r\n                  <td>{{data.births}}</td>\r\n                  <td>{{data.deaths}}</td>\r\n                  <td>{{data.immigrants}}</td>\r\n                  <td>{{data.emigrants}}</td>\r\n                  <td>{{data.natural_increase_rate}}</td>\r\n                  <td>{{data.social_increase_rate}}</td>\r\n                  <td>{{data.total_increase_rate}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/data-modal/data-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_population_structure_service__ = __webpack_require__("../../../../../src/app/service/population-structure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_year_structure_service__ = __webpack_require__("../../../../../src/app/service/year-structure.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DataModalComponent = (function () {
    function DataModalComponent(popuService, yearService) {
        this.popuService = popuService;
        this.yearService = yearService;
        this.popuData = [];
        this.yearData = [];
    }
    DataModalComponent.prototype.ngOnInit = function () {
        this.getPopuCSV();
        this.getYearCSV();
    };
    // 人口數量變動
    DataModalComponent.prototype.getPopuCSV = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popuService.readCsv('Population_Chiayi')
                            .subscribe(function (result) {
                            _this.popuData = result;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.popuService.readCsv('Population_Yunlin')
                                .subscribe(function (result) {
                                _this.popuData = _this.popuData.concat(result);
                                setTimeout(function () { $('#PopuTable').DataTable({ "order": [[4, "asc"]] }); }, 500);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 年齡結構指標
    DataModalComponent.prototype.getYearCSV = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.yearService.readCsv('YearStructure_Chiayi')
                            .subscribe(function (result) {
                            _this.yearData = result;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.yearService.readCsv('YearStructure_Yunlin')
                                .subscribe(function (result) {
                                _this.yearData = _this.yearData.concat(result);
                                setTimeout(function () { $('#YearTable').DataTable({ "order": [[4, "asc"]] }); }, 500);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return DataModalComponent;
}());
DataModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-modal',
        template: __webpack_require__("../../../../../src/app/component/data-modal/data-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/data-modal/data-modal.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_population_structure_service__["a" /* PopulationStructureService */], __WEBPACK_IMPORTED_MODULE_2__service_year_structure_service__["a" /* YearStructureService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_population_structure_service__["a" /* PopulationStructureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_population_structure_service__["a" /* PopulationStructureService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_year_structure_service__["a" /* YearStructureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_year_structure_service__["a" /* YearStructureService */]) === "function" && _b || Object])
], DataModalComponent);

var _a, _b;
//# sourceMappingURL=data-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/footer-modal/footer-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n    padding: 15px 0;\r\n    height: 120px;\r\n    background: #2B3442;\r\n}\r\n\r\nfooter .nav-thanks {\r\n    margin: 6px 0;\r\n}\r\n\r\nfooter .nav-thanks li {\r\n    margin: 0 4px;\r\n    color: #707070;\r\n    font-weight: normal;\r\n}\r\n\r\nfooter .nav-thanks li+li::before {\r\n    content: '\\FF5C';\r\n    margin: 0 3px 0 -8px;\r\n    color: #666;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/footer-modal/footer-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <span class=\"text-muted\">Create By 李董與他的四位快樂好夥伴ver2</span>\n      </div>\n      <div class=\"col-lg-8\">\n        <div class=\"row\">\n          <span class=\"text-muted\">Thanks for：</span>\n        </div>\n        <div class=\"row\">\n          <ul class=\"nav nav-thanks\">\n            <li>李董</li>\n            <li>夥伴1號</li>\n            <li>夥伴2號</li>\n            <li>夥伴3號</li>\n            <li>夥伴4號</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/component/footer-modal/footer-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterModalComponent = (function () {
    function FooterModalComponent() {
    }
    FooterModalComponent.prototype.ngOnInit = function () {
    };
    return FooterModalComponent;
}());
FooterModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer-modal',
        template: __webpack_require__("../../../../../src/app/component/footer-modal/footer-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/footer-modal/footer-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterModalComponent);

//# sourceMappingURL=footer-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/map-modal/map-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard {\r\n  margin: 60px auto 90px;\r\n}\r\n\r\n#currentGroup {\r\n  /* background: #A3CCFF; */\r\n  background: #3A4354;\r\n  padding: 2rem 0 !important;\r\n}\r\n\r\n#futureGroup {\r\n  background: #343C4B;\r\n  padding: 2rem 0 !important;\r\n}\r\n\r\nagm-map {\r\n  height: 600px;\r\n  width: 100%;\r\n}\r\n\r\n#charGroup {\r\n  margin: 30px auto;\r\n}\r\n\r\n#charGroup .card-inverse {\r\n  color: #f1f1f1;\r\n  background: #444;\r\n}\r\n\r\n\r\n/**/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/map-modal/map-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumbs -->\r\n<div class=\"container dashboard\">\r\n  <!-- Icon Cards -->\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n      <div class=\"card card-inverse card-primary o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-smile-o\"></i>\r\n          <h1 class=\"text-center\">{{countSecure - countBurglary}}</h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>安全指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n      <div class=\"card card-inverse card-danger o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-heartbeat\"></i>\r\n          <h1 class=\"text-center\">{{countHospi}}</h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>醫療指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n      <div class=\"card card-inverse card-success o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-wheelchair\"></i>\r\n          <h1 class=\"text-center\">{{countCare}}</h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>照護指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n      <div class=\"card card-inverse card-warning o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-users\"></i>\r\n          <h1 class=\"text-center\">{{countTemple}}</h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>宗教指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div id=\"currentGroup\" class=\"jumbotron jumbotron-fluid\">\r\n\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <h2 class=\"title\">社福環域分析</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n\r\n        <div class=\"container\">\r\n\r\n          <div class=\"row form-group\">\r\n            <label for=\"example-text-input\" class=\"col-form-label co-custom\">地址：</label>\r\n            <div class=\"col-6\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr\" placeholder=\"placeholderText\" />\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <button type=\"button\" class=\"btn btn-success btn-search co-custom\" (click)=\"setCircle()\">定位</button>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <button type=\"button\" class=\"btn btn-success btn-search co-custom\" (click)=\"analyticsPointer()\">分析</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row form-group\">\r\n            <label class=\"col-form-label co-custom\">經度：</label>\r\n            <div class=\"col-4\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lat\" readonly />\r\n            </div>\r\n            <label class=\"col-form-label co-custom\">緯度：</label>\r\n            <div class=\"col-4\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lng\" readonly />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row form-group\">\r\n            <label class=\"col-form-label co-custom\">半徑：</label>\r\n            <div class=\"col-4\">\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"radius\" />\r\n            </div>\r\n            <label class=\"col-form-label co-custom\">顏色：</label>\r\n            <div class=\"col-4\">\r\n              <input class=\"form-control\" [(colorPicker)]=\"color\" [style.background]=\"color\" [value]=\"color\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header card-inverse card-success co-custom\">\r\n                  圖層控制\r\n                </div>\r\n                <div class=\"card-block\">\r\n                  <blockquote class=\"card-blockquote\">\r\n                    <tree-root #tree [nodes]=\"nodes\" [options]=\"treeOptions\">\r\n                      <template #treeNodeTemplate let-node=\"node\" let-index=\"index\">\r\n                        <input (change)=\"check( node, $event)\" type=\"checkbox\" [indeterminate]=\"node.data.indeterminate\" [checked]=\"node.data.checked\">                        {{ node.data.name }}\r\n                      </template>\r\n                    </tree-root>\r\n                  </blockquote>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header card-inverse card-success co-custom\">\r\n                  環域分析結果\r\n                </div>\r\n                <div class=\"card-block\">\r\n                  <blockquote class=\"card-blockquote\">\r\n                    <p>監視器材：{{countSecure}}</p>\r\n                    <p>醫院診所：{{countHospi}}</p>\r\n                    <p>照護機構：{{countCare}}</p>\r\n                    <p>宗教建設：{{countTemple}}</p>\r\n                    <p>竊盜紀錄：{{countBurglary}}</p>\r\n                  </blockquote>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"col-6\">\r\n        <div class=\"gmap\">\r\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\">\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n            <agm-circle [latitude]=\"lat\" [longitude]=\"lng\" [radius]=\"radius\" [fillColor]=\"color\" [fillOpacity]=\"0.6\"></agm-circle>\r\n            <agm-data-layer *ngIf=\"geoLayerShowTaiwan\" [geoJson]=\"geoLayerTaiwan\" (layerClick)=\"infoWindow.open();geoLayerClick($event)\"\r\n              [style]=\"styleLayer\"></agm-data-layer>\r\n            <agm-data-layer *ngIf=\"geoLayerShowHospi\" [geoJson]=\"geoLayerHospi\" (layerClick)=\"infoWindow.open();geoLayerClick($event)\"\r\n              [style]=\"styleLayer\"></agm-data-layer>\r\n            <agm-data-layer *ngIf=\"geoLayerShowSecure\" [geoJson]=\"geoLayerSecure\" (layerClick)=\"infoWindow.open();geoLayerClick($event)\"\r\n              [style]=\"styleLayer\"></agm-data-layer>\r\n            <agm-data-layer *ngIf=\"geoLayerShowBurglary\" [geoJson]=\"geoLayerBurglary\" (layerClick)=\"infoWindow.open();geoLayerClick($event)\"\r\n              [style]=\"styleLayer\"></agm-data-layer>\r\n            <agm-data-layer *ngIf=\"geoLayerShowCare\" [geoJson]=\"geoLayerCare\" (layerClick)=\"infoWindow.open();geoLayerClick($event)\"\r\n              [style]=\"styleLayer\"></agm-data-layer>\r\n            <agm-data-layer *ngIf=\"geoLayerShowTemple\" [geoJson]=\"geoLayerTemple\" (layerClick)=\"infoWindow.open();geoLayerClick($event)\"\r\n              [style]=\"styleLayer\"></agm-data-layer>\r\n            <agm-info-window #infoWindow [isOpen]=\"infowinIsOpen\" [latitude]=\"infowinLat\" [longitude]=\"infowinLng\">\r\n              <strong>{{infowinMsg[0]}}</strong>\r\n              <p>{{infowinMsg[1]}}</p>\r\n              <p>{{infowinMsg[2]}}</p>\r\n            </agm-info-window>\r\n          </agm-map>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div id=\"futureGroup\" class=\"jumbotron jumbotron-fluid\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <h2 class=\"title\">未來指標預測</h2>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-custom\">\r\n            <i class=\"fa fa-table\" aria-hidden=\"true\"></i>&nbsp;年齡結構指標（ 2012-01 ）\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <h5><span class=\"badge badge-custom\"><var>y</var> = <var>a</var> + <var>b</var> * <var>x</var> + <var>b</var> * <var>x²</var></span></h5>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <label class=\"col-form-label\">縣市：</label>\r\n                </div>\r\n                <div class=\"col-sm-10\">\r\n                  <select id=\"optionCity\" class=\"form-control\" [(ngModel)]=\"cityYearSelect\" (ngModelChange)=\"optionYearChange($event)\">\r\n            <option disabled [ngValue]=\"-1\">請選擇縣市</option>\r\n            <option *ngFor=\"let option of cityYearGroup; let itemIndex = index\" [ngValue]=\"option\">{{option.chName }}</option>\r\n        </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <label class=\"col-form-label\">指標：</label>\r\n                </div>\r\n                <div class=\"col-sm-10\">\r\n                  <nouislider class=\"nouislider\" [min]=\"1\" [max]=\"250\" [step]=\"1\" [(ngModel)]=\"yearValueSlider\" (ngModelChange)=\"onYearSliderChange($event)\"\r\n                    [disabled]=\"yearActiveSlider\"></nouislider>\r\n                </div>\r\n              </div>\r\n              <table class=\"table table-bordered table-inverse table-custom\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>估計年月</th>\r\n                    <th>0~17</th>\r\n                    <th>17~65</th>\r\n                    <th>65歲以上</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>{{ yearDateSlider }}</td>\r\n                    <td>{{ yearDataPercent[0] }}%</td>\r\n                    <td>{{ yearDataPercent[1] }}%</td>\r\n                    <td>{{ yearDataPercent[2] }}%</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-custom\">\r\n            <i class=\"fa fa-table\" aria-hidden=\"true\"></i>&nbsp;人口數量預估（ 2012-01 ）\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <h5><span class=\"badge badge-custom\"><var>y</var> = <var>a</var> + <var>b</var> * <var>x</var> + <var>b</var> * <var>x²</var></span></h5>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <label class=\"col-form-label\">縣市：</label>\r\n                </div>\r\n                <div class=\"col-sm-10\">\r\n                  <select id=\"optionCity\" class=\"form-control\" [(ngModel)]=\"cityPopuSelect\" (ngModelChange)=\"optionPopuChange($event)\">\r\n            <option disabled [ngValue]=\"-1\">請選擇縣市</option>\r\n            <option *ngFor=\"let option of cityPopuGroup; let itemIndex = index\" [ngValue]=\"option\">{{option.chName }}</option>\r\n        </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <label class=\"col-form-label\">指標：</label>\r\n                </div>\r\n                <div class=\"col-sm-10\">\r\n                  <nouislider class=\"nouislider\" [min]=\"41\" [max]=\"250\" [step]=\"1\" [(ngModel)]=\"popuValueSlider\" (ngModelChange)=\"onPopuSliderChange($event)\"\r\n                    [disabled]=\"popuActiveSlider\"></nouislider>\r\n                </div>\r\n              </div>\r\n              <table class=\"table table-bordered table-inverse table-custom\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>估計年月</th>\r\n                    <th>總人口數</th>\r\n                    <th>自然成長係數</th>\r\n                    <th>社會成長係數</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>{{ popuDateSlider }}</td>\r\n                    <td>{{ popuDataPercent[0] }}人</td>\r\n                    <td>{{ popuDataPercent[1] }}%</td>\r\n                    <td>{{ popuDataPercent[2] }}%</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div id=\"charGroup\" class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-sm-6 mb-4\">\r\n        <div class=\"card h-100\">\r\n          <div class=\"card-header card-inverse\">\r\n            <i class=\"fa fa-pie-chart\"></i> 年齡結構分析\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <canvas baseChart [data]=\"yearDataPercent\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xl-4 col-sm-6 mb-4\">\r\n        <div class=\"card h-100\">\r\n          <div class=\"card-header card-inverse\">\r\n            <i class=\"fa fa-bar-chart\"></i> 人口數量預測\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\r\n              [chartType]=\"barChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xl-4 col-sm-6 mb-4\">\r\n        <div class=\"card h-100\">\r\n          <div class=\"card-header card-inverse\">\r\n            <i class=\"fa fa-area-chart\"></i> 區域社福評估\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <canvas baseChart [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [chartType]=\"radarChartType\" [colors]=\"radarChartOptions\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/map-modal/map-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gmaps_service__ = __webpack_require__("../../../../../src/app/service/gmaps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_layer_service__ = __webpack_require__("../../../../../src/app/service/layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_year_structure_service__ = __webpack_require__("../../../../../src/app/service/year-structure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_population_structure_service__ = __webpack_require__("../../../../../src/app/service/population-structure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_marker__ = __webpack_require__("../../../../../src/app/class/marker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_city__ = __webpack_require__("../../../../../src/app/class/city.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MapModalComponent = (function () {
    function MapModalComponent(popuService, yearService, gmapService, layerService, zone, marker) {
        this.popuService = popuService;
        this.yearService = yearService;
        this.gmapService = gmapService;
        this.layerService = layerService;
        this.zone = zone;
        this.marker = marker;
        // 初始資料
        this.lat = 23.4589877;
        this.lng = 120.29294219999997;
        this.zoom = 14;
        this.radius = 1000; // 半徑(公尺)
        this.color = 'rgba(253,216,55,0.57)';
        this.addr = "̨嘉義縣政府";
        // 分析統計
        this.countSecure = 17;
        this.countHospi = 7;
        this.countCare = 3;
        this.countTemple = 2;
        this.countBurglary = 1;
        // 圖層資料
        this.geoLayerTaiwan = null;
        this.geoLayerSecure = null;
        this.geoLayerBurglary = null;
        this.geoLayerHospi = null;
        this.geoLayerCare = null;
        this.geoLayerTemple = null;
        // 圖層是否顯示
        this.geoLayerShowTaiwan = false;
        this.geoLayerShowSecure = false;
        this.geoLayerShowBurglary = false;
        this.geoLayerShowHospi = false;
        this.geoLayerShowCare = false;
        this.geoLayerShowTemple = false;
        // 點位訊息小窗
        this.infowinLat = 23.458987;
        this.infowinLng = 120.29294219999997;
        this.infowinMsg = ['', '', ''];
        this.infowinIsOpen = false;
        // 年齡結構 - 卷軸
        this.yearActiveSlider = 'false';
        this.yearValueSlider = 1;
        this.yearDateSlider = new Date().getFullYear().toString() + "-" + new Date().getMonth().toString();
        // 人口結構 - 卷軸
        this.popuActiveSlider = 'false';
        this.popuValueSlider = 41;
        this.popuDateSlider = new Date().getFullYear().toString() + "-" + new Date().getMonth().toString();
        // 年齡結構 - 圖表
        this.yearData = [];
        // yearDataFilter: any[] = []; // 儲存卷軸對應的No.資料
        this.yearDataPercent = [50, 50, 50]; // 年齡結構百分比[A群,B群,C群]
        // 人口結構 - 圖表
        this.popuData = [];
        this.popuDataFilter = [];
        this.popuDataPercent = [50, 50, 50];
        // 年齡結構 - 下拉式選單
        this.cityYearSelect = new __WEBPACK_IMPORTED_MODULE_6__class_city__["a" /* City */]().cityGroup[0];
        this.cityYearGroup = new __WEBPACK_IMPORTED_MODULE_6__class_city__["a" /* City */]().cityGroup;
        // 人口結構 - 下拉式選單
        this.cityPopuSelect = new __WEBPACK_IMPORTED_MODULE_6__class_city__["a" /* City */]().cityGroup[0];
        this.cityPopuGroup = new __WEBPACK_IMPORTED_MODULE_6__class_city__["a" /* City */]().cityGroup;
        // Char-Doughnut Config
        this.doughnutChartLabels = ['~17', '18~65', '65~',];
        this.doughnutChartData = [650, 210, 140];
        this.doughnutChartType = 'doughnut'; // 改讀取 yearDataPercent
        // Char-Radar Config
        this.radarChartLabels = ['監視', '醫院', '照護', '宗教', '竊盜'];
        this.radarChartData = [
            { data: [17, 7, 3, 2, 1], label: '嘉義縣' }
        ];
        this.radarChartType = 'radar';
        this.radarChartOptions = [{
                borderColor: 'rgba(54,162,235,.8)',
                backgroundColor: 'rgba(54,162,235,.3)',
                pointBackgroundColor: '#36A2EB',
                pointBorderColor: '#fff'
                // [colors]="colors" 
            }];
        // Char-BarChart Config
        this.barChartOptions = {
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
        this.barChartLabels = ['2014', '2015', '2016', '2017', '自訂年(季)'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [524787, 519659, 514201, 508414, 505412], label: '雲林縣' }
        ];
        // Tree Config
        this.nodes = [
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
    }
    MapModalComponent.prototype.ngOnInit = function () {
        this.getYearCSV();
        this.LoadAllLayer();
    };
    MapModalComponent.prototype.LoadAllLayer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.layerService.getTaiwanLayer()
                            .subscribe(function (result) {
                            _this.zone.run(function () {
                                _this.geoLayerTaiwan = result;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.layerService.getSecureLayer('secure', 'Chiayi')
                                .subscribe(function (result) {
                                _this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                this.layerService.getSecureGeoJson(result);
                                                return [4 /*yield*/, this.layerService.getSecureLayer('secure', 'Yunlin')
                                                        .subscribe(function (result) {
                                                        _this.zone.run(function () {
                                                            _this.geoLayerSecure = _this.layerService.getSecureGeoJson(result);
                                                        });
                                                    })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.layerService.getBurglaryLayer('burglary', 'Chiayi')
                                .subscribe(function (result) {
                                _this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                this.layerService.getBurglaryGeoJson(result);
                                                return [4 /*yield*/, this.layerService.getBurglaryLayer('burglary', 'Yunlin')
                                                        .subscribe(function (result) {
                                                        _this.zone.run(function () {
                                                            _this.geoLayerBurglary = _this.layerService.getBurglaryGeoJson(result);
                                                        });
                                                    })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.layerService.getCareLayer('care', 'Chiayi')
                                .subscribe(function (result) {
                                _this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                this.layerService.getCareGeoJson(result);
                                                return [4 /*yield*/, this.layerService.getCareLayer('care', 'Yunlin')
                                                        .subscribe(function (result) {
                                                        _this.zone.run(function () {
                                                            _this.geoLayerCare = _this.layerService.getCareGeoJson(result);
                                                        });
                                                    })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.layerService.getTempleLayer('temple', 'Chiayi')
                                .subscribe(function (result) {
                                _this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                this.layerService.getTempleGeoJson(result);
                                                return [4 /*yield*/, this.layerService.getTempleLayer('temple', 'Yunlin')
                                                        .subscribe(function (result) {
                                                        _this.zone.run(function () {
                                                            _this.geoLayerTemple = _this.layerService.getTempleGeoJson(result);
                                                        });
                                                    })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.layerService.getHospiLayer('hospi', 'Chiayi')
                                .subscribe(function (result) {
                                _this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                this.layerService.getHospiGeoJson(result);
                                                return [4 /*yield*/, this.layerService.getHospiLayer('hospi', 'Yunlin')
                                                        .subscribe(function (result) {
                                                        _this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                                                            var _this = this;
                                                            return __generator(this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        this.layerService.getHospiGeoJson(result);
                                                                        return [4 /*yield*/, this.layerService.getHospiLayer('hospi', '長照ABC')
                                                                                .subscribe(function (result) {
                                                                                _this.zone.run(function () {
                                                                                    _this.geoLayerHospi = _this.layerService.getHospiGeoJson(result);
                                                                                });
                                                                            })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); });
                                                    })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapModalComponent.prototype.geoLayerClick = function (e) {
        var feature = e.feature.f;
        this.infowinLat = feature.lat + 0.00008;
        this.infowinLng = feature.lng;
        var name;
        if (feature.TempleName) {
            name = feature.TempleName;
        }
        else if (feature.CareName) {
            name = feature.CareName;
        }
        else if (feature.Name) {
            name = feature.Name;
        }
        else if (feature.name) {
            name = feature.name;
        }
        this.infowinMsg[0] = name;
        this.infowinMsg[1] = feature.address;
        if (feature.level) {
            this.infowinMsg[2] = "\u9577\u7167\u7B49\u7D1A\uFF1A" + feature.level;
        }
        else {
            this.infowinMsg[2] = null;
        }
        this.infowinIsOpen = true;
    };
    MapModalComponent.prototype.analyticsPointer = function () {
        var _this = this;
        this.countSecure = 0;
        this.countCare = 0;
        this.countTemple = 0;
        this.countHospi = 0;
        this.geoLayerHospi['features'].forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var lat, lng, p2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lat = Number(element.geometry.coordinates[1]);
                        lng = Number(element.geometry.coordinates[0]);
                        p2 = [lat, lng];
                        return [4 /*yield*/, this.gmapService.getDistance([this.lat, this.lng], p2)
                                .subscribe(function (result) {
                                _this.zone.run(function () {
                                    if (result <= _this.radius) {
                                        _this.countHospi++;
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.geoLayerTemple['features'].forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var lat, lng, p2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lat = Number(element.geometry.coordinates[1]);
                        lng = Number(element.geometry.coordinates[0]);
                        p2 = [lat, lng];
                        return [4 /*yield*/, this.gmapService.getDistance([this.lat, this.lng], p2)
                                .subscribe(function (result) {
                                _this.zone.run(function () {
                                    if (result <= _this.radius) {
                                        _this.countTemple++;
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.geoLayerCare['features'].forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var lat, lng, p2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lat = Number(element.geometry.coordinates[1]);
                        lng = Number(element.geometry.coordinates[0]);
                        p2 = [lat, lng];
                        return [4 /*yield*/, this.gmapService.getDistance([this.lat, this.lng], p2)
                                .subscribe(function (result) {
                                _this.zone.run(function () {
                                    if (result <= _this.radius) {
                                        _this.countCare++;
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.geoLayerSecure['features'].forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var lat, lng, p2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lat = Number(element.geometry.coordinates[1]);
                        lng = Number(element.geometry.coordinates[0]);
                        p2 = [lat, lng];
                        return [4 /*yield*/, this.gmapService.getDistance([this.lat, this.lng], p2)
                                .subscribe(function (result) {
                                _this.zone.run(function () {
                                    if (result <= _this.radius) {
                                        _this.countSecure++;
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.geoLayerBurglary['features'].forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var lat, lng, p2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lat = Number(element.geometry.coordinates[1]);
                        lng = Number(element.geometry.coordinates[0]);
                        p2 = [lat, lng];
                        return [4 /*yield*/, this.gmapService.getDistance([this.lat, this.lng], p2)
                                .subscribe(function (result) {
                                _this.zone.run(function () {
                                    if (result <= _this.radius) {
                                        _this.countBurglary++;
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        // 分析完後要更新圖表 - 區域社福評估
        this.radarChartData = [
            {
                data: [
                    this.countSecure,
                    this.countHospi,
                    this.countCare,
                    this.countTemple,
                    this.countBurglary
                ],
                label: this.addr
            }
        ];
    };
    MapModalComponent.prototype.setCircle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.zoom = 14;
                        return [4 /*yield*/, this.gmapService.getLatLan(this.addr)
                                .subscribe(function (result) {
                                //必須使用zone 觀察整個 view 否則會導致延遲
                                _this.zone.run(function () {
                                    _this.lat = result.lat();
                                    _this.lng = result.lng();
                                    _this.saveMarker(result.lat(), result.lng());
                                });
                            }, function (error) { return console.log(error); }, function () { return console.log('Geocoding completed!'); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapModalComponent.prototype.saveMarker = function (lat, lng) {
        this.marker.lat = lat;
        this.marker.lng = lng;
    };
    MapModalComponent.prototype.styleLayer = function (feature) {
        var icon;
        switch (feature.getProperty('group')) {
            case 'hospi':
                console.log(feature.getProperty('level'));
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
                    case 1:
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
    };
    /**
     * 下拉式選單 - 年齡結構
     * @param city
     */
    MapModalComponent.prototype.optionYearChange = function (city) {
        this.yearDataPercent = this.yearService.getStructurePercent(city.enName, this.yearValueSlider);
        this.yearActiveSlider = ''; // 選擇縣市後才可以滑動 Slider
    };
    /**
     * 卷軸 - 年齡結構
     * @param no
     */
    MapModalComponent.prototype.onYearSliderChange = function (no) {
        this.yearDataPercent = this.yearService.getStructurePercent(this.cityYearSelect.enName, no);
        var _mon = no % 12 == 0 ? 12 : no % 12;
        var _year = no / 12 == 0 ? 2012 : Math.floor(no / 12) + 2012;
        this.yearDateSlider = _year + "-" + _mon;
    };
    /**
     * 下拉式選單 - 人口結構
     * @param city
     */
    MapModalComponent.prototype.optionPopuChange = function (city) {
        this.popuDataPercent = this.popuService.getPopulationPercent(city.enName, this.yearValueSlider)[0];
        this.popuActiveSlider = ''; // 選擇縣市後才可以滑動 Slider
        this.onPopuSliderChange(41);
    };
    /**
     * 卷軸 - 年齡結構
     * @param no
     */
    MapModalComponent.prototype.onPopuSliderChange = function (no) {
        this.popuDataPercent = this.popuService.getPopulationPercent(this.cityPopuSelect.enName, no);
        var _mon = no % 4 == 0 ? 4 : no % 4;
        var _year = no / 4 == 0 ? 2007 : Math.floor(no / 4) + 2007;
        this.popuDateSlider = _year + "-" + _mon;
        var popuf = Number(this.popuService.getPopulationPercent(this.cityPopuSelect.enName, no)[0]);
        var popu14 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect.enName, 32)[0]);
        var popu15 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect.enName, 36)[0]);
        var popu16 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect.enName, 40)[0]);
        var popu17 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect.enName, 44)[0]);
        this.barChartData = [{ data: [popu14, popu15, popu16, popu17, popuf], label: this.cityPopuSelect.chName }];
        var bartmpLabels = ['2014', '2015', '2016', '2017', _year + "-" + _mon + "(\u5B63)"];
        this.barChartLabels.length = 0;
        for (var i = 0; i < bartmpLabels.length; i++) {
            this.barChartLabels.push(bartmpLabels[i]);
        }
    };
    /**
     * 取得資料原始資料 - 年齡結構
     */
    MapModalComponent.prototype.getYearCSV = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.yearService.readCsv('YearStructure_Chiayi')
                            .subscribe(function (result) {
                            _this.yearData = result;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 圖層控制
     * @param node
     * @param event
     */
    MapModalComponent.prototype.check = function (node, $event) {
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
                }
                else {
                    this.geoLayerShowSecure = false;
                    this.geoLayerShowHospi = false;
                    this.geoLayerShowCare = false;
                    this.geoLayerShowTemple = false;
                    this.geoLayerShowBurglary = false;
                }
                break;
        }
    };
    /**
     * check 連動
     * @param node
     * @param checked
     */
    MapModalComponent.prototype.updateChildNodesCheckBox = function (node, checked) {
        var _this = this;
        node.data.checked = checked;
        if (node.children) {
            node.children.forEach(function (child) { return _this.updateChildNodesCheckBox(child, checked); });
        }
    };
    /**
     * check 連動
     * @param node
     */
    MapModalComponent.prototype.updateParentNodesCheckBox = function (node) {
        if (node && node.level > 0 && node.children) {
            var allChildChecked = true;
            var noChildChecked = true;
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (!child.data.checked) {
                    allChildChecked = false;
                }
                else if (child.data.checked) {
                    noChildChecked = false;
                }
            }
            if (allChildChecked) {
                node.data.checked = true;
                node.data.indeterminate = false;
            }
            else if (noChildChecked) {
                node.data.checked = false;
                node.data.indeterminate = false;
            }
            else {
                node.data.checked = true;
                node.data.indeterminate = true;
            }
            this.updateParentNodesCheckBox(node.parent);
        }
    };
    return MapModalComponent;
}());
MapModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-modal',
        template: __webpack_require__("../../../../../src/app/component/map-modal/map-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/map-modal/map-modal.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__service_gmaps_service__["a" /* GMapsService */],
            __WEBPACK_IMPORTED_MODULE_2__service_layer_service__["a" /* LayerService */],
            __WEBPACK_IMPORTED_MODULE_3__service_year_structure_service__["a" /* YearStructureService */],
            __WEBPACK_IMPORTED_MODULE_5__class_marker__["a" /* Marker */],
            __WEBPACK_IMPORTED_MODULE_4__service_population_structure_service__["a" /* PopulationStructureService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_population_structure_service__["a" /* PopulationStructureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_population_structure_service__["a" /* PopulationStructureService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_year_structure_service__["a" /* YearStructureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_year_structure_service__["a" /* YearStructureService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service_gmaps_service__["a" /* GMapsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_gmaps_service__["a" /* GMapsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__service_layer_service__["a" /* LayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_layer_service__["a" /* LayerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__class_marker__["a" /* Marker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__class_marker__["a" /* Marker */]) === "function" && _f || Object])
], MapModalComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=map-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/navbar-modal/navbar-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .navbar {\r\n    min-height: 80px;\r\n  }\r\n\r\n  .navbar.bg-custom {\r\n    background-size: 100%;\r\n    background-image: linear-gradient(90deg, #33d5c5, #4bccef);\r\n  }\r\n\r\n  .navbar-brand {\r\n    padding: 0 15px;\r\n    height: 80px;\r\n    line-height: 80px;\r\n    font-size: 2em;\r\n  }\r\n\r\n  .navbar-toggle {\r\n    /* (80px - button height 34px) / 2 = 23px */\r\n    margin-top: 23px;\r\n    padding: 9px 10px !important;\r\n  }\r\n\r\n  @media (min-width: 768px) {\r\n    .navbar-nav>li>a {\r\n      /* (80px - line-height of 27px) / 2 = 26.5px */\r\n      padding-top: 26.5px;\r\n      padding-bottom: 26.5px;\r\n      line-height: 27px;\r\n      font-size: 1.2em;\r\n    }\r\n  }\r\n\r\n  #navbar-toggler {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .navbar-collapse .navbar-text {\r\n    line-height: 60px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/navbar-modal/navbar-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-custom bg-info fixed-top py-0 py-md-0\">\r\n  <div class=\"container\">\r\n    <button id=\"navbar-toggler\" class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\"\r\n      aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    <a class=\"navbar-brand\" href=\"#\">嘉義黑蚵松</a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">首頁 <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#popuDataTable\">人口數量變動 </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#ysDataTable\">年齡結構指標</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" target=\"_blank\" href=\"https://explooosion.github.io/ChiayiHackthon/\">Github</a>\r\n        </li>\r\n      </ul>\r\n      <span class=\"navbar-text\">Hackathon</span>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/navbar-modal/navbar-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarModalComponent = (function () {
    function NavbarModalComponent() {
    }
    NavbarModalComponent.prototype.ngOnInit = function () {
    };
    return NavbarModalComponent;
}());
NavbarModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-modal',
        template: __webpack_require__("../../../../../src/app/component/navbar-modal/navbar-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/navbar-modal/navbar-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarModalComponent);

//# sourceMappingURL=navbar-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/gmaps.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GMapsService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GMapsService = (function (_super) {
    __extends(GMapsService, _super);
    function GMapsService(__loader, __zone) {
        var _this = _super.call(this, __loader, __zone) || this;
        _this.__loader = __loader;
        _this.__zone = __zone;
        return _this;
    }
    /**
     * 地址轉換經緯度
     * @param address
     */
    GMapsService.prototype.getLatLan = function (address) {
        console.log('Getting Address - ', address);
        var geocoder = new google.maps.Geocoder();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    observer.next(results[0].geometry.location);
                    observer.complete();
                }
                else {
                    console.log('Error - ', results, ' & Status - ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        });
    };
    /**
     * 兩點座標距離(公尺)
     * @param point1
     * @param point2
     */
    GMapsService.prototype.getDistance = function (point1, point2) {
        var p1 = new google.maps.LatLng(point1[0], point1[1]);
        var p2 = new google.maps.LatLng(point2[0], point2[1]);
        var dis = null;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            dis = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2));
            if (typeof (dis) != null) {
                observer.next(dis);
                observer.complete();
            }
            else {
                console.log('Error - can not get distance');
                observer.next({});
                observer.complete();
            }
        });
    };
    return GMapsService;
}(__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */]));
GMapsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], GMapsService);

var _a, _b;
//# sourceMappingURL=gmaps.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/layer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_geo_json__ = __webpack_require__("../../../../../src/app/class/geo-json.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_care__ = __webpack_require__("../../../../../src/app/class/care.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_temple__ = __webpack_require__("../../../../../src/app/class/temple.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_secure__ = __webpack_require__("../../../../../src/app/class/secure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_burglary__ = __webpack_require__("../../../../../src/app/class/burglary.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_hospi__ = __webpack_require__("../../../../../src/app/class/hospi.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LayerService = (function () {
    function LayerService(http) {
        this.http = http;
        this.templeGeoJson = new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["a" /* GeoJson */]();
        this.careGeoJson = new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["a" /* GeoJson */]();
        this.secureGeoJson = new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["a" /* GeoJson */]();
        this.burglaryGeoJson = new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["a" /* GeoJson */]();
        this.hospiGeoJson = new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["a" /* GeoJson */]();
        this.fileUrl = 'assets/layer/';
        this.fileCategory = '';
        this.fileExtend = '.csv';
        this.fileUrlMap = 'assets/layer/map/county.json';
    }
    LayerService.prototype.getTaiwanLayer = function () {
        return this.http.get(this.fileUrlMap)
            .map(this.saveTaiwan);
    };
    LayerService.prototype.saveTaiwan = function (res) {
        return res.json() || {};
    };
    LayerService.prototype.getTempleLayer = function (category, city) {
        return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
            .map(this.saveTemple);
    };
    LayerService.prototype.getCareLayer = function (category, city) {
        return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
            .map(this.saveCare);
    };
    LayerService.prototype.getSecureLayer = function (category, city) {
        return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
            .map(this.saveSecure);
    };
    LayerService.prototype.getBurglaryLayer = function (category, city) {
        return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
            .map(this.saveSecure);
    };
    LayerService.prototype.getHospiLayer = function (category, city) {
        return this.http.get(this.fileUrl + category + '/' + city + this.fileExtend)
            .map(this.saveHospi);
    };
    LayerService.prototype.saveTemple = function (res) {
        var csvData = res['_body'] || '';
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                this.temple = new __WEBPACK_IMPORTED_MODULE_6__class_temple__["a" /* Temple */](data[0], // TempleName
                data[1], // LordGod
                data[2], // Area
                data[3], // Address
                data[4], // lat
                data[5] // lng
                );
                lines.push(this.temple);
            }
            this.templeArr = lines;
        } // fro
        return this.templeArr;
    };
    LayerService.prototype.saveCare = function (res) {
        var csvData = res['_body'] || '';
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                this.care = new __WEBPACK_IMPORTED_MODULE_5__class_care__["a" /* Care */](data[0], // CareName
                data[6], // Service
                data[1], // Area
                data[4], // Address
                data[11], // lat
                data[12] // lng
                );
                lines.push(this.care);
            }
            this.careArr = lines;
        } // fro
        return this.careArr;
    };
    LayerService.prototype.saveSecure = function (res) {
        var csvData = res['_body'] || '';
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                this.secure = new __WEBPACK_IMPORTED_MODULE_7__class_secure__["a" /* Secure */](data[0], // address
                data[1], // lat
                data[2]);
                lines.push(this.secure);
            }
            this.secureArr = lines;
        } // fro
        return this.secureArr;
    };
    LayerService.prototype.saveBurglary = function (res) {
        var csvData = res['_body'] || '';
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                this.burglary = new __WEBPACK_IMPORTED_MODULE_8__class_burglary__["a" /* Burglary */](data[0], // address
                data[1], // lat
                data[2], // lng
                data[3] // Address
                );
                lines.push(this.burglary);
            }
            this.burglaryArr = lines;
        } // fro
        return this.burglaryArr;
    };
    LayerService.prototype.saveHospi = function (res) {
        var csvData = res['_body'] || '';
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                this.hospi = new __WEBPACK_IMPORTED_MODULE_9__class_hospi__["a" /* Hospi */](data[0], // address
                data[1], // lat
                data[2], // lng
                data[3], // Address
                data[4] == null ? '' : data[4]);
                lines.push(this.hospi);
            }
            this.hospiArr = lines;
        } // fro
        return this.hospiArr;
    };
    LayerService.prototype.getTempleGeoJson = function (temple) {
        var _this = this;
        temple.forEach(function (element) {
            _this.templeGeoJson.features.push(new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["b" /* Features */]({
                group: 'temple',
                address: element.Address,
                LordGod: element.element,
                TempleName: element.TempleName,
                lat: Number(element.lat),
                lng: Number(element.lng),
            }, new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["c" /* Geometry */]('Point', [Number(element.lng), Number(element.lat)])));
        });
        return JSON.parse(JSON.stringify(this.templeGeoJson));
    };
    LayerService.prototype.getCareGeoJson = function (care) {
        var _this = this;
        care.forEach(function (element) {
            _this.careGeoJson.features.push(new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["b" /* Features */]({
                group: 'care',
                address: element.Address,
                Service: element.Service,
                CareName: element.CareName,
                lat: Number(element.lat),
                lng: Number(element.lng),
            }, new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["c" /* Geometry */]('Point', [Number(element.lng), Number(element.lat)])));
        });
        return JSON.parse(JSON.stringify(this.careGeoJson));
    };
    LayerService.prototype.getSecureGeoJson = function (secure) {
        var _this = this;
        secure.forEach(function (element) {
            _this.secureGeoJson.features.push(new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["b" /* Features */]({
                group: 'secure',
                address: element.address,
                lat: Number(element.lat),
                lng: Number(element.lng),
            }, new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["c" /* Geometry */]('Point', [Number(element.lng), Number(element.lat)])));
        });
        return JSON.parse(JSON.stringify(this.secureGeoJson));
    };
    LayerService.prototype.getBurglaryGeoJson = function (burglary) {
        var _this = this;
        burglary.forEach(function (element) {
            _this.burglaryGeoJson.features.push(new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["b" /* Features */]({
                group: 'burglary',
                address: element.address,
                date: element.date,
                lat: Number(element.lat),
                lng: Number(element.lng),
            }, new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["c" /* Geometry */]('Point', [Number(element.lng), Number(element.lat)])));
        });
        return JSON.parse(JSON.stringify(this.burglaryGeoJson));
    };
    LayerService.prototype.getHospiGeoJson = function (hospi) {
        var _this = this;
        hospi.forEach(function (element) {
            _this.hospiGeoJson.features.push(new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["b" /* Features */]({
                group: 'hospi',
                name: element.name,
                address: element.address,
                lat: Number(element.lat),
                lng: Number(element.lng),
                level: element.level
            }, new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["c" /* Geometry */]('Point', [Number(element.lng), Number(element.lat)])));
        });
        return JSON.parse(JSON.stringify(this.hospiGeoJson));
    };
    return LayerService;
}());
LayerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LayerService);

var _a;
//# sourceMappingURL=layer.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/population-structure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_population__ = __webpack_require__("../../../../../src/app/class/population.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulationStructureService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopulationStructureService = (function () {
    function PopulationStructureService(http) {
        this.http = http;
        this.fileUrl = 'assets/data/';
        this.fileExtend = '.csv';
    }
    /**
     * 讀取人口數量CSV（地區）
     * @param fn
     */
    PopulationStructureService.prototype.readCsv = function (fn) {
        return this.http.get(this.fileUrl + fn + this.fileExtend)
            .map(this.extractData);
    };
    PopulationStructureService.prototype.extractData = function (res) {
        var csvData = res['_body'] || '';
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                this.popu = new __WEBPACK_IMPORTED_MODULE_3__class_population__["a" /* Population */]();
                this.popu.no = data[0];
                this.popu.year = data[1];
                this.popu.season = data[2];
                this.popu.year_season = data[3];
                this.popu.city = data[4];
                this.popu.total_population = data[5];
                this.popu.total_population_increase = data[6];
                this.popu.births = data[7];
                this.popu.deaths = data[8];
                this.popu.immigrants = data[9];
                this.popu.emigrants = data[10];
                this.popu.natural_increase_rate = data[11];
                this.popu.social_increase_rate = data[12];
                this.popu.total_increase_rate = data[13];
                lines.push(this.popu);
            }
            this.popuArr = lines;
        } // for
        return this.popuArr;
    };
    /**
     * 人口數量百分比（地區，編號）
     * @param city
     * @param no
     */
    PopulationStructureService.prototype.getPopulationPercent = function (city, no) {
        // f(x) = B3+(C3*A3)+(D3*(A3*A3))
        var res = [];
        var fx = null;
        switch (city) {
            case 'Chiayi':
                fx = new __WEBPACK_IMPORTED_MODULE_3__class_population__["a" /* Population */]().FxChiayi;
                break;
            case 'Yunlin':
                fx = new __WEBPACK_IMPORTED_MODULE_3__class_population__["a" /* Population */]().FxYunlin;
                break;
        }
        for (var i = 0; i < 3; i++) {
            var v = fx[i].a + (fx[i].b * no) + (fx[i].c * (no * no));
            if (i == 0) {
                res.push(Number(v).toFixed(0));
            }
            else {
                res.push(Number(v).toFixed(4));
            }
            console.log(res + " = " + fx[i].a + " + " + fx[i].b + " * " + no + " + " + fx[i].c + " * " + no + " * " + no);
        }
        return res;
    };
    return PopulationStructureService;
}());
PopulationStructureService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PopulationStructureService);

var _a;
//# sourceMappingURL=population-structure.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/year-structure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_yearstructure__ = __webpack_require__("../../../../../src/app/class/yearstructure.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearStructureService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YearStructureService = (function () {
    function YearStructureService(http) {
        this.http = http;
        this.fileUrl = 'assets/data/';
        this.fileExtend = '.csv';
    }
    /**
     * 讀取年齡結構CSV（地區）
     * @param fn
     */
    YearStructureService.prototype.readCsv = function (fn) {
        return this.http.get(this.fileUrl + fn + this.fileExtend)
            .map(this.extractData);
    };
    YearStructureService.prototype.extractData = function (res) {
        var csvData = res['_body'] || '';
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                this.ys = new __WEBPACK_IMPORTED_MODULE_3__class_yearstructure__["a" /* Yearstructure */]();
                this.ys.no = data[0];
                this.ys.year = data[1];
                this.ys.month = data[2];
                this.ys.yearmonth = data[3];
                this.ys.city = data[4];
                this.ys.zero_twelve = data[5];
                this.ys.twelve_seventeen = data[6];
                this.ys.twenty = data[7];
                this.ys.sixty_five = data[8];
                this.ys.twnty_sixty = data[9];
                this.ys.seventeen_twenty = data[10];
                this.ys.zero_twenty = data[11];
                this.ys.zero_seventeen = data[12];
                this.ys.seventeen_sixty = data[13];
                lines.push(this.ys);
            }
            this.ysArr = lines;
        } // for
        return this.ysArr;
    };
    /**
     * 人口結構百分比（地區，編號）
     * @param city
     * @param no
     */
    YearStructureService.prototype.getStructurePercent = function (city, no) {
        // f(x) = A+B*no+c*no*no
        var res = [];
        var fx = null;
        switch (city) {
            case 'Chiayi':
                fx = new __WEBPACK_IMPORTED_MODULE_3__class_yearstructure__["a" /* Yearstructure */]().FxChiayi;
                break;
            case 'Yunlin':
                fx = new __WEBPACK_IMPORTED_MODULE_3__class_yearstructure__["a" /* Yearstructure */]().FxYunlin;
                break;
        }
        for (var i = 0; i < 3; i++) {
            var v = fx[i].a + fx[i].b * no + fx[i].c * no * no;
            res.push(Number(v).toFixed(6));
            console.log(res + " = " + fx[i].a + " + " + fx[i].b + " * " + no + " + " + fx[i].c + " * " + no + " * " + no);
        }
        return res;
    };
    return YearStructureService;
}());
YearStructureService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], YearStructureService);

var _a;
//# sourceMappingURL=year-structure.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map