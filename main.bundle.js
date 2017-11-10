webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\">\n  <span style=\"flex:1\">Tradelab Test</span>\n  <autocomplete-cities></autocomplete-cities>\n</mat-toolbar>\n\n<progress-bar></progress-bar>\n\n<section>\n  <weather-city [city]=\"currentCityWeather | async\"></weather-city>\n</section>\n\n<section>\n  <div class=\"inline\" *ngFor=\"let weather of forecastCityWeather?.list\">\n    <weather-city [city]=\"weather\"></weather-city>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cities_cities_service__ = __webpack_require__("../../../../../src/app/cities/cities.service.ts");
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
    function AppComponent(cService) {
        this.cService = cService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentCityWeather = this.cService.currentWeather;
        this.cService.forecastWeather
            .subscribe(function (weather) { return _this.forecastCityWeather = weather; });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cities_cities_service__["a" /* CitiesService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__autocomplete_cities_autocomplete_cities_component__ = __webpack_require__("../../../../../src/app/autocomplete-cities/autocomplete-cities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__weather_city_weather_city_component__ = __webpack_require__("../../../../../src/app/weather-city/weather-city.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_component__ = __webpack_require__("../../../../../src/app/progressbar/progressbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progressbar_progressbar_service__ = __webpack_require__("../../../../../src/app/progressbar/progressbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cities_cities_service__ = __webpack_require__("../../../../../src/app/cities/cities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__autocomplete_cities_autocomplete_cities_component__["a" /* AutocompleteCitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__weather_city_weather_city_component__["a" /* WeatherCityComponent */],
                __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_component__["a" /* ProgressbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__progressbar_progressbar_service__["a" /* ProgressBarService */], __WEBPACK_IMPORTED_MODULE_13__cities_cities_service__["a" /* CitiesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/autocomplete-cities/autocomplete-cities.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let city of filteredOptions | async\" [value]=\"city.nm\">\n      {{ city.nm }}\n    </mat-option>\n  </mat-autocomplete>\n\n</mat-form-field>\n<button mat-raised-button (click)=\"submit(null)\" color=\"accent\">Submit</button>"

/***/ }),

/***/ "../../../../../src/app/autocomplete-cities/autocomplete-cities.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/autocomplete-cities/autocomplete-cities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteCitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cities_cities_fr__ = __webpack_require__("../../../../../src/app/cities/cities-fr.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progressbar_progressbar_service__ = __webpack_require__("../../../../../src/app/progressbar/progressbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cities_cities_service__ = __webpack_require__("../../../../../src/app/cities/cities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AutocompleteCitiesComponent = (function () {
    function AutocompleteCitiesComponent(pbService, http, cService) {
        this.pbService = pbService;
        this.http = http;
        this.cService = cService;
        this.myControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.cities = __WEBPACK_IMPORTED_MODULE_8__cities_cities_fr__["a" /* cities */];
        this.citySelected = {};
    }
    AutocompleteCitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .startWith(this.cities[0].nm)
            .debounceTime(200)
            .map(function (val) { return val ? _this.filter(val) : _this.cities.slice(); });
        this.submit(this.cities[0].nm);
    };
    AutocompleteCitiesComponent.prototype.filter = function (name) {
        return this.cities.filter(function (city) { return city.nm.toLowerCase().indexOf(name.toLowerCase()) === 0; });
    };
    AutocompleteCitiesComponent.prototype.submit = function (city) {
        var _this = this;
        var citySend = city ? city : this.myControl.value;
        this.pbService.show();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin([
            this.cService.getCurrentWeather(citySend),
            this.cService.getForecastWeather(citySend),
        ])
            .subscribe(function (_a) {
            var current = _a[0], forecast = _a[1];
            _this.pbService.hide();
            _this.cService.updateWeather(current, forecast);
        });
    };
    AutocompleteCitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'autocomplete-cities',
            template: __webpack_require__("../../../../../src/app/autocomplete-cities/autocomplete-cities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/autocomplete-cities/autocomplete-cities.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__progressbar_progressbar_service__["a" /* ProgressBarService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_10__cities_cities_service__["a" /* CitiesService */]])
    ], AutocompleteCitiesComponent);
    return AutocompleteCitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cities/cities-fr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cities; });
var cities = [
    {
        "id": 3038789,
        "nm": "Abbeville",
        "lat": 50.099998,
        "lon": 1.83333
    },
    {
        "id": 3038756,
        "nm": "Ablis",
        "lat": 48.5172,
        "lon": 1.83624
    },
    {
        "id": 3038754,
        "nm": "Ablon-sur-Seine",
        "lat": 48.727322,
        "lon": 2.42686
    },
    {
        "id": 3038735,
        "nm": "Abrest",
        "lat": 46.099072,
        "lon": 3.448
    },
    {
        "id": 3038731,
        "nm": "Abscon",
        "lat": 50.333328,
        "lon": 3.3
    },
    {
        "id": 3038715,
        "nm": "Achenheim",
        "lat": 48.5807,
        "lon": 7.62803
    },
    {
        "id": 3038712,
        "nm": "Acheres",
        "lat": 48.961159,
        "lon": 2.06882
    },
    {
        "id": 3038703,
        "nm": "Achicourt",
        "lat": 50.274288,
        "lon": 2.75779
    },
    {
        "id": 3038698,
        "nm": "Acigne",
        "lat": 48.133331,
        "lon": -1.53704
    },
    {
        "id": 3038653,
        "nm": "Afa",
        "lat": 41.98362,
        "lon": 8.79469
    },
    {
        "id": 3038638,
        "nm": "Agde",
        "lat": 43.310829,
        "lon": 3.47583
    },
    {
        "id": 3038634,
        "nm": "Agen",
        "lat": 44.200001,
        "lon": 0.63333
    },
    {
        "id": 3038611,
        "nm": "Agneaux",
        "lat": 49.119049,
        "lon": -1.1061
    },
    {
        "id": 3038604,
        "nm": "Agnetz",
        "lat": 49.38118,
        "lon": 2.38621
    },
    {
        "id": 3038592,
        "nm": "Agny",
        "lat": 50.25914,
        "lon": 2.76002
    },
    {
        "id": 3038555,
        "nm": "Aiffres",
        "lat": 46.294491,
        "lon": -0.42101
    },
    {
        "id": 3038520,
        "nm": "Aigrefeuille-sur-Maine",
        "lat": 47.07888,
        "lon": -1.40254
    },
    {
        "id": 3038505,
        "nm": "Aigueblanche",
        "lat": 45.503132,
        "lon": 6.50806
    },
    {
        "id": 3038502,
        "nm": "Aiguefonde",
        "lat": 43.493938,
        "lon": 2.31686
    },
    {
        "id": 3038498,
        "nm": "Aigueperse",
        "lat": 46.022839,
        "lon": 3.20231
    },
    {
        "id": 3038493,
        "nm": "Aigues-Mortes",
        "lat": 43.56683,
        "lon": 4.19068
    },
    {
        "id": 3038488,
        "nm": "Aigues-Vives",
        "lat": 43.7379,
        "lon": 4.18066
    },
    {
        "id": 3038466,
        "nm": "Aiguillon",
        "lat": 44.298931,
        "lon": 0.3402
    },
    {
        "id": 3038429,
        "nm": "Ailly-sur-Noye",
        "lat": 49.757069,
        "lon": 2.36367
    },
    {
        "id": 3038428,
        "nm": "Ailly-sur-Somme",
        "lat": 49.92886,
        "lon": 2.19615
    },
    {
        "id": 3038427,
        "nm": "Aimargues",
        "lat": 43.684479,
        "lon": 4.20999
    },
    {
        "id": 3038426,
        "nm": "Aime",
        "lat": 45.555592,
        "lon": 6.65042
    },
    {
        "id": 3038400,
        "nm": "Airaines",
        "lat": 49.968262,
        "lon": 1.94266
    },
    {
        "id": 3038393,
        "nm": "Aire-sur-la-Lys",
        "lat": 50.63871,
        "lon": 2.39876
    },
    {
        "id": 3038384,
        "nm": "Airvault",
        "lat": 46.825329,
        "lon": -0.13634
    },
    {
        "id": 3038355,
        "nm": "Aix-en-Othe",
        "lat": 48.223911,
        "lon": 3.73425
    },
    {
        "id": 3038354,
        "nm": "Aix-en-Provence",
        "lat": 43.528301,
        "lon": 5.44973
    },
    {
        "id": 3038350,
        "nm": "Aix-les-Bains",
        "lat": 45.68338,
        "lon": 5.92241
    },
    {
        "id": 3038349,
        "nm": "Aix-Noulette",
        "lat": 50.425678,
        "lon": 2.70554
    },
    {
        "id": 3038352,
        "nm": "Aixe-sur-Vienne",
        "lat": 45.798618,
        "lon": 1.13884
    },
    {
        "id": 3038341,
        "nm": "Aizenay",
        "lat": 46.74004,
        "lon": -1.60834
    },
    {
        "id": 3038334,
        "nm": "Ajaccio",
        "lat": 41.927231,
        "lon": 8.73462
    },
    {
        "id": 3038305,
        "nm": "Alata",
        "lat": 41.977489,
        "lon": 8.74232
    },
    {
        "id": 3038276,
        "nm": "Albens",
        "lat": 45.78463,
        "lon": 5.94875
    },
    {
        "id": 3038271,
        "nm": "Albert",
        "lat": 50.000912,
        "lon": 2.65096
    },
    {
        "id": 3038266,
        "nm": "Albertville",
        "lat": 45.674519,
        "lon": 6.39061
    },
    {
        "id": 3038261,
        "nm": "Albi",
        "lat": 43.929798,
        "lon": 2.148
    },
    {
        "id": 3038257,
        "nm": "Albias",
        "lat": 44.090488,
        "lon": 1.44821
    },
    {
        "id": 3038249,
        "nm": "Albigny-sur-Saone",
        "lat": 45.866669,
        "lon": 4.83333
    },
    {
        "id": 3038236,
        "nm": "Alby-sur-Cheran",
        "lat": 45.816669,
        "lon": 6.01667
    },
    {
        "id": 3038230,
        "nm": "Alencon",
        "lat": 48.433331,
        "lon": 0.08333
    },
    {
        "id": 3038226,
        "nm": "Alenya",
        "lat": 42.638741,
        "lon": 2.98148
    },
    {
        "id": 3038225,
        "nm": "Aleria",
        "lat": 42.102402,
        "lon": 9.51575
    },
    {
        "id": 3038224,
        "nm": "Ales",
        "lat": 44.133331,
        "lon": 4.08333
    },
    {
        "id": 3038213,
        "nm": "Alfortville",
        "lat": 48.805752,
        "lon": 2.4204
    },
    {
        "id": 3038204,
        "nm": "Algrange",
        "lat": 49.358631,
        "lon": 6.04748
    },
    {
        "id": 3038186,
        "nm": "Alixan",
        "lat": 44.974758,
        "lon": 5.02641
    },
    {
        "id": 3038176,
        "nm": "Allaire",
        "lat": 47.63752,
        "lon": -2.16324
    },
    {
        "id": 3038160,
        "nm": "Allassac",
        "lat": 45.25816,
        "lon": 1.47532
    },
    {
        "id": 3038159,
        "nm": "Allauch",
        "lat": 43.335732,
        "lon": 5.48201
    },
    {
        "id": 3038156,
        "nm": "Alleins",
        "lat": 43.703869,
        "lon": 5.16203
    },
    {
        "id": 3038142,
        "nm": "Allennes-les-Marais",
        "lat": 50.53754,
        "lon": 2.95361
    },
    {
        "id": 3038132,
        "nm": "Allevard",
        "lat": 45.393372,
        "lon": 6.0713
    },
    {
        "id": 3038128,
        "nm": "Allex",
        "lat": 44.764542,
        "lon": 4.91757
    },
    {
        "id": 3038106,
        "nm": "Allieres-et-Risset",
        "lat": 45.099339,
        "lon": 5.67924
    },
    {
        "id": 3038099,
        "nm": "Allinges",
        "lat": 46.336578,
        "lon": 6.46363
    },
    {
        "id": 3038086,
        "nm": "Allonnes",
        "lat": 47.9674,
        "lon": 0.15807
    },
    {
        "id": 3038087,
        "nm": "Allonnes",
        "lat": 47.293381,
        "lon": 0.02458
    },
    {
        "id": 3038075,
        "nm": "Allouagne",
        "lat": 50.53167,
        "lon": 2.51194
    },
    {
        "id": 3038029,
        "nm": "Alsting",
        "lat": 49.181519,
        "lon": 6.99397
    },
    {
        "id": 3038020,
        "nm": "Althen-des-Paluds",
        "lat": 44.004051,
        "lon": 4.95861
    },
    {
        "id": 3038012,
        "nm": "Altkirch",
        "lat": 47.616669,
        "lon": 7.25
    },
    {
        "id": 3037971,
        "nm": "Amancy",
        "lat": 46.07449,
        "lon": 6.32973
    },
    {
        "id": 3037967,
        "nm": "Amanvillers",
        "lat": 49.166908,
        "lon": 6.0422
    },
    {
        "id": 3037956,
        "nm": "Ambares-et-Lagrave",
        "lat": 44.916672,
        "lon": -0.48333
    },
    {
        "id": 3037954,
        "nm": "Ambazac",
        "lat": 45.959831,
        "lon": 1.40063
    },
    {
        "id": 3037943,
        "nm": "Amberieu-en-Bugey",
        "lat": 45.958851,
        "lon": 5.3432
    },
    {
        "id": 3037937,
        "nm": "Ambert",
        "lat": 45.549999,
        "lon": 3.75
    },
    {
        "id": 3037935,
        "nm": "Ambes",
        "lat": 45.011269,
        "lon": -0.53219
    },
    {
        "id": 3037915,
        "nm": "Ambleteuse",
        "lat": 50.807289,
        "lon": 1.60388
    },
    {
        "id": 3037902,
        "nm": "Amboise",
        "lat": 47.412491,
        "lon": 0.98266
    },
    {
        "id": 3037886,
        "nm": "Ambrieres-les-Vallees",
        "lat": 48.400002,
        "lon": -0.63333
    },
    {
        "id": 3037884,
        "nm": "Ambronay",
        "lat": 46.004601,
        "lon": 5.36107
    },
    {
        "id": 3037860,
        "nm": "Amfreville-la-Mi-Voie",
        "lat": 49.407551,
        "lon": 1.13871
    },
    {
        "id": 3037854,
        "nm": "Amiens",
        "lat": 49.900002,
        "lon": 2.3
    },
    {
        "id": 3037845,
        "nm": "Amilly",
        "lat": 48.443329,
        "lon": 1.39349
    },
    {
        "id": 3037846,
        "nm": "Amilly",
        "lat": 47.972809,
        "lon": 2.77186
    },
    {
        "id": 3037842,
        "nm": "Ammerschwihr",
        "lat": 48.125481,
        "lon": 7.28282
    },
    {
        "id": 3037838,
        "nm": "Amneville",
        "lat": 49.2575,
        "lon": 6.14203
    },
    {
        "id": 3037818,
        "nm": "Amplepuis",
        "lat": 45.972599,
        "lon": 4.3316
    },
    {
        "id": 3037813,
        "nm": "Ampuis",
        "lat": 45.489059,
        "lon": 4.80879
    },
    {
        "id": 3037797,
        "nm": "Ancenis",
        "lat": 47.366669,
        "lon": -1.16667
    },
    {
        "id": 3037794,
        "nm": "Ancerville",
        "lat": 48.635738,
        "lon": 5.02091
    },
    {
        "id": 3037747,
        "nm": "Andard",
        "lat": 47.456589,
        "lon": -0.39752
    },
    {
        "id": 3037726,
        "nm": "Andernos-les-Bains",
        "lat": 44.74572,
        "lon": -1.10355
    },
    {
        "id": 3037721,
        "nm": "Andeville",
        "lat": 49.26078,
        "lon": 2.16427
    },
    {
        "id": 3037713,
        "nm": "Andilly",
        "lat": 49.00935,
        "lon": 2.3024
    },
    {
        "id": 3037706,
        "nm": "Andolsheim",
        "lat": 48.06179,
        "lon": 7.41637
    },
    {
        "id": 3037701,
        "nm": "Andouille",
        "lat": 48.176849,
        "lon": -0.78364
    },
    {
        "id": 3037692,
        "nm": "Andresy",
        "lat": 48.982342,
        "lon": 2.05687
    },
    {
        "id": 3037691,
        "nm": "Andreze",
        "lat": 47.171551,
        "lon": -0.95239
    },
    {
        "id": 3037689,
        "nm": "Andrezieux-Boutheon",
        "lat": 45.526249,
        "lon": 4.26021
    },
    {
        "id": 3037682,
        "nm": "Anduze",
        "lat": 44.054089,
        "lon": 3.98545
    },
    {
        "id": 3037673,
        "nm": "Anet",
        "lat": 48.856419,
        "lon": 1.43981
    },
    {
        "id": 3037656,
        "nm": "Angers",
        "lat": 47.466671,
        "lon": -0.55
    },
    {
        "id": 3037654,
        "nm": "Angerville",
        "lat": 48.313541,
        "lon": 1.99935
    },
    {
        "id": 3037612,
        "nm": "Anglet",
        "lat": 43.476639,
        "lon": -1.51346
    },
    {
        "id": 3037598,
        "nm": "Angouleme",
        "lat": 45.650002,
        "lon": 0.15
    },
    {
        "id": 3037596,
        "nm": "Angoulins",
        "lat": 46.105259,
        "lon": -1.10713
    },
    {
        "id": 3037585,
        "nm": "Angres",
        "lat": 50.40572,
        "lon": 2.76054
    },
    {
        "id": 3037572,
        "nm": "Aniane",
        "lat": 43.684479,
        "lon": 3.58747
    },
    {
        "id": 3037571,
        "nm": "Aniche",
        "lat": 50.32996,
        "lon": 3.25346
    },
    {
        "id": 3037564,
        "nm": "Anizy-le-Chateau",
        "lat": 49.506779,
        "lon": 3.45119
    },
    {
        "id": 3037548,
        "nm": "Annay",
        "lat": 50.463032,
        "lon": 2.88122
    },
    {
        "id": 3037543,
        "nm": "Annecy",
        "lat": 45.900002,
        "lon": 6.11667
    },
    {
        "id": 3037540,
        "nm": "Annecy-le-Vieux",
        "lat": 45.91972,
        "lon": 6.14393
    },
    {
        "id": 3037538,
        "nm": "Annemasse",
        "lat": 46.194389,
        "lon": 6.23775
    },
    {
        "id": 3037534,
        "nm": "Annequin",
        "lat": 50.505249,
        "lon": 2.72019
    },
    {
        "id": 3037531,
        "nm": "Annet-sur-Marne",
        "lat": 48.926689,
        "lon": 2.71959
    },
    {
        "id": 3037523,
        "nm": "Anneyron",
        "lat": 45.272652,
        "lon": 4.88786
    },
    {
        "id": 3037521,
        "nm": "Annezin",
        "lat": 50.531921,
        "lon": 2.61785
    },
    {
        "id": 3037520,
        "nm": "Annoeullin",
        "lat": 50.529251,
        "lon": 2.9318
    },
    {
        "id": 3037514,
        "nm": "Annonay",
        "lat": 45.2397,
        "lon": 4.67075
    },
    {
        "id": 3037506,
        "nm": "Anor",
        "lat": 49.98999,
        "lon": 4.10049
    },
    {
        "id": 3037502,
        "nm": "Anould",
        "lat": 48.185261,
        "lon": 6.94597
    },
    {
        "id": 3037489,
        "nm": "Anse",
        "lat": 45.930229,
        "lon": 4.71576
    },
    {
        "id": 3037456,
        "nm": "Antibes",
        "lat": 43.562408,
        "lon": 7.12777
    },
    {
        "id": 3037423,
        "nm": "Antony",
        "lat": 48.75,
        "lon": 2.3
    },
    {
        "id": 3037397,
        "nm": "Anzin",
        "lat": 50.372009,
        "lon": 3.50387
    },
    {
        "id": 3037396,
        "nm": "Anzin-Saint-Aubin",
        "lat": 50.313129,
        "lon": 2.74732
    },
    {
        "id": 3037393,
        "nm": "Aoste",
        "lat": 45.586788,
        "lon": 5.61014
    },
    {
        "id": 3037390,
        "nm": "Aouste-sur-Sye",
        "lat": 44.716991,
        "lon": 5.05516
    },
    {
        "id": 3037370,
        "nm": "Appoigny",
        "lat": 47.874668,
        "lon": 3.52524
    },
    {
        "id": 3037368,
        "nm": "Apprieu",
        "lat": 45.39922,
        "lon": 5.49628
    },
    {
        "id": 3037352,
        "nm": "Apt",
        "lat": 43.883331,
        "lon": 5.4
    },
    {
        "id": 3037331,
        "nm": "Aramon",
        "lat": 43.891739,
        "lon": 4.68096
    },
    {
        "id": 3037303,
        "nm": "Arbent",
        "lat": 46.29221,
        "lon": 5.6789
    },
    {
        "id": 3037287,
        "nm": "Arbois",
        "lat": 46.903111,
        "lon": 5.77454
    },
    {
        "id": 3037263,
        "nm": "Arc-les-Gray",
        "lat": 47.457008,
        "lon": 5.58547
    },
    {
        "id": 3037158,
        "nm": "Arc-sur-Tille",
        "lat": 47.343479,
        "lon": 5.18666
    },
    {
        "id": 3037253,
        "nm": "Arcachon",
        "lat": 44.650002,
        "lon": -1.16667
    },
    {
        "id": 3037245,
        "nm": "Arcangues",
        "lat": 43.43124,
        "lon": -1.52237
    },
    {
        "id": 3037186,
        "nm": "Arcis-sur-Aube",
        "lat": 48.533871,
        "lon": 4.14085
    },
    {
        "id": 3037168,
        "nm": "Arconnay",
        "lat": 48.396778,
        "lon": 0.0862
    },
    {
        "id": 3037157,
        "nm": "Arcueil",
        "lat": 48.799931,
        "lon": 2.33256
    },
    {
        "id": 3037133,
        "nm": "Ardentes",
        "lat": 46.741909,
        "lon": 1.83428
    },
    {
        "id": 3037113,
        "nm": "Ardres",
        "lat": 50.857861,
        "lon": 1.98168
    },
    {
        "id": 3037095,
        "nm": "Ares",
        "lat": 44.76667,
        "lon": -1.13333
    },
    {
        "id": 3037068,
        "nm": "Argelers",
        "lat": 42.547138,
        "lon": 3.02253
    },
    {
        "id": 3037070,
        "nm": "Argeles-Gazost",
        "lat": 43.01667,
        "lon": -0.1
    },
    {
        "id": 3037059,
        "nm": "Argences",
        "lat": 49.12635,
        "lon": -0.16644
    },
    {
        "id": 3037015,
        "nm": "Argent-sur-Sauldre",
        "lat": 47.558472,
        "lon": 2.4441
    },
    {
        "id": 3037051,
        "nm": "Argentan",
        "lat": 48.75,
        "lon": -0.01667
    },
    {
        "id": 3037049,
        "nm": "Argentat",
        "lat": 45.09634,
        "lon": 1.93987
    },
    {
        "id": 3037044,
        "nm": "Argenteuil",
        "lat": 48.950001,
        "lon": 2.25
    },
    {
        "id": 3037018,
        "nm": "Argenton-sur-Creuse",
        "lat": 46.58997,
        "lon": 1.51981
    },
    {
        "id": 3037017,
        "nm": "Argentre",
        "lat": 48.083618,
        "lon": -0.6415
    },
    {
        "id": 3037016,
        "nm": "Argentre-du-Plessis",
        "lat": 48.056969,
        "lon": -1.14601
    },
    {
        "id": 3036938,
        "nm": "Arles",
        "lat": 43.676811,
        "lon": 4.63031
    },
    {
        "id": 3036935,
        "nm": "Arles",
        "lat": 42.456539,
        "lon": 2.63457
    },
    {
        "id": 3036932,
        "nm": "Arleux",
        "lat": 50.280369,
        "lon": 3.10448
    },
    {
        "id": 3036913,
        "nm": "Armbouts-Cappel",
        "lat": 50.976822,
        "lon": 2.35352
    },
    {
        "id": 3036903,
        "nm": "Armentieres",
        "lat": 50.68568,
        "lon": 2.88214
    },
    {
        "id": 3036876,
        "nm": "Arnage",
        "lat": 47.926159,
        "lon": 0.18782
    },
    {
        "id": 3036870,
        "nm": "Arnas",
        "lat": 46.023899,
        "lon": 4.70638
    },
    {
        "id": 3036862,
        "nm": "Arnay-le-Duc",
        "lat": 47.132019,
        "lon": 4.48595
    },
    {
        "id": 3036843,
        "nm": "Arnouville",
        "lat": 48.98333,
        "lon": 2.41667
    },
    {
        "id": 3036823,
        "nm": "Arpajon",
        "lat": 48.588749,
        "lon": 2.24672
    },
    {
        "id": 3036822,
        "nm": "Arpajon-sur-Cere",
        "lat": 44.902618,
        "lon": 2.45809
    },
    {
        "id": 3036800,
        "nm": "Arques",
        "lat": 50.733749,
        "lon": 2.30237
    },
    {
        "id": 3036797,
        "nm": "Arques-la-Bataille",
        "lat": 49.881222,
        "lon": 1.12875
    },
    {
        "id": 3036791,
        "nm": "Arradon",
        "lat": 47.627102,
        "lon": -2.8215
    },
    {
        "id": 3036784,
        "nm": "Arras",
        "lat": 50.293011,
        "lon": 2.78186
    },
    {
        "id": 3036711,
        "nm": "Ars-sur-Moselle",
        "lat": 49.078308,
        "lon": 6.07275
    },
    {
        "id": 3036724,
        "nm": "Arsac",
        "lat": 44.99688,
        "lon": -0.68976
    },
    {
        "id": 3036702,
        "nm": "Artannes-sur-Indre",
        "lat": 47.274509,
        "lon": 0.60036
    },
    {
        "id": 3036687,
        "nm": "Arthes",
        "lat": 43.957451,
        "lon": 2.2113
    },
    {
        "id": 3036679,
        "nm": "Arthon-en-Retz",
        "lat": 47.11586,
        "lon": -1.9426
    },
    {
        "id": 3036655,
        "nm": "Artigues-pres-Bordeaux",
        "lat": 44.849998,
        "lon": -0.51667
    },
    {
        "id": 3036646,
        "nm": "Artix",
        "lat": 43.400002,
        "lon": -0.55
    },
    {
        "id": 3036633,
        "nm": "Arudy",
        "lat": 43.116669,
        "lon": -0.43333
    },
    {
        "id": 3036628,
        "nm": "Arvert",
        "lat": 45.744862,
        "lon": -1.12573
    },
    {
        "id": 3036601,
        "nm": "Arzon",
        "lat": 47.548519,
        "lon": -2.88988
    },
    {
        "id": 3036596,
        "nm": "Ascain",
        "lat": 43.345211,
        "lon": -1.62073
    },
    {
        "id": 3036562,
        "nm": "Asnieres-sur-Oise",
        "lat": 49.13369,
        "lon": 2.35551
    },
    {
        "id": 3036572,
        "nm": "Asnieres-sur-Seine",
        "lat": 48.916672,
        "lon": 2.28333
    },
    {
        "id": 3036540,
        "nm": "Aspremont",
        "lat": 43.785389,
        "lon": 7.24458
    },
    {
        "id": 3036495,
        "nm": "Astaffort",
        "lat": 44.064259,
        "lon": 0.65141
    },
    {
        "id": 3036471,
        "nm": "Athee-sur-Cher",
        "lat": 47.320229,
        "lon": 0.91659
    },
    {
        "id": 3036464,
        "nm": "Athies-sous-Laon",
        "lat": 49.573689,
        "lon": 3.68417
    },
    {
        "id": 3036460,
        "nm": "Athis-Mons",
        "lat": 48.705219,
        "lon": 2.39147
    },
    {
        "id": 3036451,
        "nm": "Attiches",
        "lat": 50.522202,
        "lon": 3.06222
    },
    {
        "id": 3036450,
        "nm": "Attichy",
        "lat": 49.411209,
        "lon": 3.04949
    },
    {
        "id": 3036449,
        "nm": "Attignat",
        "lat": 46.288151,
        "lon": 5.16126
    },
    {
        "id": 3036433,
        "nm": "Aubagne",
        "lat": 43.292759,
        "lon": 5.57067
    },
    {
        "id": 3036430,
        "nm": "Aubais",
        "lat": 43.754021,
        "lon": 4.14567
    },
    {
        "id": 3036418,
        "nm": "Aubenas",
        "lat": 44.62006,
        "lon": 4.38994
    },
    {
        "id": 3036406,
        "nm": "Auberchicourt",
        "lat": 50.333328,
        "lon": 3.23333
    },
    {
        "id": 3036402,
        "nm": "Aubergenville",
        "lat": 48.959961,
        "lon": 1.85467
    },
    {
        "id": 3036386,
        "nm": "Aubervilliers",
        "lat": 48.916672,
        "lon": 2.38333
    },
    {
        "id": 3036371,
        "nm": "Aubevoye",
        "lat": 49.170971,
        "lon": 1.33537
    },
    {
        "id": 3036364,
        "nm": "Aubiere",
        "lat": 45.751572,
        "lon": 3.11251
    },
    {
        "id": 3036359,
        "nm": "Aubignan",
        "lat": 44.099411,
        "lon": 5.02409
    },
    {
        "id": 3036352,
        "nm": "Aubigne-Racan",
        "lat": 47.69091,
        "lon": 0.2687
    },
    {
        "id": 3036348,
        "nm": "Aubigny",
        "lat": 46.596531,
        "lon": -1.45364
    },
    {
        "id": 3036326,
        "nm": "Aubigny-sur-Nere",
        "lat": 47.48819,
        "lon": 2.43895
    },
    {
        "id": 3036323,
        "nm": "Aubin",
        "lat": 44.528091,
        "lon": 2.24439
    },
    {
        "id": 3036314,
        "nm": "Aubord",
        "lat": 43.75827,
        "lon": 4.31105
    },
    {
        "id": 3036313,
        "nm": "Auboue",
        "lat": 49.213089,
        "lon": 5.978
    },
    {
        "id": 3036295,
        "nm": "Aubusson",
        "lat": 45.950001,
        "lon": 2.16667
    },
    {
        "id": 3036289,
        "nm": "Auby",
        "lat": 50.41457,
        "lon": 3.05396
    },
    {
        "id": 3036287,
        "nm": "Aucamville",
        "lat": 43.6702,
        "lon": 1.42808
    },
    {
        "id": 3036281,
        "nm": "Auch",
        "lat": 43.650002,
        "lon": 0.58333
    },
    {
        "id": 3036278,
        "nm": "Auchel",
        "lat": 50.503448,
        "lon": 2.47346
    },
    {
        "id": 3036270,
        "nm": "Auchy-les-Mines",
        "lat": 50.513489,
        "lon": 2.78283
    },
    {
        "id": 3036256,
        "nm": "Audenge",
        "lat": 44.686859,
        "lon": -1.01345
    },
    {
        "id": 3036247,
        "nm": "Audierne",
        "lat": 48.016399,
        "lon": -4.53838
    },
    {
        "id": 3036240,
        "nm": "Audincourt",
        "lat": 47.483269,
        "lon": 6.85341
    },
    {
        "id": 3036229,
        "nm": "Audruicq",
        "lat": 50.877949,
        "lon": 2.07975
    },
    {
        "id": 3036227,
        "nm": "Audun-le-Roman",
        "lat": 49.368778,
        "lon": 5.89564
    },
    {
        "id": 3036226,
        "nm": "Audun-le-Tiche",
        "lat": 49.472279,
        "lon": 5.95694
    },
    {
        "id": 3036223,
        "nm": "Auffargis",
        "lat": 48.700489,
        "lon": 1.88696
    },
    {
        "id": 3036184,
        "nm": "Augny",
        "lat": 49.061111,
        "lon": 6.11835
    },
    {
        "id": 3036154,
        "nm": "Aulnat",
        "lat": 45.79604,
        "lon": 3.16498
    },
    {
        "id": 3036145,
        "nm": "Aulnay-sous-Bois",
        "lat": 48.938141,
        "lon": 2.49402
    },
    {
        "id": 3036133,
        "nm": "Aulnoy-lez-Valenciennes",
        "lat": 50.333328,
        "lon": 3.53333
    },
    {
        "id": 3036132,
        "nm": "Aulnoye-Aymeries",
        "lat": 50.201408,
        "lon": 3.83844
    },
    {
        "id": 3036122,
        "nm": "Ault",
        "lat": 50.104038,
        "lon": 1.45
    },
    {
        "id": 3036117,
        "nm": "Aumale",
        "lat": 49.769852,
        "lon": 1.75587
    },
    {
        "id": 3036107,
        "nm": "Aumetz",
        "lat": 49.412941,
        "lon": 5.94916
    },
    {
        "id": 3036081,
        "nm": "Aunay-sur-Odon",
        "lat": 49.020119,
        "lon": -0.63238
    },
    {
        "id": 3036079,
        "nm": "Auneau",
        "lat": 48.463612,
        "lon": 1.77264
    },
    {
        "id": 3036074,
        "nm": "Auneuil",
        "lat": 49.370258,
        "lon": 1.99712
    },
    {
        "id": 3036067,
        "nm": "Aups",
        "lat": 43.62904,
        "lon": 6.22553
    },
    {
        "id": 3036059,
        "nm": "Auray",
        "lat": 47.67025,
        "lon": -2.99183
    },
    {
        "id": 3036054,
        "nm": "Aurec-sur-Loire",
        "lat": 45.369068,
        "lon": 4.2049
    },
    {
        "id": 3036052,
        "nm": "Aureilhan",
        "lat": 43.24337,
        "lon": 0.09581
    },
    {
        "id": 3036022,
        "nm": "Auribeau-sur-Siagne",
        "lat": 43.604408,
        "lon": 6.90779
    },
    {
        "id": 3036016,
        "nm": "Aurillac",
        "lat": 44.916672,
        "lon": 2.45
    },
    {
        "id": 3036012,
        "nm": "Auriol",
        "lat": 43.371609,
        "lon": 5.6341
    },
    {
        "id": 3035991,
        "nm": "Aussillon",
        "lat": 43.50293,
        "lon": 2.36792
    },
    {
        "id": 3035985,
        "nm": "Aussonne",
        "lat": 43.681622,
        "lon": 1.31886
    },
    {
        "id": 3035970,
        "nm": "Auterive",
        "lat": 43.351028,
        "lon": 1.47797
    },
    {
        "id": 3035883,
        "nm": "Autun",
        "lat": 46.950001,
        "lon": 4.3
    },
    {
        "id": 3035864,
        "nm": "Auvers-sur-Oise",
        "lat": 49.071579,
        "lon": 2.16978
    },
    {
        "id": 3035843,
        "nm": "Auxerre",
        "lat": 47.799999,
        "lon": 3.56667
    },
    {
        "id": 3035838,
        "nm": "Auxi-le-Chateau",
        "lat": 50.23101,
        "lon": 2.11593
    },
    {
        "id": 3035828,
        "nm": "Auxonne",
        "lat": 47.192551,
        "lon": 5.38726
    },
    {
        "id": 3035812,
        "nm": "Auzat-la-Combelle",
        "lat": 45.450001,
        "lon": 3.31667
    },
    {
        "id": 3035802,
        "nm": "Auzeville-Tolosane",
        "lat": 43.527779,
        "lon": 1.4824
    },
    {
        "id": 3035768,
        "nm": "Avallon",
        "lat": 47.48333,
        "lon": 3.9
    },
    {
        "id": 3035761,
        "nm": "Avanne-Aveney",
        "lat": 47.200001,
        "lon": 5.96667
    },
    {
        "id": 3035743,
        "nm": "Avelin",
        "lat": 50.53968,
        "lon": 3.08222
    },
    {
        "id": 3035727,
        "nm": "Avensan",
        "lat": 45.034439,
        "lon": -0.75568
    },
    {
        "id": 3035719,
        "nm": "Avermes",
        "lat": 46.586658,
        "lon": 3.30619
    },
    {
        "id": 3035707,
        "nm": "Avesnelles",
        "lat": 50.117821,
        "lon": 3.94674
    },
    {
        "id": 3035702,
        "nm": "Avesnes-le-Comte",
        "lat": 50.277672,
        "lon": 2.52957
    },
    {
        "id": 3035701,
        "nm": "Avesnes-les-Aubert",
        "lat": 50.200001,
        "lon": 3.38333
    },
    {
        "id": 3035696,
        "nm": "Avessac",
        "lat": 47.65324,
        "lon": -1.98962
    },
    {
        "id": 3035681,
        "nm": "Avignon",
        "lat": 43.948341,
        "lon": 4.80892
    },
    {
        "id": 3035667,
        "nm": "Avion",
        "lat": 50.410381,
        "lon": 2.83053
    },
    {
        "id": 3035654,
        "nm": "Avon",
        "lat": 48.402199,
        "lon": 2.72022
    },
    {
        "id": 3035649,
        "nm": "Avord",
        "lat": 47.035141,
        "lon": 2.65295
    },
    {
        "id": 3035639,
        "nm": "Avranches",
        "lat": 48.683331,
        "lon": -1.36667
    },
    {
        "id": 3035612,
        "nm": "Avrille",
        "lat": 47.5,
        "lon": -0.58333
    },
    {
        "id": 3035594,
        "nm": "Ay",
        "lat": 49.054569,
        "lon": 4.00343
    },
    {
        "id": 3035576,
        "nm": "Ayguesvives",
        "lat": 43.436359,
        "lon": 1.59505
    },
    {
        "id": 3035563,
        "nm": "Ayse",
        "lat": 46.083328,
        "lon": 6.43333
    },
    {
        "id": 3035560,
        "nm": "Aytre",
        "lat": 46.1357,
        "lon": -1.11452
    },
    {
        "id": 3035548,
        "nm": "Azay-le-Rideau",
        "lat": 47.26405,
        "lon": 0.47132
    },
    {
        "id": 3035547,
        "nm": "Azay-sur-Cher",
        "lat": 47.349659,
        "lon": 0.84562
    },
    {
        "id": 3035542,
        "nm": "Aze",
        "lat": 47.822201,
        "lon": -0.68333
    },
    {
        "id": 3035498,
        "nm": "Baccarat",
        "lat": 48.450859,
        "lon": 6.73935
    },
    {
        "id": 3035492,
        "nm": "Bachant",
        "lat": 50.215401,
        "lon": 3.86835
    },
    {
        "id": 3035459,
        "nm": "Baden",
        "lat": 47.61734,
        "lon": -2.91987
    },
    {
        "id": 3035441,
        "nm": "Bagard",
        "lat": 44.071259,
        "lon": 4.05225
    },
    {
        "id": 3035437,
        "nm": "Bage-la-Ville",
        "lat": 46.31654,
        "lon": 4.94666
    },
    {
        "id": 3035432,
        "nm": "Bages",
        "lat": 42.605881,
        "lon": 2.8935
    },
    {
        "id": 3035418,
        "nm": "Bagneres-de-Bigorre",
        "lat": 43.066669,
        "lon": 0.15
    },
    {
        "id": 3035416,
        "nm": "Bagneres-de-Luchon",
        "lat": 42.790791,
        "lon": 0.59315
    },
    {
        "id": 3035409,
        "nm": "Bagneux",
        "lat": 48.795639,
        "lon": 2.30796
    },
    {
        "id": 3035403,
        "nm": "Bagnolet",
        "lat": 48.866669,
        "lon": 2.41667
    },
    {
        "id": 3035396,
        "nm": "Bagnols-sur-Ceze",
        "lat": 44.159901,
        "lon": 4.61776
    },
    {
        "id": 3035388,
        "nm": "Baho",
        "lat": 42.700001,
        "lon": 2.82204
    },
    {
        "id": 3035370,
        "nm": "Baillargues",
        "lat": 43.66267,
        "lon": 4.01681
    },
    {
        "id": 3035359,
        "nm": "Bailleul",
        "lat": 50.73592,
        "lon": 2.73594
    },
    {
        "id": 3035351,
        "nm": "Bailleul-sur-Therain",
        "lat": 49.385262,
        "lon": 2.22279
    },
    {
        "id": 3035340,
        "nm": "Bailly",
        "lat": 48.841679,
        "lon": 2.07672
    },
    {
        "id": 3035329,
        "nm": "Bailly-Romainvilliers",
        "lat": 48.84729,
        "lon": 2.82352
    },
    {
        "id": 3035324,
        "nm": "Bain-de-Bretagne",
        "lat": 47.844181,
        "lon": -1.68486
    },
    {
        "id": 3035316,
        "nm": "Bains-sur-Oust",
        "lat": 47.703621,
        "lon": -2.07047
    },
    {
        "id": 3035309,
        "nm": "Bais",
        "lat": 48.00959,
        "lon": -1.28983
    },
    {
        "id": 3035304,
        "nm": "Baisieux",
        "lat": 50.60841,
        "lon": 3.25251
    },
    {
        "id": 3035295,
        "nm": "Baixas",
        "lat": 42.749691,
        "lon": 2.81002
    },
    {
        "id": 3035279,
        "nm": "Balan",
        "lat": 45.834301,
        "lon": 5.09834
    },
    {
        "id": 3035267,
        "nm": "Balaruc-le-Vieux",
        "lat": 43.461399,
        "lon": 3.6853
    },
    {
        "id": 3035268,
        "nm": "Balaruc-les-Bains",
        "lat": 43.4417,
        "lon": 3.6778
    },
    {
        "id": 3035263,
        "nm": "Balaze",
        "lat": 48.167969,
        "lon": -1.19157
    },
    {
        "id": 3035260,
        "nm": "Balbigny",
        "lat": 45.819279,
        "lon": 4.18756
    },
    {
        "id": 3035254,
        "nm": "Baldersheim",
        "lat": 47.801579,
        "lon": 7.3802
    },
    {
        "id": 3035230,
        "nm": "Ballainvilliers",
        "lat": 48.674809,
        "lon": 2.30057
    },
    {
        "id": 3035226,
        "nm": "Ballan-Mire",
        "lat": 47.340569,
        "lon": 0.61466
    },
    {
        "id": 3035228,
        "nm": "Ballancourt-sur-Essonne",
        "lat": 48.525249,
        "lon": 2.38604
    },
    {
        "id": 3035204,
        "nm": "Balma",
        "lat": 43.611111,
        "lon": 1.49944
    },
    {
        "id": 3035156,
        "nm": "Bandol",
        "lat": 43.137089,
        "lon": 5.7316
    },
    {
        "id": 3035139,
        "nm": "Bannalec",
        "lat": 47.932289,
        "lon": -3.69759
    },
    {
        "id": 3035092,
        "nm": "Banyuls de la Marenda",
        "lat": 42.483749,
        "lon": 3.12897
    },
    {
        "id": 3035088,
        "nm": "Bapaume",
        "lat": 50.10379,
        "lon": 2.84966
    },
    {
        "id": 3034911,
        "nm": "Bar-le-Duc",
        "lat": 48.783329,
        "lon": 5.16667
    },
    {
        "id": 3034802,
        "nm": "Bar-sur-Aube",
        "lat": 48.23333,
        "lon": 4.71667
    },
    {
        "id": 3034800,
        "nm": "Bar-sur-Seine",
        "lat": 48.112942,
        "lon": 4.37656
    },
    {
        "id": 3035065,
        "nm": "Baraqueville",
        "lat": 44.27655,
        "lon": 2.43184
    },
    {
        "id": 3035044,
        "nm": "Barbazan-Debat",
        "lat": 43.195801,
        "lon": 0.1206
    },
    {
        "id": 3035036,
        "nm": "Barbentane",
        "lat": 43.89967,
        "lon": 4.74921
    },
    {
        "id": 3035033,
        "nm": "Barberaz",
        "lat": 45.549999,
        "lon": 5.93333
    },
    {
        "id": 3035016,
        "nm": "Barbezieux-Saint-Hilaire",
        "lat": 45.472649,
        "lon": -0.15218
    },
    {
        "id": 3034998,
        "nm": "Barby",
        "lat": 45.570831,
        "lon": 5.98273
    },
    {
        "id": 3034991,
        "nm": "Barcelonnette",
        "lat": 44.383331,
        "lon": 6.65
    },
    {
        "id": 3034951,
        "nm": "Barentin",
        "lat": 49.54533,
        "lon": 0.95515
    },
    {
        "id": 3034918,
        "nm": "Barjols",
        "lat": 43.557819,
        "lon": 6.00783
    },
    {
        "id": 3034903,
        "nm": "Barlin",
        "lat": 50.452381,
        "lon": 2.61955
    },
    {
        "id": 3034887,
        "nm": "Barneville-Plage",
        "lat": 49.367859,
        "lon": -1.76512
    },
    {
        "id": 3034868,
        "nm": "Barr",
        "lat": 48.407551,
        "lon": 7.44873
    },
    {
        "id": 3034807,
        "nm": "Barsac",
        "lat": 44.607449,
        "lon": -0.31527
    },
    {
        "id": 3034798,
        "nm": "Bart",
        "lat": 47.488609,
        "lon": 6.7709
    },
    {
        "id": 3034797,
        "nm": "Bartenheim",
        "lat": 47.633541,
        "lon": 7.47712
    },
    {
        "id": 3034746,
        "nm": "Bas-en-Basset",
        "lat": 45.306541,
        "lon": 4.10899
    },
    {
        "id": 3034699,
        "nm": "Basse-Goulaine",
        "lat": 47.21167,
        "lon": -1.46748
    },
    {
        "id": 3034698,
        "nm": "Basse-Ham",
        "lat": 49.387131,
        "lon": 6.24228
    },
    {
        "id": 3034691,
        "nm": "Bassens",
        "lat": 44.90226,
        "lon": -0.51631
    },
    {
        "id": 3034690,
        "nm": "Bassens",
        "lat": 45.58503,
        "lon": 5.94349
    },
    {
        "id": 3034649,
        "nm": "Bassussarry",
        "lat": 43.442719,
        "lon": -1.51647
    },
    {
        "id": 3034640,
        "nm": "Bastia",
        "lat": 42.702782,
        "lon": 9.45
    },
    {
        "id": 3034585,
        "nm": "Batz-sur-Mer",
        "lat": 47.2775,
        "lon": -2.48027
    },
    {
        "id": 3034582,
        "nm": "Baud",
        "lat": 47.874741,
        "lon": -3.0176
    },
    {
        "id": 3034554,
        "nm": "Bauge",
        "lat": 47.544472,
        "lon": -0.10653
    },
    {
        "id": 3034535,
        "nm": "Baume-les-Dames",
        "lat": 47.352951,
        "lon": 6.36117
    },
    {
        "id": 3034521,
        "nm": "Bauvin",
        "lat": 50.517139,
        "lon": 2.89404
    },
    {
        "id": 3034515,
        "nm": "Bavans",
        "lat": 47.485279,
        "lon": 6.73324
    },
    {
        "id": 3034514,
        "nm": "Bavay",
        "lat": 50.298279,
        "lon": 3.79372
    },
    {
        "id": 3034506,
        "nm": "Bavilliers",
        "lat": 47.622551,
        "lon": 6.8311
    },
    {
        "id": 3034483,
        "nm": "Bayeux",
        "lat": 49.277321,
        "lon": -0.7039
    },
    {
        "id": 3034475,
        "nm": "Bayonne",
        "lat": 43.48333,
        "lon": -1.48333
    },
    {
        "id": 3034461,
        "nm": "Bazancourt",
        "lat": 49.36562,
        "lon": 4.17051
    },
    {
        "id": 3034458,
        "nm": "Bazas",
        "lat": 44.432018,
        "lon": -0.21327
    },
    {
        "id": 3034454,
        "nm": "Bazeilles",
        "lat": 49.676498,
        "lon": 4.97752
    },
    {
        "id": 3034442,
        "nm": "Baziege",
        "lat": 43.45454,
        "lon": 1.61399
    },
    {
        "id": 3034382,
        "nm": "Beaucaire",
        "lat": 43.80806,
        "lon": 4.64417
    },
    {
        "id": 3034369,
        "nm": "Beauchamp",
        "lat": 49.01667,
        "lon": 2.2
    },
    {
        "id": 3034343,
        "nm": "Beaucourt",
        "lat": 47.489899,
        "lon": 6.92407
    },
    {
        "id": 3034339,
        "nm": "Beaucouze",
        "lat": 47.474442,
        "lon": -0.63016
    },
    {
        "id": 3034316,
        "nm": "Beaufort",
        "lat": 45.717758,
        "lon": 6.57391
    },
    {
        "id": 3034309,
        "nm": "Beaufort-en-Vallee",
        "lat": 47.439651,
        "lon": -0.2189
    },
    {
        "id": 3034297,
        "nm": "Beaugency",
        "lat": 47.78019,
        "lon": 1.62705
    },
    {
        "id": 3034287,
        "nm": "Beaujeu",
        "lat": 46.15176,
        "lon": 4.59243
    },
    {
        "id": 3034238,
        "nm": "Beaulieu-sur-Mer",
        "lat": 43.707581,
        "lon": 7.33289
    },
    {
        "id": 3034218,
        "nm": "Beaumes-de-Venise",
        "lat": 44.119339,
        "lon": 5.02426
    },
    {
        "id": 3034198,
        "nm": "Beaumont",
        "lat": 45.751228,
        "lon": 3.08355
    },
    {
        "id": 3034170,
        "nm": "Beaumont-de-Lomagne",
        "lat": 43.882858,
        "lon": 0.98762
    },
    {
        "id": 3034159,
        "nm": "Beaumont-en-Veron",
        "lat": 47.19397,
        "lon": 0.18436
    },
    {
        "id": 3034153,
        "nm": "Beaumont-le-Roger",
        "lat": 49.078388,
        "lon": 0.78081
    },
    {
        "id": 3034149,
        "nm": "Beaumont-les-Valence",
        "lat": 44.863281,
        "lon": 4.9457
    },
    {
        "id": 3034141,
        "nm": "Beaumont-sur-Oise",
        "lat": 49.142319,
        "lon": 2.28705
    },
    {
        "id": 3034140,
        "nm": "Beaumont-sur-Sarthe",
        "lat": 48.227718,
        "lon": 0.13186
    },
    {
        "id": 3034126,
        "nm": "Beaune",
        "lat": 47.033329,
        "lon": 4.83333
    },
    {
        "id": 3034122,
        "nm": "Beaune-la-Rolande",
        "lat": 48.071239,
        "lon": 2.4314
    },
    {
        "id": 3034111,
        "nm": "Beaupreau",
        "lat": 47.204639,
        "lon": -0.98703
    },
    {
        "id": 3034103,
        "nm": "Beaurains",
        "lat": 50.265991,
        "lon": 2.79467
    },
    {
        "id": 3034101,
        "nm": "Beaurainville",
        "lat": 50.42432,
        "lon": 1.89938
    },
    {
        "id": 3034064,
        "nm": "Beaurepaire",
        "lat": 45.336739,
        "lon": 5.05525
    },
    {
        "id": 3034041,
        "nm": "Beausoleil",
        "lat": 43.749039,
        "lon": 7.41702
    },
    {
        "id": 3034024,
        "nm": "Beautiran",
        "lat": 44.70393,
        "lon": -0.45202
    },
    {
        "id": 3034023,
        "nm": "Beautor",
        "lat": 49.652142,
        "lon": 3.34475
    },
    {
        "id": 3034006,
        "nm": "Beauvais",
        "lat": 49.433331,
        "lon": 2.08333
    },
    {
        "id": 3034001,
        "nm": "Beauval",
        "lat": 50.107891,
        "lon": 2.33269
    },
    {
        "id": 3033968,
        "nm": "Beauvoir-sur-Mer",
        "lat": 46.912739,
        "lon": -2.04156
    },
    {
        "id": 3033962,
        "nm": "Beauvois-en-Cambresis",
        "lat": 50.137348,
        "lon": 3.3787
    },
    {
        "id": 3033959,
        "nm": "Beauvoisin",
        "lat": 43.718349,
        "lon": 4.32338
    },
    {
        "id": 3033955,
        "nm": "Beauzac",
        "lat": 45.26001,
        "lon": 4.09879
    },
    {
        "id": 3033953,
        "nm": "Beauzelle",
        "lat": 43.66713,
        "lon": 1.37518
    },
    {
        "id": 3033927,
        "nm": "Becon-les-Granits",
        "lat": 47.501339,
        "lon": -0.8
    },
    {
        "id": 3033913,
        "nm": "Bedarieux",
        "lat": 43.615528,
        "lon": 3.15714
    },
    {
        "id": 3033912,
        "nm": "Bedarrides",
        "lat": 44.040218,
        "lon": 4.89819
    },
    {
        "id": 3033908,
        "nm": "Bedee",
        "lat": 48.179531,
        "lon": -1.94476
    },
    {
        "id": 3033900,
        "nm": "Bedoin",
        "lat": 44.124321,
        "lon": 5.1804
    },
    {
        "id": 3033884,
        "nm": "Begard",
        "lat": 48.627541,
        "lon": -3.30067
    },
    {
        "id": 3033881,
        "nm": "Begles",
        "lat": 44.808449,
        "lon": -0.54809
    },
    {
        "id": 3033853,
        "nm": "Behren-les-Forbach",
        "lat": 49.166401,
        "lon": 6.94336
    },
    {
        "id": 3033811,
        "nm": "Belbeuf",
        "lat": 49.387661,
        "lon": 1.14245
    },
    {
        "id": 3033791,
        "nm": "Belfort",
        "lat": 47.633331,
        "lon": 6.86667
    },
    {
        "id": 3033775,
        "nm": "Beligneux",
        "lat": 45.868221,
        "lon": 5.12683
    },
    {
        "id": 3033773,
        "nm": "Belin-Beliet",
        "lat": 44.5,
        "lon": -0.78333
    },
    {
        "id": 3033766,
        "nm": "Bellac",
        "lat": 46.116669,
        "lon": 1.05
    },
    {
        "id": 3033698,
        "nm": "Bellegarde",
        "lat": 43.753288,
        "lon": 4.51654
    },
    {
        "id": 3033685,
        "nm": "Bellegarde-sur-Valserine",
        "lat": 46.107868,
        "lon": 5.82421
    },
    {
        "id": 3033666,
        "nm": "Bellerive-sur-Allier",
        "lat": 46.116329,
        "lon": 3.40338
    },
    {
        "id": 3033657,
        "nm": "Belleu",
        "lat": 49.359169,
        "lon": 3.33556
    },
    {
        "id": 3033636,
        "nm": "Belleville",
        "lat": 46.099998,
        "lon": 4.75
    },
    {
        "id": 3033637,
        "nm": "Belleville-sur-Meuse",
        "lat": 49.178631,
        "lon": 5.3719
    },
    {
        "id": 3033635,
        "nm": "Belleville-sur-Vie",
        "lat": 46.783691,
        "lon": -1.42905
    },
    {
        "id": 3033625,
        "nm": "Belley",
        "lat": 45.76667,
        "lon": 5.68333
    },
    {
        "id": 3033619,
        "nm": "Bellignat",
        "lat": 46.242371,
        "lon": 5.62843
    },
    {
        "id": 3033534,
        "nm": "Belz",
        "lat": 47.67506,
        "lon": -3.168
    },
    {
        "id": 3033500,
        "nm": "Benesse-Maremne",
        "lat": 43.63678,
        "lon": -1.35773
    },
    {
        "id": 3033495,
        "nm": "Benet",
        "lat": 46.36972,
        "lon": -0.59333
    },
    {
        "id": 3033488,
        "nm": "Benfeld",
        "lat": 48.370621,
        "lon": 7.5937
    },
    {
        "id": 3033470,
        "nm": "Benodet",
        "lat": 47.875309,
        "lon": -4.1058
    },
    {
        "id": 3033415,
        "nm": "Berck",
        "lat": 50.400002,
        "lon": 1.6
    },
    {
        "id": 3033416,
        "nm": "Berck-Plage",
        "lat": 50.40704,
        "lon": 1.56446
    },
    {
        "id": 3033391,
        "nm": "Bergerac",
        "lat": 44.849998,
        "lon": 0.48333
    },
    {
        "id": 3033363,
        "nm": "Bergues",
        "lat": 50.968819,
        "lon": 2.43242
    },
    {
        "id": 3033355,
        "nm": "Berlaimont",
        "lat": 50.20155,
        "lon": 3.81343
    },
    {
        "id": 3033308,
        "nm": "Bernay",
        "lat": 49.088879,
        "lon": 0.59858
    },
    {
        "id": 3033294,
        "nm": "Bernes-sur-Oise",
        "lat": 49.161282,
        "lon": 2.3
    },
    {
        "id": 3033272,
        "nm": "Bernieres-sur-Mer",
        "lat": 49.33057,
        "lon": -0.42299
    },
    {
        "id": 3033269,
        "nm": "Bernin",
        "lat": 45.2714,
        "lon": 5.86516
    },
    {
        "id": 3033268,
        "nm": "Bernis",
        "lat": 43.769131,
        "lon": 4.28713
    },
    {
        "id": 3033241,
        "nm": "Berre-lEtang",
        "lat": 43.478088,
        "lon": 5.17044
    },
    {
        "id": 3033222,
        "nm": "Bersee",
        "lat": 50.479778,
        "lon": 3.14765
    },
    {
        "id": 3033219,
        "nm": "Berstett",
        "lat": 48.679001,
        "lon": 7.65721
    },
    {
        "id": 3033163,
        "nm": "Bertrange",
        "lat": 49.30769,
        "lon": 6.17893
    },
    {
        "id": 3033149,
        "nm": "Bertry",
        "lat": 50.087181,
        "lon": 3.44298
    },
    {
        "id": 3033123,
        "nm": "Besancon",
        "lat": 47.248779,
        "lon": 6.01815
    },
    {
        "id": 3033108,
        "nm": "Besne",
        "lat": 47.400002,
        "lon": -2.08976
    },
    {
        "id": 3033099,
        "nm": "Bessan",
        "lat": 43.361961,
        "lon": 3.42288
    },
    {
        "id": 3033098,
        "nm": "Bessancourt",
        "lat": 49.037651,
        "lon": 2.20936
    },
    {
        "id": 3033066,
        "nm": "Besse-sur-Braye",
        "lat": 47.833328,
        "lon": 0.75
    },
    {
        "id": 3033065,
        "nm": "Besse-sur-Issole",
        "lat": 43.349571,
        "lon": 6.17759
    },
    {
        "id": 3033073,
        "nm": "Besseges",
        "lat": 44.292301,
        "lon": 4.0966
    },
    {
        "id": 3033071,
        "nm": "Bessenay",
        "lat": 45.77721,
        "lon": 4.55376
    },
    {
        "id": 3033056,
        "nm": "Bessieres",
        "lat": 43.798611,
        "lon": 1.60624
    },
    {
        "id": 3033052,
        "nm": "Bessines-sur-Gartempe",
        "lat": 46.10799,
        "lon": 1.36865
    },
    {
        "id": 3033014,
        "nm": "Betheny",
        "lat": 49.284981,
        "lon": 4.05495
    },
    {
        "id": 3033010,
        "nm": "Bethisy-Saint-Pierre",
        "lat": 49.304821,
        "lon": 2.79636
    },
    {
        "id": 3033006,
        "nm": "Bethoncourt",
        "lat": 47.535118,
        "lon": 6.80504
    },
    {
        "id": 3033002,
        "nm": "Bethune",
        "lat": 50.533329,
        "lon": 2.63333
    },
    {
        "id": 2989816,
        "nm": "Betschdorf",
        "lat": 48.900002,
        "lon": 7.9
    },
    {
        "id": 3032981,
        "nm": "Bettancourt-la-Ferree",
        "lat": 48.648979,
        "lon": 4.96971
    },
    {
        "id": 3032965,
        "nm": "Betton",
        "lat": 48.180481,
        "lon": -1.63829
    },
    {
        "id": 3032919,
        "nm": "Beuville",
        "lat": 49.243641,
        "lon": -0.32585
    },
    {
        "id": 3032915,
        "nm": "Beuvrages",
        "lat": 50.38414,
        "lon": 3.4942
    },
    {
        "id": 3032903,
        "nm": "Beuvry",
        "lat": 50.516739,
        "lon": 2.68541
    },
    {
        "id": 3032896,
        "nm": "Beuzeville",
        "lat": 49.34483,
        "lon": 0.34254
    },
    {
        "id": 3032880,
        "nm": "Beychac-et-Caillau",
        "lat": 44.877811,
        "lon": -0.40219
    },
    {
        "id": 3032872,
        "nm": "Beynes",
        "lat": 48.856258,
        "lon": 1.87261
    },
    {
        "id": 3032869,
        "nm": "Beynost",
        "lat": 45.838089,
        "lon": 5.00608
    },
    {
        "id": 3032833,
        "nm": "Beziers",
        "lat": 43.347618,
        "lon": 3.21899
    },
    {
        "id": 3032824,
        "nm": "Bezons",
        "lat": 48.924259,
        "lon": 2.2128
    },
    {
        "id": 3032823,
        "nm": "Bezouce",
        "lat": 43.88229,
        "lon": 4.49072
    },
    {
        "id": 3032815,
        "nm": "Biache-Saint-Vaast",
        "lat": 50.308689,
        "lon": 2.94777
    },
    {
        "id": 3032797,
        "nm": "Biarritz",
        "lat": 43.480122,
        "lon": -1.55558
    },
    {
        "id": 3032794,
        "nm": "Biars-sur-Cere",
        "lat": 44.926289,
        "lon": 1.85403
    },
    {
        "id": 3032791,
        "nm": "Bias",
        "lat": 44.41655,
        "lon": 0.66977
    },
    {
        "id": 3032767,
        "nm": "Bidart",
        "lat": 43.437599,
        "lon": -1.59127
    },
    {
        "id": 3032737,
        "nm": "Bienville",
        "lat": 48.575821,
        "lon": 5.04579
    },
    {
        "id": 3032712,
        "nm": "Biesheim",
        "lat": 48.04118,
        "lon": 7.54474
    },
    {
        "id": 3032695,
        "nm": "Bievres",
        "lat": 48.757721,
        "lon": 2.21881
    },
    {
        "id": 3032688,
        "nm": "Biganos",
        "lat": 44.645039,
        "lon": -0.97367
    },
    {
        "id": 3032685,
        "nm": "Bignan",
        "lat": 47.879349,
        "lon": -2.77153
    },
    {
        "id": 3032668,
        "nm": "Biguglia",
        "lat": 42.625889,
        "lon": 9.43324
    },
    {
        "id": 3032662,
        "nm": "Bihorel",
        "lat": 49.454681,
        "lon": 1.1223
    },
    {
        "id": 3032639,
        "nm": "Billere",
        "lat": 43.299999,
        "lon": -0.4
    },
    {
        "id": 3032629,
        "nm": "Billom",
        "lat": 45.72303,
        "lon": 3.34243
    },
    {
        "id": 3032622,
        "nm": "Billy-Berclau",
        "lat": 50.51783,
        "lon": 2.86613
    },
    {
        "id": 3032618,
        "nm": "Billy-Montigny",
        "lat": 50.41711,
        "lon": 2.90286
    },
    {
        "id": 3032600,
        "nm": "Binic",
        "lat": 48.60416,
        "lon": -2.82692
    },
    {
        "id": 3032579,
        "nm": "Biot",
        "lat": 43.627232,
        "lon": 7.09645
    },
    {
        "id": 3032556,
        "nm": "Biscarrosse",
        "lat": 44.394539,
        "lon": -1.16721
    },
    {
        "id": 3032551,
        "nm": "Bischheim",
        "lat": 48.616119,
        "lon": 7.75343
    },
    {
        "id": 3032549,
        "nm": "Bischoffsheim",
        "lat": 48.48703,
        "lon": 7.48967
    },
    {
        "id": 3032544,
        "nm": "Bischwiller",
        "lat": 48.765881,
        "lon": 7.85831
    },
    {
        "id": 3032518,
        "nm": "Bitche",
        "lat": 49.050091,
        "lon": 7.42672
    },
    {
        "id": 3032509,
        "nm": "Bitschwiller-les-Thann",
        "lat": 47.828629,
        "lon": 7.08066
    },
    {
        "id": 3032505,
        "nm": "Biviers",
        "lat": 45.23333,
        "lon": 5.8
    },
    {
        "id": 3032496,
        "nm": "Bizanos",
        "lat": 43.283329,
        "lon": -0.35
    },
    {
        "id": 3032469,
        "nm": "Blagnac",
        "lat": 43.632759,
        "lon": 1.39399
    },
    {
        "id": 3032462,
        "nm": "Blain",
        "lat": 47.476551,
        "lon": -1.76285
    },
    {
        "id": 3032452,
        "nm": "Blainville-sur-Orne",
        "lat": 49.22913,
        "lon": -0.30061
    },
    {
        "id": 3032349,
        "nm": "Blangy-sur-Bresle",
        "lat": 49.93211,
        "lon": 1.62514
    },
    {
        "id": 3032340,
        "nm": "Blanquefort",
        "lat": 44.912479,
        "lon": -0.63663
    },
    {
        "id": 3032331,
        "nm": "Blanzat",
        "lat": 45.831371,
        "lon": 3.08111
    },
    {
        "id": 3032326,
        "nm": "Blanzy",
        "lat": 46.700119,
        "lon": 4.38833
    },
    {
        "id": 3032319,
        "nm": "Blaringhem",
        "lat": 50.691101,
        "lon": 2.40321
    },
    {
        "id": 2967108,
        "nm": "Blaye",
        "lat": 45.133331,
        "lon": -0.66667
    },
    {
        "id": 3032292,
        "nm": "Blaye-les-Mines",
        "lat": 44.030731,
        "lon": 2.13166
    },
    {
        "id": 3032279,
        "nm": "Blendecques",
        "lat": 50.71843,
        "lon": 2.28601
    },
    {
        "id": 3032275,
        "nm": "Blenod-les-Pont-a-Mousson",
        "lat": 48.884869,
        "lon": 6.04844
    },
    {
        "id": 3032267,
        "nm": "Blere",
        "lat": 47.327381,
        "lon": 0.99186
    },
    {
        "id": 3032213,
        "nm": "Blois",
        "lat": 47.583328,
        "lon": 1.33333
    },
    {
        "id": 3032194,
        "nm": "Blotzheim",
        "lat": 47.602051,
        "lon": 7.4963
    },
    {
        "id": 3032179,
        "nm": "Bobigny",
        "lat": 48.900002,
        "lon": 2.45
    },
    {
        "id": 3032156,
        "nm": "Boe",
        "lat": 44.160061,
        "lon": 0.62905
    },
    {
        "id": 3032151,
        "nm": "Boen-sur-Lignon",
        "lat": 45.746181,
        "lon": 4.00959
    },
    {
        "id": 3032147,
        "nm": "Boersch",
        "lat": 48.476559,
        "lon": 7.43998
    },
    {
        "id": 3032146,
        "nm": "Boeschepe",
        "lat": 50.799999,
        "lon": 2.7
    },
    {
        "id": 3032127,
        "nm": "Bohain-en-Vermandois",
        "lat": 49.987301,
        "lon": 3.453
    },
    {
        "id": 3032125,
        "nm": "Bohars",
        "lat": 48.42984,
        "lon": -4.51292
    },
    {
        "id": 3032118,
        "nm": "Boigny-sur-Bionne",
        "lat": 47.933331,
        "lon": 2.01667
    },
    {
        "id": 3032070,
        "nm": "Bois-Colombes",
        "lat": 48.919361,
        "lon": 2.27484
    },
    {
        "id": 3032064,
        "nm": "Bois-dArcy",
        "lat": 48.79966,
        "lon": 2.02325
    },
    {
        "id": 3032025,
        "nm": "Bois-Guillaume",
        "lat": 49.460201,
        "lon": 1.12219
    },
    {
        "id": 3032008,
        "nm": "Bois-le-Roi",
        "lat": 48.47348,
        "lon": 2.70464
    },
    {
        "id": 3031941,
        "nm": "Boisset-et-Gaujac",
        "lat": 44.047501,
        "lon": 4.00861
    },
    {
        "id": 3031930,
        "nm": "Boisseuil",
        "lat": 45.769772,
        "lon": 1.33333
    },
    {
        "id": 3031917,
        "nm": "Boissise-le-Roi",
        "lat": 48.524799,
        "lon": 2.56971
    },
    {
        "id": 3031906,
        "nm": "Boissy-le-Chatel",
        "lat": 48.820728,
        "lon": 3.13651
    },
    {
        "id": 3031898,
        "nm": "Boissy-Saint-Leger",
        "lat": 48.751499,
        "lon": 2.51163
    },
    {
        "id": 3031896,
        "nm": "Boissy-sous-Saint-Yon",
        "lat": 48.553791,
        "lon": 2.21212
    },
    {
        "id": 3031871,
        "nm": "Bolbec",
        "lat": 49.573212,
        "lon": 0.47339
    },
    {
        "id": 3031868,
        "nm": "Bollene",
        "lat": 44.28476,
        "lon": 4.75303
    },
    {
        "id": 3031864,
        "nm": "Bollwiller",
        "lat": 47.858318,
        "lon": 7.26179
    },
    {
        "id": 3031848,
        "nm": "Bompas",
        "lat": 42.73333,
        "lon": 2.93333
    },
    {
        "id": 3031813,
        "nm": "Bon-Encontre",
        "lat": 44.185181,
        "lon": 0.66759
    },
    {
        "id": 3031835,
        "nm": "Bonchamp-les-Laval",
        "lat": 48.07357,
        "lon": -0.7
    },
    {
        "id": 3031818,
        "nm": "Bondoufle",
        "lat": 48.612942,
        "lon": 2.37775
    },
    {
        "id": 3031817,
        "nm": "Bondues",
        "lat": 50.701962,
        "lon": 3.09497
    },
    {
        "id": 3031815,
        "nm": "Bondy",
        "lat": 48.901798,
        "lon": 2.48931
    },
    {
        "id": 3031801,
        "nm": "Bonifacio",
        "lat": 41.387402,
        "lon": 9.15942
    },
    {
        "id": 3031729,
        "nm": "Bonne-sur-Menoge",
        "lat": 46.166,
        "lon": 6.32276
    },
    {
        "id": 3031744,
        "nm": "Bonnelles",
        "lat": 48.61816,
        "lon": 2.02922
    },
    {
        "id": 3031723,
        "nm": "Bonnetable",
        "lat": 48.179081,
        "lon": 0.4257
    },
    {
        "id": 3031710,
        "nm": "Bonneuil-Matours",
        "lat": 46.681549,
        "lon": 0.57063
    },
    {
        "id": 3031709,
        "nm": "Bonneuil-sur-Marne",
        "lat": 48.769501,
        "lon": 2.4793
    },
    {
        "id": 3031702,
        "nm": "Bonneval",
        "lat": 48.183121,
        "lon": 1.38524
    },
    {
        "id": 3031679,
        "nm": "Bonneville",
        "lat": 46.0802,
        "lon": 6.40726
    },
    {
        "id": 3031667,
        "nm": "Bonnieres-sur-Seine",
        "lat": 49.035252,
        "lon": 1.5783
    },
    {
        "id": 3031656,
        "nm": "Bonny-sur-Loire",
        "lat": 47.561722,
        "lon": 2.83933
    },
    {
        "id": 3031644,
        "nm": "Bons-en-Chablais",
        "lat": 46.26667,
        "lon": 6.38333
    },
    {
        "id": 3031639,
        "nm": "Bonson",
        "lat": 45.524559,
        "lon": 4.21659
    },
    {
        "id": 3031612,
        "nm": "Boos",
        "lat": 49.388481,
        "lon": 1.20348
    },
    {
        "id": 3031605,
        "nm": "Boran-sur-Oise",
        "lat": 49.167149,
        "lon": 2.35803
    },
    {
        "id": 3031582,
        "nm": "Bordeaux",
        "lat": 44.840439,
        "lon": -0.5805
    },
    {
        "id": 3031567,
        "nm": "Bordes",
        "lat": 43.23333,
        "lon": -0.28333
    },
    {
        "id": 3031537,
        "nm": "Borgo",
        "lat": 42.554878,
        "lon": 9.42636
    },
    {
        "id": 3031532,
        "nm": "Bormes-les-Mimosas",
        "lat": 43.140732,
        "lon": 6.33863
    },
    {
        "id": 3031516,
        "nm": "Bornel",
        "lat": 49.1982,
        "lon": 2.20912
    },
    {
        "id": 3031501,
        "nm": "Bort-les-Orgues",
        "lat": 45.400002,
        "lon": 2.5
    },
    {
        "id": 3031462,
        "nm": "Bosmie-lAiguille",
        "lat": 45.75,
        "lon": 1.2
    },
    {
        "id": 3031409,
        "nm": "Bouafle",
        "lat": 48.96463,
        "lon": 1.9012
    },
    {
        "id": 3031403,
        "nm": "Bouaye",
        "lat": 47.142632,
        "lon": -1.69306
    },
    {
        "id": 3031387,
        "nm": "Bouc-Bel-Air",
        "lat": 43.452171,
        "lon": 5.413
    },
    {
        "id": 3031389,
        "nm": "Boucau",
        "lat": 43.527699,
        "lon": -1.46556
    },
    {
        "id": 3031380,
        "nm": "Bouchain",
        "lat": 50.285191,
        "lon": 3.31491
    },
    {
        "id": 3031368,
        "nm": "Bouchemaine",
        "lat": 47.42234,
        "lon": -0.60888
    },
    {
        "id": 3031294,
        "nm": "Bouffemont",
        "lat": 49.04377,
        "lon": 2.29796
    },
    {
        "id": 3031277,
        "nm": "Bougival",
        "lat": 48.862228,
        "lon": 2.14148
    },
    {
        "id": 3031268,
        "nm": "Bouguenais",
        "lat": 47.17762,
        "lon": -1.62143
    },
    {
        "id": 3031240,
        "nm": "Bouillargues",
        "lat": 43.797329,
        "lon": 4.42853
    },
    {
        "id": 3031222,
        "nm": "Bouin",
        "lat": 46.973141,
        "lon": -1.9983
    },
    {
        "id": 3031205,
        "nm": "Boujan-sur-Libron",
        "lat": 43.369961,
        "lon": 3.24759
    },
    {
        "id": 3031182,
        "nm": "Boulay-Moselle",
        "lat": 49.183331,
        "lon": 6.5
    },
    {
        "id": 3031180,
        "nm": "Boulazac",
        "lat": 45.116669,
        "lon": 0.75
    },
    {
        "id": 3031164,
        "nm": "Bouliac",
        "lat": 44.817242,
        "lon": -0.50248
    },
    {
        "id": 3031161,
        "nm": "Boulieu-les-Annonay",
        "lat": 45.27084,
        "lon": 4.66718
    },
    {
        "id": 3031158,
        "nm": "Bouligny",
        "lat": 49.291889,
        "lon": 5.74248
    },
    {
        "id": 3031144,
        "nm": "Bouloc",
        "lat": 43.781631,
        "lon": 1.40522
    },
    {
        "id": 3031137,
        "nm": "Boulogne-Billancourt",
        "lat": 48.833328,
        "lon": 2.25
    },
    {
        "id": 3031133,
        "nm": "Boulogne-sur-Mer",
        "lat": 50.716671,
        "lon": 1.61667
    },
    {
        "id": 3031129,
        "nm": "Bouloire",
        "lat": 47.97385,
        "lon": 0.55009
    },
    {
        "id": 3031098,
        "nm": "Bouray-sur-Juine",
        "lat": 48.51981,
        "lon": 2.30001
    },
    {
        "id": 3031090,
        "nm": "Bourbon-Lancy",
        "lat": 46.622139,
        "lon": 3.76953
    },
    {
        "id": 3031086,
        "nm": "Bourbonne-les-Bains",
        "lat": 47.953049,
        "lon": 5.74801
    },
    {
        "id": 3031085,
        "nm": "Bourbourg",
        "lat": 50.94783,
        "lon": 2.19576
    },
    {
        "id": 3031081,
        "nm": "Bourbriac",
        "lat": 48.473839,
        "lon": -3.18758
    },
    {
        "id": 3031080,
        "nm": "Bourcefranc-le-Chapus",
        "lat": 45.849998,
        "lon": -1.15
    },
    {
        "id": 3030947,
        "nm": "Bourg",
        "lat": 45.040619,
        "lon": -0.55893
    },
    {
        "id": 3031035,
        "nm": "Bourg-Achard",
        "lat": 49.353222,
        "lon": 0.81623
    },
    {
        "id": 3031030,
        "nm": "Bourg-Argental",
        "lat": 45.295898,
        "lon": 4.56037
    },
    {
        "id": 3031027,
        "nm": "Bourg-Blanc",
        "lat": 48.498669,
        "lon": -4.50406
    },
    {
        "id": 3031020,
        "nm": "Bourg-de-Peage",
        "lat": 45.028252,
        "lon": 5.07162
    },
    {
        "id": 3031017,
        "nm": "Bourg-de-Thizy",
        "lat": 46.03371,
        "lon": 4.29904
    },
    {
        "id": 3031019,
        "nm": "Bourg-des-Comptes",
        "lat": 47.92934,
        "lon": -1.74534
    },
    {
        "id": 3031009,
        "nm": "Bourg-en-Bresse",
        "lat": 46.205742,
        "lon": 5.2258
    },
    {
        "id": 3030990,
        "nm": "Bourg-la-Reine",
        "lat": 48.778881,
        "lon": 2.31781
    },
    {
        "id": 3030985,
        "nm": "Bourg-les-Valence",
        "lat": 44.956009,
        "lon": 4.91023
    },
    {
        "id": 3030953,
        "nm": "Bourg-Saint-Andeol",
        "lat": 44.37566,
        "lon": 4.64273
    },
    {
        "id": 3030949,
        "nm": "Bourg-Saint-Maurice",
        "lat": 45.617161,
        "lon": 6.76902
    },
    {
        "id": 3031032,
        "nm": "Bourganeuf",
        "lat": 45.952679,
        "lon": 1.7552
    },
    {
        "id": 3031029,
        "nm": "Bourgbarre",
        "lat": 47.995152,
        "lon": -1.61419
    },
    {
        "id": 3031005,
        "nm": "Bourges",
        "lat": 47.083328,
        "lon": 2.4
    },
    {
        "id": 3030970,
        "nm": "Bourgneuf-en-Retz",
        "lat": 47.041222,
        "lon": -1.9502
    },
    {
        "id": 3030960,
        "nm": "Bourgoin",
        "lat": 45.583328,
        "lon": 5.28333
    },
    {
        "id": 6615539,
        "nm": "Bourgoin-Jallieu",
        "lat": 45.586109,
        "lon": 5.27361
    },
    {
        "id": 3030946,
        "nm": "Bourgtheroulde-Infreville",
        "lat": 49.299999,
        "lon": 0.88333
    },
    {
        "id": 3030944,
        "nm": "Bourgueil",
        "lat": 47.283329,
        "lon": 0.16612
    },
    {
        "id": 3030902,
        "nm": "Bournezeau",
        "lat": 46.637138,
        "lon": -1.17107
    },
    {
        "id": 3030891,
        "nm": "Bourogne",
        "lat": 47.56287,
        "lon": 6.91613
    },
    {
        "id": 3030876,
        "nm": "Bourron-Marlotte",
        "lat": 48.340511,
        "lon": 2.70041
    },
    {
        "id": 3030847,
        "nm": "Bousbecque",
        "lat": 50.771229,
        "lon": 3.08459
    },
    {
        "id": 3030822,
        "nm": "Boussay",
        "lat": 47.044762,
        "lon": -1.18476
    },
    {
        "id": 3030819,
        "nm": "Bousse",
        "lat": 49.279251,
        "lon": 6.19525
    },
    {
        "id": 3030799,
        "nm": "Boussois",
        "lat": 50.28907,
        "lon": 4.04117
    },
    {
        "id": 3030787,
        "nm": "Boussy-Saint-Antoine",
        "lat": 48.69101,
        "lon": 2.5306
    },
    {
        "id": 3030755,
        "nm": "Boutigny-sur-Essonne",
        "lat": 48.433331,
        "lon": 2.38333
    },
    {
        "id": 3030727,
        "nm": "Bouvigny-Boyeffles",
        "lat": 50.421459,
        "lon": 2.67209
    },
    {
        "id": 3030718,
        "nm": "Bouvron",
        "lat": 47.417259,
        "lon": -1.84679
    },
    {
        "id": 3030713,
        "nm": "Bouxieres-aux-Dames",
        "lat": 48.751942,
        "lon": 6.16918
    },
    {
        "id": 3030708,
        "nm": "Bouxwiller",
        "lat": 48.824951,
        "lon": 7.48117
    },
    {
        "id": 3030668,
        "nm": "Bouzonville",
        "lat": 49.291882,
        "lon": 6.53386
    },
    {
        "id": 3030659,
        "nm": "Boves",
        "lat": 49.846451,
        "lon": 2.39605
    },
    {
        "id": 3030656,
        "nm": "Boyard-Ville",
        "lat": 45.967171,
        "lon": -1.24289
    },
    {
        "id": 3030641,
        "nm": "Bozel",
        "lat": 45.442879,
        "lon": 6.64896
    },
    {
        "id": 3030640,
        "nm": "Bozouls",
        "lat": 44.470501,
        "lon": 2.72432
    },
    {
        "id": 3030604,
        "nm": "Braine",
        "lat": 49.342609,
        "lon": 3.53262
    },
    {
        "id": 3030603,
        "nm": "Brains",
        "lat": 47.168499,
        "lon": -1.7229
    },
    {
        "id": 3030589,
        "nm": "Bram",
        "lat": 43.243759,
        "lon": 2.11341
    },
    {
        "id": 3030553,
        "nm": "Branges",
        "lat": 46.644409,
        "lon": 5.18465
    },
    {
        "id": 3030534,
        "nm": "Brantome",
        "lat": 45.360909,
        "lon": 0.65398
    },
    {
        "id": 3030517,
        "nm": "Brassac-les-Mines",
        "lat": 45.411049,
        "lon": 3.32915
    },
    {
        "id": 3030485,
        "nm": "Brax",
        "lat": 43.617931,
        "lon": 1.23957
    },
    {
        "id": 3030473,
        "nm": "Bray-Dunes",
        "lat": 51.077862,
        "lon": 2.51673
    },
    {
        "id": 3030460,
        "nm": "Bray-sur-Seine",
        "lat": 48.413712,
        "lon": 3.23852
    },
    {
        "id": 3030457,
        "nm": "Brazey-en-Plaine",
        "lat": 47.13784,
        "lon": 5.21538
    },
    {
        "id": 3030456,
        "nm": "Breal-sous-Montfort",
        "lat": 48.048759,
        "lon": -1.86438
    },
    {
        "id": 3030446,
        "nm": "Brebieres",
        "lat": 50.333328,
        "lon": 3.01667
    },
    {
        "id": 3030442,
        "nm": "Brecey",
        "lat": 48.724129,
        "lon": -1.16647
    },
    {
        "id": 3030440,
        "nm": "Brech",
        "lat": 47.72134,
        "lon": -2.99862
    },
    {
        "id": 3030405,
        "nm": "Brehal",
        "lat": 48.899151,
        "lon": -1.51225
    },
    {
        "id": 3030387,
        "nm": "Breil-sur-Roya",
        "lat": 43.943409,
        "lon": 7.51474
    },
    {
        "id": 3030340,
        "nm": "Brenouille",
        "lat": 49.305511,
        "lon": 2.54437
    },
    {
        "id": 3030323,
        "nm": "Bresles",
        "lat": 49.410439,
        "lon": 2.25024
    },
    {
        "id": 3030308,
        "nm": "Bressols",
        "lat": 43.96796,
        "lon": 1.33839
    },
    {
        "id": 3030303,
        "nm": "Bressuire",
        "lat": 46.849998,
        "lon": -0.48333
    },
    {
        "id": 3030300,
        "nm": "Brest",
        "lat": 48.400002,
        "lon": -4.48333
    },
    {
        "id": 3030283,
        "nm": "Breteil",
        "lat": 48.14534,
        "lon": -1.89886
    },
    {
        "id": 3030275,
        "nm": "Breteuil",
        "lat": 48.833328,
        "lon": 0.91667
    },
    {
        "id": 3030276,
        "nm": "Breteuil",
        "lat": 49.633572,
        "lon": 2.29509
    },
    {
        "id": 3030264,
        "nm": "Bretignolles-sur-Mer",
        "lat": 46.633331,
        "lon": -1.86667
    },
    {
        "id": 3030257,
        "nm": "Bretigny-sur-Orge",
        "lat": 48.611351,
        "lon": 2.30593
    },
    {
        "id": 3030233,
        "nm": "Bretteville-sur-Odon",
        "lat": 49.166271,
        "lon": -0.41662
    },
    {
        "id": 3030205,
        "nm": "Breuil-le-Sec",
        "lat": 49.371349,
        "lon": 2.45084
    },
    {
        "id": 3030202,
        "nm": "Breuil-le-Vert",
        "lat": 49.361759,
        "lon": 2.43633
    },
    {
        "id": 3030203,
        "nm": "Breuillet",
        "lat": 48.570641,
        "lon": 2.17424
    },
    {
        "id": 3030204,
        "nm": "Breuillet",
        "lat": 45.691441,
        "lon": -1.05175
    },
    {
        "id": 3030171,
        "nm": "Breviandes",
        "lat": 48.256931,
        "lon": 4.09531
    },
    {
        "id": 3030142,
        "nm": "Briancon",
        "lat": 44.900002,
        "lon": 6.65
    },
    {
        "id": 3030132,
        "nm": "Briare",
        "lat": 47.63343,
        "lon": 2.7438
    },
    {
        "id": 3030120,
        "nm": "Bricquebec",
        "lat": 49.470081,
        "lon": -1.63254
    },
    {
        "id": 3030108,
        "nm": "Brie",
        "lat": 45.738041,
        "lon": 0.24106
    },
    {
        "id": 3030101,
        "nm": "Brie-Comte-Robert",
        "lat": 48.683331,
        "lon": 2.61667
    },
    {
        "id": 3030100,
        "nm": "Brie-et-Angonnes",
        "lat": 45.12418,
        "lon": 5.78374
    },
    {
        "id": 3030102,
        "nm": "Briec",
        "lat": 48.101669,
        "lon": -3.99833
    },
    {
        "id": 3030093,
        "nm": "Brienne-le-Chateau",
        "lat": 48.393188,
        "lon": 4.52637
    },
    {
        "id": 3030090,
        "nm": "Brienon-sur-Armancon",
        "lat": 47.990101,
        "lon": 3.61628
    },
    {
        "id": 3030071,
        "nm": "Briey",
        "lat": 49.25,
        "lon": 5.93333
    },
    {
        "id": 3030063,
        "nm": "Brignais",
        "lat": 45.67358,
        "lon": 4.75484
    },
    {
        "id": 3030057,
        "nm": "Brignoles",
        "lat": 43.400002,
        "lon": 6.06667
    },
    {
        "id": 3030044,
        "nm": "Briis-sous-Forges",
        "lat": 48.623989,
        "lon": 2.12112
    },
    {
        "id": 3030029,
        "nm": "Brindas",
        "lat": 45.721809,
        "lon": 4.68973
    },
    {
        "id": 3030020,
        "nm": "Briollay",
        "lat": 47.564781,
        "lon": -0.50681
    },
    {
        "id": 3030007,
        "nm": "Brionne",
        "lat": 49.19553,
        "lon": 0.7151
    },
    {
        "id": 3029995,
        "nm": "Brioude",
        "lat": 45.299999,
        "lon": 3.4
    },
    {
        "id": 3029987,
        "nm": "Briscous",
        "lat": 43.459579,
        "lon": -1.33353
    },
    {
        "id": 3029986,
        "nm": "Brison-Saint-Innocent",
        "lat": 45.721859,
        "lon": 5.89011
    },
    {
        "id": 3029984,
        "nm": "Brissac-Quince",
        "lat": 47.355751,
        "lon": -0.44924
    },
    {
        "id": 3029974,
        "nm": "Brive-la-Gaillarde",
        "lat": 45.150002,
        "lon": 1.53333
    },
    {
        "id": 3029970,
        "nm": "Brives-Charensac",
        "lat": 45.047798,
        "lon": 3.92878
    },
    {
        "id": 3029967,
        "nm": "Brix",
        "lat": 49.54512,
        "lon": -1.58012
    },
    {
        "id": 3029931,
        "nm": "Bron",
        "lat": 45.73333,
        "lon": 4.91667
    },
    {
        "id": 3029925,
        "nm": "Broons",
        "lat": 48.317478,
        "lon": -2.25952
    },
    {
        "id": 3029898,
        "nm": "Brou",
        "lat": 48.21719,
        "lon": 1.16539
    },
    {
        "id": 3029855,
        "nm": "Brou-sur-Chantereine",
        "lat": 48.883331,
        "lon": 2.63333
    },
    {
        "id": 3029825,
        "nm": "Bruay-la-Buissiere",
        "lat": 50.48333,
        "lon": 2.55
    },
    {
        "id": 3029824,
        "nm": "Bruay-sur-lEscaut",
        "lat": 50.399181,
        "lon": 3.5438
    },
    {
        "id": 3029799,
        "nm": "Bruges",
        "lat": 44.87981,
        "lon": -0.61219
    },
    {
        "id": 3029793,
        "nm": "Bruguieres",
        "lat": 43.7272,
        "lon": 1.40762
    },
    {
        "id": 3029771,
        "nm": "Brumath",
        "lat": 48.730141,
        "lon": 7.7121
    },
    {
        "id": 3029748,
        "nm": "Brunoy",
        "lat": 48.694199,
        "lon": 2.49223
    },
    {
        "id": 3029746,
        "nm": "Brunstatt",
        "lat": 47.720039,
        "lon": 7.31784
    },
    {
        "id": 3029725,
        "nm": "Bruyeres",
        "lat": 48.207088,
        "lon": 6.71845
    },
    {
        "id": 3029717,
        "nm": "Bruyeres-le-Chatel",
        "lat": 48.58868,
        "lon": 2.18991
    },
    {
        "id": 3029715,
        "nm": "Bruyeres-sur-Oise",
        "lat": 49.157558,
        "lon": 2.32577
    },
    {
        "id": 3029713,
        "nm": "Bruz",
        "lat": 48.0242,
        "lon": -1.74591
    },
    {
        "id": 3029706,
        "nm": "Bry-sur-Marne",
        "lat": 48.838112,
        "lon": 2.52488
    },
    {
        "id": 3029697,
        "nm": "Bubry",
        "lat": 47.96336,
        "lon": -3.17108
    },
    {
        "id": 3029695,
        "nm": "Buc",
        "lat": 48.776272,
        "lon": 2.12577
    },
    {
        "id": 3029684,
        "nm": "Buchelay",
        "lat": 48.979259,
        "lon": 1.67026
    },
    {
        "id": 3029670,
        "nm": "Bucy-le-Long",
        "lat": 49.39072,
        "lon": 3.39582
    },
    {
        "id": 3029620,
        "nm": "Buhl",
        "lat": 47.928059,
        "lon": 7.18719
    },
    {
        "id": 3029603,
        "nm": "Buis-les-Baronnies",
        "lat": 44.273731,
        "lon": 5.2722
    },
    {
        "id": 3029572,
        "nm": "Bullion",
        "lat": 48.622849,
        "lon": 1.99024
    },
    {
        "id": 3029570,
        "nm": "Bully",
        "lat": 45.852051,
        "lon": 4.58195
    },
    {
        "id": 3029566,
        "nm": "Bully-les-Mines",
        "lat": 50.443802,
        "lon": 2.72703
    },
    {
        "id": 3029548,
        "nm": "Burbure",
        "lat": 50.536629,
        "lon": 2.46897
    },
    {
        "id": 3029522,
        "nm": "Bures-sur-Yvette",
        "lat": 48.69981,
        "lon": 2.17064
    },
    {
        "id": 3029503,
        "nm": "Burlats",
        "lat": 43.63633,
        "lon": 2.31879
    },
    {
        "id": 3029483,
        "nm": "Bury",
        "lat": 49.313068,
        "lon": 2.34401
    },
    {
        "id": 3029477,
        "nm": "Busigny",
        "lat": 50.034241,
        "lon": 3.46713
    },
    {
        "id": 3029392,
        "nm": "Bussy-Saint-Georges",
        "lat": 48.840988,
        "lon": 2.70165
    },
    {
        "id": 3029377,
        "nm": "Butry-sur-Oise",
        "lat": 49.08836,
        "lon": 2.19916
    },
    {
        "id": 3029365,
        "nm": "Buxerolles",
        "lat": 46.616669,
        "lon": 0.48333
    },
    {
        "id": 3029350,
        "nm": "Buxy",
        "lat": 46.713692,
        "lon": 4.70427
    },
    {
        "id": 3029345,
        "nm": "Buzancais",
        "lat": 46.888771,
        "lon": 1.4195
    },
    {
        "id": 3029312,
        "nm": "Cabannes",
        "lat": 43.860149,
        "lon": 4.95192
    },
    {
        "id": 3029302,
        "nm": "Cabestany",
        "lat": 42.68132,
        "lon": 2.94122
    },
    {
        "id": 3029297,
        "nm": "Cabourg",
        "lat": 49.2911,
        "lon": -0.1133
    },
    {
        "id": 3029283,
        "nm": "Cabries",
        "lat": 43.441269,
        "lon": 5.37884
    },
    {
        "id": 3029276,
        "nm": "Cachan",
        "lat": 48.796322,
        "lon": 2.33661
    },
    {
        "id": 3029265,
        "nm": "Cadaujac",
        "lat": 44.754372,
        "lon": -0.53128
    },
    {
        "id": 3029256,
        "nm": "Cadenet",
        "lat": 43.734451,
        "lon": 5.37499
    },
    {
        "id": 3029254,
        "nm": "Caderousse",
        "lat": 44.10252,
        "lon": 4.75679
    },
    {
        "id": 3029253,
        "nm": "Cadillac",
        "lat": 44.636311,
        "lon": -0.31702
    },
    {
        "id": 3029248,
        "nm": "Cadolive",
        "lat": 43.396938,
        "lon": 5.54526
    },
    {
        "id": 3029241,
        "nm": "Caen",
        "lat": 49.185848,
        "lon": -0.35912
    },
    {
        "id": 3029229,
        "nm": "Cagnac-les-Mines",
        "lat": 43.984451,
        "lon": 2.14227
    },
    {
        "id": 3029227,
        "nm": "Cagnes-sur-Mer",
        "lat": 43.6646,
        "lon": 7.15339
    },
    {
        "id": 3029213,
        "nm": "Cahors",
        "lat": 44.4491,
        "lon": 1.43663
    },
    {
        "id": 3029186,
        "nm": "Cailloux-sur-Fontaines",
        "lat": 45.851471,
        "lon": 4.87585
    },
    {
        "id": 3029174,
        "nm": "Caissargues",
        "lat": 43.79509,
        "lon": 4.37955
    },
    {
        "id": 3029162,
        "nm": "Calais",
        "lat": 50.958099,
        "lon": 1.85205
    },
    {
        "id": 3029126,
        "nm": "Callac",
        "lat": 48.40292,
        "lon": -3.428
    },
    {
        "id": 3029118,
        "nm": "Callian",
        "lat": 43.6231,
        "lon": 6.7519
    },
    {
        "id": 3029099,
        "nm": "Calonne-Ricouart",
        "lat": 50.485039,
        "lon": 2.47335
    },
    {
        "id": 3029096,
        "nm": "Caluire-et-Cuire",
        "lat": 45.790409,
        "lon": 4.84112
    },
    {
        "id": 3029090,
        "nm": "Calvi",
        "lat": 42.56604,
        "lon": 8.75713
    },
    {
        "id": 3029080,
        "nm": "Calvisson",
        "lat": 43.786961,
        "lon": 4.19626
    },
    {
        "id": 3029069,
        "nm": "Camaret-sur-Aigues",
        "lat": 44.164051,
        "lon": 4.87424
    },
    {
        "id": 3029068,
        "nm": "Camaret-sur-Mer",
        "lat": 48.274971,
        "lon": -4.59615
    },
    {
        "id": 3029044,
        "nm": "Camblanes-et-Meynac",
        "lat": 44.765511,
        "lon": -0.48653
    },
    {
        "id": 3029041,
        "nm": "Cambo-les-Bains",
        "lat": 43.358501,
        "lon": -1.40105
    },
    {
        "id": 3029030,
        "nm": "Cambrai",
        "lat": 50.166672,
        "lon": 3.23333
    },
    {
        "id": 3029023,
        "nm": "Cambronne-les-Ribecourt",
        "lat": 49.507111,
        "lon": 2.89797
    },
    {
        "id": 3029012,
        "nm": "Camiers",
        "lat": 50.571529,
        "lon": 1.61325
    },
    {
        "id": 3029003,
        "nm": "Camon",
        "lat": 49.887642,
        "lon": 2.34486
    },
    {
        "id": 3029002,
        "nm": "Camors",
        "lat": 47.847389,
        "lon": -2.99981
    },
    {
        "id": 3028966,
        "nm": "Campbon",
        "lat": 47.413101,
        "lon": -1.96857
    },
    {
        "id": 3028868,
        "nm": "Cancale",
        "lat": 48.67601,
        "lon": -1.85231
    },
    {
        "id": 3028851,
        "nm": "Cande",
        "lat": 47.561581,
        "lon": -1.03619
    },
    {
        "id": 3028838,
        "nm": "Canejan",
        "lat": 44.76667,
        "lon": -0.63333
    },
    {
        "id": 3028832,
        "nm": "Canet-en-Roussillon",
        "lat": 42.700001,
        "lon": 3.01667
    },
    {
        "id": 3028808,
        "nm": "Cannes",
        "lat": 43.55135,
        "lon": 7.01275
    },
    {
        "id": 3028806,
        "nm": "Cannes-Ecluse",
        "lat": 48.363029,
        "lon": 2.98748
    },
    {
        "id": 3028797,
        "nm": "Canohes",
        "lat": 42.65461,
        "lon": 2.83633
    },
    {
        "id": 3028796,
        "nm": "Canon",
        "lat": 49.073799,
        "lon": -0.09219
    },
    {
        "id": 3028779,
        "nm": "Canteleu",
        "lat": 49.440651,
        "lon": 1.02459
    },
    {
        "id": 3028773,
        "nm": "Cantenay-Epinard",
        "lat": 47.53503,
        "lon": -0.56899
    },
    {
        "id": 3028754,
        "nm": "Cany-Barville",
        "lat": 49.788849,
        "lon": 0.63704
    },
    {
        "id": 3028745,
        "nm": "Capbreton",
        "lat": 43.642159,
        "lon": -1.42816
    },
    {
        "id": 3028720,
        "nm": "Capestang",
        "lat": 43.327911,
        "lon": 3.04447
    },
    {
        "id": 3028691,
        "nm": "Cappelle-en-Pevele",
        "lat": 50.510109,
        "lon": 3.17133
    },
    {
        "id": 3028690,
        "nm": "Cappelle-la-Grande",
        "lat": 50.99979,
        "lon": 2.35848
    },
    {
        "id": 3028674,
        "nm": "Caraman",
        "lat": 43.532711,
        "lon": 1.76002
    },
    {
        "id": 3028667,
        "nm": "Carantec",
        "lat": 48.66811,
        "lon": -3.91545
    },
    {
        "id": 3028653,
        "nm": "Carbon-Blanc",
        "lat": 44.89642,
        "lon": -0.50107
    },
    {
        "id": 3028652,
        "nm": "Carbonne",
        "lat": 43.298569,
        "lon": 1.2252
    },
    {
        "id": 3028641,
        "nm": "Carcassonne",
        "lat": 43.216671,
        "lon": 2.35
    },
    {
        "id": 3028637,
        "nm": "Carces",
        "lat": 43.476318,
        "lon": 6.18308
    },
    {
        "id": 3028610,
        "nm": "Carentan",
        "lat": 49.30312,
        "lon": -1.24806
    },
    {
        "id": 3028608,
        "nm": "Carentoir",
        "lat": 47.816669,
        "lon": -2.13333
    },
    {
        "id": 3028603,
        "nm": "Carhaix-Plouguer",
        "lat": 48.27594,
        "lon": -3.57326
    },
    {
        "id": 3028600,
        "nm": "Carignan",
        "lat": 49.631592,
        "lon": 5.16796
    },
    {
        "id": 3028601,
        "nm": "Carignan-de-Bordeaux",
        "lat": 44.799999,
        "lon": -0.48333
    },
    {
        "id": 3028590,
        "nm": "Carling",
        "lat": 49.16761,
        "lon": 6.71596
    },
    {
        "id": 3028580,
        "nm": "Carmaux",
        "lat": 44.050991,
        "lon": 2.15795
    },
    {
        "id": 3028575,
        "nm": "Carnac",
        "lat": 47.583511,
        "lon": -3.07884
    },
    {
        "id": 3028558,
        "nm": "Carnoules",
        "lat": 43.301929,
        "lon": 6.18804
    },
    {
        "id": 6615537,
        "nm": "Carnoux-en-Provence",
        "lat": 43.25639,
        "lon": 5.56444
    },
    {
        "id": 3028551,
        "nm": "Caromb",
        "lat": 44.11076,
        "lon": 5.1058
    },
    {
        "id": 3028542,
        "nm": "Carpentras",
        "lat": 44.049999,
        "lon": 5.05
    },
    {
        "id": 3028537,
        "nm": "Carpiquet",
        "lat": 49.185219,
        "lon": -0.44623
    },
    {
        "id": 3028535,
        "nm": "Carquefou",
        "lat": 47.298222,
        "lon": -1.49024
    },
    {
        "id": 3028534,
        "nm": "Carqueiranne",
        "lat": 43.09531,
        "lon": 6.07297
    },
    {
        "id": 3028521,
        "nm": "Carrieres-sous-Poissy",
        "lat": 48.94952,
        "lon": 2.04068
    },
    {
        "id": 3028520,
        "nm": "Carrieres-sur-Seine",
        "lat": 48.906872,
        "lon": 2.1792
    },
    {
        "id": 3028513,
        "nm": "Carros",
        "lat": 43.78941,
        "lon": 7.18395
    },
    {
        "id": 3028510,
        "nm": "Carry-le-Rouet",
        "lat": 43.33139,
        "lon": 5.15237
    },
    {
        "id": 3028486,
        "nm": "Carvin",
        "lat": 50.492352,
        "lon": 2.95815
    },
    {
        "id": 3028440,
        "nm": "Cassel",
        "lat": 50.80109,
        "lon": 2.48527
    },
    {
        "id": 3028437,
        "nm": "Casseneuil",
        "lat": 44.4431,
        "lon": 0.62095
    },
    {
        "id": 3028431,
        "nm": "Cassis",
        "lat": 43.21241,
        "lon": 5.5451
    },
    {
        "id": 3028409,
        "nm": "Castanet-Tolosan",
        "lat": 43.515911,
        "lon": 1.49864
    },
    {
        "id": 3028388,
        "nm": "Castelginest",
        "lat": 43.693821,
        "lon": 1.4344
    },
    {
        "id": 3028387,
        "nm": "Casteljaloux",
        "lat": 44.317619,
        "lon": 0.08605
    },
    {
        "id": 6615509,
        "nm": "Castelmaurou",
        "lat": 43.67778,
        "lon": 1.53222
    },
    {
        "id": 3028343,
        "nm": "Castelnau-de-Medoc",
        "lat": 45.029339,
        "lon": -0.79828
    },
    {
        "id": 3028340,
        "nm": "Castelnau-dEstretefonds",
        "lat": 43.783669,
        "lon": 1.35904
    },
    {
        "id": 3028337,
        "nm": "Castelnau-le-Lez",
        "lat": 43.633331,
        "lon": 3.9
    },
    {
        "id": 3028351,
        "nm": "Castelnaudary",
        "lat": 43.318291,
        "lon": 1.95449
    },
    {
        "id": 3028322,
        "nm": "Castelsarrasin",
        "lat": 44.033329,
        "lon": 1.1
    },
    {
        "id": 3028296,
        "nm": "Castets",
        "lat": 43.882332,
        "lon": -1.14572
    },
    {
        "id": 3028263,
        "nm": "Castres",
        "lat": 43.599998,
        "lon": 2.25
    },
    {
        "id": 3028258,
        "nm": "Castries",
        "lat": 43.679722,
        "lon": 3.98222
    },
    {
        "id": 3028236,
        "nm": "Cattenom",
        "lat": 49.407551,
        "lon": 6.24426
    },
    {
        "id": 3028219,
        "nm": "Cauchy-a-la-Tour",
        "lat": 50.503941,
        "lon": 2.44606
    },
    {
        "id": 3028217,
        "nm": "Caudan",
        "lat": 47.808769,
        "lon": -3.3425
    },
    {
        "id": 3028215,
        "nm": "Caudebec-en-Caux",
        "lat": 49.525768,
        "lon": 0.72561
    },
    {
        "id": 3028214,
        "nm": "Caudebec-les-Elbeuf",
        "lat": 49.280819,
        "lon": 1.02195
    },
    {
        "id": 3028205,
        "nm": "Caudry",
        "lat": 50.124901,
        "lon": 3.41186
    },
    {
        "id": 3028204,
        "nm": "Cauffry",
        "lat": 49.319778,
        "lon": 2.44581
    },
    {
        "id": 3028198,
        "nm": "Caulnes",
        "lat": 48.28804,
        "lon": -2.15518
    },
    {
        "id": 3028185,
        "nm": "Caumont-sur-Durance",
        "lat": 43.893559,
        "lon": 4.94745
    },
    {
        "id": 3028162,
        "nm": "Caussade",
        "lat": 44.160801,
        "lon": 1.53913
    },
    {
        "id": 3028143,
        "nm": "Caux",
        "lat": 43.50621,
        "lon": 3.3671
    },
    {
        "id": 3028133,
        "nm": "Cavaillon",
        "lat": 43.916672,
        "lon": 5.28333
    },
    {
        "id": 3028134,
        "nm": "Cavaillon",
        "lat": 43.831249,
        "lon": 5.03586
    },
    {
        "id": 3028129,
        "nm": "Cavalaire-sur-Mer",
        "lat": 43.17403,
        "lon": 6.52715
    },
    {
        "id": 3028110,
        "nm": "Caveirac",
        "lat": 43.824371,
        "lon": 4.26664
    },
    {
        "id": 3028097,
        "nm": "Cayenne",
        "lat": 49.558578,
        "lon": 1.62803
    },
    {
        "id": 3028095,
        "nm": "Cayeux-sur-Mer",
        "lat": 50.181999,
        "lon": 1.494
    },
    {
        "id": 3028050,
        "nm": "Cazeres",
        "lat": 43.2071,
        "lon": 1.08633
    },
    {
        "id": 3028039,
        "nm": "Cazouls-les-Beziers",
        "lat": 43.392181,
        "lon": 3.101
    },
    {
        "id": 3028028,
        "nm": "Cebazat",
        "lat": 45.834049,
        "lon": 3.10048
    },
    {
        "id": 3027989,
        "nm": "Celles-sur-Belle",
        "lat": 46.26223,
        "lon": -0.21274
    },
    {
        "id": 3027988,
        "nm": "Celles-sur-Durolle",
        "lat": 45.857868,
        "lon": 3.63534
    },
    {
        "id": 3027984,
        "nm": "Cellettes",
        "lat": 47.52758,
        "lon": 1.38102
    },
    {
        "id": 3027961,
        "nm": "Cendras",
        "lat": 44.150002,
        "lon": 4.06667
    },
    {
        "id": 3027950,
        "nm": "Cenon",
        "lat": 44.8559,
        "lon": -0.51839
    },
    {
        "id": 3027923,
        "nm": "Cepoy",
        "lat": 48.047951,
        "lon": 2.73782
    },
    {
        "id": 3027918,
        "nm": "Cerans-Foulletourte",
        "lat": 47.826511,
        "lon": 0.07724
    },
    {
        "id": 3027900,
        "nm": "Cercy-la-Tour",
        "lat": 46.86203,
        "lon": 3.64652
    },
    {
        "id": 3027888,
        "nm": "Ceret",
        "lat": 42.485329,
        "lon": 2.74804
    },
    {
        "id": 3027883,
        "nm": "Cergy",
        "lat": 49.036449,
        "lon": 2.07613
    },
    {
        "id": 3027866,
        "nm": "Cerizay",
        "lat": 46.821541,
        "lon": -0.66726
    },
    {
        "id": 3027836,
        "nm": "Cerny",
        "lat": 48.477959,
        "lon": 2.32814
    },
    {
        "id": 3027824,
        "nm": "Cers",
        "lat": 43.323521,
        "lon": 3.3045
    },
    {
        "id": 3027783,
        "nm": "Cessenon-sur-Orb",
        "lat": 43.450111,
        "lon": 3.05154
    },
    {
        "id": 3027770,
        "nm": "Cessieu",
        "lat": 45.565762,
        "lon": 5.37704
    },
    {
        "id": 3027768,
        "nm": "Cesson",
        "lat": 48.562038,
        "lon": 2.60816
    },
    {
        "id": 3027767,
        "nm": "Cesson-Sevigne",
        "lat": 48.121201,
        "lon": -1.603
    },
    {
        "id": 3027765,
        "nm": "Cessy",
        "lat": 46.31662,
        "lon": 6.06915
    },
    {
        "id": 3027763,
        "nm": "Cestas",
        "lat": 44.74345,
        "lon": -0.67905
    },
    {
        "id": 3027758,
        "nm": "Ceton",
        "lat": 48.226318,
        "lon": 0.74968
    },
    {
        "id": 3027746,
        "nm": "Ceyrat",
        "lat": 45.731758,
        "lon": 3.06335
    },
    {
        "id": 3027745,
        "nm": "Ceyreste",
        "lat": 43.213299,
        "lon": 5.63111
    },
    {
        "id": 3027740,
        "nm": "Ceyzeriat",
        "lat": 46.180099,
        "lon": 5.31972
    },
    {
        "id": 3027705,
        "nm": "Chabeuil",
        "lat": 44.899632,
        "lon": 5.01884
    },
    {
        "id": 3027699,
        "nm": "Chablis",
        "lat": 47.813862,
        "lon": 3.79835
    },
    {
        "id": 3027673,
        "nm": "Chabris",
        "lat": 47.253429,
        "lon": 1.65181
    },
    {
        "id": 3027653,
        "nm": "Chadrac",
        "lat": 45.06181,
        "lon": 3.90261
    },
    {
        "id": 3027642,
        "nm": "Chagny",
        "lat": 46.909531,
        "lon": 4.7519
    },
    {
        "id": 3027625,
        "nm": "Chailles",
        "lat": 47.541599,
        "lon": 1.3122
    },
    {
        "id": 3027609,
        "nm": "Chailly-en-Biere",
        "lat": 48.46701,
        "lon": 2.60785
    },
    {
        "id": 3027598,
        "nm": "Chaingy",
        "lat": 47.883259,
        "lon": 1.77058
    },
    {
        "id": 3027576,
        "nm": "Chalais",
        "lat": 45.27338,
        "lon": 0.0388
    },
    {
        "id": 3027531,
        "nm": "Chalette-sur-Loing",
        "lat": 48.013371,
        "lon": 2.73587
    },
    {
        "id": 3027521,
        "nm": "Chaligny",
        "lat": 48.624062,
        "lon": 6.08333
    },
    {
        "id": 3027519,
        "nm": "Chalindrey",
        "lat": 47.803082,
        "lon": 5.42797
    },
    {
        "id": 3027513,
        "nm": "Challans",
        "lat": 46.843632,
        "lon": -1.8749
    },
    {
        "id": 3027507,
        "nm": "Challes-les-Eaux",
        "lat": 45.551949,
        "lon": 5.98171
    },
    {
        "id": 3027484,
        "nm": "Chalon-sur-Saone",
        "lat": 46.783329,
        "lon": 4.85
    },
    {
        "id": 3027491,
        "nm": "Chalonnes-sur-Loire",
        "lat": 47.351601,
        "lon": -0.7631
    },
    {
        "id": 3027487,
        "nm": "Chalons-en-Champagne",
        "lat": 48.95393,
        "lon": 4.36724
    },
    {
        "id": 3027453,
        "nm": "Chamalieres",
        "lat": 45.775589,
        "lon": 3.0631
    },
    {
        "id": 3027422,
        "nm": "Chambery",
        "lat": 45.566669,
        "lon": 5.93333
    },
    {
        "id": 3027397,
        "nm": "Chambly",
        "lat": 49.166672,
        "lon": 2.25
    },
    {
        "id": 3027351,
        "nm": "Chambourcy",
        "lat": 48.906551,
        "lon": 2.041
    },
    {
        "id": 3027343,
        "nm": "Chambray-les-Tours",
        "lat": 47.335369,
        "lon": 0.70286
    },
    {
        "id": 3027301,
        "nm": "Chamonix-Mont-Blanc",
        "lat": 45.923752,
        "lon": 6.86933
    },
    {
        "id": 3027011,
        "nm": "Champ-sur-Drac",
        "lat": 45.069118,
        "lon": 5.73225
    },
    {
        "id": 3027260,
        "nm": "Champagne",
        "lat": 48.021851,
        "lon": 0.33096
    },
    {
        "id": 3027243,
        "nm": "Champagne-sur-Oise",
        "lat": 49.140518,
        "lon": 2.24233
    },
    {
        "id": 3027242,
        "nm": "Champagne-sur-Seine",
        "lat": 48.397942,
        "lon": 2.79785
    },
    {
        "id": 3027237,
        "nm": "Champagney",
        "lat": 47.70504,
        "lon": 6.68173
    },
    {
        "id": 3027235,
        "nm": "Champagnole",
        "lat": 46.744518,
        "lon": 5.91354
    },
    {
        "id": 3027207,
        "nm": "Champcevinel",
        "lat": 45.216301,
        "lon": 0.72796
    },
    {
        "id": 3027200,
        "nm": "Champcueil",
        "lat": 48.515942,
        "lon": 2.44674
    },
    {
        "id": 3027147,
        "nm": "Champforgeuil",
        "lat": 46.818569,
        "lon": 4.83357
    },
    {
        "id": 3027134,
        "nm": "Champhol",
        "lat": 48.468128,
        "lon": 1.50281
    },
    {
        "id": 3027126,
        "nm": "Champigneulles",
        "lat": 48.7342,
        "lon": 6.16417
    },
    {
        "id": 3027103,
        "nm": "Champigny",
        "lat": 48.316669,
        "lon": 3.13333
    },
    {
        "id": 3027105,
        "nm": "Champigny-sur-Marne",
        "lat": 48.816422,
        "lon": 2.49366
    },
    {
        "id": 3027098,
        "nm": "Champlan",
        "lat": 48.708229,
        "lon": 2.27975
    },
    {
        "id": 3027064,
        "nm": "Champniers",
        "lat": 45.716671,
        "lon": 0.2
    },
    {
        "id": 3027014,
        "nm": "Champs-sur-Marne",
        "lat": 48.849998,
        "lon": 2.6
    },
    {
        "id": 3026983,
        "nm": "Chanas",
        "lat": 45.31881,
        "lon": 4.81849
    },
    {
        "id": 3026971,
        "nm": "Chanceaux-sur-Choisille",
        "lat": 47.471451,
        "lon": 0.70539
    },
    {
        "id": 3026969,
        "nm": "Chancelade",
        "lat": 45.200489,
        "lon": 0.67261
    },
    {
        "id": 3026940,
        "nm": "Change",
        "lat": 48.099178,
        "lon": -0.79292
    },
    {
        "id": 3026941,
        "nm": "Change",
        "lat": 47.984989,
        "lon": 0.28328
    },
    {
        "id": 3026925,
        "nm": "Chaniers",
        "lat": 45.718578,
        "lon": -0.55779
    },
    {
        "id": 3026867,
        "nm": "Chanteloup-en-Brie",
        "lat": 48.854778,
        "lon": 2.73929
    },
    {
        "id": 3026862,
        "nm": "Chanteloup-les-Vignes",
        "lat": 48.976139,
        "lon": 2.03261
    },
    {
        "id": 3026842,
        "nm": "Chantepie",
        "lat": 48.088848,
        "lon": -1.61524
    },
    {
        "id": 3026827,
        "nm": "Chantilly",
        "lat": 49.194611,
        "lon": 2.47124
    },
    {
        "id": 3026823,
        "nm": "Chantonnay",
        "lat": 46.687019,
        "lon": -1.05024
    },
    {
        "id": 3026822,
        "nm": "Chantraine",
        "lat": 48.171581,
        "lon": 6.43538
    },
    {
        "id": 3026797,
        "nm": "Chapareillan",
        "lat": 45.46513,
        "lon": 5.99171
    },
    {
        "id": 3026758,
        "nm": "Chaponnay",
        "lat": 45.63097,
        "lon": 4.94299
    },
    {
        "id": 3026757,
        "nm": "Chaponost",
        "lat": 45.705921,
        "lon": 4.74441
    },
    {
        "id": 3026700,
        "nm": "Charbonnieres-les-Bains",
        "lat": 45.784199,
        "lon": 4.7463
    },
    {
        "id": 3026637,
        "nm": "Charenton-le-Pont",
        "lat": 48.82209,
        "lon": 2.41217
    },
    {
        "id": 3026615,
        "nm": "Charleval",
        "lat": 49.372898,
        "lon": 1.38369
    },
    {
        "id": 3026616,
        "nm": "Charleval",
        "lat": 43.718639,
        "lon": 5.24546
    },
    {
        "id": 3026613,
        "nm": "Charleville-Mezieres",
        "lat": 49.76667,
        "lon": 4.71667
    },
    {
        "id": 3026610,
        "nm": "Charlieu",
        "lat": 46.160141,
        "lon": 4.17406
    },
    {
        "id": 3026606,
        "nm": "Charly",
        "lat": 45.65255,
        "lon": 4.7961
    },
    {
        "id": 3026603,
        "nm": "Charly-sur-Marne",
        "lat": 48.977489,
        "lon": 3.28464
    },
    {
        "id": 3026588,
        "nm": "Charmes",
        "lat": 48.3722,
        "lon": 6.29117
    },
    {
        "id": 3026574,
        "nm": "Charmes-sur-Rhone",
        "lat": 44.86393,
        "lon": 4.84039
    },
    {
        "id": 3026534,
        "nm": "Charnay-les-Macon",
        "lat": 46.30751,
        "lon": 4.78479
    },
    {
        "id": 3026515,
        "nm": "Charolles",
        "lat": 46.433331,
        "lon": 4.28333
    },
    {
        "id": 3026500,
        "nm": "Charquemont",
        "lat": 47.214169,
        "lon": 6.8198
    },
    {
        "id": 3026467,
        "nm": "Chartres",
        "lat": 48.44685,
        "lon": 1.48925
    },
    {
        "id": 3026465,
        "nm": "Chartres-de-Bretagne",
        "lat": 48.039242,
        "lon": -1.70533
    },
    {
        "id": 3026464,
        "nm": "Chartrettes",
        "lat": 48.488079,
        "lon": 2.70083
    },
    {
        "id": 3026451,
        "nm": "Charvieu-Chavagneux",
        "lat": 45.75,
        "lon": 5.15
    },
    {
        "id": 3026384,
        "nm": "Chasse-sur-Rhone",
        "lat": 45.583389,
        "lon": 4.79823
    },
    {
        "id": 3026400,
        "nm": "Chasselay",
        "lat": 45.87524,
        "lon": 4.7734
    },
    {
        "id": 3026391,
        "nm": "Chasseneuil-du-Poitou",
        "lat": 46.651119,
        "lon": 0.3733
    },
    {
        "id": 3026394,
        "nm": "Chasseneuil-sur-Bonnieure",
        "lat": 45.816669,
        "lon": 0.45
    },
    {
        "id": 3026374,
        "nm": "Chassieu",
        "lat": 45.745838,
        "lon": 4.97088
    },
    {
        "id": 3026298,
        "nm": "Chateau-Chinon(Ville)",
        "lat": 47.066669,
        "lon": 3.93333
    },
    {
        "id": 3026291,
        "nm": "Chateau-dOlonne",
        "lat": 46.503819,
        "lon": -1.74096
    },
    {
        "id": 3026286,
        "nm": "Chateau-du-Loir",
        "lat": 47.69492,
        "lon": 0.41851
    },
    {
        "id": 3026273,
        "nm": "Chateau-Gontier",
        "lat": 47.833328,
        "lon": -0.7
    },
    {
        "id": 3026268,
        "nm": "Chateau-Landon",
        "lat": 48.147209,
        "lon": 2.69754
    },
    {
        "id": 3026208,
        "nm": "Chateau-Renault",
        "lat": 47.591881,
        "lon": 0.91143
    },
    {
        "id": 3026200,
        "nm": "Chateau-Salins",
        "lat": 48.818851,
        "lon": 6.51455
    },
    {
        "id": 3026194,
        "nm": "Chateau-Thierry",
        "lat": 49.049999,
        "lon": 3.4
    },
    {
        "id": 3026310,
        "nm": "Chateaubernard",
        "lat": 45.666672,
        "lon": -0.33333
    },
    {
        "id": 3026306,
        "nm": "Chateaubourg",
        "lat": 48.111191,
        "lon": -1.40019
    },
    {
        "id": 3026303,
        "nm": "Chateaubriant",
        "lat": 47.716671,
        "lon": -1.38333
    },
    {
        "id": 3026285,
        "nm": "Chateaudun",
        "lat": 48.083328,
        "lon": 1.33333
    },
    {
        "id": 3026276,
        "nm": "Chateaugay",
        "lat": 45.851341,
        "lon": 3.08972
    },
    {
        "id": 3026275,
        "nm": "Chateaugiron",
        "lat": 48.046291,
        "lon": -1.50438
    },
    {
        "id": 3026262,
        "nm": "Chateaulin",
        "lat": 48.200001,
        "lon": -4.08333
    },
    {
        "id": 3026258,
        "nm": "Chateaumeillant",
        "lat": 46.562191,
        "lon": 2.19515
    },
    {
        "id": 3026242,
        "nm": "Chateauneuf-de-Gadagne",
        "lat": 43.92683,
        "lon": 4.94453
    },
    {
        "id": 3026241,
        "nm": "Chateauneuf-de-Galaure",
        "lat": 45.230961,
        "lon": 4.9568
    },
    {
        "id": 3026234,
        "nm": "Chateauneuf-du-Faou",
        "lat": 48.18755,
        "lon": -3.81789
    },
    {
        "id": 3026233,
        "nm": "Chateauneuf-du-Pape",
        "lat": 44.056381,
        "lon": 4.83244
    },
    {
        "id": 3026232,
        "nm": "Chateauneuf-du-Rhone",
        "lat": 44.487789,
        "lon": 4.71759
    },
    {
        "id": 3026231,
        "nm": "Chateauneuf-en-Thymerais",
        "lat": 48.58112,
        "lon": 1.24085
    },
    {
        "id": 3026256,
        "nm": "Chateauneuf-Grasse",
        "lat": 43.666672,
        "lon": 6.98333
    },
    {
        "id": 3026229,
        "nm": "Chateauneuf-le-Rouge",
        "lat": 43.489361,
        "lon": 5.56921
    },
    {
        "id": 3026227,
        "nm": "Chateauneuf-les-Martigues",
        "lat": 43.383331,
        "lon": 5.16667
    },
    {
        "id": 3026224,
        "nm": "Chateauneuf-sur-Charente",
        "lat": 45.599998,
        "lon": -0.05
    },
    {
        "id": 3026236,
        "nm": "Chateauneuf-sur-Isere",
        "lat": 45.01667,
        "lon": 4.93333
    },
    {
        "id": 3026222,
        "nm": "Chateauneuf-sur-Loire",
        "lat": 47.865749,
        "lon": 2.21904
    },
    {
        "id": 3026221,
        "nm": "Chateauneuf-sur-Sarthe",
        "lat": 47.68145,
        "lon": -0.48652
    },
    {
        "id": 3026217,
        "nm": "Chateauponsac",
        "lat": 46.135361,
        "lon": 1.27623
    },
    {
        "id": 3026211,
        "nm": "Chateaurenard",
        "lat": 43.881691,
        "lon": 4.85493
    },
    {
        "id": 3026204,
        "nm": "Chateauroux",
        "lat": 46.816669,
        "lon": 1.7
    },
    {
        "id": 3026145,
        "nm": "Chatel-Guyon",
        "lat": 45.916672,
        "lon": 3.06667
    },
    {
        "id": 3026131,
        "nm": "Chatel-Saint-Germain",
        "lat": 49.122898,
        "lon": 6.08001
    },
    {
        "id": 3026172,
        "nm": "Chatelaillon-Plage",
        "lat": 46.071899,
        "lon": -1.08926
    },
    {
        "id": 3026141,
        "nm": "Chatellerault",
        "lat": 46.799999,
        "lon": 0.53333
    },
    {
        "id": 3026108,
        "nm": "Chatenay-Malabry",
        "lat": 48.765072,
        "lon": 2.26655
    },
    {
        "id": 3026099,
        "nm": "Chatenois",
        "lat": 48.30286,
        "lon": 5.83125
    },
    {
        "id": 3026100,
        "nm": "Chatenois",
        "lat": 48.271881,
        "lon": 7.39927
    },
    {
        "id": 3026098,
        "nm": "Chatenois-les-Forges",
        "lat": 47.559799,
        "lon": 6.84894
    },
    {
        "id": 3026094,
        "nm": "Chatenoy-le-Royal",
        "lat": 46.79797,
        "lon": 4.8119
    },
    {
        "id": 3026083,
        "nm": "Chatillon",
        "lat": 48.802399,
        "lon": 2.29346
    },
    {
        "id": 3026075,
        "nm": "Chatillon",
        "lat": 45.883331,
        "lon": 4.61667
    },
    {
        "id": 3026089,
        "nm": "Chatillon",
        "lat": 45.800911,
        "lon": 5.84352
    },
    {
        "id": 3026076,
        "nm": "Chatillon-Coligny",
        "lat": 47.822659,
        "lon": 2.84563
    },
    {
        "id": 3026074,
        "nm": "Chatillon-en-Michaille",
        "lat": 46.1432,
        "lon": 5.7995
    },
    {
        "id": 3026065,
        "nm": "Chatillon-le-Duc",
        "lat": 47.304859,
        "lon": 6.00792
    },
    {
        "id": 3026057,
        "nm": "Chatillon-sur-Chalaronne",
        "lat": 46.12019,
        "lon": 4.95817
    },
    {
        "id": 3026053,
        "nm": "Chatillon-sur-Indre",
        "lat": 46.98735,
        "lon": 1.17218
    },
    {
        "id": 3026047,
        "nm": "Chatillon-sur-Seiche",
        "lat": 48.034481,
        "lon": -1.67114
    },
    {
        "id": 3026046,
        "nm": "Chatillon-sur-Seine",
        "lat": 47.858509,
        "lon": 4.57375
    },
    {
        "id": 3026044,
        "nm": "Chatillon-sur-Thouet",
        "lat": 46.661758,
        "lon": -0.23489
    },
    {
        "id": 3026033,
        "nm": "Chatou",
        "lat": 48.889801,
        "lon": 2.15863
    },
    {
        "id": 3026013,
        "nm": "Chatte",
        "lat": 45.143101,
        "lon": 5.28441
    },
    {
        "id": 3026008,
        "nm": "Chatuzange-le-Goubet",
        "lat": 45.001381,
        "lon": 5.087
    },
    {
        "id": 3026005,
        "nm": "Chauche",
        "lat": 46.829632,
        "lon": -1.27178
    },
    {
        "id": 3025965,
        "nm": "Chauffailles",
        "lat": 46.20726,
        "lon": 4.33932
    },
    {
        "id": 3025942,
        "nm": "Chaulnes",
        "lat": 49.81699,
        "lon": 2.80064
    },
    {
        "id": 3025910,
        "nm": "Chaumes-en-Brie",
        "lat": 48.66853,
        "lon": 2.84015
    },
    {
        "id": 3025892,
        "nm": "Chaumont",
        "lat": 48.116669,
        "lon": 5.13333
    },
    {
        "id": 3025881,
        "nm": "Chaumont-en-Vexin",
        "lat": 49.265949,
        "lon": 1.88597
    },
    {
        "id": 3025882,
        "nm": "Chaumontel",
        "lat": 49.124699,
        "lon": 2.43237
    },
    {
        "id": 3025860,
        "nm": "Chauny",
        "lat": 49.615139,
        "lon": 3.21857
    },
    {
        "id": 3025854,
        "nm": "Chauray",
        "lat": 46.35997,
        "lon": -0.37859
    },
    {
        "id": 3025809,
        "nm": "Chauvigny",
        "lat": 46.567471,
        "lon": 0.64928
    },
    {
        "id": 3025774,
        "nm": "Chavagne",
        "lat": 48.054379,
        "lon": -1.78571
    },
    {
        "id": 3025772,
        "nm": "Chavagnes-en-Paillers",
        "lat": 46.89167,
        "lon": -1.25214
    },
    {
        "id": 3025760,
        "nm": "Chavanay",
        "lat": 45.414371,
        "lon": 4.73157
    },
    {
        "id": 3025745,
        "nm": "Chavanod",
        "lat": 45.889641,
        "lon": 6.04235
    },
    {
        "id": 3025741,
        "nm": "Chavanoz",
        "lat": 45.776428,
        "lon": 5.17032
    },
    {
        "id": 3025715,
        "nm": "Chaville",
        "lat": 48.805649,
        "lon": 2.18864
    },
    {
        "id": 3025668,
        "nm": "Chazelles-sur-Lyon",
        "lat": 45.638062,
        "lon": 4.3913
    },
    {
        "id": 3025650,
        "nm": "Checy",
        "lat": 47.89402,
        "lon": 2.02304
    },
    {
        "id": 3025646,
        "nm": "Chef-Boutonne",
        "lat": 46.108589,
        "lon": -0.07083
    },
    {
        "id": 3025622,
        "nm": "Chelles",
        "lat": 48.881088,
        "lon": 2.59295
    },
    {
        "id": 3025602,
        "nm": "Chemille",
        "lat": 47.21476,
        "lon": -0.72488
    },
    {
        "id": 3025509,
        "nm": "Chennevieres-sur-Marne",
        "lat": 48.79702,
        "lon": 2.54046
    },
    {
        "id": 3025496,
        "nm": "Chenove",
        "lat": 47.293228,
        "lon": 5.00457
    },
    {
        "id": 3025491,
        "nm": "Cheny",
        "lat": 47.95166,
        "lon": 3.5334
    },
    {
        "id": 3025466,
        "nm": "Cherbourg-Octeville",
        "lat": 49.639839,
        "lon": -1.61636
    },
    {
        "id": 3025458,
        "nm": "Chereng",
        "lat": 50.61058,
        "lon": 3.20666
    },
    {
        "id": 3025397,
        "nm": "Chessy",
        "lat": 48.883331,
        "lon": 2.76667
    },
    {
        "id": 3025375,
        "nm": "Cheval-Blanc",
        "lat": 43.801891,
        "lon": 5.06229
    },
    {
        "id": 3025324,
        "nm": "Chevigny-Saint-Sauveur",
        "lat": 47.29908,
        "lon": 5.13367
    },
    {
        "id": 3025315,
        "nm": "Chevilly",
        "lat": 48.029732,
        "lon": 1.87402
    },
    {
        "id": 3025314,
        "nm": "Chevilly-Larue",
        "lat": 48.764759,
        "lon": 2.3503
    },
    {
        "id": 3025294,
        "nm": "Chevreuse",
        "lat": 48.706619,
        "lon": 2.03329
    },
    {
        "id": 3025270,
        "nm": "Chevry-Cossigny",
        "lat": 48.724651,
        "lon": 2.66106
    },
    {
        "id": 3025144,
        "nm": "Chilly-Mazarin",
        "lat": 48.71489,
        "lon": 2.31638
    },
    {
        "id": 3025132,
        "nm": "Chinon",
        "lat": 47.166672,
        "lon": 0.25
    },
    {
        "id": 3025108,
        "nm": "Chirens",
        "lat": 45.4128,
        "lon": 5.55707
    },
    {
        "id": 3025071,
        "nm": "Chocques",
        "lat": 50.54084,
        "lon": 2.57194
    },
    {
        "id": 3025058,
        "nm": "Choisy-au-Bac",
        "lat": 49.437771,
        "lon": 2.87739
    },
    {
        "id": 3025055,
        "nm": "Choisy-le-Roi",
        "lat": 48.768459,
        "lon": 2.41874
    },
    {
        "id": 3025053,
        "nm": "Cholet",
        "lat": 47.066669,
        "lon": -0.88333
    },
    {
        "id": 3025045,
        "nm": "Chomerac",
        "lat": 44.70752,
        "lon": 4.66164
    },
    {
        "id": 3025033,
        "nm": "Chorges",
        "lat": 44.5471,
        "lon": 6.27752
    },
    {
        "id": 3025007,
        "nm": "Chouze-sur-Loire",
        "lat": 47.236729,
        "lon": 0.12364
    },
    {
        "id": 3024991,
        "nm": "Chuzelles",
        "lat": 45.584839,
        "lon": 4.87795
    },
    {
        "id": 3024979,
        "nm": "Ciboure",
        "lat": 43.382858,
        "lon": -1.676
    },
    {
        "id": 3024937,
        "nm": "Cinq-Mars-la-Pile",
        "lat": 47.346378,
        "lon": 0.45873
    },
    {
        "id": 3024932,
        "nm": "Cintegabelle",
        "lat": 43.31316,
        "lon": 1.53333
    },
    {
        "id": 3024906,
        "nm": "Cires-les-Mello",
        "lat": 49.272419,
        "lon": 2.3584
    },
    {
        "id": 3024891,
        "nm": "Ciry-le-Noble",
        "lat": 46.606071,
        "lon": 4.29869
    },
    {
        "id": 3024886,
        "nm": "Cisse",
        "lat": 46.645828,
        "lon": 0.2287
    },
    {
        "id": 3024846,
        "nm": "Civray",
        "lat": 46.147099,
        "lon": 0.29509
    },
    {
        "id": 3024817,
        "nm": "Claira",
        "lat": 42.760361,
        "lon": 2.95572
    },
    {
        "id": 3024816,
        "nm": "Clairac",
        "lat": 44.360111,
        "lon": 0.37893
    },
    {
        "id": 3024801,
        "nm": "Clairoix",
        "lat": 49.442638,
        "lon": 2.84628
    },
    {
        "id": 3024788,
        "nm": "Claix",
        "lat": 45.12254,
        "lon": 5.67481
    },
    {
        "id": 3024783,
        "nm": "Clamart",
        "lat": 48.80299,
        "lon": 2.26692
    },
    {
        "id": 3024782,
        "nm": "Clamecy",
        "lat": 47.450001,
        "lon": 3.51667
    },
    {
        "id": 3024759,
        "nm": "Clapiers",
        "lat": 43.658329,
        "lon": 3.88917
    },
    {
        "id": 3024746,
        "nm": "Clarensac",
        "lat": 43.825359,
        "lon": 4.22047
    },
    {
        "id": 3024701,
        "nm": "Claye-Souilly",
        "lat": 48.94492,
        "lon": 2.68566
    },
    {
        "id": 3024691,
        "nm": "Cleder",
        "lat": 48.662998,
        "lon": -4.102
    },
    {
        "id": 3024682,
        "nm": "Cleguer",
        "lat": 47.854069,
        "lon": -3.38219
    },
    {
        "id": 3024681,
        "nm": "Cleguerec",
        "lat": 48.125778,
        "lon": -3.07162
    },
    {
        "id": 3024669,
        "nm": "Cleon",
        "lat": 49.312351,
        "lon": 1.0295
    },
    {
        "id": 3024651,
        "nm": "Clerieux",
        "lat": 45.077221,
        "lon": 4.95937
    },
    {
        "id": 3024643,
        "nm": "Clermont",
        "lat": 49.383331,
        "lon": 2.4
    },
    {
        "id": 3024635,
        "nm": "Clermont-Ferrand",
        "lat": 45.779659,
        "lon": 3.08628
    },
    {
        "id": 3024616,
        "nm": "Clery-Saint-Andre",
        "lat": 47.822182,
        "lon": 1.75091
    },
    {
        "id": 3024597,
        "nm": "Clichy",
        "lat": 48.900181,
        "lon": 2.30952
    },
    {
        "id": 3024596,
        "nm": "Clichy-sous-Bois",
        "lat": 48.910198,
        "lon": 2.55324
    },
    {
        "id": 3024578,
        "nm": "Clisson",
        "lat": 47.087139,
        "lon": -1.28286
    },
    {
        "id": 3024573,
        "nm": "Clohars-Carnoet",
        "lat": 47.796059,
        "lon": -3.58502
    },
    {
        "id": 3024572,
        "nm": "Clohars-Fouesnant",
        "lat": 47.896568,
        "lon": -4.06396
    },
    {
        "id": 3024552,
        "nm": "Clouange",
        "lat": 49.262402,
        "lon": 6.09723
    },
    {
        "id": 3024543,
        "nm": "Cloyes-sur-le-Loir",
        "lat": 47.997261,
        "lon": 1.23711
    },
    {
        "id": 3024534,
        "nm": "Cluny",
        "lat": 46.433182,
        "lon": 4.65845
    },
    {
        "id": 3024532,
        "nm": "Cluses",
        "lat": 46.062511,
        "lon": 6.57497
    },
    {
        "id": 3024525,
        "nm": "Coarraze",
        "lat": 43.166672,
        "lon": -0.23333
    },
    {
        "id": 3024479,
        "nm": "Cocheren",
        "lat": 49.146042,
        "lon": 6.8558
    },
    {
        "id": 3024463,
        "nm": "Codognan",
        "lat": 43.730339,
        "lon": 4.2212
    },
    {
        "id": 3024447,
        "nm": "Coex",
        "lat": 46.698078,
        "lon": -1.75956
    },
    {
        "id": 3024440,
        "nm": "Cognac",
        "lat": 45.700001,
        "lon": -0.33333
    },
    {
        "id": 3024426,
        "nm": "Cognin",
        "lat": 45.56377,
        "lon": 5.89435
    },
    {
        "id": 3024421,
        "nm": "Cogolin",
        "lat": 43.252209,
        "lon": 6.53002
    },
    {
        "id": 3024406,
        "nm": "Coignieres",
        "lat": 48.750099,
        "lon": 1.92082
    },
    {
        "id": 3024358,
        "nm": "Colayrac-Saint-Cirq",
        "lat": 44.220951,
        "lon": 0.55061
    },
    {
        "id": 3024328,
        "nm": "Collegien",
        "lat": 48.835709,
        "lon": 2.67365
    },
    {
        "id": 3024322,
        "nm": "Colleville-Montgomery",
        "lat": 49.27528,
        "lon": -0.30052
    },
    {
        "id": 3024314,
        "nm": "Collioure",
        "lat": 42.52462,
        "lon": 3.08235
    },
    {
        "id": 3024302,
        "nm": "Collonges-sous-Saleve",
        "lat": 46.141602,
        "lon": 6.15372
    },
    {
        "id": 3024297,
        "nm": "Colmar",
        "lat": 48.083328,
        "lon": 7.36667
    },
    {
        "id": 3024276,
        "nm": "Colomars",
        "lat": 43.754059,
        "lon": 7.2198
    },
    {
        "id": 3024267,
        "nm": "Colombelles",
        "lat": 49.204899,
        "lon": -0.29571
    },
    {
        "id": 3024266,
        "nm": "Colombes",
        "lat": 48.918819,
        "lon": 2.25404
    },
    {
        "id": 3024239,
        "nm": "Colombiers",
        "lat": 43.31424,
        "lon": 3.13947
    },
    {
        "id": 3024223,
        "nm": "Colomiers",
        "lat": 43.612469,
        "lon": 1.33278
    },
    {
        "id": 3024210,
        "nm": "Colpo",
        "lat": 47.81778,
        "lon": -2.81002
    },
    {
        "id": 3024142,
        "nm": "Combloux",
        "lat": 45.89669,
        "lon": 6.63444
    },
    {
        "id": 3024137,
        "nm": "Combourg",
        "lat": 48.41267,
        "lon": -1.74424
    },
    {
        "id": 3024126,
        "nm": "Combree",
        "lat": 47.70446,
        "lon": -1.03003
    },
    {
        "id": 3024112,
        "nm": "Combrit",
        "lat": 47.887341,
        "lon": -4.15817
    },
    {
        "id": 3024111,
        "nm": "Combronde",
        "lat": 45.98138,
        "lon": 3.08768
    },
    {
        "id": 3024107,
        "nm": "Combs-la-Ville",
        "lat": 48.66497,
        "lon": 2.56957
    },
    {
        "id": 3024102,
        "nm": "Comines",
        "lat": 50.761501,
        "lon": 3.01063
    },
    {
        "id": 3024094,
        "nm": "Commelle-Vernay",
        "lat": 45.994389,
        "lon": 4.06635
    },
    {
        "id": 3024090,
        "nm": "Commentry",
        "lat": 46.29211,
        "lon": 2.7416
    },
    {
        "id": 3024088,
        "nm": "Commequiers",
        "lat": 46.76049,
        "lon": -1.83901
    },
    {
        "id": 3024086,
        "nm": "Commercy",
        "lat": 48.76128,
        "lon": 5.59067
    },
    {
        "id": 3024074,
        "nm": "Communay",
        "lat": 45.606709,
        "lon": 4.83988
    },
    {
        "id": 3024066,
        "nm": "Compiegne",
        "lat": 49.417938,
        "lon": 2.82606
    },
    {
        "id": 3024035,
        "nm": "Concarneau",
        "lat": 47.875019,
        "lon": -3.92245
    },
    {
        "id": 3024026,
        "nm": "Conches-en-Ouche",
        "lat": 48.95768,
        "lon": 0.94052
    },
    {
        "id": 3023977,
        "nm": "Condat-sur-Vienne",
        "lat": 45.78648,
        "lon": 1.28454
    },
    {
        "id": 3023955,
        "nm": "Conde-sur-lEscaut",
        "lat": 50.454361,
        "lon": 3.58884
    },
    {
        "id": 3023953,
        "nm": "Conde-sur-Noireau",
        "lat": 48.848808,
        "lon": -0.55214
    },
    {
        "id": 3023951,
        "nm": "Conde-sur-Sarthe",
        "lat": 48.431969,
        "lon": 0.03398
    },
    {
        "id": 3023947,
        "nm": "Conde-sur-Vire",
        "lat": 49.049999,
        "lon": -1.03333
    },
    {
        "id": 3023946,
        "nm": "Condette",
        "lat": 50.658169,
        "lon": 1.63386
    },
    {
        "id": 3023943,
        "nm": "Condom",
        "lat": 43.95816,
        "lon": 0.37199
    },
    {
        "id": 3023937,
        "nm": "Condrieu",
        "lat": 45.46344,
        "lon": 4.76848
    },
    {
        "id": 3023925,
        "nm": "Conflans-en-Jarnisy",
        "lat": 49.167679,
        "lon": 5.84863
    },
    {
        "id": 3023924,
        "nm": "Conflans-Sainte-Honorine",
        "lat": 49.001579,
        "lon": 2.09694
    },
    {
        "id": 3023919,
        "nm": "Confolens",
        "lat": 46.01667,
        "lon": 0.66667
    },
    {
        "id": 3023908,
        "nm": "Congis-sur-Therouanne",
        "lat": 49,
        "lon": 2.98333
    },
    {
        "id": 3023880,
        "nm": "Connerre",
        "lat": 48.05698,
        "lon": 0.49344
    },
    {
        "id": 3023873,
        "nm": "Conques-sur-Orbiel",
        "lat": 43.26667,
        "lon": 2.41667
    },
    {
        "id": 3023842,
        "nm": "Contes",
        "lat": 43.812778,
        "lon": 7.31444
    },
    {
        "id": 3023812,
        "nm": "Contres",
        "lat": 47.417542,
        "lon": 1.42849
    },
    {
        "id": 3023808,
        "nm": "Contrexeville",
        "lat": 48.184238,
        "lon": 5.89572
    },
    {
        "id": 3023787,
        "nm": "Coquelles",
        "lat": 50.934608,
        "lon": 1.7988
    },
    {
        "id": 3023771,
        "nm": "Corbas",
        "lat": 45.6679,
        "lon": 4.89627
    },
    {
        "id": 3023767,
        "nm": "Corbehem",
        "lat": 50.331409,
        "lon": 3.04995
    },
    {
        "id": 3023763,
        "nm": "Corbeil-Essonnes",
        "lat": 48.60603,
        "lon": 2.48757
    },
    {
        "id": 3023759,
        "nm": "Corbelin",
        "lat": 45.608681,
        "lon": 5.54448
    },
    {
        "id": 3023742,
        "nm": "Corbie",
        "lat": 49.906719,
        "lon": 2.50682
    },
    {
        "id": 3023697,
        "nm": "Cordemais",
        "lat": 47.291069,
        "lon": -1.87869
    },
    {
        "id": 3023672,
        "nm": "Corenc",
        "lat": 45.214211,
        "lon": 5.77152
    },
    {
        "id": 3023645,
        "nm": "Cormeilles-en-Parisis",
        "lat": 48.971111,
        "lon": 2.20491
    },
    {
        "id": 3023643,
        "nm": "Cormelles-le-Royal",
        "lat": 49.15398,
        "lon": -0.33062
    },
    {
        "id": 3023628,
        "nm": "Cormontreuil",
        "lat": 49.216671,
        "lon": 4.05
    },
    {
        "id": 3023617,
        "nm": "Cornas",
        "lat": 44.964981,
        "lon": 4.84806
    },
    {
        "id": 3023611,
        "nm": "Corne",
        "lat": 47.470901,
        "lon": -0.34992
    },
    {
        "id": 3023606,
        "nm": "Cornebarrieu",
        "lat": 43.648949,
        "lon": 1.32407
    },
    {
        "id": 3023573,
        "nm": "Cornimont",
        "lat": 47.95998,
        "lon": 6.83038
    },
    {
        "id": 3023545,
        "nm": "Corps-Nuds",
        "lat": 47.979149,
        "lon": -1.58409
    },
    {
        "id": 3023543,
        "nm": "Corquilleroy",
        "lat": 48.042122,
        "lon": 2.70382
    },
    {
        "id": 3023512,
        "nm": "Corsept",
        "lat": 47.277031,
        "lon": -2.05904
    },
    {
        "id": 3023506,
        "nm": "Corte",
        "lat": 42.299999,
        "lon": 9.15
    },
    {
        "id": 3023484,
        "nm": "Cosnac",
        "lat": 45.135159,
        "lon": 1.58575
    },
    {
        "id": 3023476,
        "nm": "Cosne-Cours-sur-Loire",
        "lat": 47.411011,
        "lon": 2.92528
    },
    {
        "id": 3023477,
        "nm": "Cosnes-et-Romain",
        "lat": 49.519428,
        "lon": 5.71765
    },
    {
        "id": 3023466,
        "nm": "Cosse-le-Vivien",
        "lat": 47.94598,
        "lon": -0.91185
    },
    {
        "id": 3023410,
        "nm": "Cotignac",
        "lat": 43.528412,
        "lon": 6.15
    },
    {
        "id": 3023381,
        "nm": "Coublevie",
        "lat": 45.356239,
        "lon": 5.61759
    },
    {
        "id": 3023379,
        "nm": "Coubon",
        "lat": 44.997311,
        "lon": 3.91783
    },
    {
        "id": 3023375,
        "nm": "Coubron",
        "lat": 48.916672,
        "lon": 2.58333
    },
    {
        "id": 3023356,
        "nm": "Coudekerque-Branche",
        "lat": 51.022881,
        "lon": 2.39359
    },
    {
        "id": 3023344,
        "nm": "Coudoux",
        "lat": 43.557999,
        "lon": 5.24889
    },
    {
        "id": 3023324,
        "nm": "Coueron",
        "lat": 47.21508,
        "lon": -1.72171
    },
    {
        "id": 3023315,
        "nm": "Couffe",
        "lat": 47.391201,
        "lon": -1.29321
    },
    {
        "id": 3023309,
        "nm": "Coufouleux",
        "lat": 43.817131,
        "lon": 1.73078
    },
    {
        "id": 3023301,
        "nm": "Couhe",
        "lat": 46.29911,
        "lon": 0.18174
    },
    {
        "id": 3023296,
        "nm": "Couilly-Pont-aux-Dames",
        "lat": 48.884731,
        "lon": 2.85677
    },
    {
        "id": 3023291,
        "nm": "Coulaines",
        "lat": 48.02409,
        "lon": 0.20411
    },
    {
        "id": 3023281,
        "nm": "Coulanges-les-Nevers",
        "lat": 47.005089,
        "lon": 3.18756
    },
    {
        "id": 3023260,
        "nm": "Coullons",
        "lat": 47.62104,
        "lon": 2.49258
    },
    {
        "id": 3023254,
        "nm": "Coulogne",
        "lat": 50.924629,
        "lon": 1.88137
    },
    {
        "id": 3023240,
        "nm": "Coulommiers",
        "lat": 48.81451,
        "lon": 3.08498
    },
    {
        "id": 3023238,
        "nm": "Coulon",
        "lat": 46.32328,
        "lon": -0.5856
    },
    {
        "id": 3023214,
        "nm": "Coulounieix-Chamiers",
        "lat": 45.152889,
        "lon": 0.68852
    },
    {
        "id": 3023175,
        "nm": "Coupvray",
        "lat": 48.892891,
        "lon": 2.7967
    },
    {
        "id": 3023063,
        "nm": "Cour-Cheverny",
        "lat": 47.51033,
        "lon": 1.45583
    },
    {
        "id": 3023141,
        "nm": "Courbevoie",
        "lat": 48.896721,
        "lon": 2.25666
    },
    {
        "id": 3023107,
        "nm": "Courcelles-Chaussy",
        "lat": 49.10862,
        "lon": 6.40391
    },
    {
        "id": 3023097,
        "nm": "Courcelles-les-Lens",
        "lat": 50.416672,
        "lon": 3.01667
    },
    {
        "id": 3023066,
        "nm": "Courchelettes",
        "lat": 50.340439,
        "lon": 3.05938
    },
    {
        "id": 3023056,
        "nm": "Courcouronnes",
        "lat": 48.614288,
        "lon": 2.40762
    },
    {
        "id": 3023044,
        "nm": "Courdimanche",
        "lat": 49.03513,
        "lon": 2.00096
    },
    {
        "id": 3023014,
        "nm": "Courlay",
        "lat": 46.779411,
        "lon": -0.56607
    },
    {
        "id": 3022988,
        "nm": "Cournon-dAuvergne",
        "lat": 45.735432,
        "lon": 3.19608
    },
    {
        "id": 3022987,
        "nm": "Cournonsec",
        "lat": 43.549438,
        "lon": 3.70556
    },
    {
        "id": 3022986,
        "nm": "Cournonterral",
        "lat": 43.558891,
        "lon": 3.72
    },
    {
        "id": 3022977,
        "nm": "Courpiere",
        "lat": 45.756889,
        "lon": 3.54216
    },
    {
        "id": 3022969,
        "nm": "Courrieres",
        "lat": 50.457008,
        "lon": 2.94724
    },
    {
        "id": 3022964,
        "nm": "Cours-la-Ville",
        "lat": 46.099998,
        "lon": 4.31667
    },
    {
        "id": 3022956,
        "nm": "Coursan",
        "lat": 43.2337,
        "lon": 3.05712
    },
    {
        "id": 3022947,
        "nm": "Courseulles-sur-Mer",
        "lat": 49.330269,
        "lon": -0.45612
    },
    {
        "id": 3022911,
        "nm": "Courtenay",
        "lat": 48.039009,
        "lon": 3.05851
    },
    {
        "id": 3022897,
        "nm": "Courthezon",
        "lat": 44.087311,
        "lon": 4.88382
    },
    {
        "id": 3022882,
        "nm": "Courtisols",
        "lat": 48.986698,
        "lon": 4.517
    },
    {
        "id": 3022868,
        "nm": "Courtry",
        "lat": 48.91906,
        "lon": 2.60431
    },
    {
        "id": 3022862,
        "nm": "Courville-sur-Eure",
        "lat": 48.449001,
        "lon": 1.24085
    },
    {
        "id": 3022826,
        "nm": "Coutances",
        "lat": 49.049999,
        "lon": -1.43333
    },
    {
        "id": 3022804,
        "nm": "Coutiches",
        "lat": 50.4552,
        "lon": 3.20384
    },
    {
        "id": 3022799,
        "nm": "Coutras",
        "lat": 45.033329,
        "lon": -0.13333
    },
    {
        "id": 3022751,
        "nm": "Couzeix",
        "lat": 45.870468,
        "lon": 1.23828
    },
    {
        "id": 3022739,
        "nm": "Coye-la-Foret",
        "lat": 49.14233,
        "lon": 2.47038
    },
    {
        "id": 3022733,
        "nm": "Cozes",
        "lat": 45.583752,
        "lon": -0.83178
    },
    {
        "id": 3022726,
        "nm": "Crach",
        "lat": 47.617001,
        "lon": -3.0017
    },
    {
        "id": 3022700,
        "nm": "Cran-Gevrier",
        "lat": 45.900002,
        "lon": 6.1
    },
    {
        "id": 3022692,
        "nm": "Cranves-Sales",
        "lat": 46.187462,
        "lon": 6.29108
    },
    {
        "id": 3022690,
        "nm": "Craon",
        "lat": 47.846882,
        "lon": -0.94929
    },
    {
        "id": 3022683,
        "nm": "Craponne",
        "lat": 45.746841,
        "lon": 4.72661
    },
    {
        "id": 3022679,
        "nm": "Craponne-sur-Arzon",
        "lat": 45.331348,
        "lon": 3.84802
    },
    {
        "id": 3022665,
        "nm": "Cravanche",
        "lat": 47.656441,
        "lon": 6.83647
    },
    {
        "id": 3022641,
        "nm": "Creances",
        "lat": 49.198738,
        "lon": -1.56938
    },
    {
        "id": 3022633,
        "nm": "Creches-sur-Saone",
        "lat": 46.244751,
        "lon": 4.78678
    },
    {
        "id": 3022613,
        "nm": "Cregy-les-Meaux",
        "lat": 48.976479,
        "lon": 2.87483
    },
    {
        "id": 3022612,
        "nm": "Crehange",
        "lat": 49.049519,
        "lon": 6.58012
    },
    {
        "id": 3022610,
        "nm": "Creil",
        "lat": 49.256721,
        "lon": 2.48477
    },
    {
        "id": 3022600,
        "nm": "Cremieu",
        "lat": 45.728989,
        "lon": 5.24839
    },
    {
        "id": 3022585,
        "nm": "Creon",
        "lat": 44.77457,
        "lon": -0.348
    },
    {
        "id": 3022569,
        "nm": "Crepy-en-Valois",
        "lat": 49.233589,
        "lon": 2.88807
    },
    {
        "id": 3022559,
        "nm": "Crespin",
        "lat": 50.421101,
        "lon": 3.66137
    },
    {
        "id": 3022540,
        "nm": "Crest",
        "lat": 44.728359,
        "lon": 5.02722
    },
    {
        "id": 3022530,
        "nm": "Creteil",
        "lat": 48.783329,
        "lon": 2.46667
    },
    {
        "id": 3022513,
        "nm": "Creutzwald",
        "lat": 49.200001,
        "lon": 6.68333
    },
    {
        "id": 3022509,
        "nm": "Creuzier-le-Vieux",
        "lat": 46.162529,
        "lon": 3.43311
    },
    {
        "id": 3022498,
        "nm": "Crevecoeur-le-Grand",
        "lat": 49.599998,
        "lon": 2.08333
    },
    {
        "id": 3022480,
        "nm": "Creysse",
        "lat": 44.85474,
        "lon": 0.56583
    },
    {
        "id": 3022461,
        "nm": "Criel-sur-Mer",
        "lat": 50.015079,
        "lon": 1.31459
    },
    {
        "id": 3022433,
        "nm": "Crissey",
        "lat": 46.816521,
        "lon": 4.88185
    },
    {
        "id": 3022382,
        "nm": "Croissy-Beaubourg",
        "lat": 48.8283,
        "lon": 2.66964
    },
    {
        "id": 3022380,
        "nm": "Croissy-sur-Seine",
        "lat": 48.87925,
        "lon": 2.13836
    },
    {
        "id": 3022376,
        "nm": "Croix",
        "lat": 50.678459,
        "lon": 3.1493
    },
    {
        "id": 3022331,
        "nm": "Crolles",
        "lat": 45.281979,
        "lon": 5.87824
    },
    {
        "id": 3022301,
        "nm": "Crosne",
        "lat": 48.719219,
        "lon": 2.45728
    },
    {
        "id": 3022300,
        "nm": "Crossac",
        "lat": 47.411201,
        "lon": -2.16952
    },
    {
        "id": 3022271,
        "nm": "Crouy",
        "lat": 49.40274,
        "lon": 3.35834
    },
    {
        "id": 3022242,
        "nm": "Crozon",
        "lat": 48.246429,
        "lon": -4.48993
    },
    {
        "id": 3022238,
        "nm": "Cruas",
        "lat": 44.655441,
        "lon": 4.76144
    },
    {
        "id": 3022217,
        "nm": "Cruseilles",
        "lat": 46.033329,
        "lon": 6.11667
    },
    {
        "id": 3022177,
        "nm": "Cubzac-les-Ponts",
        "lat": 44.971191,
        "lon": -0.44976
    },
    {
        "id": 3022167,
        "nm": "Cucq",
        "lat": 50.477329,
        "lon": 1.62018
    },
    {
        "id": 3022164,
        "nm": "Cucuron",
        "lat": 43.773209,
        "lon": 5.439
    },
    {
        "id": 3022158,
        "nm": "Cuers",
        "lat": 43.237309,
        "lon": 6.07107
    },
    {
        "id": 3022153,
        "nm": "Cugand",
        "lat": 47.063179,
        "lon": -1.2527
    },
    {
        "id": 3022152,
        "nm": "Cuges-les-Pins",
        "lat": 43.275848,
        "lon": 5.69944
    },
    {
        "id": 3022151,
        "nm": "Cugnaux",
        "lat": 43.53635,
        "lon": 1.34428
    },
    {
        "id": 3022133,
        "nm": "Cuincy",
        "lat": 50.37933,
        "lon": 3.05301
    },
    {
        "id": 3022123,
        "nm": "Cuise-la-Motte",
        "lat": 49.386421,
        "lon": 3.00588
    },
    {
        "id": 3022119,
        "nm": "Cuisiat",
        "lat": 46.300209,
        "lon": 5.3881
    },
    {
        "id": 3022093,
        "nm": "Culoz",
        "lat": 45.84964,
        "lon": 5.78081
    },
    {
        "id": 3021993,
        "nm": "Cusset",
        "lat": 46.13002,
        "lon": 3.45963
    },
    {
        "id": 3021980,
        "nm": "Custines",
        "lat": 48.793629,
        "lon": 6.14835
    },
    {
        "id": 3021935,
        "nm": "Cysoing",
        "lat": 50.569389,
        "lon": 3.21627
    },
    {
        "id": 3021933,
        "nm": "Dabo",
        "lat": 48.653709,
        "lon": 7.23636
    },
    {
        "id": 3021930,
        "nm": "Dadonville",
        "lat": 48.157761,
        "lon": 2.2715
    },
    {
        "id": 3021927,
        "nm": "Dagneux",
        "lat": 45.851398,
        "lon": 5.0778
    },
    {
        "id": 3021911,
        "nm": "Dainville",
        "lat": 50.280979,
        "lon": 2.72603
    },
    {
        "id": 3021888,
        "nm": "Dambach-la-Ville",
        "lat": 48.323792,
        "lon": 7.42547
    },
    {
        "id": 3021872,
        "nm": "Damelevieres",
        "lat": 48.557362,
        "lon": 6.38611
    },
    {
        "id": 3021859,
        "nm": "Damigny",
        "lat": 48.450001,
        "lon": 0.06667
    },
    {
        "id": 3021852,
        "nm": "Dammarie-les-Lys",
        "lat": 48.51667,
        "lon": 2.65
    },
    {
        "id": 3021848,
        "nm": "Dammartin-en-Goele",
        "lat": 49.05423,
        "lon": 2.67777
    },
    {
        "id": 3021841,
        "nm": "Damparis",
        "lat": 47.075562,
        "lon": 5.41398
    },
    {
        "id": 3021806,
        "nm": "Dampmart",
        "lat": 48.888538,
        "lon": 2.74095
    },
    {
        "id": 3021795,
        "nm": "Damville",
        "lat": 48.869301,
        "lon": 1.07458
    },
    {
        "id": 3021778,
        "nm": "Dange-Saint-Romain",
        "lat": 46.933331,
        "lon": 0.6
    },
    {
        "id": 3021767,
        "nm": "Danjoutin",
        "lat": 47.615601,
        "lon": 6.86638
    },
    {
        "id": 3021762,
        "nm": "Dannemarie",
        "lat": 47.63031,
        "lon": 7.12237
    },
    {
        "id": 3021729,
        "nm": "Dardilly",
        "lat": 45.805061,
        "lon": 4.75342
    },
    {
        "id": 3021717,
        "nm": "Darnetal",
        "lat": 49.445332,
        "lon": 1.15144
    },
    {
        "id": 3021676,
        "nm": "Davezieux",
        "lat": 45.25732,
        "lon": 4.70875
    },
    {
        "id": 3021670,
        "nm": "Dax",
        "lat": 43.71032,
        "lon": -1.05366
    },
    {
        "id": 3021668,
        "nm": "Deauville",
        "lat": 49.356998,
        "lon": 0.06995
    },
    {
        "id": 3021664,
        "nm": "Decazeville",
        "lat": 44.560452,
        "lon": 2.25091
    },
    {
        "id": 3021663,
        "nm": "Dechy",
        "lat": 50.349998,
        "lon": 3.11667
    },
    {
        "id": 3021662,
        "nm": "Decines-Charpieu",
        "lat": 45.76899,
        "lon": 4.97277
    },
    {
        "id": 3021661,
        "nm": "Decize",
        "lat": 46.828522,
        "lon": 3.46192
    },
    {
        "id": 3021629,
        "nm": "Delle",
        "lat": 47.510479,
        "lon": 6.99963
    },
    {
        "id": 3021609,
        "nm": "Demouville",
        "lat": 49.180012,
        "lon": -0.26947
    },
    {
        "id": 3021605,
        "nm": "Denain",
        "lat": 50.3293,
        "lon": 3.3943
    },
    {
        "id": 3021570,
        "nm": "Deols",
        "lat": 46.829342,
        "lon": 1.70428
    },
    {
        "id": 3021552,
        "nm": "Derval",
        "lat": 47.66724,
        "lon": -1.6699
    },
    {
        "id": 3021543,
        "nm": "Desertines",
        "lat": 46.355209,
        "lon": 2.62074
    },
    {
        "id": 3021524,
        "nm": "Desvres",
        "lat": 50.668839,
        "lon": 1.83478
    },
    {
        "id": 3021518,
        "nm": "Dettwiller",
        "lat": 48.75415,
        "lon": 7.46633
    },
    {
        "id": 3021516,
        "nm": "Deuil-la-Barre",
        "lat": 48.976742,
        "lon": 2.32722
    },
    {
        "id": 3021484,
        "nm": "Deville-les-Rouen",
        "lat": 49.469421,
        "lon": 1.05214
    },
    {
        "id": 3021435,
        "nm": "Die",
        "lat": 44.75,
        "lon": 5.36667
    },
    {
        "id": 3021419,
        "nm": "Diemoz",
        "lat": 45.58651,
        "lon": 5.09397
    },
    {
        "id": 3021411,
        "nm": "Dieppe",
        "lat": 49.933331,
        "lon": 1.08333
    },
    {
        "id": 3021397,
        "nm": "Dieulefit",
        "lat": 44.523411,
        "lon": 5.06425
    },
    {
        "id": 3021394,
        "nm": "Dieulouard",
        "lat": 48.8414,
        "lon": 6.06808
    },
    {
        "id": 3021392,
        "nm": "Dieuze",
        "lat": 48.81263,
        "lon": 6.7178
    },
    {
        "id": 3021382,
        "nm": "Digne-les-Bains",
        "lat": 44.092522,
        "lon": 6.23199
    },
    {
        "id": 3021377,
        "nm": "Digoin",
        "lat": 46.481239,
        "lon": 3.97946
    },
    {
        "id": 3021372,
        "nm": "Dijon",
        "lat": 47.316669,
        "lon": 5.01667
    },
    {
        "id": 3021356,
        "nm": "Dinan",
        "lat": 48.450001,
        "lon": -2.03333
    },
    {
        "id": 3021351,
        "nm": "Dinard",
        "lat": 48.631432,
        "lon": -2.06144
    },
    {
        "id": 3021349,
        "nm": "Dineault",
        "lat": 48.219219,
        "lon": -4.16411
    },
    {
        "id": 3021328,
        "nm": "Dirinon",
        "lat": 48.397751,
        "lon": -4.27016
    },
    {
        "id": 3021319,
        "nm": "Dissay",
        "lat": 46.700069,
        "lon": 0.43311
    },
    {
        "id": 3021301,
        "nm": "Dives-sur-Mer",
        "lat": 49.281761,
        "lon": -0.10125
    },
    {
        "id": 3021298,
        "nm": "Divion",
        "lat": 50.471691,
        "lon": 2.50546
    },
    {
        "id": 3021296,
        "nm": "Divonne-les-Bains",
        "lat": 46.359379,
        "lon": 6.13574
    },
    {
        "id": 3021264,
        "nm": "Dol-de-Bretagne",
        "lat": 48.547649,
        "lon": -1.75018
    },
    {
        "id": 3021263,
        "nm": "Dole",
        "lat": 47.099998,
        "lon": 5.5
    },
    {
        "id": 3021247,
        "nm": "Dolomieu",
        "lat": 45.613281,
        "lon": 5.50016
    },
    {
        "id": 3021244,
        "nm": "Dolus-dOleron",
        "lat": 45.916672,
        "lon": -1.26667
    },
    {
        "id": 3021233,
        "nm": "Domancy",
        "lat": 45.914181,
        "lon": 6.6474
    },
    {
        "id": 3021221,
        "nm": "Dombasle-sur-Meurthe",
        "lat": 48.625198,
        "lon": 6.34967
    },
    {
        "id": 3021210,
        "nm": "Domene",
        "lat": 45.203449,
        "lon": 5.83905
    },
    {
        "id": 3021209,
        "nm": "Domerat",
        "lat": 46.360641,
        "lon": 2.53426
    },
    {
        "id": 3021193,
        "nm": "Domfront",
        "lat": 48.592079,
        "lon": -0.64588
    },
    {
        "id": 3021150,
        "nm": "Domont",
        "lat": 49.027821,
        "lon": 2.32638
    },
    {
        "id": 3021133,
        "nm": "Dompierre-sur-Besbre",
        "lat": 46.519619,
        "lon": 3.69905
    },
    {
        "id": 3021128,
        "nm": "Dompierre-sur-Mer",
        "lat": 46.188171,
        "lon": -1.06351
    },
    {
        "id": 3021124,
        "nm": "Dompierre-sur-Yon",
        "lat": 46.738571,
        "lon": -1.38463
    },
    {
        "id": 3021100,
        "nm": "Donchery",
        "lat": 49.695839,
        "lon": 4.87417
    },
    {
        "id": 3021093,
        "nm": "Donges",
        "lat": 47.318241,
        "lon": -2.07538
    },
    {
        "id": 3021080,
        "nm": "Donnemarie-Dontilly",
        "lat": 48.477188,
        "lon": 3.13162
    },
    {
        "id": 3021077,
        "nm": "Donnery",
        "lat": 47.91486,
        "lon": 2.10299
    },
    {
        "id": 3021067,
        "nm": "Donville-les-Bains",
        "lat": 48.846081,
        "lon": -1.58315
    },
    {
        "id": 3021062,
        "nm": "Donzenac",
        "lat": 45.227951,
        "lon": 1.52375
    },
    {
        "id": 3021061,
        "nm": "Donzere",
        "lat": 44.440891,
        "lon": 4.71179
    },
    {
        "id": 3021045,
        "nm": "Dordives",
        "lat": 48.142529,
        "lon": 2.76775
    },
    {
        "id": 3021035,
        "nm": "Dorlisheim",
        "lat": 48.524849,
        "lon": 7.48624
    },
    {
        "id": 3021034,
        "nm": "Dormans",
        "lat": 49.073921,
        "lon": 3.63819
    },
    {
        "id": 3021013,
        "nm": "Dortan",
        "lat": 46.319729,
        "lon": 5.66028
    },
    {
        "id": 3021000,
        "nm": "Douai",
        "lat": 50.366669,
        "lon": 3.06667
    },
    {
        "id": 3020996,
        "nm": "Douarnenez",
        "lat": 48.095421,
        "lon": -4.32904
    },
    {
        "id": 3020991,
        "nm": "Doubs",
        "lat": 46.927879,
        "lon": 6.35104
    },
    {
        "id": 3020980,
        "nm": "Douchy-les-Mines",
        "lat": 50.3008,
        "lon": 3.3927
    },
    {
        "id": 3020971,
        "nm": "Doudeville",
        "lat": 49.722679,
        "lon": 0.78479
    },
    {
        "id": 3020964,
        "nm": "Doue-la-Fontaine",
        "lat": 47.193722,
        "lon": -0.27492
    },
    {
        "id": 3020944,
        "nm": "Doullens",
        "lat": 50.157242,
        "lon": 2.34019
    },
    {
        "id": 3020925,
        "nm": "Dourdan",
        "lat": 48.527721,
        "lon": 2.01113
    },
    {
        "id": 3020917,
        "nm": "Dourges",
        "lat": 50.436359,
        "lon": 2.98589
    },
    {
        "id": 3020900,
        "nm": "Doussard",
        "lat": 45.775558,
        "lon": 6.21941
    },
    {
        "id": 3020894,
        "nm": "Douvaine",
        "lat": 46.305439,
        "lon": 6.30375
    },
    {
        "id": 3020887,
        "nm": "Douvres-la-Delivrande",
        "lat": 49.29472,
        "lon": -0.38039
    },
    {
        "id": 3020886,
        "nm": "Douvrin",
        "lat": 50.509159,
        "lon": 2.83053
    },
    {
        "id": 3020850,
        "nm": "Draguignan",
        "lat": 43.533329,
        "lon": 6.46667
    },
    {
        "id": 3020839,
        "nm": "Drancy",
        "lat": 48.925781,
        "lon": 2.44533
    },
    {
        "id": 3020834,
        "nm": "Drap",
        "lat": 43.756142,
        "lon": 7.3206
    },
    {
        "id": 3020832,
        "nm": "Draveil",
        "lat": 48.684662,
        "lon": 2.41418
    },
    {
        "id": 3020825,
        "nm": "Dremil-Lafage",
        "lat": 43.596241,
        "lon": 1.60117
    },
    {
        "id": 3020818,
        "nm": "Dreslincourt",
        "lat": 49.528091,
        "lon": 2.92699
    },
    {
        "id": 3020810,
        "nm": "Dreux",
        "lat": 48.73333,
        "lon": 1.36667
    },
    {
        "id": 3020792,
        "nm": "Drocourt",
        "lat": 50.390018,
        "lon": 2.92425
    },
    {
        "id": 3020737,
        "nm": "Drumettaz-Clarafond",
        "lat": 45.66037,
        "lon": 5.92146
    },
    {
        "id": 3020736,
        "nm": "Drusenheim",
        "lat": 48.764278,
        "lon": 7.95053
    },
    {
        "id": 3020722,
        "nm": "Ducey",
        "lat": 48.61842,
        "lon": -1.29052
    },
    {
        "id": 3020720,
        "nm": "Duclair",
        "lat": 49.483849,
        "lon": 0.87617
    },
    {
        "id": 3020712,
        "nm": "Dugny",
        "lat": 48.953709,
        "lon": 2.41734
    },
    {
        "id": 3020678,
        "nm": "Dun-sur-Auron",
        "lat": 46.884899,
        "lon": 2.57345
    },
    {
        "id": 3020688,
        "nm": "Dunieres",
        "lat": 45.215981,
        "lon": 4.34579
    },
    {
        "id": 3020686,
        "nm": "Dunkerque",
        "lat": 51.049999,
        "lon": 2.36667
    },
    {
        "id": 3020621,
        "nm": "Durtal",
        "lat": 47.67247,
        "lon": -0.23393
    },
    {
        "id": 3020620,
        "nm": "Durtol",
        "lat": 45.796219,
        "lon": 3.05264
    },
    {
        "id": 3020614,
        "nm": "Duttlenheim",
        "lat": 48.525532,
        "lon": 7.56572
    },
    {
        "id": 3020601,
        "nm": "Eaubonne",
        "lat": 48.99712,
        "lon": 2.28249
    },
    {
        "id": 3020593,
        "nm": "Eaunes",
        "lat": 43.420792,
        "lon": 1.35397
    },
    {
        "id": 3020584,
        "nm": "Eauze",
        "lat": 43.86055,
        "lon": 0.10199
    },
    {
        "id": 3020576,
        "nm": "Ebersheim",
        "lat": 48.304379,
        "lon": 7.49903
    },
    {
        "id": 3020565,
        "nm": "Ecaillon",
        "lat": 50.350342,
        "lon": 3.21664
    },
    {
        "id": 3020510,
        "nm": "Echenoz-la-Meline",
        "lat": 47.600861,
        "lon": 6.13544
    },
    {
        "id": 3020500,
        "nm": "Echillais",
        "lat": 45.900719,
        "lon": -0.95211
    },
    {
        "id": 3020497,
        "nm": "Echire",
        "lat": 46.387482,
        "lon": -0.41511
    },
    {
        "id": 3020495,
        "nm": "Echirolles",
        "lat": 45.143902,
        "lon": 5.72883
    },
    {
        "id": 3020489,
        "nm": "Eckbolsheim",
        "lat": 48.58075,
        "lon": 7.68768
    },
    {
        "id": 3020462,
        "nm": "Ecommoy",
        "lat": 47.825649,
        "lon": 0.27422
    },
    {
        "id": 3020440,
        "nm": "Ecouen",
        "lat": 49.020618,
        "lon": 2.38309
    },
    {
        "id": 3020439,
        "nm": "Ecouflant",
        "lat": 47.53101,
        "lon": -0.5278
    },
    {
        "id": 3020426,
        "nm": "Ecquevilly",
        "lat": 48.95192,
        "lon": 1.92338
    },
    {
        "id": 3020411,
        "nm": "Ecrouves",
        "lat": 48.679371,
        "lon": 5.84433
    },
    {
        "id": 3020401,
        "nm": "Ecuelles",
        "lat": 48.356361,
        "lon": 2.82336
    },
    {
        "id": 3020392,
        "nm": "Ecully",
        "lat": 45.77726,
        "lon": 4.77481
    },
    {
        "id": 3020374,
        "nm": "Edern",
        "lat": 48.099998,
        "lon": -3.98333
    },
    {
        "id": 3020358,
        "nm": "Egletons",
        "lat": 45.403358,
        "lon": 2.05073
    },
    {
        "id": 3020346,
        "nm": "Egly",
        "lat": 48.578281,
        "lon": 2.22416
    },
    {
        "id": 3020335,
        "nm": "Egreville",
        "lat": 48.17606,
        "lon": 2.87278
    },
    {
        "id": 3020330,
        "nm": "Eguilles",
        "lat": 43.568668,
        "lon": 5.35575
    },
    {
        "id": 3005102,
        "nm": "el Volo",
        "lat": 42.524239,
        "lon": 2.83336
    },
    {
        "id": 3020310,
        "nm": "Elancourt",
        "lat": 48.784199,
        "lon": 1.9552
    },
    {
        "id": 3020307,
        "nm": "Elbeuf",
        "lat": 49.28669,
        "lon": 1.00288
    },
    {
        "id": 3020300,
        "nm": "Eleu-dit-Leauwette",
        "lat": 50.423401,
        "lon": 2.81134
    },
    {
        "id": 3020283,
        "nm": "Elliant",
        "lat": 47.994171,
        "lon": -3.88966
    },
    {
        "id": 3020281,
        "nm": "Elne",
        "lat": 42.600311,
        "lon": 2.97146
    },
    {
        "id": 3020275,
        "nm": "Eloyes",
        "lat": 48.097931,
        "lon": 6.60653
    },
    {
        "id": 3037875,
        "nm": "els Banys dArles",
        "lat": 42.472889,
        "lon": 2.66916
    },
    {
        "id": 3020271,
        "nm": "Elven",
        "lat": 47.7323,
        "lon": -2.58956
    },
    {
        "id": 3020251,
        "nm": "Embrun",
        "lat": 44.563869,
        "lon": 6.49526
    },
    {
        "id": 3020247,
        "nm": "Emerainville",
        "lat": 48.812759,
        "lon": 2.62139
    },
    {
        "id": 3020236,
        "nm": "Emmerin",
        "lat": 50.594749,
        "lon": 3.00124
    },
    {
        "id": 3020188,
        "nm": "Enghien-les-Bains",
        "lat": 48.966671,
        "lon": 2.31667
    },
    {
        "id": 3020169,
        "nm": "Ennery",
        "lat": 49.07505,
        "lon": 2.10599
    },
    {
        "id": 3020165,
        "nm": "Ennevelin",
        "lat": 50.54121,
        "lon": 3.12972
    },
    {
        "id": 3020164,
        "nm": "Ennezat",
        "lat": 45.897678,
        "lon": 3.22217
    },
    {
        "id": 3020152,
        "nm": "Ensisheim",
        "lat": 47.866951,
        "lon": 7.35212
    },
    {
        "id": 3020149,
        "nm": "Ensues-la-Redonne",
        "lat": 43.354641,
        "lon": 5.20357
    },
    {
        "id": 3020142,
        "nm": "Entraigues-sur-la-Sorgue",
        "lat": 44,
        "lon": 4.91667
    },
    {
        "id": 3020139,
        "nm": "Entrammes",
        "lat": 47.997589,
        "lon": -0.71399
    },
    {
        "id": 3020116,
        "nm": "Entzheim",
        "lat": 48.532242,
        "lon": 7.63329
    },
    {
        "id": 3020108,
        "nm": "Envermeu",
        "lat": 49.895599,
        "lon": 1.26492
    },
    {
        "id": 3020097,
        "nm": "Epagny",
        "lat": 45.938061,
        "lon": 6.09095
    },
    {
        "id": 3020065,
        "nm": "Eperlecques",
        "lat": 50.80566,
        "lon": 2.15207
    },
    {
        "id": 3020062,
        "nm": "Epernay",
        "lat": 49.049999,
        "lon": 3.95
    },
    {
        "id": 3020057,
        "nm": "Epernon",
        "lat": 48.610321,
        "lon": 1.67218
    },
    {
        "id": 3020051,
        "nm": "Epfig",
        "lat": 48.359329,
        "lon": 7.46427
    },
    {
        "id": 3020036,
        "nm": "Epinac",
        "lat": 46.98333,
        "lon": 4.51667
    },
    {
        "id": 3020035,
        "nm": "Epinal",
        "lat": 48.183331,
        "lon": 6.45
    },
    {
        "id": 3020024,
        "nm": "Epinay-sous-Senart",
        "lat": 48.689701,
        "lon": 2.51186
    },
    {
        "id": 3020021,
        "nm": "Epinay-sur-Orge",
        "lat": 48.673382,
        "lon": 2.31074
    },
    {
        "id": 3020020,
        "nm": "Epinay-sur-Seine",
        "lat": 48.953499,
        "lon": 2.31514
    },
    {
        "id": 3019985,
        "nm": "Epone",
        "lat": 48.954762,
        "lon": 1.82233
    },
    {
        "id": 3019981,
        "nm": "Epouville",
        "lat": 49.563492,
        "lon": 0.22372
    },
    {
        "id": 3019977,
        "nm": "Eppeville",
        "lat": 49.740688,
        "lon": 3.05114
    },
    {
        "id": 3019960,
        "nm": "Equeurdreville-Hainneville",
        "lat": 49.648682,
        "lon": -1.65306
    },
    {
        "id": 3019957,
        "nm": "Equihen-Plage",
        "lat": 50.675571,
        "lon": 1.57225
    },
    {
        "id": 3019952,
        "nm": "Eragny",
        "lat": 49.01667,
        "lon": 2.1
    },
    {
        "id": 3019944,
        "nm": "Erbray",
        "lat": 47.654919,
        "lon": -1.31783
    },
    {
        "id": 3019930,
        "nm": "Erdeven",
        "lat": 47.642101,
        "lon": -3.15706
    },
    {
        "id": 3019920,
        "nm": "Ergue-Gaberic",
        "lat": 47.995621,
        "lon": -4.02223
    },
    {
        "id": 3019897,
        "nm": "Ermont",
        "lat": 48.99004,
        "lon": 2.25804
    },
    {
        "id": 3019895,
        "nm": "Ernee",
        "lat": 48.297642,
        "lon": -0.93143
    },
    {
        "id": 3019877,
        "nm": "Erquinghem-Lys",
        "lat": 50.67601,
        "lon": 2.84505
    },
    {
        "id": 3019875,
        "nm": "Erquy",
        "lat": 48.631859,
        "lon": -2.4628
    },
    {
        "id": 3019865,
        "nm": "Erstein",
        "lat": 48.423729,
        "lon": 7.66262
    },
    {
        "id": 3019854,
        "nm": "Esbly",
        "lat": 48.905201,
        "lon": 2.81235
    },
    {
        "id": 3019843,
        "nm": "Escalquens",
        "lat": 43.517441,
        "lon": 1.55893
    },
    {
        "id": 3019827,
        "nm": "Escaudain",
        "lat": 50.333149,
        "lon": 3.3443
    },
    {
        "id": 3019825,
        "nm": "Escaudoeuvres",
        "lat": 50.200001,
        "lon": 3.26667
    },
    {
        "id": 3019820,
        "nm": "Escautpont",
        "lat": 50.418751,
        "lon": 3.55341
    },
    {
        "id": 3019817,
        "nm": "Eschau",
        "lat": 48.488972,
        "lon": 7.71644
    },
    {
        "id": 3019733,
        "nm": "Esnandes",
        "lat": 46.250332,
        "lon": -1.11566
    },
    {
        "id": 3019717,
        "nm": "Espalion",
        "lat": 44.522369,
        "lon": 2.76265
    },
    {
        "id": 3019716,
        "nm": "Espaly-Saint-Marcel",
        "lat": 45.047901,
        "lon": 3.86557
    },
    {
        "id": 3019699,
        "nm": "Espelette",
        "lat": 43.340149,
        "lon": -1.44737
    },
    {
        "id": 3019695,
        "nm": "Esperaza",
        "lat": 42.932251,
        "lon": 2.22006
    },
    {
        "id": 3019643,
        "nm": "Esquelbecq",
        "lat": 50.88694,
        "lon": 2.43215
    },
    {
        "id": 3019621,
        "nm": "Essert",
        "lat": 47.632542,
        "lon": 6.81539
    },
    {
        "id": 3019607,
        "nm": "Essey-les-Nancy",
        "lat": 48.70179,
        "lon": 6.22425
    },
    {
        "id": 3019601,
        "nm": "Essomes-sur-Marne",
        "lat": 49.028809,
        "lon": 3.37571
    },
    {
        "id": 3019584,
        "nm": "Estagel",
        "lat": 42.77314,
        "lon": 2.69665
    },
    {
        "id": 3019578,
        "nm": "Estaires",
        "lat": 50.645741,
        "lon": 2.72782
    },
    {
        "id": 3019515,
        "nm": "Estrablin",
        "lat": 45.517319,
        "lon": 4.96626
    },
    {
        "id": 3019500,
        "nm": "Estrees-Saint-Denis",
        "lat": 49.426022,
        "lon": 2.64293
    },
    {
        "id": 3019485,
        "nm": "Esvres",
        "lat": 47.28537,
        "lon": 0.78588
    },
    {
        "id": 3019480,
        "nm": "Etables-sur-Mer",
        "lat": 48.633331,
        "lon": -2.83333
    },
    {
        "id": 3019474,
        "nm": "Etain",
        "lat": 49.212589,
        "lon": 5.64022
    },
    {
        "id": 3019459,
        "nm": "Etampes",
        "lat": 48.433331,
        "lon": 2.15
    },
    {
        "id": 3019443,
        "nm": "Etang-sur-Arroux",
        "lat": 46.865601,
        "lon": 4.18988
    },
    {
        "id": 3019441,
        "nm": "Etaples",
        "lat": 50.521938,
        "lon": 1.63319
    },
    {
        "id": 3019436,
        "nm": "Etaules",
        "lat": 45.73407,
        "lon": -1.09918
    },
    {
        "id": 3019423,
        "nm": "Etel",
        "lat": 47.656139,
        "lon": -3.20018
    },
    {
        "id": 3019406,
        "nm": "Etiolles",
        "lat": 48.632481,
        "lon": 2.48226
    },
    {
        "id": 3019402,
        "nm": "Etival-Clairefontaine",
        "lat": 48.365189,
        "lon": 6.86118
    },
    {
        "id": 3019401,
        "nm": "Etival-les-le-Mans",
        "lat": 47.950001,
        "lon": 0.08333
    },
    {
        "id": 3019391,
        "nm": "Etoile-sur-Rhone",
        "lat": 44.83812,
        "lon": 4.89159
    },
    {
        "id": 3019372,
        "nm": "Etrechy",
        "lat": 48.494652,
        "lon": 2.19489
    },
    {
        "id": 3019367,
        "nm": "Etrelles",
        "lat": 48.06031,
        "lon": -1.19402
    },
    {
        "id": 3019363,
        "nm": "Etrepagny",
        "lat": 49.306229,
        "lon": 1.6114
    },
    {
        "id": 3019335,
        "nm": "Etupes",
        "lat": 47.505249,
        "lon": 6.87075
    },
    {
        "id": 3019329,
        "nm": "Eu",
        "lat": 50.046059,
        "lon": 1.42079
    },
    {
        "id": 3019293,
        "nm": "Evenos",
        "lat": 43.15863,
        "lon": 5.84786
    },
    {
        "id": 3019280,
        "nm": "Evian-les-Bains",
        "lat": 46.401112,
        "lon": 6.58793
    },
    {
        "id": 3019276,
        "nm": "Evin-Malmaison",
        "lat": 50.439232,
        "lon": 3.03138
    },
    {
        "id": 3019265,
        "nm": "Evreux",
        "lat": 49.024139,
        "lon": 1.15082
    },
    {
        "id": 3019259,
        "nm": "Evron",
        "lat": 48.156422,
        "lon": -0.3997
    },
    {
        "id": 3019256,
        "nm": "Evry",
        "lat": 48.633331,
        "lon": 2.45
    },
    {
        "id": 3019248,
        "nm": "Exincourt",
        "lat": 47.494652,
        "lon": 6.83169
    },
    {
        "id": 3019238,
        "nm": "Eybens",
        "lat": 45.14867,
        "lon": 5.74926
    },
    {
        "id": 3019229,
        "nm": "Eygalieres",
        "lat": 43.76099,
        "lon": 4.94968
    },
    {
        "id": 3019219,
        "nm": "Eyguieres",
        "lat": 43.694809,
        "lon": 5.03131
    },
    {
        "id": 3019212,
        "nm": "Eymet",
        "lat": 44.668121,
        "lon": 0.39961
    },
    {
        "id": 3019209,
        "nm": "Eymoutiers",
        "lat": 45.7379,
        "lon": 1.74189
    },
    {
        "id": 3019203,
        "nm": "Eyragues",
        "lat": 43.84103,
        "lon": 4.84231
    },
    {
        "id": 3019193,
        "nm": "Eysines",
        "lat": 44.883518,
        "lon": -0.64686
    },
    {
        "id": 3019176,
        "nm": "Eyzin-Pinet",
        "lat": 45.472408,
        "lon": 4.99841
    },
    {
        "id": 3019175,
        "nm": "Ezanville",
        "lat": 49.027939,
        "lon": 2.36786
    },
    {
        "id": 3019174,
        "nm": "Eze",
        "lat": 43.716671,
        "lon": 7.36667
    },
    {
        "id": 3019170,
        "nm": "Ezy-sur-Eure",
        "lat": 48.866669,
        "lon": 1.41667
    },
    {
        "id": 3019160,
        "nm": "Fabregues",
        "lat": 43.550571,
        "lon": 3.77638
    },
    {
        "id": 3019153,
        "nm": "Faches-Thumesnil",
        "lat": 50.583328,
        "lon": 3.06667
    },
    {
        "id": 3019139,
        "nm": "Fagnieres",
        "lat": 48.963848,
        "lon": 4.31692
    },
    {
        "id": 3019125,
        "nm": "Fains-Veel",
        "lat": 48.783329,
        "lon": 5.13333
    },
    {
        "id": 3019113,
        "nm": "Falaise",
        "lat": 48.89217,
        "lon": -0.19527
    },
    {
        "id": 3019110,
        "nm": "Falck",
        "lat": 49.231339,
        "lon": 6.63497
    },
    {
        "id": 3019080,
        "nm": "Famars",
        "lat": 50.317429,
        "lon": 3.51945
    },
    {
        "id": 3019077,
        "nm": "Fameck",
        "lat": 49.303349,
        "lon": 6.1086
    },
    {
        "id": 3019044,
        "nm": "Farebersviller",
        "lat": 49.119961,
        "lon": 6.87201
    },
    {
        "id": 3019040,
        "nm": "Faremoutiers",
        "lat": 48.799622,
        "lon": 2.99607
    },
    {
        "id": 3018946,
        "nm": "Faulquemont",
        "lat": 49.047112,
        "lon": 6.60314
    },
    {
        "id": 3018942,
        "nm": "Faumont",
        "lat": 50.460178,
        "lon": 3.13713
    },
    {
        "id": 3018928,
        "nm": "Fauville-en-Caux",
        "lat": 49.652569,
        "lon": 0.59197
    },
    {
        "id": 3018903,
        "nm": "Faverges",
        "lat": 45.74752,
        "lon": 6.29297
    },
    {
        "id": 3018861,
        "nm": "Fay-aux-Loges",
        "lat": 47.927238,
        "lon": 2.14012
    },
    {
        "id": 3018859,
        "nm": "Fay-de-Bretagne",
        "lat": 47.414532,
        "lon": -1.79155
    },
    {
        "id": 3018835,
        "nm": "Fayence",
        "lat": 43.625702,
        "lon": 6.69531
    },
    {
        "id": 3018794,
        "nm": "Fecamp",
        "lat": 49.75787,
        "lon": 0.37457
    },
    {
        "id": 3018793,
        "nm": "Fechain",
        "lat": 50.26638,
        "lon": 3.21024
    },
    {
        "id": 3018782,
        "nm": "Fegersheim",
        "lat": 48.490162,
        "lon": 7.68107
    },
    {
        "id": 3018781,
        "nm": "Fegreac",
        "lat": 47.584759,
        "lon": -2.0441
    },
    {
        "id": 3018778,
        "nm": "Feignies",
        "lat": 50.298061,
        "lon": 3.91534
    },
    {
        "id": 3018776,
        "nm": "Feillens",
        "lat": 46.335152,
        "lon": 4.88863
    },
    {
        "id": 3018747,
        "nm": "Felletin",
        "lat": 45.883331,
        "lon": 2.17431
    },
    {
        "id": 3018739,
        "nm": "Fenain",
        "lat": 50.366669,
        "lon": 3.3
    },
    {
        "id": 3018713,
        "nm": "Fenouillet",
        "lat": 43.680408,
        "lon": 1.392
    },
    {
        "id": 3018694,
        "nm": "Fere-Champenoise",
        "lat": 48.754318,
        "lon": 3.99069
    },
    {
        "id": 3018693,
        "nm": "Fere-en-Tardenois",
        "lat": 49.200001,
        "lon": 3.51667
    },
    {
        "id": 3018692,
        "nm": "Ferel",
        "lat": 47.482021,
        "lon": -2.34227
    },
    {
        "id": 3018679,
        "nm": "Ferney-Voltaire",
        "lat": 46.258579,
        "lon": 6.11063
    },
    {
        "id": 3018650,
        "nm": "Ferriere-la-Grande",
        "lat": 50.255211,
        "lon": 3.99288
    },
    {
        "id": 3018605,
        "nm": "Fesches-le-Chatel",
        "lat": 47.524151,
        "lon": 6.90535
    },
    {
        "id": 3018601,
        "nm": "Fessenheim",
        "lat": 47.917439,
        "lon": 7.53698
    },
    {
        "id": 3018587,
        "nm": "Feucherolles",
        "lat": 48.870022,
        "lon": 1.97402
    },
    {
        "id": 3018561,
        "nm": "Feuquieres-en-Vimeu",
        "lat": 50.059818,
        "lon": 1.60465
    },
    {
        "id": 3018560,
        "nm": "Feurs",
        "lat": 45.73988,
        "lon": 4.22706
    },
    {
        "id": 3018545,
        "nm": "Feytiat",
        "lat": 45.809052,
        "lon": 1.33033
    },
    {
        "id": 3018544,
        "nm": "Feyzin",
        "lat": 45.667278,
        "lon": 4.85971
    },
    {
        "id": 3018513,
        "nm": "Figanieres",
        "lat": 43.57,
        "lon": 6.5
    },
    {
        "id": 3018506,
        "nm": "Figeac",
        "lat": 44.599998,
        "lon": 2.03333
    },
    {
        "id": 3018489,
        "nm": "Fillinges",
        "lat": 46.159439,
        "lon": 6.34237
    },
    {
        "id": 3018456,
        "nm": "Firmi",
        "lat": 44.541061,
        "lon": 2.30764
    },
    {
        "id": 3018455,
        "nm": "Firminy",
        "lat": 45.387321,
        "lon": 4.29074
    },
    {
        "id": 3018453,
        "nm": "Fismes",
        "lat": 49.307732,
        "lon": 3.68607
    },
    {
        "id": 3018448,
        "nm": "Fitz-James",
        "lat": 49.391129,
        "lon": 2.4307
    },
    {
        "id": 3018389,
        "nm": "Flassans-sur-Issole",
        "lat": 43.370201,
        "lon": 6.22363
    },
    {
        "id": 3018364,
        "nm": "Flavigny-sur-Moselle",
        "lat": 48.564121,
        "lon": 6.19113
    },
    {
        "id": 3018362,
        "nm": "Flavin",
        "lat": 44.288898,
        "lon": 2.60513
    },
    {
        "id": 3018355,
        "nm": "Flayosc",
        "lat": 43.532532,
        "lon": 6.39401
    },
    {
        "id": 3018354,
        "nm": "Fleac",
        "lat": 45.666672,
        "lon": 0.1
    },
    {
        "id": 3018339,
        "nm": "Flers",
        "lat": 48.737221,
        "lon": -0.57466
    },
    {
        "id": 3018336,
        "nm": "Flers-en-Escrebieux",
        "lat": 50.388859,
        "lon": 3.06842
    },
    {
        "id": 3018332,
        "nm": "Flesselles",
        "lat": 50.002022,
        "lon": 2.26119
    },
    {
        "id": 3018323,
        "nm": "Fleurance",
        "lat": 43.84824,
        "lon": 0.66302
    },
    {
        "id": 3018318,
        "nm": "Fleurbaix",
        "lat": 50.650612,
        "lon": 2.83305
    },
    {
        "id": 3018298,
        "nm": "Fleurines",
        "lat": 49.26318,
        "lon": 2.58405
    },
    {
        "id": 3018296,
        "nm": "Fleury",
        "lat": 43.230949,
        "lon": 3.13745
    },
    {
        "id": 3018280,
        "nm": "Fleury-les-Aubrais",
        "lat": 47.933281,
        "lon": 1.91811
    },
    {
        "id": 3018279,
        "nm": "Fleury-Merogis",
        "lat": 48.637299,
        "lon": 2.36378
    },
    {
        "id": 3018277,
        "nm": "Fleury-sur-Andelle",
        "lat": 49.361759,
        "lon": 1.35599
    },
    {
        "id": 3018275,
        "nm": "Fleury-sur-Orne",
        "lat": 49.14851,
        "lon": -0.37508
    },
    {
        "id": 3018270,
        "nm": "Fleville-devant-Nancy",
        "lat": 48.624931,
        "lon": 6.20499
    },
    {
        "id": 3018257,
        "nm": "Flines-lez-Raches",
        "lat": 50.416672,
        "lon": 3.18333
    },
    {
        "id": 3018255,
        "nm": "Flins-sur-Seine",
        "lat": 48.965229,
        "lon": 1.87314
    },
    {
        "id": 3018252,
        "nm": "Flixecourt",
        "lat": 50.014648,
        "lon": 2.08095
    },
    {
        "id": 3018247,
        "nm": "Floing",
        "lat": 49.72216,
        "lon": 4.92947
    },
    {
        "id": 3018246,
        "nm": "Floirac",
        "lat": 44.832378,
        "lon": -0.51411
    },
    {
        "id": 3018235,
        "nm": "Florange",
        "lat": 49.32373,
        "lon": 6.1212
    },
    {
        "id": 3018231,
        "nm": "Florensac",
        "lat": 43.383011,
        "lon": 3.46638
    },
    {
        "id": 3018189,
        "nm": "Foecy",
        "lat": 47.176182,
        "lon": 2.16257
    },
    {
        "id": 3018174,
        "nm": "Foix",
        "lat": 42.966671,
        "lon": 1.6
    },
    {
        "id": 3018154,
        "nm": "Follainville-Dennemont",
        "lat": 49.021938,
        "lon": 1.71331
    },
    {
        "id": 3018145,
        "nm": "Folschviller",
        "lat": 49.070621,
        "lon": 6.68948
    },
    {
        "id": 3018142,
        "nm": "Fonbeauzard",
        "lat": 43.678299,
        "lon": 1.4344
    },
    {
        "id": 3018124,
        "nm": "Fondettes",
        "lat": 47.4035,
        "lon": 0.59686
    },
    {
        "id": 3018103,
        "nm": "Fonsorbes",
        "lat": 43.53524,
        "lon": 1.22937
    },
    {
        "id": 3018095,
        "nm": "Fontaine",
        "lat": 45.198391,
        "lon": 5.68265
    },
    {
        "id": 3018050,
        "nm": "Fontaine-la-Mallet",
        "lat": 49.535999,
        "lon": 0.14625
    },
    {
        "id": 3018043,
        "nm": "Fontaine-le-Comte",
        "lat": 46.532169,
        "lon": 0.26176
    },
    {
        "id": 3018032,
        "nm": "Fontaine-les-Dijon",
        "lat": 47.342381,
        "lon": 5.02007
    },
    {
        "id": 3018074,
        "nm": "Fontainebleau",
        "lat": 48.400002,
        "lon": 2.7
    },
    {
        "id": 3018011,
        "nm": "Fontaines",
        "lat": 46.849049,
        "lon": 4.77036
    },
    {
        "id": 3017996,
        "nm": "Fontaines-Saint-Martin",
        "lat": 45.84478,
        "lon": 4.85489
    },
    {
        "id": 3017994,
        "nm": "Fontaines-sur-Saone",
        "lat": 45.833771,
        "lon": 4.84834
    },
    {
        "id": 3017971,
        "nm": "Fontanil-Cornillon",
        "lat": 45.248081,
        "lon": 5.66434
    },
    {
        "id": 3017945,
        "nm": "Fontcouverte",
        "lat": 45.767078,
        "lon": -0.58682
    },
    {
        "id": 3017924,
        "nm": "Fontenay-aux-Roses",
        "lat": 48.793251,
        "lon": 2.29275
    },
    {
        "id": 3017921,
        "nm": "Fontenay-le-Comte",
        "lat": 46.466671,
        "lon": -0.81667
    },
    {
        "id": 3017919,
        "nm": "Fontenay-le-Fleury",
        "lat": 48.812531,
        "lon": 2.04863
    },
    {
        "id": 3017910,
        "nm": "Fontenay-sous-Bois",
        "lat": 48.85442,
        "lon": 2.48268
    },
    {
        "id": 3017902,
        "nm": "Fontenay-Tresigny",
        "lat": 48.70647,
        "lon": 2.87047
    },
    {
        "id": 3017879,
        "nm": "Fontenilles",
        "lat": 43.55286,
        "lon": 1.19096
    },
    {
        "id": 3017829,
        "nm": "Fontoy",
        "lat": 49.356239,
        "lon": 5.99936
    },
    {
        "id": 3017816,
        "nm": "Fontvieille",
        "lat": 43.728062,
        "lon": 4.70953
    },
    {
        "id": 3017805,
        "nm": "Forbach",
        "lat": 49.183331,
        "lon": 6.9
    },
    {
        "id": 3017798,
        "nm": "Forcalquier",
        "lat": 43.966671,
        "lon": 5.78333
    },
    {
        "id": 3017728,
        "nm": "Forges-les-Bains",
        "lat": 48.629421,
        "lon": 2.10264
    },
    {
        "id": 3017727,
        "nm": "Forges-les-Eaux",
        "lat": 49.613911,
        "lon": 1.54449
    },
    {
        "id": 3017717,
        "nm": "Formerie",
        "lat": 49.649281,
        "lon": 1.73106
    },
    {
        "id": 3017686,
        "nm": "Fort-Mardyck",
        "lat": 51.028992,
        "lon": 2.30724
    },
    {
        "id": 3017651,
        "nm": "Fos-sur-Mer",
        "lat": 43.43774,
        "lon": 4.94457
    },
    {
        "id": 3017660,
        "nm": "Fosses",
        "lat": 49.09808,
        "lon": 2.50957
    },
    {
        "id": 3017624,
        "nm": "Fouesnant",
        "lat": 47.891869,
        "lon": -4.01484
    },
    {
        "id": 3017622,
        "nm": "Foug",
        "lat": 48.68375,
        "lon": 5.78691
    },
    {
        "id": 3017609,
        "nm": "Fougeres",
        "lat": 48.349998,
        "lon": -1.2
    },
    {
        "id": 3017602,
        "nm": "Fougerolles",
        "lat": 47.885422,
        "lon": 6.40454
    },
    {
        "id": 3017592,
        "nm": "Fouillard",
        "lat": 48.158199,
        "lon": -1.57914
    },
    {
        "id": 3017576,
        "nm": "Foulayronnes",
        "lat": 44.240292,
        "lon": 0.64516
    },
    {
        "id": 3017556,
        "nm": "Fouquieres-les-Lens",
        "lat": 50.428421,
        "lon": 2.9132
    },
    {
        "id": 3017546,
        "nm": "Fouras",
        "lat": 45.987358,
        "lon": -1.09275
    },
    {
        "id": 3017537,
        "nm": "Fourchambault",
        "lat": 47.01667,
        "lon": 3.08333
    },
    {
        "id": 3017512,
        "nm": "Fourmies",
        "lat": 50.01532,
        "lon": 4.04784
    },
    {
        "id": 3017491,
        "nm": "Fournes-en-Weppes",
        "lat": 50.584969,
        "lon": 2.88793
    },
    {
        "id": 3017477,
        "nm": "Fourques",
        "lat": 43.6945,
        "lon": 4.60932
    },
    {
        "id": 3017474,
        "nm": "Fourqueux",
        "lat": 48.886929,
        "lon": 2.06367
    },
    {
        "id": 3017410,
        "nm": "Fraisses",
        "lat": 45.383331,
        "lon": 4.25
    },
    {
        "id": 3017400,
        "nm": "Fraize",
        "lat": 48.1866,
        "lon": 6.99786
    },
    {
        "id": 3017363,
        "nm": "Francheville",
        "lat": 45.738789,
        "lon": 4.77218
    },
    {
        "id": 3017341,
        "nm": "Franconville",
        "lat": 48.98333,
        "lon": 2.23333
    },
    {
        "id": 3017320,
        "nm": "Frans",
        "lat": 45.992279,
        "lon": 4.77582
    },
    {
        "id": 3017253,
        "nm": "Frejus",
        "lat": 43.432861,
        "lon": 6.73524
    },
    {
        "id": 3017248,
        "nm": "Frelinghien",
        "lat": 50.716671,
        "lon": 2.93333
    },
    {
        "id": 3017219,
        "nm": "Freneuse",
        "lat": 49.048321,
        "lon": 1.60168
    },
    {
        "id": 3017208,
        "nm": "Frepillon",
        "lat": 49.052158,
        "lon": 2.20528
    },
    {
        "id": 3017189,
        "nm": "Fresnay-sur-Sarthe",
        "lat": 48.28199,
        "lon": 0.02288
    },
    {
        "id": 3017178,
        "nm": "Fresnes",
        "lat": 48.75568,
        "lon": 2.32241
    },
    {
        "id": 3017167,
        "nm": "Fresnes-sur-Escaut",
        "lat": 50.433819,
        "lon": 3.57752
    },
    {
        "id": 3017144,
        "nm": "Fresnoy-le-Grand",
        "lat": 49.947571,
        "lon": 3.41841
    },
    {
        "id": 3017124,
        "nm": "Fresse-sur-Moselle",
        "lat": 47.875889,
        "lon": 6.78589
    },
    {
        "id": 3017127,
        "nm": "Fressenneville",
        "lat": 50.068378,
        "lon": 1.57816
    },
    {
        "id": 3017100,
        "nm": "Fretin",
        "lat": 50.557449,
        "lon": 3.13668
    },
    {
        "id": 3017080,
        "nm": "Frevent",
        "lat": 50.276081,
        "lon": 2.28725
    },
    {
        "id": 3017059,
        "nm": "Freyming-Merlebach",
        "lat": 49.150002,
        "lon": 6.78333
    },
    {
        "id": 3017024,
        "nm": "Friville-Escarbotin",
        "lat": 50.086021,
        "lon": 1.5456
    },
    {
        "id": 3017017,
        "nm": "Froges",
        "lat": 45.27359,
        "lon": 5.92159
    },
    {
        "id": 3017012,
        "nm": "Froideconche",
        "lat": 47.821209,
        "lon": 6.41522
    },
    {
        "id": 3016959,
        "nm": "Frontenay-Rohan-Rohan",
        "lat": 46.252762,
        "lon": -0.53833
    },
    {
        "id": 3016956,
        "nm": "Frontignan",
        "lat": 43.448479,
        "lon": 3.754
    },
    {
        "id": 3016953,
        "nm": "Fronton",
        "lat": 43.83931,
        "lon": 1.38931
    },
    {
        "id": 3016947,
        "nm": "Frossay",
        "lat": 47.244511,
        "lon": -1.93557
    },
    {
        "id": 3016944,
        "nm": "Frouard",
        "lat": 48.759979,
        "lon": 6.13163
    },
    {
        "id": 3016940,
        "nm": "Frouzins",
        "lat": 43.51482,
        "lon": 1.32523
    },
    {
        "id": 3016931,
        "nm": "Fruges",
        "lat": 50.515011,
        "lon": 2.13292
    },
    {
        "id": 3016907,
        "nm": "Fumay",
        "lat": 49.991322,
        "lon": 4.70771
    },
    {
        "id": 3016903,
        "nm": "Fumel",
        "lat": 44.498619,
        "lon": 0.96506
    },
    {
        "id": 3016890,
        "nm": "Furiani",
        "lat": 42.658138,
        "lon": 9.41469
    },
    {
        "id": 3016882,
        "nm": "Fussy",
        "lat": 47.143719,
        "lon": 2.42953
    },
    {
        "id": 3016878,
        "nm": "Fuveau",
        "lat": 43.45578,
        "lon": 5.56149
    },
    {
        "id": 3016853,
        "nm": "Gace",
        "lat": 48.793442,
        "lon": 0.29624
    },
    {
        "id": 3016830,
        "nm": "Gagny",
        "lat": 48.883331,
        "lon": 2.53333
    },
    {
        "id": 3016824,
        "nm": "Gaillac",
        "lat": 43.9016,
        "lon": 1.89686
    },
    {
        "id": 3016820,
        "nm": "Gaillan-en-Medoc",
        "lat": 45.321331,
        "lon": -0.95794
    },
    {
        "id": 3016817,
        "nm": "Gaillard",
        "lat": 46.185299,
        "lon": 6.20693
    },
    {
        "id": 3016807,
        "nm": "Gaillon",
        "lat": 49.161041,
        "lon": 1.34016
    },
    {
        "id": 3016800,
        "nm": "Gainneville",
        "lat": 49.518452,
        "lon": 0.26164
    },
    {
        "id": 3016764,
        "nm": "Galgon",
        "lat": 44.98333,
        "lon": -0.26667
    },
    {
        "id": 3016750,
        "nm": "Gallardon",
        "lat": 48.526218,
        "lon": 1.69307
    },
    {
        "id": 3015119,
        "nm": "Gallargues-le-Montueux",
        "lat": 43.716671,
        "lon": 4.16667
    },
    {
        "id": 3016737,
        "nm": "Gamaches",
        "lat": 49.986141,
        "lon": 1.55624
    },
    {
        "id": 3016733,
        "nm": "Gambais",
        "lat": 48.77351,
        "lon": 1.67196
    },
    {
        "id": 3016730,
        "nm": "Gambsheim",
        "lat": 48.692089,
        "lon": 7.88286
    },
    {
        "id": 3016726,
        "nm": "Gan",
        "lat": 43.23333,
        "lon": -0.38333
    },
    {
        "id": 3016716,
        "nm": "Gandrange",
        "lat": 49.27071,
        "lon": 6.12249
    },
    {
        "id": 3016714,
        "nm": "Ganges",
        "lat": 43.9338,
        "lon": 3.70784
    },
    {
        "id": 3016711,
        "nm": "Gannat",
        "lat": 46.100151,
        "lon": 3.19886
    },
    {
        "id": 3016702,
        "nm": "Gap",
        "lat": 44.566669,
        "lon": 6.08333
    },
    {
        "id": 3016690,
        "nm": "Garancieres",
        "lat": 48.822708,
        "lon": 1.75512
    },
    {
        "id": 3016675,
        "nm": "Garches",
        "lat": 48.842258,
        "lon": 2.18232
    },
    {
        "id": 3016674,
        "nm": "Garchizy",
        "lat": 47.047859,
        "lon": 3.09625
    },
    {
        "id": 3016667,
        "nm": "Gardanne",
        "lat": 43.45491,
        "lon": 5.46913
    },
    {
        "id": 3016635,
        "nm": "Gareoult",
        "lat": 43.328579,
        "lon": 6.04594
    },
    {
        "id": 3016624,
        "nm": "Gargas",
        "lat": 43.901989,
        "lon": 5.35781
    },
    {
        "id": 3016622,
        "nm": "Gargenville",
        "lat": 48.988022,
        "lon": 1.81176
    },
    {
        "id": 3016621,
        "nm": "Garges-les-Gonesse",
        "lat": 48.967911,
        "lon": 2.39781
    },
    {
        "id": 3016595,
        "nm": "Garons",
        "lat": 43.7686,
        "lon": 4.42753
    },
    {
        "id": 3016564,
        "nm": "Gasny",
        "lat": 49.091839,
        "lon": 1.60336
    },
    {
        "id": 3016561,
        "nm": "Gassin",
        "lat": 43.228741,
        "lon": 6.5848
    },
    {
        "id": 3016534,
        "nm": "Gattieres",
        "lat": 43.760368,
        "lon": 7.17799
    },
    {
        "id": 3016524,
        "nm": "Gauchy",
        "lat": 49.827648,
        "lon": 3.27371
    },
    {
        "id": 3016424,
        "nm": "Geispolsheim",
        "lat": 48.516579,
        "lon": 7.64667
    },
    {
        "id": 3016406,
        "nm": "Gelos",
        "lat": 43.283329,
        "lon": -0.36667
    },
    {
        "id": 3016398,
        "nm": "Gemenos",
        "lat": 43.297508,
        "lon": 5.62843
    },
    {
        "id": 3016392,
        "nm": "Gemozac",
        "lat": 45.568958,
        "lon": -0.67574
    },
    {
        "id": 3016387,
        "nm": "Genas",
        "lat": 45.732151,
        "lon": 4.99943
    },
    {
        "id": 3016385,
        "nm": "Genay",
        "lat": 45.89764,
        "lon": 4.83729
    },
    {
        "id": 3016376,
        "nm": "Genech",
        "lat": 50.531219,
        "lon": 3.21651
    },
    {
        "id": 3016371,
        "nm": "Generac",
        "lat": 43.728298,
        "lon": 4.35
    },
    {
        "id": 6615510,
        "nm": "Geneston",
        "lat": 47.056389,
        "lon": -1.51139
    },
    {
        "id": 3016333,
        "nm": "Genissieux",
        "lat": 45.084259,
        "lon": 5.08337
    },
    {
        "id": 3016332,
        "nm": "Genlis",
        "lat": 47.242031,
        "lon": 5.22415
    },
    {
        "id": 3016330,
        "nm": "Gennes",
        "lat": 47.340099,
        "lon": -0.23149
    },
    {
        "id": 3016321,
        "nm": "Gennevilliers",
        "lat": 48.933331,
        "lon": 2.3
    },
    {
        "id": 3016292,
        "nm": "Gentilly",
        "lat": 48.812939,
        "lon": 2.3417
    },
    {
        "id": 3016274,
        "nm": "Gerardmer",
        "lat": 48.07346,
        "lon": 6.87787
    },
    {
        "id": 3016247,
        "nm": "Gergy",
        "lat": 46.875568,
        "lon": 4.94527
    },
    {
        "id": 3016192,
        "nm": "Gerstheim",
        "lat": 48.38142,
        "lon": 7.70308
    },
    {
        "id": 3016177,
        "nm": "Gerzat",
        "lat": 45.824322,
        "lon": 3.14404
    },
    {
        "id": 3016167,
        "nm": "Geste",
        "lat": 47.181789,
        "lon": -1.10917
    },
    {
        "id": 3016166,
        "nm": "Gestel",
        "lat": 47.803612,
        "lon": -3.44245
    },
    {
        "id": 3016162,
        "nm": "Getigne",
        "lat": 47.0765,
        "lon": -1.2481
    },
    {
        "id": 3016158,
        "nm": "Geudertheim",
        "lat": 48.724152,
        "lon": 7.75188
    },
    {
        "id": 3016152,
        "nm": "Geveze",
        "lat": 48.21933,
        "lon": -1.78952
    },
    {
        "id": 3016147,
        "nm": "Gevrey-Chambertin",
        "lat": 47.226139,
        "lon": 4.96806
    },
    {
        "id": 3016143,
        "nm": "Gex",
        "lat": 46.333328,
        "lon": 6.06667
    },
    {
        "id": 3016133,
        "nm": "Ghisonaccia",
        "lat": 42.016209,
        "lon": 9.40412
    },
    {
        "id": 3016130,
        "nm": "Ghyvelde",
        "lat": 51.05275,
        "lon": 2.52642
    },
    {
        "id": 3016113,
        "nm": "Giberville",
        "lat": 49.18158,
        "lon": -0.28386
    },
    {
        "id": 3016097,
        "nm": "Gien",
        "lat": 47.693321,
        "lon": 2.63094
    },
    {
        "id": 3016089,
        "nm": "Gieres",
        "lat": 45.182732,
        "lon": 5.79179
    },
    {
        "id": 3016085,
        "nm": "Gievres",
        "lat": 47.278469,
        "lon": 1.66943
    },
    {
        "id": 3016078,
        "nm": "Gif-sur-Yvette",
        "lat": 48.683331,
        "lon": 2.13333
    },
    {
        "id": 3016076,
        "nm": "Gigean",
        "lat": 43.500278,
        "lon": 3.71167
    },
    {
        "id": 3016073,
        "nm": "Gignac",
        "lat": 43.652,
        "lon": 3.5509
    },
    {
        "id": 3016070,
        "nm": "Gignac-la-Nerthe",
        "lat": 43.391449,
        "lon": 5.23348
    },
    {
        "id": 3016038,
        "nm": "Gilly-sur-Isere",
        "lat": 45.659168,
        "lon": 6.35096
    },
    {
        "id": 3016023,
        "nm": "Gimont",
        "lat": 43.62627,
        "lon": 0.87655
    },
    {
        "id": 3015958,
        "nm": "Giromagny",
        "lat": 47.741459,
        "lon": 6.82671
    },
    {
        "id": 3015926,
        "nm": "Gisors",
        "lat": 49.28178,
        "lon": 1.7801
    },
    {
        "id": 3015911,
        "nm": "Givenchy-en-Gohelle",
        "lat": 50.3908,
        "lon": 2.7732
    },
    {
        "id": 3015904,
        "nm": "Givet",
        "lat": 50.137959,
        "lon": 4.82545
    },
    {
        "id": 3015902,
        "nm": "Givors",
        "lat": 45.584148,
        "lon": 4.77256
    },
    {
        "id": 3015894,
        "nm": "Givry",
        "lat": 46.782021,
        "lon": 4.74262
    },
    {
        "id": 3015823,
        "nm": "Gleize",
        "lat": 45.990822,
        "lon": 4.70071
    },
    {
        "id": 3015765,
        "nm": "Goderville",
        "lat": 49.64566,
        "lon": 0.36593
    },
    {
        "id": 3015764,
        "nm": "Godewaersvelde",
        "lat": 50.793991,
        "lon": 2.64456
    },
    {
        "id": 3015741,
        "nm": "Golbey",
        "lat": 48.197639,
        "lon": 6.43966
    },
    {
        "id": 3015727,
        "nm": "Gometz-le-Chatel",
        "lat": 48.678371,
        "lon": 2.13792
    },
    {
        "id": 3015723,
        "nm": "Gommegnies",
        "lat": 50.271549,
        "lon": 3.70625
    },
    {
        "id": 3015711,
        "nm": "Goncelin",
        "lat": 45.344528,
        "lon": 5.97892
    },
    {
        "id": 3004078,
        "nm": "Gond-Pontouvre",
        "lat": 45.683331,
        "lon": 0.16667
    },
    {
        "id": 3015708,
        "nm": "Gondecourt",
        "lat": 50.544689,
        "lon": 2.98378
    },
    {
        "id": 3015697,
        "nm": "Gondreville",
        "lat": 48.694359,
        "lon": 5.96551
    },
    {
        "id": 3015689,
        "nm": "Gonesse",
        "lat": 48.986931,
        "lon": 2.44892
    },
    {
        "id": 3015681,
        "nm": "Gonnehem",
        "lat": 50.560619,
        "lon": 2.57277
    },
    {
        "id": 3015662,
        "nm": "Gorcy",
        "lat": 49.533329,
        "lon": 5.7
    },
    {
        "id": 3015661,
        "nm": "Gordes",
        "lat": 43.912369,
        "lon": 5.20089
    },
    {
        "id": 3015658,
        "nm": "Gorges",
        "lat": 47.099171,
        "lon": -1.30024
    },
    {
        "id": 3015642,
        "nm": "Gorron",
        "lat": 48.41095,
        "lon": -0.81267
    },
    {
        "id": 3015602,
        "nm": "Gouesnach",
        "lat": 47.9104,
        "lon": -4.1145
    },
    {
        "id": 3015601,
        "nm": "Gouesnou",
        "lat": 48.45266,
        "lon": -4.46456
    },
    {
        "id": 3015546,
        "nm": "Gourdon",
        "lat": 44.73333,
        "lon": 1.38333
    },
    {
        "id": 3015522,
        "nm": "Gourin",
        "lat": 48.13866,
        "lon": -3.60755
    },
    {
        "id": 3015509,
        "nm": "Gournay-en-Bray",
        "lat": 49.482849,
        "lon": 1.72471
    },
    {
        "id": 3015507,
        "nm": "Gournay-sur-Marne",
        "lat": 48.862228,
        "lon": 2.58452
    },
    {
        "id": 3015490,
        "nm": "Goussainville",
        "lat": 49.013672,
        "lon": 2.46595
    },
    {
        "id": 3015460,
        "nm": "Gouvieux",
        "lat": 49.18705,
        "lon": 2.41439
    },
    {
        "id": 3015434,
        "nm": "Goven",
        "lat": 48.006378,
        "lon": -1.84629
    },
    {
        "id": 3015424,
        "nm": "Grabels",
        "lat": 43.647968,
        "lon": 3.79864
    },
    {
        "id": 3015422,
        "nm": "Graces",
        "lat": 48.556511,
        "lon": -3.18533
    },
    {
        "id": 3015419,
        "nm": "Gradignan",
        "lat": 44.772621,
        "lon": -0.61393
    },
    {
        "id": 3015386,
        "nm": "Gramat",
        "lat": 44.78075,
        "lon": 1.71957
    },
    {
        "id": 3015305,
        "nm": "Grand-Champ",
        "lat": 47.758041,
        "lon": -2.84636
    },
    {
        "id": 3015292,
        "nm": "Grand-Charmont",
        "lat": 47.526741,
        "lon": 6.82604
    },
    {
        "id": 3015267,
        "nm": "Grand-Couronne",
        "lat": 49.355629,
        "lon": 1.00647
    },
    {
        "id": 3015126,
        "nm": "Grand-Fort-Philippe",
        "lat": 50.999611,
        "lon": 2.10784
    },
    {
        "id": 3015125,
        "nm": "Grand-Fougeray",
        "lat": 47.7239,
        "lon": -1.7321
    },
    {
        "id": 3015317,
        "nm": "Grandcamp-Maisy",
        "lat": 49.383331,
        "lon": -1.03333
    },
    {
        "id": 3015160,
        "nm": "Grande-Synthe",
        "lat": 51.0154,
        "lon": 2.29975
    },
    {
        "id": 3014928,
        "nm": "Grandvillars",
        "lat": 47.539211,
        "lon": 6.96424
    },
    {
        "id": 3014918,
        "nm": "Grandvilliers",
        "lat": 49.66547,
        "lon": 1.94088
    },
    {
        "id": 3014878,
        "nm": "Granges-sur-Vologne",
        "lat": 48.145168,
        "lon": 6.79095
    },
    {
        "id": 3014868,
        "nm": "Grans",
        "lat": 43.603569,
        "lon": 5.06881
    },
    {
        "id": 3014867,
        "nm": "Granville",
        "lat": 48.837921,
        "lon": -1.59714
    },
    {
        "id": 3014856,
        "nm": "Grasse",
        "lat": 43.666672,
        "lon": 6.91667
    },
    {
        "id": 3014848,
        "nm": "Gratentour",
        "lat": 43.723598,
        "lon": 1.43234
    },
    {
        "id": 3014828,
        "nm": "Graulhet",
        "lat": 43.76688,
        "lon": 1.98938
    },
    {
        "id": 3014816,
        "nm": "Gravelines",
        "lat": 50.986511,
        "lon": 2.12807
    },
    {
        "id": 3014803,
        "nm": "Graveson",
        "lat": 43.851341,
        "lon": 4.77189
    },
    {
        "id": 3014795,
        "nm": "Gravigny",
        "lat": 49.053101,
        "lon": 1.16962
    },
    {
        "id": 3014784,
        "nm": "Gray",
        "lat": 47.445751,
        "lon": 5.59215
    },
    {
        "id": 3014767,
        "nm": "Greasque",
        "lat": 43.433102,
        "lon": 5.54449
    },
    {
        "id": 3014745,
        "nm": "Grenade",
        "lat": 43.76667,
        "lon": 1.28333
    },
    {
        "id": 3014739,
        "nm": "Grenay",
        "lat": 50.449619,
        "lon": 2.75168
    },
    {
        "id": 3014728,
        "nm": "Grenoble",
        "lat": 45.166672,
        "lon": 5.71667
    },
    {
        "id": 3014717,
        "nm": "Greoux-les-Bains",
        "lat": 43.75753,
        "lon": 5.88169
    },
    {
        "id": 3014699,
        "nm": "Gresy-sur-Aix",
        "lat": 45.723011,
        "lon": 5.93412
    },
    {
        "id": 3014697,
        "nm": "Gretz-Armainvilliers",
        "lat": 48.741199,
        "lon": 2.73105
    },
    {
        "id": 3014676,
        "nm": "Grezieu-la-Varenne",
        "lat": 45.748329,
        "lon": 4.69016
    },
    {
        "id": 3014667,
        "nm": "Gries",
        "lat": 48.7537,
        "lon": 7.81403
    },
    {
        "id": 3014655,
        "nm": "Grignon",
        "lat": 45.651642,
        "lon": 6.37727
    },
    {
        "id": 3014646,
        "nm": "Grigny",
        "lat": 48.654121,
        "lon": 2.39343
    },
    {
        "id": 3014647,
        "nm": "Grigny",
        "lat": 45.611279,
        "lon": 4.79589
    },
    {
        "id": 3014634,
        "nm": "Grimaud",
        "lat": 43.270489,
        "lon": 6.52491
    },
    {
        "id": 3014606,
        "nm": "Grisolles",
        "lat": 43.829201,
        "lon": 1.29673
    },
    {
        "id": 3014600,
        "nm": "Grisy-Suisnes",
        "lat": 48.685379,
        "lon": 2.66781
    },
    {
        "id": 3014580,
        "nm": "Groisy",
        "lat": 46.018349,
        "lon": 6.17083
    },
    {
        "id": 3014579,
        "nm": "Groix",
        "lat": 47.63887,
        "lon": -3.4543
    },
    {
        "id": 3014560,
        "nm": "Grosbliederstroff",
        "lat": 49.158081,
        "lon": 7.02413
    },
    {
        "id": 3014540,
        "nm": "Groslay",
        "lat": 48.985611,
        "lon": 2.34736
    },
    {
        "id": 3014517,
        "nm": "Grosseto-Prugna",
        "lat": 41.870972,
        "lon": 8.96403
    },
    {
        "id": 3014490,
        "nm": "Gruchet-le-Valasse",
        "lat": 49.554661,
        "lon": 0.48684
    },
    {
        "id": 3014477,
        "nm": "Gruissan",
        "lat": 43.10759,
        "lon": 3.08651
    },
    {
        "id": 3014433,
        "nm": "Guebwiller",
        "lat": 47.916672,
        "lon": 7.2
    },
    {
        "id": 3014430,
        "nm": "Guecelard",
        "lat": 47.87751,
        "lon": 0.1293
    },
    {
        "id": 3014421,
        "nm": "Guegon",
        "lat": 47.937069,
        "lon": -2.5645
    },
    {
        "id": 3014413,
        "nm": "Guemene-Penfao",
        "lat": 47.633331,
        "lon": -1.83333
    },
    {
        "id": 3014407,
        "nm": "Guenange",
        "lat": 49.299461,
        "lon": 6.20752
    },
    {
        "id": 3014398,
        "nm": "Guenrouet",
        "lat": 47.51881,
        "lon": -1.95381
    },
    {
        "id": 3014393,
        "nm": "Guer",
        "lat": 47.906189,
        "lon": -2.12314
    },
    {
        "id": 3014392,
        "nm": "Guerande",
        "lat": 47.329109,
        "lon": -2.42829
    },
    {
        "id": 3014391,
        "nm": "Guerard",
        "lat": 48.820862,
        "lon": 2.95969
    },
    {
        "id": 3014383,
        "nm": "Gueret",
        "lat": 46.166672,
        "lon": 1.86667
    },
    {
        "id": 3014377,
        "nm": "Guerigny",
        "lat": 47.087029,
        "lon": 3.20182
    },
    {
        "id": 3014351,
        "nm": "Guerville",
        "lat": 48.943878,
        "lon": 1.73429
    },
    {
        "id": 3014346,
        "nm": "Guesnain",
        "lat": 50.349998,
        "lon": 3.15
    },
    {
        "id": 3014334,
        "nm": "Gueugnon",
        "lat": 46.603569,
        "lon": 4.06286
    },
    {
        "id": 3014305,
        "nm": "Guichen",
        "lat": 47.967621,
        "lon": -1.79534
    },
    {
        "id": 3014304,
        "nm": "Guiclan",
        "lat": 48.549671,
        "lon": -3.96211
    },
    {
        "id": 3232493,
        "nm": "Guidel-Plage",
        "lat": 47.767681,
        "lon": -3.5218
    },
    {
        "id": 3014294,
        "nm": "Guignen",
        "lat": 47.92009,
        "lon": -1.86161
    },
    {
        "id": 3014292,
        "nm": "Guignes",
        "lat": 48.633331,
        "lon": 2.8
    },
    {
        "id": 3014289,
        "nm": "Guignicourt",
        "lat": 49.437141,
        "lon": 3.96756
    },
    {
        "id": 3014280,
        "nm": "Guilers",
        "lat": 48.425449,
        "lon": -4.55801
    },
    {
        "id": 3014277,
        "nm": "Guilherand-Granges",
        "lat": 44.932781,
        "lon": 4.87372
    },
    {
        "id": 3014258,
        "nm": "Guillestre",
        "lat": 44.6595,
        "lon": 6.64948
    },
    {
        "id": 3014239,
        "nm": "Guilvinec",
        "lat": 47.798611,
        "lon": -4.28111
    },
    {
        "id": 3014224,
        "nm": "Guines",
        "lat": 50.867081,
        "lon": 1.87025
    },
    {
        "id": 3014221,
        "nm": "Guingamp",
        "lat": 48.549999,
        "lon": -3.15
    },
    {
        "id": 3014213,
        "nm": "Guipavas",
        "lat": 48.435219,
        "lon": -4.39722
    },
    {
        "id": 3014208,
        "nm": "Guipry",
        "lat": 47.82637,
        "lon": -1.84218
    },
    {
        "id": 3014196,
        "nm": "Guiscriff",
        "lat": 48.049438,
        "lon": -3.64356
    },
    {
        "id": 3014195,
        "nm": "Guise",
        "lat": 49.900551,
        "lon": 3.62801
    },
    {
        "id": 3014192,
        "nm": "Guisseny",
        "lat": 48.632919,
        "lon": -4.40884
    },
    {
        "id": 3014175,
        "nm": "Gujan-Mestras",
        "lat": 44.633331,
        "lon": -1.06667
    },
    {
        "id": 3014167,
        "nm": "Gundershoffen",
        "lat": 48.906479,
        "lon": 7.66096
    },
    {
        "id": 3014143,
        "nm": "Guyancourt",
        "lat": 48.773338,
        "lon": 2.07393
    },
    {
        "id": 3014103,
        "nm": "Habsheim",
        "lat": 47.730869,
        "lon": 7.41855
    },
    {
        "id": 3014096,
        "nm": "Hadol",
        "lat": 48.089828,
        "lon": 6.47662
    },
    {
        "id": 3014084,
        "nm": "Hagetmau",
        "lat": 43.658932,
        "lon": -0.59172
    },
    {
        "id": 3014080,
        "nm": "Hagondange",
        "lat": 49.251339,
        "lon": 6.16812
    },
    {
        "id": 3014078,
        "nm": "Haguenau",
        "lat": 48.815571,
        "lon": 7.79051
    },
    {
        "id": 3014067,
        "nm": "Haillicourt",
        "lat": 50.475189,
        "lon": 2.57458
    },
    {
        "id": 3014060,
        "nm": "Haisnes",
        "lat": 50.507759,
        "lon": 2.79416
    },
    {
        "id": 3014049,
        "nm": "Hallennes-lez-Haubourdin",
        "lat": 50.616669,
        "lon": 2.96667
    },
    {
        "id": 3014034,
        "nm": "Halluin",
        "lat": 50.786282,
        "lon": 3.12611
    },
    {
        "id": 3014029,
        "nm": "Ham",
        "lat": 49.747211,
        "lon": 3.07301
    },
    {
        "id": 3014006,
        "nm": "Ham-sous-Varsberg",
        "lat": 49.180309,
        "lon": 6.64626
    },
    {
        "id": 3014026,
        "nm": "Hambach",
        "lat": 49.06263,
        "lon": 7.04246
    },
    {
        "id": 3014001,
        "nm": "Hanches",
        "lat": 48.601151,
        "lon": 1.65137
    },
    {
        "id": 3013926,
        "nm": "Hardricourt",
        "lat": 49.00779,
        "lon": 1.89389
    },
    {
        "id": 3013922,
        "nm": "Harfleur",
        "lat": 49.506599,
        "lon": 0.19827
    },
    {
        "id": 3013908,
        "nm": "Harnes",
        "lat": 50.44643,
        "lon": 2.90481
    },
    {
        "id": 3013878,
        "nm": "Hasnon",
        "lat": 50.424721,
        "lon": 3.38657
    },
    {
        "id": 3013877,
        "nm": "Hasparren",
        "lat": 43.38377,
        "lon": -1.30499
    },
    {
        "id": 3013875,
        "nm": "Haspres",
        "lat": 50.258289,
        "lon": 3.41695
    },
    {
        "id": 3013862,
        "nm": "Haubourdin",
        "lat": 50.608261,
        "lon": 2.99143
    },
    {
        "id": 3013855,
        "nm": "Haucourt-Moulaine",
        "lat": 49.490219,
        "lon": 5.80284
    },
    {
        "id": 3013845,
        "nm": "Haulchin",
        "lat": 50.3172,
        "lon": 3.43599
    },
    {
        "id": 3013766,
        "nm": "Haute-Goulaine",
        "lat": 47.199051,
        "lon": -1.42941
    },
    {
        "id": 3013705,
        "nm": "Hauteville-Lompnes",
        "lat": 45.97794,
        "lon": 5.60114
    },
    {
        "id": 3013681,
        "nm": "Hautmont",
        "lat": 50.250771,
        "lon": 3.92143
    },
    {
        "id": 3013673,
        "nm": "Hautot-sur-Mer",
        "lat": 49.897888,
        "lon": 1.02884
    },
    {
        "id": 3013637,
        "nm": "Haveluy",
        "lat": 50.35289,
        "lon": 3.40389
    },
    {
        "id": 3013627,
        "nm": "Hayange",
        "lat": 49.334278,
        "lon": 6.05268
    },
    {
        "id": 3013626,
        "nm": "Haybes",
        "lat": 50.004581,
        "lon": 4.70496
    },
    {
        "id": 3013619,
        "nm": "Hazebrouck",
        "lat": 50.72374,
        "lon": 2.53729
    },
    {
        "id": 3013596,
        "nm": "Hede-Bazouges",
        "lat": 48.299999,
        "lon": -1.8
    },
    {
        "id": 3013592,
        "nm": "Hegenheim",
        "lat": 47.562511,
        "lon": 7.52684
    },
    {
        "id": 3013585,
        "nm": "Heillecourt",
        "lat": 48.658539,
        "lon": 6.20711
    },
    {
        "id": 3013549,
        "nm": "Hem",
        "lat": 50.652561,
        "lon": 3.18681
    },
    {
        "id": 3013534,
        "nm": "Hendaye",
        "lat": 43.371719,
        "lon": -1.77382
    },
    {
        "id": 3013525,
        "nm": "Henin-Beaumont",
        "lat": 50.413589,
        "lon": 2.96485
    },
    {
        "id": 3013521,
        "nm": "Hennebont",
        "lat": 47.805119,
        "lon": -3.27337
    },
    {
        "id": 3013484,
        "nm": "Herbignac",
        "lat": 47.448219,
        "lon": -2.3181
    },
    {
        "id": 3013478,
        "nm": "Herbitzheim",
        "lat": 49.014069,
        "lon": 7.09022
    },
    {
        "id": 3013477,
        "nm": "Herblay",
        "lat": 48.989941,
        "lon": 2.1699
    },
    {
        "id": 3013459,
        "nm": "Hergnies",
        "lat": 50.47287,
        "lon": 3.52612
    },
    {
        "id": 3013457,
        "nm": "Heric",
        "lat": 47.414169,
        "lon": -1.65309
    },
    {
        "id": 3013456,
        "nm": "Hericourt",
        "lat": 47.573051,
        "lon": 6.76139
    },
    {
        "id": 3013452,
        "nm": "Hericy",
        "lat": 48.448479,
        "lon": 2.76445
    },
    {
        "id": 3013448,
        "nm": "Herimoncourt",
        "lat": 47.442841,
        "lon": 6.88242
    },
    {
        "id": 3013447,
        "nm": "Herin",
        "lat": 50.355572,
        "lon": 3.4531
    },
    {
        "id": 3013442,
        "nm": "Herlies",
        "lat": 50.57753,
        "lon": 2.85285
    },
    {
        "id": 3013433,
        "nm": "Hermanville-sur-Mer",
        "lat": 49.284641,
        "lon": -0.31544
    },
    {
        "id": 3013424,
        "nm": "Hermes",
        "lat": 49.360321,
        "lon": 2.24461
    },
    {
        "id": 3013403,
        "nm": "Herouville-Saint-Clair",
        "lat": 49.21088,
        "lon": -0.30653
    },
    {
        "id": 3013387,
        "nm": "Herrlisheim",
        "lat": 48.730492,
        "lon": 7.90535
    },
    {
        "id": 3013381,
        "nm": "Herserange",
        "lat": 49.517578,
        "lon": 5.78163
    },
    {
        "id": 3013380,
        "nm": "Hersin-Coupigny",
        "lat": 50.44796,
        "lon": 2.6494
    },
    {
        "id": 3013365,
        "nm": "Hesdin",
        "lat": 50.373501,
        "lon": 2.0382
    },
    {
        "id": 3013361,
        "nm": "Hesingue",
        "lat": 47.57621,
        "lon": 7.52244
    },
    {
        "id": 3013350,
        "nm": "Hettange-Grande",
        "lat": 49.406391,
        "lon": 6.15057
    },
    {
        "id": 3013305,
        "nm": "Heyrieux",
        "lat": 45.628529,
        "lon": 5.05849
    },
    {
        "id": 3013283,
        "nm": "Hillion",
        "lat": 48.51429,
        "lon": -2.66634
    },
    {
        "id": 3013282,
        "nm": "Hilsenheim",
        "lat": 48.28756,
        "lon": 7.56522
    },
    {
        "id": 3013273,
        "nm": "Hinges",
        "lat": 50.566738,
        "lon": 2.6216
    },
    {
        "id": 3013259,
        "nm": "Hirsingue",
        "lat": 47.586552,
        "lon": 7.2513
    },
    {
        "id": 3013258,
        "nm": "Hirson",
        "lat": 49.922619,
        "lon": 4.08259
    },
    {
        "id": 3013249,
        "nm": "Hochfelden",
        "lat": 48.757381,
        "lon": 7.56769
    },
    {
        "id": 3013248,
        "nm": "Hochstatt",
        "lat": 47.70343,
        "lon": 7.27584
    },
    {
        "id": 3013226,
        "nm": "Hoenheim",
        "lat": 48.622238,
        "lon": 7.75549
    },
    {
        "id": 3013225,
        "nm": "Hoerdt",
        "lat": 48.700001,
        "lon": 7.78333
    },
    {
        "id": 3013206,
        "nm": "Holtzheim",
        "lat": 48.558201,
        "lon": 7.64434
    },
    {
        "id": 3013196,
        "nm": "Hombourg-Haut",
        "lat": 49.123589,
        "lon": 6.77397
    },
    {
        "id": 3013195,
        "nm": "Homecourt",
        "lat": 49.221111,
        "lon": 5.98445
    },
    {
        "id": 3013174,
        "nm": "Hondschoote",
        "lat": 50.978001,
        "lon": 2.58372
    },
    {
        "id": 3013173,
        "nm": "Honfleur",
        "lat": 49.419849,
        "lon": 0.23294
    },
    {
        "id": 3013155,
        "nm": "Horbourg-Wihr",
        "lat": 48.081059,
        "lon": 7.3938
    },
    {
        "id": 3013152,
        "nm": "Hornaing",
        "lat": 50.368351,
        "lon": 3.33707
    },
    {
        "id": 3013122,
        "nm": "Houdain",
        "lat": 50.450401,
        "lon": 2.53777
    },
    {
        "id": 3013120,
        "nm": "Houdan",
        "lat": 48.79044,
        "lon": 1.60007
    },
    {
        "id": 3013115,
        "nm": "Houdemont",
        "lat": 48.650002,
        "lon": 6.18333
    },
    {
        "id": 3013097,
        "nm": "Houilles",
        "lat": 48.921612,
        "lon": 2.19263
    },
    {
        "id": 3013091,
        "nm": "Houlgate",
        "lat": 49.299,
        "lon": -0.08153
    },
    {
        "id": 3013083,
        "nm": "Houplin-Ancoisne",
        "lat": 50.56284,
        "lon": 3.0025
    },
    {
        "id": 3013082,
        "nm": "Houplines",
        "lat": 50.694988,
        "lon": 2.91518
    },
    {
        "id": 3013080,
        "nm": "Houppeville",
        "lat": 49.512589,
        "lon": 1.07962
    },
    {
        "id": 3013069,
        "nm": "Hourtin",
        "lat": 45.185699,
        "lon": -1.05719
    },
    {
        "id": 3013044,
        "nm": "Hoymille",
        "lat": 50.97187,
        "lon": 2.44738
    },
    {
        "id": 3013007,
        "nm": "Huisseau-sur-Cosson",
        "lat": 47.593349,
        "lon": 1.45333
    },
    {
        "id": 3013001,
        "nm": "Hulluch",
        "lat": 50.489609,
        "lon": 2.81232
    },
    {
        "id": 3012979,
        "nm": "Huningue",
        "lat": 47.604771,
        "lon": 7.57782
    },
    {
        "id": 3012962,
        "nm": "Huriel",
        "lat": 46.37368,
        "lon": 2.47793
    },
    {
        "id": 3012953,
        "nm": "Hussigny-Godbrange",
        "lat": 49.491192,
        "lon": 5.86683
    },
    {
        "id": 3012949,
        "nm": "Huttenheim",
        "lat": 48.358639,
        "lon": 7.57833
    },
    {
        "id": 3012937,
        "nm": "Hyeres",
        "lat": 43.119541,
        "lon": 6.13897
    },
    {
        "id": 3012921,
        "nm": "Ibos",
        "lat": 43.23333,
        "lon": 0
    },
    {
        "id": 3012912,
        "nm": "Idron",
        "lat": 43.283329,
        "lon": -0.31667
    },
    {
        "id": 3012905,
        "nm": "Iffendic",
        "lat": 48.12981,
        "lon": -2.03486
    },
    {
        "id": 3012903,
        "nm": "Ifs",
        "lat": 49.139999,
        "lon": -0.34899
    },
    {
        "id": 3012889,
        "nm": "Igny",
        "lat": 48.74437,
        "lon": 2.22428
    },
    {
        "id": 3012854,
        "nm": "Illange",
        "lat": 49.330841,
        "lon": 6.18166
    },
    {
        "id": 3012848,
        "nm": "Ille-sur-Tet",
        "lat": 42.670689,
        "lon": 2.62162
    },
    {
        "id": 3012845,
        "nm": "Illfurth",
        "lat": 47.672901,
        "lon": 7.26539
    },
    {
        "id": 3012834,
        "nm": "Illkirch-Graffenstaden",
        "lat": 48.528938,
        "lon": 7.71523
    },
    {
        "id": 3012829,
        "nm": "Illzach",
        "lat": 47.78088,
        "lon": 7.34662
    },
    {
        "id": 3012821,
        "nm": "Imphy",
        "lat": 46.936192,
        "lon": 3.26037
    },
    {
        "id": 3034697,
        "nm": "Indre",
        "lat": 47.200001,
        "lon": -1.66667
    },
    {
        "id": 3012790,
        "nm": "Ingersheim",
        "lat": 48.09803,
        "lon": 7.30308
    },
    {
        "id": 3012780,
        "nm": "Ingre",
        "lat": 47.919949,
        "lon": 1.82778
    },
    {
        "id": 3012778,
        "nm": "Inguiniel",
        "lat": 47.976582,
        "lon": -3.28072
    },
    {
        "id": 3012777,
        "nm": "Ingwiller",
        "lat": 48.872841,
        "lon": 7.4798
    },
    {
        "id": 3012742,
        "nm": "Irigny",
        "lat": 45.673618,
        "lon": 4.81753
    },
    {
        "id": 3012652,
        "nm": "Is-sur-Tille",
        "lat": 47.526699,
        "lon": 5.1065
    },
    {
        "id": 3012725,
        "nm": "Isbergues",
        "lat": 50.62328,
        "lon": 2.45902
    },
    {
        "id": 3012713,
        "nm": "Isigny-le-Buat",
        "lat": 48.61705,
        "lon": -1.16994
    },
    {
        "id": 3012712,
        "nm": "Isigny-sur-Mer",
        "lat": 49.31604,
        "lon": -1.10384
    },
    {
        "id": 3012709,
        "nm": "Isle",
        "lat": 45.802719,
        "lon": 1.21213
    },
    {
        "id": 3012698,
        "nm": "Isneauville",
        "lat": 49.498322,
        "lon": 1.15431
    },
    {
        "id": 3012676,
        "nm": "Isse",
        "lat": 47.624191,
        "lon": -1.45152
    },
    {
        "id": 3012671,
        "nm": "Issenheim",
        "lat": 47.903568,
        "lon": 7.25235
    },
    {
        "id": 3012664,
        "nm": "Issoire",
        "lat": 45.549999,
        "lon": 3.25
    },
    {
        "id": 3012656,
        "nm": "Issou",
        "lat": 48.989941,
        "lon": 1.79292
    },
    {
        "id": 3012655,
        "nm": "Issoudun",
        "lat": 46.950001,
        "lon": 2
    },
    {
        "id": 3012649,
        "nm": "Issy-les-Moulineaux",
        "lat": 48.821041,
        "lon": 2.27718
    },
    {
        "id": 3012647,
        "nm": "Istres",
        "lat": 43.51667,
        "lon": 4.98333
    },
    {
        "id": 3012643,
        "nm": "Iteuil",
        "lat": 46.488079,
        "lon": 0.31212
    },
    {
        "id": 3012640,
        "nm": "Ittenheim",
        "lat": 48.604469,
        "lon": 7.59471
    },
    {
        "id": 3012638,
        "nm": "Itteville",
        "lat": 48.515362,
        "lon": 2.34377
    },
    {
        "id": 3012636,
        "nm": "Itxassou",
        "lat": 43.32893,
        "lon": -1.40617
    },
    {
        "id": 3012623,
        "nm": "Ivry-la-Bataille",
        "lat": 48.883331,
        "lon": 1.45948
    },
    {
        "id": 3012621,
        "nm": "Ivry-sur-Seine",
        "lat": 48.815681,
        "lon": 2.38487
    },
    {
        "id": 3012620,
        "nm": "Iwuy",
        "lat": 50.233002,
        "lon": 3.32058
    },
    {
        "id": 3012611,
        "nm": "Izeaux",
        "lat": 45.335152,
        "lon": 5.4251
    },
    {
        "id": 3012593,
        "nm": "Izon",
        "lat": 44.92416,
        "lon": -0.36322
    },
    {
        "id": 3012577,
        "nm": "Jacob-Bellecombette",
        "lat": 45.55275,
        "lon": 5.9116
    },
    {
        "id": 3012576,
        "nm": "Jacou",
        "lat": 43.661388,
        "lon": 3.91222
    },
    {
        "id": 3012549,
        "nm": "Jallais",
        "lat": 47.196911,
        "lon": -0.86738
    },
    {
        "id": 3012499,
        "nm": "Janville-sur-Juine",
        "lat": 48.513519,
        "lon": 2.27064
    },
    {
        "id": 3012495,
        "nm": "Janze",
        "lat": 47.959148,
        "lon": -1.49829
    },
    {
        "id": 3012484,
        "nm": "Jard-sur-Mer",
        "lat": 46.414509,
        "lon": -1.5764
    },
    {
        "id": 3012487,
        "nm": "Jardin",
        "lat": 45.49617,
        "lon": 4.90641
    },
    {
        "id": 3012483,
        "nm": "Jargeau",
        "lat": 47.863159,
        "lon": 2.12648
    },
    {
        "id": 3012477,
        "nm": "Jarnac",
        "lat": 45.681599,
        "lon": -0.17329
    },
    {
        "id": 3012467,
        "nm": "Jarny",
        "lat": 49.15736,
        "lon": 5.87877
    },
    {
        "id": 3012465,
        "nm": "Jarrie",
        "lat": 45.117321,
        "lon": 5.75957
    },
    {
        "id": 3012449,
        "nm": "Jarville-la-Malgrange",
        "lat": 48.669071,
        "lon": 6.20636
    },
    {
        "id": 3012444,
        "nm": "Jassans-Riottier",
        "lat": 45.983521,
        "lon": 4.76004
    },
    {
        "id": 3012417,
        "nm": "Jaunay-Clan",
        "lat": 46.684521,
        "lon": 0.37128
    },
    {
        "id": 3012404,
        "nm": "Jaux",
        "lat": 49.391201,
        "lon": 2.77809
    },
    {
        "id": 3012346,
        "nm": "Jeumont",
        "lat": 50.296581,
        "lon": 4.10108
    },
    {
        "id": 3012322,
        "nm": "Joeuf",
        "lat": 49.23333,
        "lon": 6.01667
    },
    {
        "id": 3012319,
        "nm": "Joigny",
        "lat": 47.98288,
        "lon": 3.40096
    },
    {
        "id": 3012315,
        "nm": "Joinville",
        "lat": 48.44363,
        "lon": 5.14144
    },
    {
        "id": 3012313,
        "nm": "Joinville-le-Pont",
        "lat": 48.825378,
        "lon": 2.47458
    },
    {
        "id": 3012303,
        "nm": "Jonage",
        "lat": 45.796398,
        "lon": 5.0453
    },
    {
        "id": 3012295,
        "nm": "Jonchery-sur-Vesle",
        "lat": 49.28952,
        "lon": 3.81346
    },
    {
        "id": 3012277,
        "nm": "Jonquieres",
        "lat": 44.114311,
        "lon": 4.90003
    },
    {
        "id": 3012275,
        "nm": "Jonquieres-Saint-Vincent",
        "lat": 43.828091,
        "lon": 4.56327
    },
    {
        "id": 3012266,
        "nm": "Jonzac",
        "lat": 45.450001,
        "lon": -0.43333
    },
    {
        "id": 3012248,
        "nm": "Josselin",
        "lat": 47.957199,
        "lon": -2.54713
    },
    {
        "id": 3012236,
        "nm": "Jouarre",
        "lat": 48.926609,
        "lon": 3.13168
    },
    {
        "id": 3012234,
        "nm": "Jouars-Pontchartrain",
        "lat": 48.788879,
        "lon": 1.89898
    },
    {
        "id": 3012219,
        "nm": "Joue-les-Tours",
        "lat": 47.35223,
        "lon": 0.66906
    },
    {
        "id": 3012200,
        "nm": "Jouques",
        "lat": 43.637501,
        "lon": 5.64006
    },
    {
        "id": 3012165,
        "nm": "Jouy-en-Josas",
        "lat": 48.75909,
        "lon": 2.16966
    },
    {
        "id": 3012162,
        "nm": "Jouy-le-Moutier",
        "lat": 49.010681,
        "lon": 2.04028
    },
    {
        "id": 3012155,
        "nm": "Jouy-sur-Morin",
        "lat": 48.794998,
        "lon": 3.27238
    },
    {
        "id": 3012124,
        "nm": "Juigne",
        "lat": 47.718781,
        "lon": -0.39405
    },
    {
        "id": 3012120,
        "nm": "Juigne-sur-Loire",
        "lat": 47.40741,
        "lon": -0.47682
    },
    {
        "id": 3012109,
        "nm": "Juillan",
        "lat": 43.199371,
        "lon": 0.0257
    },
    {
        "id": 3012099,
        "nm": "Juilly",
        "lat": 49.013748,
        "lon": 2.70563
    },
    {
        "id": 3012073,
        "nm": "Jumelles",
        "lat": 47.435101,
        "lon": -0.1037
    },
    {
        "id": 3012049,
        "nm": "Jurancon",
        "lat": 43.2883,
        "lon": -0.38694
    },
    {
        "id": 3012004,
        "nm": "Juvignac",
        "lat": 43.613892,
        "lon": 3.81056
    },
    {
        "id": 3011988,
        "nm": "Juvisy-sur-Orge",
        "lat": 48.683331,
        "lon": 2.38333
    },
    {
        "id": 3011978,
        "nm": "Juziers",
        "lat": 48.991371,
        "lon": 1.8476
    },
    {
        "id": 3011976,
        "nm": "Kaltenhouse",
        "lat": 48.791019,
        "lon": 7.83329
    },
    {
        "id": 3011969,
        "nm": "Kaysersberg",
        "lat": 48.138031,
        "lon": 7.26385
    },
    {
        "id": 3011964,
        "nm": "Kembs",
        "lat": 47.68948,
        "lon": 7.50323
    },
    {
        "id": 3011686,
        "nm": "Kerlouan",
        "lat": 48.645,
        "lon": -4.36556
    },
    {
        "id": 3011506,
        "nm": "Kervignac",
        "lat": 47.76289,
        "lon": -3.23778
    },
    {
        "id": 3011458,
        "nm": "Kilstett",
        "lat": 48.675999,
        "lon": 7.85471
    },
    {
        "id": 3011456,
        "nm": "Kingersheim",
        "lat": 47.792591,
        "lon": 7.33491
    },
    {
        "id": 3011440,
        "nm": "Knutange",
        "lat": 49.343079,
        "lon": 6.03297
    },
    {
        "id": 3011437,
        "nm": "Koenigsmacker",
        "lat": 49.400002,
        "lon": 6.28333
    },
    {
        "id": 3011386,
        "nm": "La Balme-de-Sillingy",
        "lat": 45.961102,
        "lon": 6.04251
    },
    {
        "id": 3011332,
        "nm": "La Barre-de-Monts",
        "lat": 46.880581,
        "lon": -2.12168
    },
    {
        "id": 3011307,
        "nm": "La Bassee",
        "lat": 50.534241,
        "lon": 2.8062
    },
    {
        "id": 3011234,
        "nm": "La Bathie",
        "lat": 45.628132,
        "lon": 6.45106
    },
    {
        "id": 3019766,
        "nm": "La Baule-Escoublac",
        "lat": 47.29221,
        "lon": -2.36395
    },
    {
        "id": 3011187,
        "nm": "La Bazoge",
        "lat": 48.096889,
        "lon": 0.15534
    },
    {
        "id": 3011090,
        "nm": "La Bernerie-en-Retz",
        "lat": 47.080399,
        "lon": -2.03642
    },
    {
        "id": 3011008,
        "nm": "La Boisse",
        "lat": 45.842781,
        "lon": 5.03639
    },
    {
        "id": 3010911,
        "nm": "La Bouexiere",
        "lat": 48.183331,
        "lon": -1.43333
    },
    {
        "id": 3010905,
        "nm": "La Bouilladisse",
        "lat": 43.396191,
        "lon": 5.59307
    },
    {
        "id": 3010882,
        "nm": "La Bourboule",
        "lat": 45.588371,
        "lon": 2.73956
    },
    {
        "id": 3010815,
        "nm": "La Bresse",
        "lat": 47.999741,
        "lon": 6.86499
    },
    {
        "id": 3010778,
        "nm": "La Broque",
        "lat": 48.47298,
        "lon": 7.21639
    },
    {
        "id": 3010726,
        "nm": "La Bruffiere",
        "lat": 47.014919,
        "lon": -1.1973
    },
    {
        "id": 3010685,
        "nm": "La Buisse",
        "lat": 45.3354,
        "lon": 5.62282
    },
    {
        "id": 3010619,
        "nm": "La Canourgue",
        "lat": 44.431332,
        "lon": 3.21584
    },
    {
        "id": 3010609,
        "nm": "La Capelle",
        "lat": 49.966671,
        "lon": 3.91667
    },
    {
        "id": 3010529,
        "nm": "La Celle-Saint-Cloud",
        "lat": 48.850288,
        "lon": 2.14523
    },
    {
        "id": 3010483,
        "nm": "La Chaize-le-Vicomte",
        "lat": 46.671661,
        "lon": -1.29084
    },
    {
        "id": 3010396,
        "nm": "La Chapelle-Basse-Mer",
        "lat": 47.270859,
        "lon": -1.33913
    },
    {
        "id": 3010372,
        "nm": "La Chapelle-de-Guinchay",
        "lat": 46.208408,
        "lon": 4.76245
    },
    {
        "id": 3010369,
        "nm": "La Chapelle-des-Fougeretz",
        "lat": 48.177052,
        "lon": -1.73143
    },
    {
        "id": 3010368,
        "nm": "La Chapelle-des-Marais",
        "lat": 47.448448,
        "lon": -2.23834
    },
    {
        "id": 3010344,
        "nm": "La Chapelle-en-Serval",
        "lat": 49.128422,
        "lon": 2.53405
    },
    {
        "id": 3010321,
        "nm": "La Chapelle-Heulin",
        "lat": 47.17667,
        "lon": -1.34
    },
    {
        "id": 3010315,
        "nm": "La Chapelle-la-Reine",
        "lat": 48.318138,
        "lon": 2.57152
    },
    {
        "id": 3010312,
        "nm": "La Chapelle-Launay",
        "lat": 47.372261,
        "lon": -1.97071
    },
    {
        "id": 3010281,
        "nm": "La Chapelle-Saint-Aubin",
        "lat": 48.03595,
        "lon": 0.15624
    },
    {
        "id": 3010271,
        "nm": "La Chapelle-Saint-Luc",
        "lat": 48.317341,
        "lon": 4.03988
    },
    {
        "id": 3010265,
        "nm": "La Chapelle-Saint-Mesmin",
        "lat": 47.886478,
        "lon": 1.8345
    },
    {
        "id": 3010254,
        "nm": "La Chapelle-Saint-Ursin",
        "lat": 47.062481,
        "lon": 2.32447
    },
    {
        "id": 3010239,
        "nm": "La Chapelle-sur-Crecy",
        "lat": 48.85862,
        "lon": 2.93455
    },
    {
        "id": 3010237,
        "nm": "La Chapelle-sur-Erdre",
        "lat": 47.295841,
        "lon": -1.55309
    },
    {
        "id": 3010226,
        "nm": "La Chapelle-Thouarault",
        "lat": 48.124859,
        "lon": -1.86619
    },
    {
        "id": 3010201,
        "nm": "La Charite-sur-Loire",
        "lat": 47.183331,
        "lon": 3.01667
    },
    {
        "id": 3010161,
        "nm": "La Chataigneraie",
        "lat": 46.647861,
        "lon": -0.73916
    },
    {
        "id": 3010154,
        "nm": "La Chatre",
        "lat": 46.583328,
        "lon": 1.98333
    },
    {
        "id": 3010092,
        "nm": "La Chaussee-Saint-Victor",
        "lat": 47.616199,
        "lon": 1.36765
    },
    {
        "id": 3010040,
        "nm": "La Chevroliere",
        "lat": 47.09124,
        "lon": -1.60973
    },
    {
        "id": 3010025,
        "nm": "La Ciotat",
        "lat": 43.174759,
        "lon": 5.60449
    },
    {
        "id": 3010014,
        "nm": "La Clayette",
        "lat": 46.29002,
        "lon": 4.30422
    },
    {
        "id": 3010004,
        "nm": "La Clusaz",
        "lat": 45.905201,
        "lon": 6.42376
    },
    {
        "id": 3009978,
        "nm": "La Colle-sur-Loup",
        "lat": 43.6875,
        "lon": 7.10268
    },
    {
        "id": 3009879,
        "nm": "La Cote-Saint-Andre",
        "lat": 45.39357,
        "lon": 5.26055
    },
    {
        "id": 3009824,
        "nm": "La Courneuve",
        "lat": 48.928051,
        "lon": 2.39627
    },
    {
        "id": 3009822,
        "nm": "La Couronne",
        "lat": 45.611279,
        "lon": 0.09948
    },
    {
        "id": 3009805,
        "nm": "La Couture",
        "lat": 50.582119,
        "lon": 2.7071
    },
    {
        "id": 3009804,
        "nm": "La Couture-Boussey",
        "lat": 48.895809,
        "lon": 1.40491
    },
    {
        "id": 3009791,
        "nm": "La Crau",
        "lat": 43.149811,
        "lon": 6.07425
    },
    {
        "id": 3030377,
        "nm": "La Creche",
        "lat": 46.366669,
        "lon": -0.3
    },
    {
        "id": 3009732,
        "nm": "La Croix-en-Touraine",
        "lat": 47.340309,
        "lon": 0.99024
    },
    {
        "id": 3009710,
        "nm": "La Croix-Valmer",
        "lat": 43.207951,
        "lon": 6.56696
    },
    {
        "id": 3009663,
        "nm": "La Destrousse",
        "lat": 43.37505,
        "lon": 5.6056
    },
    {
        "id": 3009575,
        "nm": "La Fare-les-Oliviers",
        "lat": 43.551041,
        "lon": 5.1943
    },
    {
        "id": 3009566,
        "nm": "La Farlede",
        "lat": 43.167702,
        "lon": 6.04266
    },
    {
        "id": 3009526,
        "nm": "La Fere",
        "lat": 49.662861,
        "lon": 3.36631
    },
    {
        "id": 3009516,
        "nm": "La Ferriere",
        "lat": 46.714531,
        "lon": -1.31417
    },
    {
        "id": 3009496,
        "nm": "La Ferte-Alais",
        "lat": 48.483059,
        "lon": 2.34802
    },
    {
        "id": 3009494,
        "nm": "La Ferte-Bernard",
        "lat": 48.186329,
        "lon": 0.65357
    },
    {
        "id": 3009490,
        "nm": "La Ferte-Gaucher",
        "lat": 48.7831,
        "lon": 3.30678
    },
    {
        "id": 3009486,
        "nm": "La Ferte-Mace",
        "lat": 48.589989,
        "lon": -0.358
    },
    {
        "id": 3009485,
        "nm": "La Ferte-Milon",
        "lat": 49.174541,
        "lon": 3.12885
    },
    {
        "id": 3009484,
        "nm": "La Ferte-Saint-Aubin",
        "lat": 47.716949,
        "lon": 1.93904
    },
    {
        "id": 3009481,
        "nm": "La Ferte-sous-Jouarre",
        "lat": 48.951401,
        "lon": 3.12724
    },
    {
        "id": 3009443,
        "nm": "La Fleche",
        "lat": 47.698151,
        "lon": -0.07553
    },
    {
        "id": 3009438,
        "nm": "La Flocelliere",
        "lat": 46.83202,
        "lon": -0.86215
    },
    {
        "id": 3009436,
        "nm": "La Flotte",
        "lat": 46.187698,
        "lon": -1.32815
    },
    {
        "id": 3009395,
        "nm": "La Force",
        "lat": 44.869019,
        "lon": 0.37541
    },
    {
        "id": 3009352,
        "nm": "La Foret-Fouesnant",
        "lat": 47.910099,
        "lon": -3.97858
    },
    {
        "id": 3009348,
        "nm": "La Foret-sur-Sevre",
        "lat": 46.769051,
        "lon": -0.64964
    },
    {
        "id": 3009313,
        "nm": "La Fouillouse",
        "lat": 45.501999,
        "lon": 4.31213
    },
    {
        "id": 3009266,
        "nm": "La Fresnais",
        "lat": 48.59478,
        "lon": -1.84186
    },
    {
        "id": 3009256,
        "nm": "La Frette-sur-Seine",
        "lat": 48.980572,
        "lon": 2.17866
    },
    {
        "id": 3009239,
        "nm": "La Gacilly",
        "lat": 47.765621,
        "lon": -2.1322
    },
    {
        "id": 3009223,
        "nm": "La Garde",
        "lat": 43.122768,
        "lon": 6.00745
    },
    {
        "id": 3009169,
        "nm": "La Garenne-Colombes",
        "lat": 48.90472,
        "lon": 2.2469
    },
    {
        "id": 3009168,
        "nm": "La Garnache",
        "lat": 46.891762,
        "lon": -1.83163
    },
    {
        "id": 3009153,
        "nm": "La Gaubretiere",
        "lat": 46.941441,
        "lon": -1.06215
    },
    {
        "id": 3009150,
        "nm": "La Gaude",
        "lat": 43.722351,
        "lon": 7.15083
    },
    {
        "id": 3009086,
        "nm": "La Glacerie",
        "lat": 49.605171,
        "lon": -1.58185
    },
    {
        "id": 3009050,
        "nm": "La Gorgue",
        "lat": 50.637901,
        "lon": 2.71502
    },
    {
        "id": 3009015,
        "nm": "La Grand-Croix",
        "lat": 45.5,
        "lon": 4.55
    },
    {
        "id": 3008981,
        "nm": "La Grande-Motte",
        "lat": 43.566669,
        "lon": 4.08333
    },
    {
        "id": 3008977,
        "nm": "La Grande-Paroisse",
        "lat": 48.386822,
        "lon": 2.90157
    },
    {
        "id": 3008857,
        "nm": "La Guerche-de-Bretagne",
        "lat": 47.94112,
        "lon": -1.22869
    },
    {
        "id": 3008820,
        "nm": "La Guyonniere",
        "lat": 46.96476,
        "lon": -1.2506
    },
    {
        "id": 3008809,
        "nm": "La Haie-Fouassiere",
        "lat": 47.154919,
        "lon": -1.39794
    },
    {
        "id": 3008611,
        "nm": "La Jarne",
        "lat": 46.127731,
        "lon": -1.07259
    },
    {
        "id": 3008607,
        "nm": "La Jarrie",
        "lat": 46.128792,
        "lon": -1.00896
    },
    {
        "id": 3008539,
        "nm": "La Lande-de-Fronsac",
        "lat": 44.980358,
        "lon": -0.38048
    },
    {
        "id": 3008432,
        "nm": "La Londe-les-Maures",
        "lat": 43.137138,
        "lon": 6.23499
    },
    {
        "id": 3008426,
        "nm": "La Longueville",
        "lat": 50.289391,
        "lon": 3.85672
    },
    {
        "id": 3008418,
        "nm": "La Loupe",
        "lat": 48.473202,
        "lon": 1.01584
    },
    {
        "id": 3008391,
        "nm": "La Machine",
        "lat": 46.892262,
        "lon": 3.46426
    },
    {
        "id": 3008379,
        "nm": "La Madeleine",
        "lat": 50.64603,
        "lon": 3.07585
    },
    {
        "id": 3008353,
        "nm": "La Mailleraye-sur-Seine",
        "lat": 49.483082,
        "lon": 0.7703
    },
    {
        "id": 3008189,
        "nm": "La Meignanne",
        "lat": 47.516998,
        "lon": -0.66861
    },
    {
        "id": 3008177,
        "nm": "La Membrolle-sur-Choisille",
        "lat": 47.437191,
        "lon": 0.63163
    },
    {
        "id": 3008166,
        "nm": "La Menitre",
        "lat": 47.400002,
        "lon": -0.26667
    },
    {
        "id": 3008140,
        "nm": "La Meziere",
        "lat": 48.218281,
        "lon": -1.75514
    },
    {
        "id": 3008133,
        "nm": "La Milesse",
        "lat": 48.063141,
        "lon": 0.13428
    },
    {
        "id": 3008107,
        "nm": "La Monnerie-le-Montel",
        "lat": 45.866669,
        "lon": 3.6
    },
    {
        "id": 3008096,
        "nm": "La Montagne",
        "lat": 47.18652,
        "lon": -1.68272
    },
    {
        "id": 3008052,
        "nm": "La Mothe-Achard",
        "lat": 46.61586,
        "lon": -1.65938
    },
    {
        "id": 3008037,
        "nm": "La Motte",
        "lat": 43.491421,
        "lon": 6.53689
    },
    {
        "id": 3007998,
        "nm": "La Motte-Servolex",
        "lat": 45.594158,
        "lon": 5.87575
    },
    {
        "id": 3007963,
        "nm": "La Mulatiere",
        "lat": 45.725899,
        "lon": 4.80712
    },
    {
        "id": 3007957,
        "nm": "La Mure",
        "lat": 44.902561,
        "lon": 5.78659
    },
    {
        "id": 3007582,
        "nm": "La Norville",
        "lat": 48.582432,
        "lon": 2.2618
    },
    {
        "id": 3007401,
        "nm": "La Penne-sur-Huveaune",
        "lat": 43.282082,
        "lon": 5.51642
    },
    {
        "id": 3007262,
        "nm": "La Plaine-sur-Mer",
        "lat": 47.136189,
        "lon": -2.19182
    },
    {
        "id": 3007259,
        "nm": "La Planche",
        "lat": 47.01619,
        "lon": -1.43159
    },
    {
        "id": 3007213,
        "nm": "La Pommeraye",
        "lat": 47.355621,
        "lon": -0.85892
    },
    {
        "id": 3007195,
        "nm": "La Possonniere",
        "lat": 47.374851,
        "lon": -0.68538
    },
    {
        "id": 3007102,
        "nm": "La Queue-en-Brie",
        "lat": 48.785198,
        "lon": 2.58112
    },
    {
        "id": 3007101,
        "nm": "La Queue-les-Yvelines",
        "lat": 48.799999,
        "lon": 1.76667
    },
    {
        "id": 3007064,
        "nm": "La Ravoire",
        "lat": 45.55978,
        "lon": 5.96871
    },
    {
        "id": 3006979,
        "nm": "La Reole",
        "lat": 44.582008,
        "lon": -0.03691
    },
    {
        "id": 3006930,
        "nm": "La Ricamarie",
        "lat": 45.41684,
        "lon": 4.31199
    },
    {
        "id": 3006929,
        "nm": "La Richardais",
        "lat": 48.606411,
        "lon": -2.03638
    },
    {
        "id": 3006928,
        "nm": "La Riche",
        "lat": 47.389961,
        "lon": 0.67072
    },
    {
        "id": 3006889,
        "nm": "La Riviere-de-Corps",
        "lat": 48.288399,
        "lon": 4.01947
    },
    {
        "id": 3006701,
        "nm": "la Roca dAlbera",
        "lat": 42.521301,
        "lon": 2.93374
    },
    {
        "id": 3006806,
        "nm": "La Roche-Blanche",
        "lat": 45.700642,
        "lon": 3.12648
    },
    {
        "id": 3006801,
        "nm": "La Roche-Chalais",
        "lat": 45.150002,
        "lon": 0.01667
    },
    {
        "id": 3006798,
        "nm": "La Roche-de-Glun",
        "lat": 45.013359,
        "lon": 4.84488
    },
    {
        "id": 3006770,
        "nm": "La Roche-sur-Foron",
        "lat": 46.066601,
        "lon": 6.31224
    },
    {
        "id": 3006767,
        "nm": "La Roche-sur-Yon",
        "lat": 46.666672,
        "lon": -1.43333
    },
    {
        "id": 3006793,
        "nm": "La Rochefoucauld",
        "lat": 45.740479,
        "lon": 0.38564
    },
    {
        "id": 3006787,
        "nm": "La Rochelle",
        "lat": 46.166672,
        "lon": -1.15
    },
    {
        "id": 3006755,
        "nm": "La Rochette",
        "lat": 48.50882,
        "lon": 2.66357
    },
    {
        "id": 3006758,
        "nm": "La Rochette",
        "lat": 45.460251,
        "lon": 6.12065
    },
    {
        "id": 3006704,
        "nm": "La Roquebrussanne",
        "lat": 43.33989,
        "lon": 5.97618
    },
    {
        "id": 3006690,
        "nm": "La Roquette-sur-Siagne",
        "lat": 43.59948,
        "lon": 6.95705
    },
    {
        "id": 3006531,
        "nm": "La Salvetat-Saint-Gilles",
        "lat": 43.576221,
        "lon": 1.27192
    },
    {
        "id": 3006502,
        "nm": "La Saussaye",
        "lat": 49.259361,
        "lon": 0.98094
    },
    {
        "id": 3006454,
        "nm": "La Seguiniere",
        "lat": 47.063568,
        "lon": -0.93857
    },
    {
        "id": 3006430,
        "nm": "La Sentinelle",
        "lat": 50.351151,
        "lon": 3.48425
    },
    {
        "id": 3006414,
        "nm": "La Seyne-sur-Mer",
        "lat": 43.098179,
        "lon": 5.88472
    },
    {
        "id": 3006387,
        "nm": "La Souterraine",
        "lat": 46.237141,
        "lon": 1.48701
    },
    {
        "id": 3006330,
        "nm": "La Suze-sur-Sarthe",
        "lat": 47.887531,
        "lon": 0.02519
    },
    {
        "id": 3006320,
        "nm": "La Talaudiere",
        "lat": 45.480942,
        "lon": 4.43173
    },
    {
        "id": 3006293,
        "nm": "La Terrasse",
        "lat": 45.32634,
        "lon": 5.93277
    },
    {
        "id": 3006285,
        "nm": "La Tessoualle",
        "lat": 47.004761,
        "lon": -0.85119
    },
    {
        "id": 3006283,
        "nm": "La Teste-de-Buch",
        "lat": 44.62875,
        "lon": -1.14059
    },
    {
        "id": 3006207,
        "nm": "La Tour-de-Salvagny",
        "lat": 45.812328,
        "lon": 4.71626
    },
    {
        "id": 3006205,
        "nm": "La Tour-du-Crieu",
        "lat": 43.10471,
        "lon": 1.65275
    },
    {
        "id": 3006202,
        "nm": "La Tour-du-Pin",
        "lat": 45.566669,
        "lon": 5.45
    },
    {
        "id": 3006183,
        "nm": "La Tranche-sur-Mer",
        "lat": 46.342999,
        "lon": -1.437
    },
    {
        "id": 3006170,
        "nm": "La Tremblade",
        "lat": 45.768059,
        "lon": -1.14266
    },
    {
        "id": 3006152,
        "nm": "La Trinite",
        "lat": 43.741489,
        "lon": 7.31353
    },
    {
        "id": 3006131,
        "nm": "La Tronche",
        "lat": 45.204288,
        "lon": 5.73645
    },
    {
        "id": 3006090,
        "nm": "La Turballe",
        "lat": 47.346859,
        "lon": -2.50734
    },
    {
        "id": 3006089,
        "nm": "La Turbie",
        "lat": 43.74514,
        "lon": 7.40101
    },
    {
        "id": 3005825,
        "nm": "La Valette-du-Var",
        "lat": 43.137409,
        "lon": 5.98314
    },
    {
        "id": 3005651,
        "nm": "La Verpilliere",
        "lat": 45.636471,
        "lon": 5.14151
    },
    {
        "id": 3005640,
        "nm": "La Verrie",
        "lat": 46.961311,
        "lon": -0.99596
    },
    {
        "id": 3005639,
        "nm": "La Verriere",
        "lat": 48.751999,
        "lon": 1.94649
    },
    {
        "id": 3005540,
        "nm": "La Ville-aux-Dames",
        "lat": 47.395512,
        "lon": 0.76837
    },
    {
        "id": 3005524,
        "nm": "La Ville-du-Bois",
        "lat": 48.655209,
        "lon": 2.26833
    },
    {
        "id": 3005435,
        "nm": "La Voulte-sur-Rhone",
        "lat": 44.80072,
        "lon": 4.7716
    },
    {
        "id": 3005422,
        "nm": "La Wantzenau",
        "lat": 48.65786,
        "lon": 7.83068
    },
    {
        "id": 3011353,
        "nm": "Labaroche",
        "lat": 48.11076,
        "lon": 7.19244
    },
    {
        "id": 3011312,
        "nm": "Labarthe-sur-Leze",
        "lat": 43.452061,
        "lon": 1.39968
    },
    {
        "id": 3011250,
        "nm": "Labastide-Saint-Pierre",
        "lat": 43.91769,
        "lon": 1.36628
    },
    {
        "id": 3011154,
        "nm": "Labege",
        "lat": 43.530392,
        "lon": 1.53596
    },
    {
        "id": 3011123,
        "nm": "Labenne",
        "lat": 43.594639,
        "lon": -1.42559
    },
    {
        "id": 3010908,
        "nm": "Labouheyre",
        "lat": 44.212971,
        "lon": -0.92062
    },
    {
        "id": 3010855,
        "nm": "Labourse",
        "lat": 50.498829,
        "lon": 2.68121
    },
    {
        "id": 3010720,
        "nm": "Labruguiere",
        "lat": 43.538582,
        "lon": 2.26392
    },
    {
        "id": 3010626,
        "nm": "Lacanau",
        "lat": 44.977791,
        "lon": -1.0762
    },
    {
        "id": 3010580,
        "nm": "Lacasse",
        "lat": 43.398731,
        "lon": 1.26951
    },
    {
        "id": 3010566,
        "nm": "Lacaune",
        "lat": 43.7066,
        "lon": 2.69293
    },
    {
        "id": 3009716,
        "nm": "Lacroix-Saint-Ouen",
        "lat": 49.35685,
        "lon": 2.78803
    },
    {
        "id": 3009289,
        "nm": "Lafrancaise",
        "lat": 44.127911,
        "lon": 1.24141
    },
    {
        "id": 3009188,
        "nm": "Lagardelle-sur-Leze",
        "lat": 43.41143,
        "lon": 1.3892
    },
    {
        "id": 3009073,
        "nm": "Lagnieu",
        "lat": 45.900379,
        "lon": 5.3466
    },
    {
        "id": 3009071,
        "nm": "Lagny-sur-Marne",
        "lat": 48.866669,
        "lon": 2.71667
    },
    {
        "id": 3009052,
        "nm": "Lagord",
        "lat": 46.188221,
        "lon": -1.15355
    },
    {
        "id": 3008719,
        "nm": "Lahonce",
        "lat": 43.482479,
        "lon": -1.39101
    },
    {
        "id": 3008684,
        "nm": "Laigne-en-Belin",
        "lat": 47.87706,
        "lon": 0.22796
    },
    {
        "id": 3008680,
        "nm": "Laigneville",
        "lat": 49.291489,
        "lon": 2.44581
    },
    {
        "id": 3008665,
        "nm": "Laille",
        "lat": 47.978481,
        "lon": -1.71676
    },
    {
        "id": 3008662,
        "nm": "Lailly-en-Val",
        "lat": 47.769619,
        "lon": 1.68657
    },
    {
        "id": 3008469,
        "nm": "Lalinde",
        "lat": 44.836208,
        "lon": 0.73075
    },
    {
        "id": 3008463,
        "nm": "Lallaing",
        "lat": 50.390121,
        "lon": 3.16949
    },
    {
        "id": 3008321,
        "nm": "Lamalou-les-Bains",
        "lat": 43.597858,
        "lon": 3.08052
    },
    {
        "id": 3008249,
        "nm": "Lamastre",
        "lat": 44.986721,
        "lon": 4.57975
    },
    {
        "id": 3008225,
        "nm": "Lamballe",
        "lat": 48.467621,
        "lon": -2.51436
    },
    {
        "id": 3008218,
        "nm": "Lambersart",
        "lat": 50.650002,
        "lon": 3.03333
    },
    {
        "id": 3008208,
        "nm": "Lambesc",
        "lat": 43.653111,
        "lon": 5.26282
    },
    {
        "id": 3008198,
        "nm": "Lambres-lez-Douai",
        "lat": 50.349998,
        "lon": 3.06667
    },
    {
        "id": 3008080,
        "nm": "Lamonzie-Saint-Martin",
        "lat": 44.84713,
        "lon": 0.39102
    },
    {
        "id": 3008074,
        "nm": "Lamorlaye",
        "lat": 49.16246,
        "lon": 2.44687
    },
    {
        "id": 3008020,
        "nm": "Lamotte-Beuvron",
        "lat": 47.602001,
        "lon": 2.02837
    },
    {
        "id": 3007973,
        "nm": "Lampaul-Guimiliau",
        "lat": 48.491562,
        "lon": -4.04144
    },
    {
        "id": 3007972,
        "nm": "Lampaul-Plouarzel",
        "lat": 48.447269,
        "lon": -4.76045
    },
    {
        "id": 3007970,
        "nm": "Lampertheim",
        "lat": 48.651711,
        "lon": 7.69913
    },
    {
        "id": 3007912,
        "nm": "Lancon-Provence",
        "lat": 43.592369,
        "lon": 5.13167
    },
    {
        "id": 3007903,
        "nm": "Landas",
        "lat": 50.472691,
        "lon": 3.30366
    },
    {
        "id": 3007885,
        "nm": "Landeda",
        "lat": 48.58733,
        "lon": -4.571
    },
    {
        "id": 3007874,
        "nm": "Landerneau",
        "lat": 48.452518,
        "lon": -4.25252
    },
    {
        "id": 3007873,
        "nm": "Landeronde",
        "lat": 46.657219,
        "lon": -1.56953
    },
    {
        "id": 3007858,
        "nm": "Landevant",
        "lat": 47.764999,
        "lon": -3.12221
    },
    {
        "id": 3007842,
        "nm": "Landivisiau",
        "lat": 48.507839,
        "lon": -4.06833
    },
    {
        "id": 3007830,
        "nm": "Landrecies",
        "lat": 50.125,
        "lon": 3.69171
    },
    {
        "id": 3007794,
        "nm": "Lanester",
        "lat": 47.761318,
        "lon": -3.33965
    },
    {
        "id": 3007780,
        "nm": "Laneuveville-devant-Nancy",
        "lat": 48.656281,
        "lon": 6.2317
    },
    {
        "id": 3007730,
        "nm": "Langeac",
        "lat": 45.10331,
        "lon": 3.4932
    },
    {
        "id": 3007729,
        "nm": "Langeais",
        "lat": 47.325871,
        "lon": 0.40136
    },
    {
        "id": 3007715,
        "nm": "Langlade",
        "lat": 43.802841,
        "lon": 4.25232
    },
    {
        "id": 3007694,
        "nm": "Langogne",
        "lat": 44.727261,
        "lon": 3.85539
    },
    {
        "id": 3007693,
        "nm": "Langoiran",
        "lat": 44.708691,
        "lon": -0.39368
    },
    {
        "id": 3007691,
        "nm": "Langon",
        "lat": 44.549999,
        "lon": -0.25
    },
    {
        "id": 3007687,
        "nm": "Langonnet",
        "lat": 48.10511,
        "lon": -3.49356
    },
    {
        "id": 3007680,
        "nm": "Langres",
        "lat": 47.866669,
        "lon": 5.33333
    },
    {
        "id": 3007666,
        "nm": "Langueux",
        "lat": 48.494999,
        "lon": -2.7185
    },
    {
        "id": 3007663,
        "nm": "Languidic",
        "lat": 47.832661,
        "lon": -3.15821
    },
    {
        "id": 3007637,
        "nm": "Lanmeur",
        "lat": 47.833328,
        "lon": -3.71667
    },
    {
        "id": 3007622,
        "nm": "Lannemezan",
        "lat": 43.125172,
        "lon": 0.38401
    },
    {
        "id": 3007610,
        "nm": "Lannilis",
        "lat": 48.570911,
        "lon": -4.52233
    },
    {
        "id": 3007609,
        "nm": "Lannion",
        "lat": 48.73333,
        "lon": -3.46667
    },
    {
        "id": 3007539,
        "nm": "Lans-en-Vercors",
        "lat": 45.12793,
        "lon": 5.58572
    },
    {
        "id": 3007541,
        "nm": "Lansargues",
        "lat": 43.651569,
        "lon": 4.07495
    },
    {
        "id": 3007508,
        "nm": "Lanton",
        "lat": 44.704781,
        "lon": -1.03562
    },
    {
        "id": 3007496,
        "nm": "Lanvallay",
        "lat": 48.455429,
        "lon": -2.02803
    },
    {
        "id": 3007488,
        "nm": "Lanveoc",
        "lat": 48.287991,
        "lon": -4.46277
    },
    {
        "id": 3007477,
        "nm": "Laon",
        "lat": 49.566669,
        "lon": 3.61667
    },
    {
        "id": 3007461,
        "nm": "Lapalisse",
        "lat": 46.248348,
        "lon": 3.63605
    },
    {
        "id": 3007451,
        "nm": "Lapalud",
        "lat": 44.304459,
        "lon": 4.68953
    },
    {
        "id": 3007327,
        "nm": "Lapeyrouse-Fossat",
        "lat": 43.69973,
        "lon": 1.51049
    },
    {
        "id": 3007160,
        "nm": "Lapoutroie",
        "lat": 48.153229,
        "lon": 7.16696
    },
    {
        "id": 3007116,
        "nm": "Lapugnoy",
        "lat": 50.51635,
        "lon": 2.5346
    },
    {
        "id": 3007082,
        "nm": "Laragne-Monteglin",
        "lat": 44.316669,
        "lon": 5.81667
    },
    {
        "id": 3007048,
        "nm": "Larcay",
        "lat": 47.366489,
        "lon": 0.78145
    },
    {
        "id": 3007017,
        "nm": "Lardy",
        "lat": 48.518471,
        "lon": 2.2736
    },
    {
        "id": 3006958,
        "nm": "Largentiere",
        "lat": 44.533329,
        "lon": 4.3
    },
    {
        "id": 3006876,
        "nm": "Larmor-Plage",
        "lat": 47.706459,
        "lon": -3.38339
    },
    {
        "id": 3006380,
        "nm": "Lassay-les-Chateaux",
        "lat": 48.438351,
        "lon": -0.49758
    },
    {
        "id": 3006215,
        "nm": "Latour-Bas-Elne",
        "lat": 42.606461,
        "lon": 3.00201
    },
    {
        "id": 3006161,
        "nm": "Latresne",
        "lat": 44.786011,
        "lon": -0.48994
    },
    {
        "id": 3006121,
        "nm": "Lattes",
        "lat": 43.56752,
        "lon": 3.9046
    },
    {
        "id": 3006056,
        "nm": "Laudun-lArdoise",
        "lat": 44.099998,
        "lon": 4.66667
    },
    {
        "id": 3006035,
        "nm": "Launaguet",
        "lat": 43.678181,
        "lon": 1.45603
    },
    {
        "id": 3005966,
        "nm": "Lauris",
        "lat": 43.74799,
        "lon": 5.31518
    },
    {
        "id": 3005932,
        "nm": "Lauwin-Planque",
        "lat": 50.39024,
        "lon": 3.0451
    },
    {
        "id": 3005866,
        "nm": "Laval",
        "lat": 48.066669,
        "lon": -0.76667
    },
    {
        "id": 3005775,
        "nm": "Lavans-les-Saint-Claude",
        "lat": 46.384838,
        "lon": 5.78172
    },
    {
        "id": 3005769,
        "nm": "Lavardac",
        "lat": 44.177849,
        "lon": 0.29825
    },
    {
        "id": 3005735,
        "nm": "Lavaur",
        "lat": 43.698471,
        "lon": 1.81858
    },
    {
        "id": 3005712,
        "nm": "Lavelanet",
        "lat": 42.931271,
        "lon": 1.84656
    },
    {
        "id": 3005696,
        "nm": "Laventie",
        "lat": 50.628181,
        "lon": 2.77076
    },
    {
        "id": 3005632,
        "nm": "Laverune",
        "lat": 43.586391,
        "lon": 3.80611
    },
    {
        "id": 3005417,
        "nm": "Laxou",
        "lat": 48.683151,
        "lon": 6.148
    },
    {
        "id": 3005397,
        "nm": "Lay-Saint-Christophe",
        "lat": 48.748669,
        "lon": 6.19776
    },
    {
        "id": 3005401,
        "nm": "Layrac",
        "lat": 44.134491,
        "lon": 0.66176
    },
    {
        "id": 6615511,
        "nm": "Le Ban Saint-Martin",
        "lat": 49.122501,
        "lon": 6.15111
    },
    {
        "id": 3005364,
        "nm": "Le Barcares",
        "lat": 42.788052,
        "lon": 3.03565
    },
    {
        "id": 3005360,
        "nm": "Le Barp",
        "lat": 44.60833,
        "lon": -0.76948
    },
    {
        "id": 3005282,
        "nm": "Le Bignon",
        "lat": 47.097221,
        "lon": -1.49167
    },
    {
        "id": 3005270,
        "nm": "Le Blanc",
        "lat": 46.633331,
        "lon": 1.06667
    },
    {
        "id": 3005269,
        "nm": "Le Blanc-Mesnil",
        "lat": 48.938721,
        "lon": 2.46138
    },
    {
        "id": 3005218,
        "nm": "Le Bois-Plage-en-Re",
        "lat": 46.186588,
        "lon": -1.39267
    },
    {
        "id": 3005202,
        "nm": "Le Bono",
        "lat": 47.641289,
        "lon": -2.94902
    },
    {
        "id": 3005182,
        "nm": "Le Bosc-Roger-en-Roumois",
        "lat": 49.283329,
        "lon": 0.93333
    },
    {
        "id": 3005099,
        "nm": "Le Boupere",
        "lat": 46.795952,
        "lon": -0.92654
    },
    {
        "id": 3005082,
        "nm": "Le Bourget",
        "lat": 48.934052,
        "lon": 2.43584
    },
    {
        "id": 3005081,
        "nm": "Le Bourget-du-Lac",
        "lat": 45.64756,
        "lon": 5.86085
    },
    {
        "id": 3005066,
        "nm": "Le Bouscat",
        "lat": 44.866001,
        "lon": -0.59411
    },
    {
        "id": 3005001,
        "nm": "Le Breuil",
        "lat": 46.806541,
        "lon": 4.46953
    },
    {
        "id": 3004935,
        "nm": "Le Bugue",
        "lat": 44.918468,
        "lon": 0.92714
    },
    {
        "id": 3004891,
        "nm": "Le Cailar",
        "lat": 43.67923,
        "lon": 4.23576
    },
    {
        "id": 3004871,
        "nm": "Le Cannet",
        "lat": 43.576618,
        "lon": 7.01912
    },
    {
        "id": 3004870,
        "nm": "Le Cannet-des-Maures",
        "lat": 43.392719,
        "lon": 6.34165
    },
    {
        "id": 3004866,
        "nm": "Le Cap dAgde",
        "lat": 43.277962,
        "lon": 3.51357
    },
    {
        "id": 3004838,
        "nm": "Le Castellet",
        "lat": 43.20285,
        "lon": 5.77642
    },
    {
        "id": 3004813,
        "nm": "Le Cellier",
        "lat": 47.319881,
        "lon": -1.34584
    },
    {
        "id": 3004811,
        "nm": "Le Cendre",
        "lat": 45.72118,
        "lon": 3.18839
    },
    {
        "id": 3004775,
        "nm": "Le Chambon-Feugerolles",
        "lat": 45.396889,
        "lon": 4.32592
    },
    {
        "id": 3004774,
        "nm": "Le Chambon-sur-Lignon",
        "lat": 45.060791,
        "lon": 4.30314
    },
    {
        "id": 3004698,
        "nm": "Le Chatelet-en-Brie",
        "lat": 48.50695,
        "lon": 2.79163
    },
    {
        "id": 3004630,
        "nm": "Le Chesnay",
        "lat": 48.822201,
        "lon": 2.12213
    },
    {
        "id": 3004609,
        "nm": "Le Cheylard",
        "lat": 44.906231,
        "lon": 4.42406
    },
    {
        "id": 3004608,
        "nm": "Le Cheylas",
        "lat": 45.373692,
        "lon": 5.99376
    },
    {
        "id": 3004513,
        "nm": "Le Conquet",
        "lat": 48.360531,
        "lon": -4.77086
    },
    {
        "id": 3004492,
        "nm": "Le Coteau",
        "lat": 46.027061,
        "lon": 4.0869
    },
    {
        "id": 3004471,
        "nm": "Le Coudray",
        "lat": 48.42115,
        "lon": 1.50057
    },
    {
        "id": 3004464,
        "nm": "Le Coudray-Montceaux",
        "lat": 48.563759,
        "lon": 2.50012
    },
    {
        "id": 3004434,
        "nm": "Le Cres",
        "lat": 43.648071,
        "lon": 3.93976
    },
    {
        "id": 3004427,
        "nm": "Le Creusot",
        "lat": 46.80714,
        "lon": 4.41632
    },
    {
        "id": 3004418,
        "nm": "Le Croisic",
        "lat": 47.291889,
        "lon": -2.5138
    },
    {
        "id": 3004398,
        "nm": "Le Crotoy",
        "lat": 50.216,
        "lon": 1.625
    },
    {
        "id": 3004334,
        "nm": "Le Dorat",
        "lat": 46.215141,
        "lon": 1.08152
    },
    {
        "id": 3004304,
        "nm": "Le Faouet",
        "lat": 48.03299,
        "lon": -3.49048
    },
    {
        "id": 3004258,
        "nm": "Le Fenouiller",
        "lat": 46.719009,
        "lon": -1.90175
    },
    {
        "id": 3004222,
        "nm": "Le Folgoet",
        "lat": 48.563591,
        "lon": -4.33641
    },
    {
        "id": 3004138,
        "nm": "Le Fuilet",
        "lat": 47.283451,
        "lon": -1.1131
    },
    {
        "id": 3004041,
        "nm": "Le Grand-Bornand",
        "lat": 45.943459,
        "lon": 6.44111
    },
    {
        "id": 3003991,
        "nm": "Le Grand-Lemps",
        "lat": 45.397888,
        "lon": 5.42215
    },
    {
        "id": 3003986,
        "nm": "Le Grand-Luce",
        "lat": 47.86618,
        "lon": 0.46919
    },
    {
        "id": 3003952,
        "nm": "Le Grand-Quevilly",
        "lat": 49.400761,
        "lon": 1.04582
    },
    {
        "id": 3003918,
        "nm": "Le Grau-du-Roi",
        "lat": 43.538811,
        "lon": 4.13559
    },
    {
        "id": 3003893,
        "nm": "Le Gua",
        "lat": 45.726139,
        "lon": -0.94468
    },
    {
        "id": 3003859,
        "nm": "Le Haillan",
        "lat": 44.87225,
        "lon": -0.67965
    },
    {
        "id": 3003796,
        "nm": "Le Havre",
        "lat": 49.493801,
        "lon": 0.10767
    },
    {
        "id": 3003773,
        "nm": "Le Houlme",
        "lat": 49.50972,
        "lon": 1.03537
    },
    {
        "id": 3003737,
        "nm": "Le Kremlin-Bicetre",
        "lat": 48.814709,
        "lon": 2.36073
    },
    {
        "id": 3003730,
        "nm": "Le Landreau",
        "lat": 47.20512,
        "lon": -1.30452
    },
    {
        "id": 3003713,
        "nm": "Le Lavandou",
        "lat": 43.137001,
        "lon": 6.366
    },
    {
        "id": 3003672,
        "nm": "Le Longeron",
        "lat": 47.018452,
        "lon": -1.05762
    },
    {
        "id": 3003661,
        "nm": "Le Loroux-Bottereau",
        "lat": 47.237629,
        "lon": -1.34952
    },
    {
        "id": 3003656,
        "nm": "Le Louroux-Beconnais",
        "lat": 47.52211,
        "lon": -0.88664
    },
    {
        "id": 3003650,
        "nm": "Le Luc",
        "lat": 43.393181,
        "lon": 6.31474
    },
    {
        "id": 3003647,
        "nm": "Le Lude",
        "lat": 47.646481,
        "lon": 0.15664
    },
    {
        "id": 3003603,
        "nm": "Le Mans",
        "lat": 48,
        "lon": 0.2
    },
    {
        "id": 3003514,
        "nm": "Le May-sur-Evre",
        "lat": 47.137138,
        "lon": -0.89227
    },
    {
        "id": 3003481,
        "nm": "Le Mee-sur-Seine",
        "lat": 48.53157,
        "lon": 2.62829
    },
    {
        "id": 3003393,
        "nm": "Le Mesnil-en-Thelle",
        "lat": 49.178299,
        "lon": 2.28573
    },
    {
        "id": 3003391,
        "nm": "Le Mesnil-Esnard",
        "lat": 49.413189,
        "lon": 1.14521
    },
    {
        "id": 3003375,
        "nm": "Le Mesnil-le-Roi",
        "lat": 48.938251,
        "lon": 2.12554
    },
    {
        "id": 3003359,
        "nm": "Le Mesnil-Saint-Denis",
        "lat": 48.74485,
        "lon": 1.95594
    },
    {
        "id": 3003316,
        "nm": "Le Molay-Littry",
        "lat": 49.242649,
        "lon": -0.87238
    },
    {
        "id": 3003148,
        "nm": "Le Muy",
        "lat": 43.473808,
        "lon": 6.56452
    },
    {
        "id": 3003127,
        "nm": "Le Neubourg",
        "lat": 49.150478,
        "lon": 0.9102
    },
    {
        "id": 3003101,
        "nm": "Le Nouvion-en-Thierache",
        "lat": 50.016251,
        "lon": 3.78509
    },
    {
        "id": 3003045,
        "nm": "Le Palais",
        "lat": 47.34557,
        "lon": -3.15411
    },
    {
        "id": 3003044,
        "nm": "Le Palais-sur-Vienne",
        "lat": 45.8638,
        "lon": 1.32207
    },
    {
        "id": 3003042,
        "nm": "Le Pallet",
        "lat": 47.138088,
        "lon": -1.33476
    },
    {
        "id": 3003017,
        "nm": "Le Passage",
        "lat": 44.201431,
        "lon": 0.60275
    },
    {
        "id": 3002988,
        "nm": "Le Peage-de-Roussillon",
        "lat": 45.371799,
        "lon": 4.79791
    },
    {
        "id": 3002986,
        "nm": "Le Pechereau",
        "lat": 46.576771,
        "lon": 1.54743
    },
    {
        "id": 3002984,
        "nm": "Le Pecq",
        "lat": 48.893169,
        "lon": 2.10371
    },
    {
        "id": 3002981,
        "nm": "Le Pellerin",
        "lat": 47.199139,
        "lon": -1.75514
    },
    {
        "id": 3002967,
        "nm": "Le Perray-en-Yvelines",
        "lat": 48.694408,
        "lon": 1.85643
    },
    {
        "id": 3002965,
        "nm": "Le Perreux-sur-Marne",
        "lat": 48.849998,
        "lon": 2.5
    },
    {
        "id": 3002880,
        "nm": "Le Petit-Quevilly",
        "lat": 49.41338,
        "lon": 1.06155
    },
    {
        "id": 3002836,
        "nm": "Le Pian-Medoc",
        "lat": 44.955372,
        "lon": -0.66227
    },
    {
        "id": 2986886,
        "nm": "Le Plan-de-la-Tour",
        "lat": 43.333328,
        "lon": 6.55
    },
    {
        "id": 3002680,
        "nm": "Le Plessis-Belleville",
        "lat": 49.095009,
        "lon": 2.75614
    },
    {
        "id": 3002679,
        "nm": "Le Plessis-Bouchard",
        "lat": 49,
        "lon": 2.23333
    },
    {
        "id": 3002669,
        "nm": "Le Plessis-Grammoire",
        "lat": 47.49884,
        "lon": -0.43021
    },
    {
        "id": 3002654,
        "nm": "Le Plessis-Pate",
        "lat": 48.610779,
        "lon": 2.32318
    },
    {
        "id": 3002650,
        "nm": "Le Plessis-Robinson",
        "lat": 48.788891,
        "lon": 2.27078
    },
    {
        "id": 3002647,
        "nm": "Le Plessis-Trevise",
        "lat": 48.810741,
        "lon": 2.57363
    },
    {
        "id": 3002626,
        "nm": "Le Poinconnet",
        "lat": 46.764099,
        "lon": 1.7179
    },
    {
        "id": 3002620,
        "nm": "Le Poire-sur-Vie",
        "lat": 46.769211,
        "lon": -1.50938
    },
    {
        "id": 3002586,
        "nm": "Le Pont-de-Beauvoisin",
        "lat": 45.536942,
        "lon": 5.67333
    },
    {
        "id": 3002585,
        "nm": "Le Pont-de-Claix",
        "lat": 45.124432,
        "lon": 5.7064
    },
    {
        "id": 3002570,
        "nm": "Le Pontet",
        "lat": 43.961189,
        "lon": 4.86008
    },
    {
        "id": 3002547,
        "nm": "Le Port-Marly",
        "lat": 48.89016,
        "lon": 2.1114
    },
    {
        "id": 3002551,
        "nm": "Le Portel",
        "lat": 50.705589,
        "lon": 1.57574
    },
    {
        "id": 3002534,
        "nm": "Le Pouliguen",
        "lat": 47.26973,
        "lon": -2.4278
    },
    {
        "id": 3002520,
        "nm": "Le Pouzin",
        "lat": 44.751732,
        "lon": 4.74798
    },
    {
        "id": 3002510,
        "nm": "Le Pradet",
        "lat": 43.106609,
        "lon": 6.01718
    },
    {
        "id": 3002499,
        "nm": "Le Pre-Saint-Gervais",
        "lat": 48.88549,
        "lon": 2.40422
    },
    {
        "id": 3002465,
        "nm": "Le Puy-en-Velay",
        "lat": 45.043659,
        "lon": 3.88523
    },
    {
        "id": 3002443,
        "nm": "Le Puy-Sainte-Reparade",
        "lat": 43.663189,
        "lon": 5.43434
    },
    {
        "id": 3002420,
        "nm": "Le Quesnoy",
        "lat": 50.247971,
        "lon": 3.63656
    },
    {
        "id": 3002401,
        "nm": "Le Raincy",
        "lat": 48.900002,
        "lon": 2.51667
    },
    {
        "id": 3002373,
        "nm": "Le Relecq-Kerhuon",
        "lat": 48.40691,
        "lon": -4.39359
    },
    {
        "id": 3002357,
        "nm": "Le Revest-les-Eaux",
        "lat": 43.183331,
        "lon": 5.93333
    },
    {
        "id": 3002351,
        "nm": "Le Rheu",
        "lat": 48.10228,
        "lon": -1.79734
    },
    {
        "id": 3002280,
        "nm": "Le Rouret",
        "lat": 43.67873,
        "lon": 7.01521
    },
    {
        "id": 3002271,
        "nm": "Le Rove",
        "lat": 43.369869,
        "lon": 5.25112
    },
    {
        "id": 3002256,
        "nm": "Le Russey",
        "lat": 47.160549,
        "lon": 6.72912
    },
    {
        "id": 3000139,
        "nm": "Le Soler",
        "lat": 42.681011,
        "lon": 2.79335
    },
    {
        "id": 3000090,
        "nm": "Le Sourn",
        "lat": 48.042622,
        "lon": -2.9879
    },
    {
        "id": 2999296,
        "nm": "Le Taillan-Medoc",
        "lat": 44.905201,
        "lon": -0.6706
    },
    {
        "id": 2999290,
        "nm": "Le Tallud",
        "lat": 46.629108,
        "lon": -0.29978
    },
    {
        "id": 2999260,
        "nm": "Le Teich",
        "lat": 44.631771,
        "lon": -1.02155
    },
    {
        "id": 2999259,
        "nm": "Le Teil",
        "lat": 44.546791,
        "lon": 4.68165
    },
    {
        "id": 2999205,
        "nm": "Le Theil-Bocage",
        "lat": 48.883331,
        "lon": -0.71667
    },
    {
        "id": 2999186,
        "nm": "Le Thillay",
        "lat": 49.006592,
        "lon": 2.47218
    },
    {
        "id": 2999185,
        "nm": "Le Thillot",
        "lat": 47.87941,
        "lon": 6.7628
    },
    {
        "id": 2999182,
        "nm": "Le Tholonet",
        "lat": 43.521759,
        "lon": 5.51115
    },
    {
        "id": 2999180,
        "nm": "Le Thor",
        "lat": 43.929428,
        "lon": 4.99543
    },
    {
        "id": 2999163,
        "nm": "Le Tignet",
        "lat": 43.63887,
        "lon": 6.84173
    },
    {
        "id": 2999139,
        "nm": "Le Touquet-Paris-Plage",
        "lat": 50.524319,
        "lon": 1.58571
    },
    {
        "id": 2999131,
        "nm": "Le Touvet",
        "lat": 45.358089,
        "lon": 5.94889
    },
    {
        "id": 2999126,
        "nm": "Le Trait",
        "lat": 49.468948,
        "lon": 0.81634
    },
    {
        "id": 2999093,
        "nm": "Le Treport",
        "lat": 50.059792,
        "lon": 1.37583
    },
    {
        "id": 2999012,
        "nm": "Le Val",
        "lat": 43.438648,
        "lon": 6.07295
    },
    {
        "id": 2998933,
        "nm": "Le Vaudreuil",
        "lat": 49.25407,
        "lon": 1.2096
    },
    {
        "id": 2998862,
        "nm": "Le Versoud",
        "lat": 45.21386,
        "lon": 5.85815
    },
    {
        "id": 2998854,
        "nm": "Le Vesinet",
        "lat": 48.892811,
        "lon": 2.13308
    },
    {
        "id": 3004814,
        "nm": "Lecelles",
        "lat": 50.467789,
        "lon": 3.40096
    },
    {
        "id": 3004444,
        "nm": "Lecousse",
        "lat": 48.364578,
        "lon": -1.21289
    },
    {
        "id": 3004381,
        "nm": "Lectoure",
        "lat": 43.934639,
        "lon": 0.62107
    },
    {
        "id": 3004314,
        "nm": "Leers",
        "lat": 50.682171,
        "lon": 3.24429
    },
    {
        "id": 3004244,
        "nm": "Leffrinckoucke",
        "lat": 51.034569,
        "lon": 2.46452
    },
    {
        "id": 3004213,
        "nm": "Leforest",
        "lat": 50.43866,
        "lon": 3.0648
    },
    {
        "id": 3004114,
        "nm": "Lege",
        "lat": 46.884838,
        "lon": -1.60127
    },
    {
        "id": 3003874,
        "nm": "Leguevin",
        "lat": 43.600281,
        "lon": 1.23236
    },
    {
        "id": 3003777,
        "nm": "Lehon",
        "lat": 48.444321,
        "lon": -2.04578
    },
    {
        "id": 3003136,
        "nm": "Lencloitre",
        "lat": 46.816219,
        "lon": 0.32827
    },
    {
        "id": 3003093,
        "nm": "Lens",
        "lat": 50.433022,
        "lon": 2.82791
    },
    {
        "id": 3003074,
        "nm": "Lentilly",
        "lat": 45.819839,
        "lon": 4.66352
    },
    {
        "id": 3003067,
        "nm": "Leognan",
        "lat": 44.735481,
        "lon": -0.59738
    },
    {
        "id": 3002247,
        "nm": "Lery",
        "lat": 49.285851,
        "lon": 1.20768
    },
    {
        "id": 3002237,
        "nm": "Les Abrets",
        "lat": 45.53706,
        "lon": 5.58535
    },
    {
        "id": 3002185,
        "nm": "Les Allues",
        "lat": 45.432549,
        "lon": 6.55558
    },
    {
        "id": 3002172,
        "nm": "Les Andelys",
        "lat": 49.25,
        "lon": 1.41667
    },
    {
        "id": 3002158,
        "nm": "Les Angles",
        "lat": 43.958061,
        "lon": 4.76342
    },
    {
        "id": 3002138,
        "nm": "Les Arcs",
        "lat": 43.45702,
        "lon": 6.47905
    },
    {
        "id": 3002057,
        "nm": "Les Avenieres",
        "lat": 45.631561,
        "lon": 5.57074
    },
    {
        "id": 3001698,
        "nm": "Les Brouzils",
        "lat": 46.885712,
        "lon": -1.32095
    },
    {
        "id": 3001402,
        "nm": "Les Clayes-sous-Bois",
        "lat": 48.82206,
        "lon": 1.98677
    },
    {
        "id": 3001386,
        "nm": "Les Clouzeaux",
        "lat": 46.628811,
        "lon": -1.50947
    },
    {
        "id": 3001176,
        "nm": "Les Eglisottes-et-Chalaures",
        "lat": 45.099998,
        "lon": -0.05
    },
    {
        "id": 3001157,
        "nm": "Les Epesses",
        "lat": 46.883331,
        "lon": -0.9
    },
    {
        "id": 3001134,
        "nm": "Les Essarts",
        "lat": 46.774399,
        "lon": -1.22834
    },
    {
        "id": 3001126,
        "nm": "Les Essarts-le-Roi",
        "lat": 48.716728,
        "lon": 1.90089
    },
    {
        "id": 3001051,
        "nm": "Les Fins",
        "lat": 47.077641,
        "lon": 6.63002
    },
    {
        "id": 3001020,
        "nm": "Les Forges",
        "lat": 48.177471,
        "lon": 6.38846
    },
    {
        "id": 3000674,
        "nm": "Les Hautes-Rivieres",
        "lat": 49.885948,
        "lon": 4.84186
    },
    {
        "id": 3000648,
        "nm": "Les Herbiers",
        "lat": 46.866669,
        "lon": -1.01667
    },
    {
        "id": 3000622,
        "nm": "Les Houches",
        "lat": 45.89011,
        "lon": 6.79613
    },
    {
        "id": 3000519,
        "nm": "Les Landes-Genusson",
        "lat": 46.966671,
        "lon": -1.11667
    },
    {
        "id": 3000491,
        "nm": "Les Lilas",
        "lat": 48.879921,
        "lon": 2.42057
    },
    {
        "id": 3000446,
        "nm": "Les Lucs-sur-Boulogne",
        "lat": 46.84478,
        "lon": -1.49445
    },
    {
        "id": 3000400,
        "nm": "Les Marches",
        "lat": 45.49921,
        "lon": 6.00087
    },
    {
        "id": 3000329,
        "nm": "Les Mees",
        "lat": 44.030708,
        "lon": 5.97681
    },
    {
        "id": 3000192,
        "nm": "Les Mureaux",
        "lat": 48.99173,
        "lon": 1.90972
    },
    {
        "id": 3000165,
        "nm": "Les Noes-pres-Troyes",
        "lat": 48.303581,
        "lon": 4.04552
    },
    {
        "id": 3000060,
        "nm": "Les Pavillons-sous-Bois",
        "lat": 48.90683,
        "lon": 2.50648
    },
    {
        "id": 3000047,
        "nm": "Les Pennes-Mirabeau",
        "lat": 43.410278,
        "lon": 5.31306
    },
    {
        "id": 2999982,
        "nm": "Les Pieux",
        "lat": 49.512859,
        "lon": -1.80714
    },
    {
        "id": 2999908,
        "nm": "Les Ponts-de-Ce",
        "lat": 47.423149,
        "lon": -0.52477
    },
    {
        "id": 2999742,
        "nm": "Les Roches-de-Condrieu",
        "lat": 45.451069,
        "lon": 4.76738
    },
    {
        "id": 2999725,
        "nm": "Les Rosiers-sur-Loire",
        "lat": 47.349998,
        "lon": -0.21667
    },
    {
        "id": 2999706,
        "nm": "Les Rousses",
        "lat": 46.484119,
        "lon": 6.0633
    },
    {
        "id": 2999683,
        "nm": "Les Sables-dOlonne",
        "lat": 46.5,
        "lon": -1.78333
    },
    {
        "id": 2999649,
        "nm": "Les Salles-du-Gardon",
        "lat": 44.207901,
        "lon": 4.03689
    },
    {
        "id": 2999572,
        "nm": "Les Sorinieres",
        "lat": 47.148312,
        "lon": -1.52932
    },
    {
        "id": 2999485,
        "nm": "Les Touches",
        "lat": 47.44249,
        "lon": -1.43097
    },
    {
        "id": 6615536,
        "nm": "Les Ulis",
        "lat": 48.681671,
        "lon": 2.16944
    },
    {
        "id": 2999391,
        "nm": "Les Vans",
        "lat": 44.406189,
        "lon": 4.13471
    },
    {
        "id": 3001617,
        "nm": "Lescar",
        "lat": 43.333328,
        "lon": -0.41667
    },
    {
        "id": 3000602,
        "nm": "Lesigny",
        "lat": 48.74374,
        "lon": 2.61518
    },
    {
        "id": 3000174,
        "nm": "Lesneven",
        "lat": 48.57233,
        "lon": -4.32133
    },
    {
        "id": 3000072,
        "nm": "Lesparre-Medoc",
        "lat": 45.299999,
        "lon": -0.93333
    },
    {
        "id": 2999981,
        "nm": "Lespignan",
        "lat": 43.273659,
        "lon": 3.17224
    },
    {
        "id": 2999976,
        "nm": "Lespinasse",
        "lat": 43.712059,
        "lon": 1.38462
    },
    {
        "id": 2999838,
        "nm": "Lesquin",
        "lat": 50.582321,
        "lon": 3.119
    },
    {
        "id": 2999446,
        "nm": "Lestrem",
        "lat": 50.619869,
        "lon": 2.68646
    },
    {
        "id": 2999046,
        "nm": "Leucate",
        "lat": 42.910561,
        "lon": 3.02944
    },
    {
        "id": 2999020,
        "nm": "Leuville-sur-Orge",
        "lat": 48.617298,
        "lon": 2.26685
    },
    {
        "id": 2999002,
        "nm": "Leval",
        "lat": 50.181061,
        "lon": 3.83093
    },
    {
        "id": 2998975,
        "nm": "Levallois-Perret",
        "lat": 48.89389,
        "lon": 2.28864
    },
    {
        "id": 2998917,
        "nm": "Levens",
        "lat": 43.860432,
        "lon": 7.22653
    },
    {
        "id": 2998856,
        "nm": "Leves",
        "lat": 48.47065,
        "lon": 1.48194
    },
    {
        "id": 2998830,
        "nm": "Levier",
        "lat": 46.953018,
        "lon": 6.12059
    },
    {
        "id": 2998718,
        "nm": "Levroux",
        "lat": 46.9786,
        "lon": 1.61243
    },
    {
        "id": 2998714,
        "nm": "Lewarde",
        "lat": 50.341728,
        "lon": 3.16782
    },
    {
        "id": 2998709,
        "nm": "Lexy",
        "lat": 49.503559,
        "lon": 5.7338
    },
    {
        "id": 2998661,
        "nm": "Lezat-sur-Leze",
        "lat": 43.27734,
        "lon": 1.34686
    },
    {
        "id": 2998660,
        "nm": "Lezay",
        "lat": 46.26437,
        "lon": -0.00925
    },
    {
        "id": 2998654,
        "nm": "Lezennes",
        "lat": 50.615528,
        "lon": 3.11354
    },
    {
        "id": 2998644,
        "nm": "Lezignan-Corbieres",
        "lat": 43.197639,
        "lon": 2.76142
    },
    {
        "id": 2998639,
        "nm": "Lezoux",
        "lat": 45.826889,
        "lon": 3.37924
    },
    {
        "id": 2998632,
        "nm": "LHay-les-Roses",
        "lat": 48.783329,
        "lon": 2.33333
    },
    {
        "id": 2998622,
        "nm": "Lherm",
        "lat": 43.431271,
        "lon": 1.22239
    },
    {
        "id": 2998532,
        "nm": "Liancourt",
        "lat": 49.330341,
        "lon": 2.46595
    },
    {
        "id": 2998520,
        "nm": "Libercourt",
        "lat": 50.483219,
        "lon": 3.01584
    },
    {
        "id": 2998517,
        "nm": "Libourne",
        "lat": 44.916672,
        "lon": -0.23333
    },
    {
        "id": 2998439,
        "nm": "Lieusaint",
        "lat": 48.634762,
        "lon": 2.54806
    },
    {
        "id": 2998431,
        "nm": "Lievin",
        "lat": 50.4198,
        "lon": 2.78068
    },
    {
        "id": 2998425,
        "nm": "Liffol-le-Grand",
        "lat": 48.317711,
        "lon": 5.58125
    },
    {
        "id": 2998423,
        "nm": "Liffre",
        "lat": 48.213242,
        "lon": -1.50838
    },
    {
        "id": 2998409,
        "nm": "Lignan-sur-Orb",
        "lat": 43.384621,
        "lon": 3.16891
    },
    {
        "id": 2998404,
        "nm": "Ligne",
        "lat": 47.410961,
        "lon": -1.37726
    },
    {
        "id": 2998362,
        "nm": "Ligny-en-Barrois",
        "lat": 48.68861,
        "lon": 5.32543
    },
    {
        "id": 2998343,
        "nm": "Ligueil",
        "lat": 47.042099,
        "lon": 0.81893
    },
    {
        "id": 2998340,
        "nm": "Liguge",
        "lat": 46.520351,
        "lon": 0.32617
    },
    {
        "id": 2998330,
        "nm": "LIle-Rousse",
        "lat": 42.633709,
        "lon": 8.93764
    },
    {
        "id": 2998324,
        "nm": "Lille",
        "lat": 50.632969,
        "lon": 3.05858
    },
    {
        "id": 2998322,
        "nm": "Lillebonne",
        "lat": 49.520302,
        "lon": 0.53617
    },
    {
        "id": 2998320,
        "nm": "Lillers",
        "lat": 50.56345,
        "lon": 2.48042
    },
    {
        "id": 2998312,
        "nm": "Limas",
        "lat": 45.978958,
        "lon": 4.70292
    },
    {
        "id": 2998311,
        "nm": "Limay",
        "lat": 48.995529,
        "lon": 1.74081
    },
    {
        "id": 2998305,
        "nm": "Limeil-Brevannes",
        "lat": 48.744801,
        "lon": 2.48705
    },
    {
        "id": 2998286,
        "nm": "Limoges",
        "lat": 45.831532,
        "lon": 1.2578
    },
    {
        "id": 2998277,
        "nm": "Limonest",
        "lat": 45.83744,
        "lon": 4.7718
    },
    {
        "id": 2998269,
        "nm": "Limours",
        "lat": 48.646252,
        "lon": 2.07688
    },
    {
        "id": 2998264,
        "nm": "Limoux",
        "lat": 43.054871,
        "lon": 2.22173
    },
    {
        "id": 2998252,
        "nm": "Linars",
        "lat": 45.650002,
        "lon": 0.08333
    },
    {
        "id": 2998251,
        "nm": "Linas",
        "lat": 48.630409,
        "lon": 2.26266
    },
    {
        "id": 2998224,
        "nm": "Lingolsheim",
        "lat": 48.557522,
        "lon": 7.68253
    },
    {
        "id": 2998209,
        "nm": "Linselles",
        "lat": 50.73708,
        "lon": 3.07878
    },
    {
        "id": 2998187,
        "nm": "Lion-sur-Mer",
        "lat": 49.300179,
        "lon": -0.32157
    },
    {
        "id": 2998167,
        "nm": "Lipsheim",
        "lat": 48.491638,
        "lon": 7.66751
    },
    {
        "id": 2998165,
        "nm": "Lire",
        "lat": 47.34322,
        "lon": -1.16536
    },
    {
        "id": 2998150,
        "nm": "Lisieux",
        "lat": 49.146599,
        "lon": 0.22925
    },
    {
        "id": 2998140,
        "nm": "LIsle-Adam",
        "lat": 49.107441,
        "lon": 2.22818
    },
    {
        "id": 2998136,
        "nm": "LIsle-dAbeau",
        "lat": 45.61813,
        "lon": 5.23546
    },
    {
        "id": 2998127,
        "nm": "LIsle-sur-la-Sorgue",
        "lat": 43.919151,
        "lon": 5.05092
    },
    {
        "id": 2998124,
        "nm": "Lisle-sur-Tarn",
        "lat": 43.852501,
        "lon": 1.81098
    },
    {
        "id": 2998105,
        "nm": "Lisses",
        "lat": 48.602219,
        "lon": 2.42246
    },
    {
        "id": 2998102,
        "nm": "Lissieu",
        "lat": 45.864262,
        "lon": 4.74703
    },
    {
        "id": 2998097,
        "nm": "Listrac-Medoc",
        "lat": 45.0741,
        "lon": -0.79132
    },
    {
        "id": 2998081,
        "nm": "Livarot",
        "lat": 49.005001,
        "lon": 0.1502
    },
    {
        "id": 2998078,
        "nm": "Liverdun",
        "lat": 48.750839,
        "lon": 6.06424
    },
    {
        "id": 2998059,
        "nm": "Livron-sur-Drome",
        "lat": 44.773102,
        "lon": 4.84705
    },
    {
        "id": 2998056,
        "nm": "Livry-Gargan",
        "lat": 48.9193,
        "lon": 2.54305
    },
    {
        "id": 2998055,
        "nm": "Livry-sur-Seine",
        "lat": 48.517712,
        "lon": 2.67879
    },
    {
        "id": 2998027,
        "nm": "Lizy-sur-Ourcq",
        "lat": 49.02454,
        "lon": 3.02178
    },
    {
        "id": 2997996,
        "nm": "Loches",
        "lat": 47.133331,
        "lon": 1
    },
    {
        "id": 2997961,
        "nm": "Locmine",
        "lat": 47.886189,
        "lon": -2.83536
    },
    {
        "id": 2997959,
        "nm": "Locmiquelic",
        "lat": 47.724991,
        "lon": -3.34153
    },
    {
        "id": 2997957,
        "nm": "Locoal-Mendon",
        "lat": 47.7052,
        "lon": -3.10796
    },
    {
        "id": 2997956,
        "nm": "Locon",
        "lat": 50.57029,
        "lon": 2.66629
    },
    {
        "id": 2997943,
        "nm": "Loctudy",
        "lat": 47.833328,
        "lon": -4.16667
    },
    {
        "id": 2997936,
        "nm": "Lodeve",
        "lat": 43.716671,
        "lon": 3.31667
    },
    {
        "id": 2997904,
        "nm": "Lognes",
        "lat": 48.835411,
        "lon": 2.62998
    },
    {
        "id": 2997875,
        "nm": "Loire-sur-Rhone",
        "lat": 45.549999,
        "lon": 4.8
    },
    {
        "id": 2997841,
        "nm": "Loison-sous-Lens",
        "lat": 50.437962,
        "lon": 2.85322
    },
    {
        "id": 2997804,
        "nm": "Lombron",
        "lat": 48.078781,
        "lon": 0.41869
    },
    {
        "id": 2997803,
        "nm": "Lomme",
        "lat": 50.643581,
        "lon": 2.98715
    },
    {
        "id": 2997792,
        "nm": "Lompret",
        "lat": 50.669312,
        "lon": 2.98968
    },
    {
        "id": 2997775,
        "nm": "Longages",
        "lat": 43.353981,
        "lon": 1.23905
    },
    {
        "id": 2997717,
        "nm": "Longeville-les-Metz",
        "lat": 49.11277,
        "lon": 6.1353
    },
    {
        "id": 2997716,
        "nm": "Longeville-les-Saint-Avold",
        "lat": 49.118111,
        "lon": 6.64165
    },
    {
        "id": 2997722,
        "nm": "Longeville-sur-Mer",
        "lat": 46.416672,
        "lon": -1.5
    },
    {
        "id": 2997712,
        "nm": "Longjumeau",
        "lat": 48.69503,
        "lon": 2.30736
    },
    {
        "id": 2997711,
        "nm": "Longlaville",
        "lat": 49.53455,
        "lon": 5.80203
    },
    {
        "id": 2997700,
        "nm": "Longperrier",
        "lat": 49.048439,
        "lon": 2.66571
    },
    {
        "id": 2997698,
        "nm": "Longpont-sur-Orge",
        "lat": 48.64172,
        "lon": 2.29278
    },
    {
        "id": 2997681,
        "nm": "Longueau",
        "lat": 49.872261,
        "lon": 2.3588
    },
    {
        "id": 2997676,
        "nm": "Longueil-Annel",
        "lat": 49.469082,
        "lon": 2.86464
    },
    {
        "id": 2997670,
        "nm": "Longuenesse",
        "lat": 50.733952,
        "lon": 2.2352
    },
    {
        "id": 2997646,
        "nm": "Longuyon",
        "lat": 49.44548,
        "lon": 5.60145
    },
    {
        "id": 2997644,
        "nm": "Longvic",
        "lat": 47.28754,
        "lon": 5.06341
    },
    {
        "id": 2997638,
        "nm": "Longwy",
        "lat": 49.51936,
        "lon": 5.76882
    },
    {
        "id": 2997628,
        "nm": "Lons",
        "lat": 43.316669,
        "lon": -0.4
    },
    {
        "id": 2997626,
        "nm": "Lons-le-Saunier",
        "lat": 46.666672,
        "lon": 5.55
    },
    {
        "id": 2997621,
        "nm": "Loon-Plage",
        "lat": 50.996471,
        "lon": 2.2177
    },
    {
        "id": 2997620,
        "nm": "Loos",
        "lat": 50.609821,
        "lon": 3.01874
    },
    {
        "id": 2997619,
        "nm": "Loos-en-Gohelle",
        "lat": 50.457859,
        "lon": 2.79215
    },
    {
        "id": 2997616,
        "nm": "Loperhet",
        "lat": 48.377251,
        "lon": -4.30608
    },
    {
        "id": 2997590,
        "nm": "Lorette",
        "lat": 45.50618,
        "lon": 4.57522
    },
    {
        "id": 2997581,
        "nm": "Lorgues",
        "lat": 43.49361,
        "lon": 6.3611
    },
    {
        "id": 2997577,
        "nm": "Lorient",
        "lat": 47.75,
        "lon": -3.36667
    },
    {
        "id": 2997570,
        "nm": "Loriol-du-Comtat",
        "lat": 44.07626,
        "lon": 4.99922
    },
    {
        "id": 2997569,
        "nm": "Loriol-sur-Drome",
        "lat": 44.75214,
        "lon": 4.82547
    },
    {
        "id": 2997556,
        "nm": "Lormont",
        "lat": 44.87495,
        "lon": -0.51782
    },
    {
        "id": 2997547,
        "nm": "Lorris",
        "lat": 47.8895,
        "lon": 2.51478
    },
    {
        "id": 2997514,
        "nm": "Louannec",
        "lat": 48.794231,
        "lon": -3.412
    },
    {
        "id": 2997511,
        "nm": "Louargat",
        "lat": 48.565762,
        "lon": -3.3375
    },
    {
        "id": 2997493,
        "nm": "Loubert",
        "lat": 45.914219,
        "lon": 0.58617
    },
    {
        "id": 2997465,
        "nm": "Loudeac",
        "lat": 48.178261,
        "lon": -2.75433
    },
    {
        "id": 2997457,
        "nm": "Loudun",
        "lat": 47.007881,
        "lon": 0.08296
    },
    {
        "id": 2997456,
        "nm": "Loue",
        "lat": 47.99575,
        "lon": -0.1545
    },
    {
        "id": 2997439,
        "nm": "Louhans",
        "lat": 46.633331,
        "lon": 5.21667
    },
    {
        "id": 2997397,
        "nm": "Lourches",
        "lat": 50.313541,
        "lon": 3.35258
    },
    {
        "id": 2997395,
        "nm": "Lourdes",
        "lat": 43.099998,
        "lon": -0.05
    },
    {
        "id": 2997371,
        "nm": "Loury",
        "lat": 47.999439,
        "lon": 2.08474
    },
    {
        "id": 2997351,
        "nm": "Louveciennes",
        "lat": 48.86116,
        "lon": 2.11463
    },
    {
        "id": 2997345,
        "nm": "Louverne",
        "lat": 48.12178,
        "lon": -0.71721
    },
    {
        "id": 2997336,
        "nm": "Louviers",
        "lat": 49.216671,
        "lon": 1.16667
    },
    {
        "id": 2997331,
        "nm": "Louvigne-du-Desert",
        "lat": 48.480469,
        "lon": -1.12537
    },
    {
        "id": 2997325,
        "nm": "Louvigny",
        "lat": 49.15715,
        "lon": -0.39376
    },
    {
        "id": 2997317,
        "nm": "Louvres",
        "lat": 49.044601,
        "lon": 2.50479
    },
    {
        "id": 2997316,
        "nm": "Louvroil",
        "lat": 50.264271,
        "lon": 3.96272
    },
    {
        "id": 2997297,
        "nm": "Loyettes",
        "lat": 45.776199,
        "lon": 5.20743
    },
    {
        "id": 2997295,
        "nm": "Lozanne",
        "lat": 45.855911,
        "lon": 4.68594
    },
    {
        "id": 2997271,
        "nm": "Lubersac",
        "lat": 45.443939,
        "lon": 1.40418
    },
    {
        "id": 2997262,
        "nm": "Luc-la-Primaube",
        "lat": 44.314388,
        "lon": 2.53552
    },
    {
        "id": 2997204,
        "nm": "Luc-sur-Mer",
        "lat": 49.314522,
        "lon": -0.35499
    },
    {
        "id": 2997248,
        "nm": "Lucciana",
        "lat": 42.545891,
        "lon": 9.41859
    },
    {
        "id": 2997246,
        "nm": "Luce",
        "lat": 48.436901,
        "lon": 1.46359
    },
    {
        "id": 2997210,
        "nm": "Lucon",
        "lat": 46.457729,
        "lon": -1.16512
    },
    {
        "id": 2997185,
        "nm": "Ludon-Medoc",
        "lat": 44.981178,
        "lon": -0.60254
    },
    {
        "id": 2997184,
        "nm": "Ludres",
        "lat": 48.621811,
        "lon": 6.16183
    },
    {
        "id": 2997158,
        "nm": "Lugrin",
        "lat": 46.403301,
        "lon": 6.66744
    },
    {
        "id": 2997148,
        "nm": "Luisant",
        "lat": 48.429501,
        "lon": 1.47383
    },
    {
        "id": 2997142,
        "nm": "Lumbres",
        "lat": 50.706928,
        "lon": 2.12082
    },
    {
        "id": 2997116,
        "nm": "Lunel",
        "lat": 43.67778,
        "lon": 4.13611
    },
    {
        "id": 2997113,
        "nm": "Lunel-Viel",
        "lat": 43.678902,
        "lon": 4.0925
    },
    {
        "id": 2997112,
        "nm": "Luneray",
        "lat": 49.82795,
        "lon": 0.91581
    },
    {
        "id": 2997110,
        "nm": "Luneville",
        "lat": 48.599998,
        "lon": 6.5
    },
    {
        "id": 2997104,
        "nm": "LUnion",
        "lat": 43.660419,
        "lon": 1.48264
    },
    {
        "id": 2997079,
        "nm": "Lurcy-Levis",
        "lat": 46.73056,
        "lon": 2.93876
    },
    {
        "id": 2997076,
        "nm": "Lure",
        "lat": 47.683331,
        "lon": 6.5
    },
    {
        "id": 2997058,
        "nm": "Lusignan",
        "lat": 46.435982,
        "lon": 0.1262
    },
    {
        "id": 2997044,
        "nm": "Lussac-les-Chateaux",
        "lat": 46.403271,
        "lon": 0.72524
    },
    {
        "id": 2997010,
        "nm": "Lutterbach",
        "lat": 47.75835,
        "lon": 7.27695
    },
    {
        "id": 2996995,
        "nm": "Luxeuil-les-Bains",
        "lat": 47.817101,
        "lon": 6.365
    },
    {
        "id": 2996986,
        "nm": "Luynes",
        "lat": 47.384411,
        "lon": 0.5547
    },
    {
        "id": 2996982,
        "nm": "Luzarches",
        "lat": 49.11319,
        "lon": 2.4223
    },
    {
        "id": 2996963,
        "nm": "Luzinay",
        "lat": 45.588951,
        "lon": 4.95829
    },
    {
        "id": 2996957,
        "nm": "Luzy",
        "lat": 46.790112,
        "lon": 3.97036
    },
    {
        "id": 2996944,
        "nm": "Lyon",
        "lat": 45.748459,
        "lon": 4.84671
    },
    {
        "id": 2996927,
        "nm": "Lys-lez-Lannoy",
        "lat": 50.666672,
        "lon": 3.21667
    },
    {
        "id": 2996921,
        "nm": "Mably",
        "lat": 46.086231,
        "lon": 4.06607
    },
    {
        "id": 2996918,
        "nm": "Macau",
        "lat": 45.00679,
        "lon": -0.61821
    },
    {
        "id": 2996905,
        "nm": "Machecoul",
        "lat": 46.99358,
        "lon": -1.82352
    },
    {
        "id": 2996901,
        "nm": "Macheren",
        "lat": 49.100449,
        "lon": 6.7738
    },
    {
        "id": 2996882,
        "nm": "Macon",
        "lat": 46.299999,
        "lon": 4.83333
    },
    {
        "id": 2996823,
        "nm": "Magalas",
        "lat": 43.470951,
        "lon": 3.22338
    },
    {
        "id": 2996819,
        "nm": "Magenta",
        "lat": 49.048981,
        "lon": 3.96882
    },
    {
        "id": 2996814,
        "nm": "Magland",
        "lat": 46.019711,
        "lon": 6.62016
    },
    {
        "id": 2996810,
        "nm": "Magnac-Laval",
        "lat": 46.215141,
        "lon": 1.16724
    },
    {
        "id": 2996807,
        "nm": "Magnac-sur-Touvre",
        "lat": 45.666672,
        "lon": 0.23333
    },
    {
        "id": 2996802,
        "nm": "Magnanville",
        "lat": 48.967979,
        "lon": 1.67842
    },
    {
        "id": 2996798,
        "nm": "Magne",
        "lat": 46.315479,
        "lon": -0.54575
    },
    {
        "id": 2996764,
        "nm": "Magny-en-Vexin",
        "lat": 49.155151,
        "lon": 1.78669
    },
    {
        "id": 2996755,
        "nm": "Magny-le-Hongre",
        "lat": 48.863251,
        "lon": 2.81546
    },
    {
        "id": 2996752,
        "nm": "Magny-les-Hameaux",
        "lat": 48.74345,
        "lon": 2.06154
    },
    {
        "id": 2996727,
        "nm": "Maiche",
        "lat": 47.251598,
        "lon": 6.80308
    },
    {
        "id": 2996722,
        "nm": "Maignelay-Montigny",
        "lat": 49.549999,
        "lon": 2.51667
    },
    {
        "id": 2996711,
        "nm": "Maillane",
        "lat": 43.831139,
        "lon": 4.78152
    },
    {
        "id": 2996687,
        "nm": "Mailly-le-Camp",
        "lat": 48.66526,
        "lon": 4.21303
    },
    {
        "id": 2996674,
        "nm": "Maincy",
        "lat": 48.54977,
        "lon": 2.70017
    },
    {
        "id": 2996660,
        "nm": "Maing",
        "lat": 50.307911,
        "lon": 3.48446
    },
    {
        "id": 2996653,
        "nm": "Maintenon",
        "lat": 48.58704,
        "lon": 1.57847
    },
    {
        "id": 2996645,
        "nm": "Mainvilliers",
        "lat": 48.450039,
        "lon": 1.45607
    },
    {
        "id": 2996628,
        "nm": "Maisdon-sur-Sevre",
        "lat": 47.097141,
        "lon": -1.38
    },
    {
        "id": 2996568,
        "nm": "Maisons-Alfort",
        "lat": 48.81171,
        "lon": 2.43945
    },
    {
        "id": 2996564,
        "nm": "Maisons-Laffitte",
        "lat": 48.952641,
        "lon": 2.14521
    },
    {
        "id": 2996559,
        "nm": "Maisse",
        "lat": 48.395241,
        "lon": 2.37902
    },
    {
        "id": 2996538,
        "nm": "Maizieres-les-Metz",
        "lat": 49.207539,
        "lon": 6.16052
    },
    {
        "id": 2996514,
        "nm": "Malakoff",
        "lat": 48.819988,
        "lon": 2.29998
    },
    {
        "id": 2996505,
        "nm": "Malansac",
        "lat": 47.677238,
        "lon": -2.29543
    },
    {
        "id": 2996495,
        "nm": "Malaucene",
        "lat": 44.172401,
        "lon": 5.13294
    },
    {
        "id": 2996492,
        "nm": "Malaunay",
        "lat": 49.5271,
        "lon": 1.04292
    },
    {
        "id": 2996448,
        "nm": "Malemort-sur-Correze",
        "lat": 45.17009,
        "lon": 1.56193
    },
    {
        "id": 2996444,
        "nm": "Malesherbes",
        "lat": 48.295658,
        "lon": 2.40935
    },
    {
        "id": 2996440,
        "nm": "Malestroit",
        "lat": 47.809341,
        "lon": -2.38457
    },
    {
        "id": 2996420,
        "nm": "Malicorne-sur-Sarthe",
        "lat": 47.813171,
        "lon": -0.08152
    },
    {
        "id": 2996408,
        "nm": "Malissard",
        "lat": 44.902012,
        "lon": 4.95915
    },
    {
        "id": 2996397,
        "nm": "Mallemort",
        "lat": 43.73172,
        "lon": 5.17945
    },
    {
        "id": 2996306,
        "nm": "Malville",
        "lat": 47.359051,
        "lon": -1.86226
    },
    {
        "id": 2996298,
        "nm": "Malzeville",
        "lat": 48.711811,
        "lon": 6.18176
    },
    {
        "id": 2996291,
        "nm": "Mamers",
        "lat": 48.349998,
        "lon": 0.38333
    },
    {
        "id": 2996255,
        "nm": "Mandelieu-la-Napoule",
        "lat": 43.549999,
        "lon": 6.93333
    },
    {
        "id": 2996251,
        "nm": "Mandeure",
        "lat": 47.449211,
        "lon": 6.80762
    },
    {
        "id": 2996241,
        "nm": "Mandres-les-Roses",
        "lat": 48.701981,
        "lon": 2.54662
    },
    {
        "id": 2996236,
        "nm": "Manduel",
        "lat": 43.81855,
        "lon": 4.47247
    },
    {
        "id": 2996186,
        "nm": "Manom",
        "lat": 49.36985,
        "lon": 6.18556
    },
    {
        "id": 2996180,
        "nm": "Manosque",
        "lat": 43.828831,
        "lon": 5.78688
    },
    {
        "id": 2996148,
        "nm": "Mantes-la-Jolie",
        "lat": 48.98333,
        "lon": 1.71667
    },
    {
        "id": 2996146,
        "nm": "Mantes-la-Ville",
        "lat": 48.97374,
        "lon": 1.70253
    },
    {
        "id": 2996106,
        "nm": "Marange-Silvange",
        "lat": 49.207481,
        "lon": 6.10228
    },
    {
        "id": 2996103,
        "nm": "Marans",
        "lat": 46.308109,
        "lon": -0.9945
    },
    {
        "id": 2996089,
        "nm": "Maraussan",
        "lat": 43.36895,
        "lon": 3.15642
    },
    {
        "id": 2996074,
        "nm": "Marboz",
        "lat": 46.343369,
        "lon": 5.25978
    },
    {
        "id": 2996006,
        "nm": "Marcheprime",
        "lat": 44.69146,
        "lon": -0.85496
    },
    {
        "id": 2995991,
        "nm": "Marchiennes",
        "lat": 50.400002,
        "lon": 3.28333
    },
    {
        "id": 2995983,
        "nm": "Marcigny",
        "lat": 46.276272,
        "lon": 4.03957
    },
    {
        "id": 2995950,
        "nm": "Marcilly-en-Villette",
        "lat": 47.765049,
        "lon": 2.02266
    },
    {
        "id": 2995938,
        "nm": "Marck",
        "lat": 50.948959,
        "lon": 1.94328
    },
    {
        "id": 2995936,
        "nm": "Marckolsheim",
        "lat": 48.164711,
        "lon": 7.544
    },
    {
        "id": 2995933,
        "nm": "Marcoing",
        "lat": 50.121101,
        "lon": 3.17321
    },
    {
        "id": 2995908,
        "nm": "Marcq-en-Baroeul",
        "lat": 50.666672,
        "lon": 3.08333
    },
    {
        "id": 2995887,
        "nm": "Mardie",
        "lat": 47.886169,
        "lon": 2.05745
    },
    {
        "id": 2995861,
        "nm": "Mareil-Marly",
        "lat": 48.882141,
        "lon": 2.07351
    },
    {
        "id": 2995854,
        "nm": "Marennes",
        "lat": 45.8228,
        "lon": -1.10546
    },
    {
        "id": 2995823,
        "nm": "Mareuil-sur-Lay-Dissais",
        "lat": 46.533329,
        "lon": -1.23333
    },
    {
        "id": 2995806,
        "nm": "Margency",
        "lat": 49,
        "lon": 2.3
    },
    {
        "id": 2995790,
        "nm": "Margny-les-Compiegne",
        "lat": 49.425591,
        "lon": 2.81806
    },
    {
        "id": 2995782,
        "nm": "Marguerittes",
        "lat": 43.8596,
        "lon": 4.44517
    },
    {
        "id": 2995750,
        "nm": "Marignane",
        "lat": 43.416039,
        "lon": 5.21453
    },
    {
        "id": 2995744,
        "nm": "Marignier",
        "lat": 46.090141,
        "lon": 6.50004
    },
    {
        "id": 2995734,
        "nm": "Marigny",
        "lat": 49.099522,
        "lon": -1.24179
    },
    {
        "id": 2995702,
        "nm": "Marines",
        "lat": 49.144852,
        "lon": 1.98226
    },
    {
        "id": 2995699,
        "nm": "Maringues",
        "lat": 45.921181,
        "lon": 3.32969
    },
    {
        "id": 2995675,
        "nm": "Marle",
        "lat": 49.740059,
        "lon": 3.7706
    },
    {
        "id": 2995673,
        "nm": "Marlenheim",
        "lat": 48.621342,
        "lon": 7.49096
    },
    {
        "id": 2995669,
        "nm": "Marles-les-Mines",
        "lat": 50.50478,
        "lon": 2.50882
    },
    {
        "id": 2995649,
        "nm": "Marly",
        "lat": 49.066669,
        "lon": 6.15
    },
    {
        "id": 2995656,
        "nm": "Marly",
        "lat": 50.345558,
        "lon": 3.54959
    },
    {
        "id": 2995653,
        "nm": "Marly-la-Ville",
        "lat": 49.08202,
        "lon": 2.50348
    },
    {
        "id": 2995652,
        "nm": "Marly-le-Roi",
        "lat": 48.866669,
        "lon": 2.08333
    },
    {
        "id": 2995647,
        "nm": "Marmagne",
        "lat": 47.099998,
        "lon": 2.28333
    },
    {
        "id": 2995642,
        "nm": "Marmande",
        "lat": 44.5,
        "lon": 0.16667
    },
    {
        "id": 2995622,
        "nm": "Marmoutier",
        "lat": 48.690048,
        "lon": 7.38195
    },
    {
        "id": 2995606,
        "nm": "Marnaz",
        "lat": 46.062012,
        "lon": 6.52692
    },
    {
        "id": 2995586,
        "nm": "Maroeuil",
        "lat": 50.325191,
        "lon": 2.70504
    },
    {
        "id": 2995571,
        "nm": "Marolles-en-Hurepoix",
        "lat": 48.562321,
        "lon": 2.29885
    },
    {
        "id": 2995569,
        "nm": "Marolles-les-Braults",
        "lat": 48.252708,
        "lon": 0.31631
    },
    {
        "id": 2995563,
        "nm": "Maromme",
        "lat": 49.479252,
        "lon": 1.02375
    },
    {
        "id": 2995550,
        "nm": "Marpent",
        "lat": 50.292519,
        "lon": 4.07936
    },
    {
        "id": 2995536,
        "nm": "Marquette-lez-Lille",
        "lat": 50.676281,
        "lon": 3.06613
    },
    {
        "id": 2995532,
        "nm": "Marquise",
        "lat": 50.812939,
        "lon": 1.70786
    },
    {
        "id": 2995489,
        "nm": "Marsannay-la-Cote",
        "lat": 47.27095,
        "lon": 4.98895
    },
    {
        "id": 2995471,
        "nm": "Marseillan",
        "lat": 43.356178,
        "lon": 3.52795
    },
    {
        "id": 2995469,
        "nm": "Marseille",
        "lat": 43.296951,
        "lon": 5.38107
    },
    {
        "id": 2995456,
        "nm": "Marsillargues",
        "lat": 43.664242,
        "lon": 4.17448
    },
    {
        "id": 2995454,
        "nm": "Marsilly",
        "lat": 46.23027,
        "lon": -1.1384
    },
    {
        "id": 2995438,
        "nm": "Marssac-sur-Tarn",
        "lat": 43.917679,
        "lon": 2.02921
    },
    {
        "id": 2995404,
        "nm": "Martignas-sur-Jalle",
        "lat": 44.84528,
        "lon": -0.7806
    },
    {
        "id": 2995398,
        "nm": "Martigne-Ferchaud",
        "lat": 47.829342,
        "lon": -1.31911
    },
    {
        "id": 2995387,
        "nm": "Martigues",
        "lat": 43.407349,
        "lon": 5.05526
    },
    {
        "id": 2995385,
        "nm": "Martillac",
        "lat": 44.710999,
        "lon": -0.53747
    },
    {
        "id": 2995351,
        "nm": "Martres-Tolosane",
        "lat": 43.199291,
        "lon": 1.01056
    },
    {
        "id": 2995339,
        "nm": "Marvejols",
        "lat": 44.55378,
        "lon": 3.29137
    },
    {
        "id": 2995324,
        "nm": "Marzy",
        "lat": 46.981239,
        "lon": 3.09352
    },
    {
        "id": 2995281,
        "nm": "Masevaux",
        "lat": 47.776711,
        "lon": 6.99683
    },
    {
        "id": 2995270,
        "nm": "Masnieres",
        "lat": 50.114891,
        "lon": 3.20889
    },
    {
        "id": 2995269,
        "nm": "Masny",
        "lat": 50.347969,
        "lon": 3.20165
    },
    {
        "id": 2995226,
        "nm": "Massieux",
        "lat": 45.909691,
        "lon": 4.83321
    },
    {
        "id": 2995206,
        "nm": "Massy",
        "lat": 48.726921,
        "lon": 2.28301
    },
    {
        "id": 2995192,
        "nm": "Matha",
        "lat": 45.868229,
        "lon": -0.31849
    },
    {
        "id": 2995189,
        "nm": "Mathay",
        "lat": 47.439041,
        "lon": 6.78487
    },
    {
        "id": 2995150,
        "nm": "Maubeuge",
        "lat": 50.278751,
        "lon": 3.97267
    },
    {
        "id": 2995146,
        "nm": "Maubourguet",
        "lat": 43.468239,
        "lon": 0.03578
    },
    {
        "id": 2995121,
        "nm": "Mauguio",
        "lat": 43.618099,
        "lon": 4.00739
    },
    {
        "id": 2995110,
        "nm": "Maule",
        "lat": 48.910561,
        "lon": 1.85264
    },
    {
        "id": 2995107,
        "nm": "Mauleon-Licharre",
        "lat": 43.226841,
        "lon": -0.88038
    },
    {
        "id": 2995104,
        "nm": "Maulevrier",
        "lat": 47.009289,
        "lon": -0.74239
    },
    {
        "id": 2995058,
        "nm": "Maure-de-Bretagne",
        "lat": 47.892391,
        "lon": -1.99104
    },
    {
        "id": 2995059,
        "nm": "Maurecourt",
        "lat": 48.99614,
        "lon": 2.06154
    },
    {
        "id": 2995054,
        "nm": "Maureillas-las-Illas",
        "lat": 42.490139,
        "lon": 2.80752
    },
    {
        "id": 2995041,
        "nm": "Maurepas",
        "lat": 48.764858,
        "lon": 1.92923
    },
    {
        "id": 2995024,
        "nm": "Mauriac",
        "lat": 45.216671,
        "lon": 2.33333
    },
    {
        "id": 2995009,
        "nm": "Mauron",
        "lat": 48.082569,
        "lon": -2.28477
    },
    {
        "id": 2995003,
        "nm": "Maurs",
        "lat": 44.71117,
        "lon": 2.19832
    },
    {
        "id": 2994992,
        "nm": "Maussane-les-Alpilles",
        "lat": 43.722359,
        "lon": 4.80497
    },
    {
        "id": 2994981,
        "nm": "Mauves-sur-Loire",
        "lat": 47.297379,
        "lon": -1.38763
    },
    {
        "id": 2994959,
        "nm": "Mauze-sur-le-Mignon",
        "lat": 46.19516,
        "lon": -0.67032
    },
    {
        "id": 2994958,
        "nm": "Mauze-Thouarsais",
        "lat": 46.976109,
        "lon": -0.27846
    },
    {
        "id": 2994951,
        "nm": "Maxeville",
        "lat": 48.70816,
        "lon": 6.1696
    },
    {
        "id": 2994935,
        "nm": "Mayenne",
        "lat": 48.299999,
        "lon": -0.61667
    },
    {
        "id": 2994928,
        "nm": "Mayet",
        "lat": 47.759682,
        "lon": 0.27468
    },
    {
        "id": 2994902,
        "nm": "Mazamet",
        "lat": 43.490009,
        "lon": 2.37304
    },
    {
        "id": 2994901,
        "nm": "Mazan",
        "lat": 44.056801,
        "lon": 5.12747
    },
    {
        "id": 2994891,
        "nm": "Maze",
        "lat": 47.456322,
        "lon": -0.27106
    },
    {
        "id": 2994870,
        "nm": "Mazeres",
        "lat": 43.250549,
        "lon": 1.67728
    },
    {
        "id": 2994868,
        "nm": "Mazeres-Lezons",
        "lat": 43.26667,
        "lon": -0.35
    },
    {
        "id": 2994837,
        "nm": "Mazingarbe",
        "lat": 50.4711,
        "lon": 2.71544
    },
    {
        "id": 2994798,
        "nm": "Meaux",
        "lat": 48.950001,
        "lon": 2.86667
    },
    {
        "id": 2994778,
        "nm": "Medis",
        "lat": 45.643372,
        "lon": -0.96298
    },
    {
        "id": 2994768,
        "nm": "Megeve",
        "lat": 45.852329,
        "lon": 6.61286
    },
    {
        "id": 2994756,
        "nm": "Mehun-sur-Yevre",
        "lat": 47.137821,
        "lon": 2.21105
    },
    {
        "id": 2994697,
        "nm": "Melesse",
        "lat": 48.217709,
        "lon": -1.69496
    },
    {
        "id": 2994692,
        "nm": "Melgven",
        "lat": 47.906261,
        "lon": -3.83518
    },
    {
        "id": 2994676,
        "nm": "Mellac",
        "lat": 47.90345,
        "lon": -3.57675
    },
    {
        "id": 2994675,
        "nm": "Melle",
        "lat": 46.222851,
        "lon": -0.14216
    },
    {
        "id": 2994651,
        "nm": "Melun",
        "lat": 48.533329,
        "lon": 2.66667
    },
    {
        "id": 2994617,
        "nm": "Mende",
        "lat": 44.51667,
        "lon": 3.5
    },
    {
        "id": 2994534,
        "nm": "Mennecy",
        "lat": 48.569031,
        "lon": 2.44384
    },
    {
        "id": 2994497,
        "nm": "Menton",
        "lat": 43.776489,
        "lon": 7.50435
    },
    {
        "id": 2994494,
        "nm": "Menucourt",
        "lat": 49.028412,
        "lon": 1.98046
    },
    {
        "id": 2994481,
        "nm": "Mer",
        "lat": 47.705551,
        "lon": 1.50621
    },
    {
        "id": 2994447,
        "nm": "Mercury",
        "lat": 45.674519,
        "lon": 6.33688
    },
    {
        "id": 2994431,
        "nm": "Merdrignac",
        "lat": 48.193722,
        "lon": -2.41533
    },
    {
        "id": 2994426,
        "nm": "Mereau",
        "lat": 47.16296,
        "lon": 2.05086
    },
    {
        "id": 2994416,
        "nm": "Mereville",
        "lat": 48.314758,
        "lon": 2.08609
    },
    {
        "id": 2994404,
        "nm": "Meribel",
        "lat": 45.41497,
        "lon": 6.565
    },
    {
        "id": 2994401,
        "nm": "Mericourt",
        "lat": 50.401161,
        "lon": 2.86246
    },
    {
        "id": 2994396,
        "nm": "Meriel",
        "lat": 49.076141,
        "lon": 2.21054
    },
    {
        "id": 2994393,
        "nm": "Merignac",
        "lat": 44.832481,
        "lon": -0.63381
    },
    {
        "id": 2994385,
        "nm": "Merignies",
        "lat": 50.506088,
        "lon": 3.11043
    },
    {
        "id": 2994379,
        "nm": "Merindol",
        "lat": 43.755161,
        "lon": 5.20357
    },
    {
        "id": 2994351,
        "nm": "Merlevenez",
        "lat": 47.73563,
        "lon": -3.23047
    },
    {
        "id": 2994349,
        "nm": "Merlimont",
        "lat": 50.455898,
        "lon": 1.61315
    },
    {
        "id": 2994313,
        "nm": "Mers-les-Bains",
        "lat": 50.06538,
        "lon": 1.3881
    },
    {
        "id": 2994307,
        "nm": "Mertzwiller",
        "lat": 48.868462,
        "lon": 7.6831
    },
    {
        "id": 2994306,
        "nm": "Meru",
        "lat": 49.23333,
        "lon": 2.13333
    },
    {
        "id": 2994297,
        "nm": "Merville",
        "lat": 50.643291,
        "lon": 2.64125
    },
    {
        "id": 2994298,
        "nm": "Merville",
        "lat": 43.723541,
        "lon": 1.29656
    },
    {
        "id": 2994283,
        "nm": "Mery-sur-Oise",
        "lat": 49.058762,
        "lon": 2.19113
    },
    {
        "id": 2994280,
        "nm": "Mesanger",
        "lat": 47.431309,
        "lon": -1.22798
    },
    {
        "id": 2994274,
        "nm": "Meschers-sur-Gironde",
        "lat": 45.560371,
        "lon": -0.9547
    },
    {
        "id": 2994263,
        "nm": "Meslay-du-Maine",
        "lat": 47.95116,
        "lon": -0.55428
    },
    {
        "id": 2994201,
        "nm": "Messac",
        "lat": 47.82399,
        "lon": -1.81085
    },
    {
        "id": 2994193,
        "nm": "Messei",
        "lat": 48.711571,
        "lon": -0.53739
    },
    {
        "id": 2994184,
        "nm": "Messimy",
        "lat": 45.697411,
        "lon": 4.67291
    },
    {
        "id": 2994168,
        "nm": "Meteren",
        "lat": 50.73333,
        "lon": 2.7
    },
    {
        "id": 2994161,
        "nm": "Mettray",
        "lat": 47.452511,
        "lon": 0.64939
    },
    {
        "id": 2994160,
        "nm": "Metz",
        "lat": 49.11911,
        "lon": 6.17269
    },
    {
        "id": 2994150,
        "nm": "Metz-Tessy",
        "lat": 45.934059,
        "lon": 6.10826
    },
    {
        "id": 2994144,
        "nm": "Meudon",
        "lat": 48.813808,
        "lon": 2.235
    },
    {
        "id": 2994139,
        "nm": "Meulan-en-Yvelines",
        "lat": 49.007679,
        "lon": 1.90602
    },
    {
        "id": 2994126,
        "nm": "Meung-sur-Loire",
        "lat": 47.831242,
        "lon": 1.69582
    },
    {
        "id": 2994121,
        "nm": "Meurchin",
        "lat": 50.49831,
        "lon": 2.89318
    },
    {
        "id": 2994094,
        "nm": "Meximieux",
        "lat": 45.908409,
        "lon": 5.19527
    },
    {
        "id": 2994093,
        "nm": "Mexy",
        "lat": 49.501499,
        "lon": 5.7807
    },
    {
        "id": 2994087,
        "nm": "Meylan",
        "lat": 45.219879,
        "lon": 5.79007
    },
    {
        "id": 2994085,
        "nm": "Meymac",
        "lat": 45.53487,
        "lon": 2.14502
    },
    {
        "id": 2994078,
        "nm": "Meynes",
        "lat": 43.879742,
        "lon": 4.55958
    },
    {
        "id": 2994070,
        "nm": "Meyrargues",
        "lat": 43.638062,
        "lon": 5.52611
    },
    {
        "id": 2994068,
        "nm": "Meyreuil",
        "lat": 43.487801,
        "lon": 5.49574
    },
    {
        "id": 2994049,
        "nm": "Meythet",
        "lat": 45.918362,
        "lon": 6.09422
    },
    {
        "id": 2994048,
        "nm": "Meyzieu",
        "lat": 45.76667,
        "lon": 5
    },
    {
        "id": 2994043,
        "nm": "Meze",
        "lat": 43.425041,
        "lon": 3.6059
    },
    {
        "id": 2994033,
        "nm": "Mezeriat",
        "lat": 46.23431,
        "lon": 5.04806
    },
    {
        "id": 2994008,
        "nm": "Mezieres-sur-Seine",
        "lat": 48.961281,
        "lon": 1.79245
    },
    {
        "id": 2993936,
        "nm": "Mieussy",
        "lat": 46.13369,
        "lon": 6.52416
    },
    {
        "id": 2993928,
        "nm": "Migennes",
        "lat": 47.965481,
        "lon": 3.51787
    },
    {
        "id": 2993921,
        "nm": "Mignaloux-Beauvoir",
        "lat": 46.541569,
        "lon": 0.41538
    },
    {
        "id": 2993918,
        "nm": "Migne-Auxances",
        "lat": 46.627449,
        "lon": 0.31458
    },
    {
        "id": 2993889,
        "nm": "Milhaud",
        "lat": 43.78978,
        "lon": 4.31035
    },
    {
        "id": 2993884,
        "nm": "Milizac",
        "lat": 48.466671,
        "lon": -4.56667
    },
    {
        "id": 2993876,
        "nm": "Millas",
        "lat": 42.692032,
        "lon": 2.69508
    },
    {
        "id": 2993875,
        "nm": "Millau",
        "lat": 44.099998,
        "lon": 3.08333
    },
    {
        "id": 2993864,
        "nm": "Millery",
        "lat": 45.631741,
        "lon": 4.78628
    },
    {
        "id": 2993843,
        "nm": "Milly-la-Foret",
        "lat": 48.403999,
        "lon": 2.47015
    },
    {
        "id": 2993832,
        "nm": "Mimet",
        "lat": 43.413929,
        "lon": 5.50495
    },
    {
        "id": 2993830,
        "nm": "Mimizan",
        "lat": 44.200569,
        "lon": -1.22886
    },
    {
        "id": 2993801,
        "nm": "Miniac-Morvan",
        "lat": 48.514771,
        "lon": -1.89955
    },
    {
        "id": 2993781,
        "nm": "Mionnay",
        "lat": 45.895569,
        "lon": 4.93074
    },
    {
        "id": 2993780,
        "nm": "Mions",
        "lat": 45.664322,
        "lon": 4.94994
    },
    {
        "id": 2993779,
        "nm": "Mios",
        "lat": 44.604889,
        "lon": -0.93329
    },
    {
        "id": 2993760,
        "nm": "Miramas",
        "lat": 43.586658,
        "lon": 5.00464
    },
    {
        "id": 2993753,
        "nm": "Miramont-de-Guyenne",
        "lat": 44.60157,
        "lon": 0.36247
    },
    {
        "id": 2993749,
        "nm": "Mirande",
        "lat": 43.51667,
        "lon": 0.41667
    },
    {
        "id": 2993732,
        "nm": "Mirebeau",
        "lat": 46.78743,
        "lon": 0.18341
    },
    {
        "id": 2993728,
        "nm": "Mirecourt",
        "lat": 48.300892,
        "lon": 6.13282
    },
    {
        "id": 2993720,
        "nm": "Mirepoix",
        "lat": 43.08773,
        "lon": 1.8735
    },
    {
        "id": 2993717,
        "nm": "Mireval",
        "lat": 43.508598,
        "lon": 3.8017
    },
    {
        "id": 2993712,
        "nm": "Miribel",
        "lat": 45.825802,
        "lon": 4.9544
    },
    {
        "id": 2993701,
        "nm": "Miserey-Salines",
        "lat": 47.286381,
        "lon": 5.97387
    },
    {
        "id": 2993700,
        "nm": "Miserieux",
        "lat": 45.973091,
        "lon": 4.8123
    },
    {
        "id": 2993692,
        "nm": "Missillac",
        "lat": 47.481548,
        "lon": -2.16
    },
    {
        "id": 2993679,
        "nm": "Mitry-Mory",
        "lat": 48.98333,
        "lon": 2.61667
    },
    {
        "id": 2993654,
        "nm": "Modane",
        "lat": 45.200001,
        "lon": 6.66667
    },
    {
        "id": 2993647,
        "nm": "Moelan-sur-Mer",
        "lat": 47.814178,
        "lon": -3.62892
    },
    {
        "id": 2993605,
        "nm": "Moirans",
        "lat": 45.3283,
        "lon": 5.55342
    },
    {
        "id": 2993604,
        "nm": "Moirans-en-Montagne",
        "lat": 46.433811,
        "lon": 5.72643
    },
    {
        "id": 2993586,
        "nm": "Moissac",
        "lat": 44.10236,
        "lon": 1.0945
    },
    {
        "id": 2993572,
        "nm": "Moissy-Cramayel",
        "lat": 48.626049,
        "lon": 2.60125
    },
    {
        "id": 2993496,
        "nm": "Molleges",
        "lat": 43.80703,
        "lon": 4.94934
    },
    {
        "id": 2993419,
        "nm": "Monce-en-Belin",
        "lat": 47.894421,
        "lon": 0.19809
    },
    {
        "id": 2993403,
        "nm": "Monchecourt",
        "lat": 50.304131,
        "lon": 3.21029
    },
    {
        "id": 2993390,
        "nm": "Monchy-Saint-Eloi",
        "lat": 49.290421,
        "lon": 2.46739
    },
    {
        "id": 2993375,
        "nm": "Moncoutant",
        "lat": 46.725471,
        "lon": -0.58797
    },
    {
        "id": 2993367,
        "nm": "Mondelange",
        "lat": 49.26469,
        "lon": 6.17087
    },
    {
        "id": 2993358,
        "nm": "Mondeville",
        "lat": 49.174969,
        "lon": -0.32238
    },
    {
        "id": 2993348,
        "nm": "Mondonville",
        "lat": 43.672958,
        "lon": 1.28592
    },
    {
        "id": 2993342,
        "nm": "Mondragon",
        "lat": 44.238579,
        "lon": 4.71005
    },
    {
        "id": 2993331,
        "nm": "Monein",
        "lat": 43.333328,
        "lon": -0.58333
    },
    {
        "id": 2993316,
        "nm": "Moneteau",
        "lat": 47.849232,
        "lon": 3.58178
    },
    {
        "id": 2993308,
        "nm": "Monflanquin",
        "lat": 44.529659,
        "lon": 0.76772
    },
    {
        "id": 2993277,
        "nm": "Monistrol-sur-Loire",
        "lat": 45.293339,
        "lon": 4.17161
    },
    {
        "id": 2993261,
        "nm": "Monnaie",
        "lat": 47.501621,
        "lon": 0.78872
    },
    {
        "id": 2993250,
        "nm": "Monnetier-Mornex",
        "lat": 46.160301,
        "lon": 6.20667
    },
    {
        "id": 2993207,
        "nm": "Mons-en-Baroeul",
        "lat": 50.633331,
        "lon": 3.11667
    },
    {
        "id": 2993203,
        "nm": "Mons-en-Pevele",
        "lat": 50.479259,
        "lon": 3.09767
    },
    {
        "id": 2993208,
        "nm": "Monsempron-Libos",
        "lat": 44.49004,
        "lon": 0.9409
    },
    {
        "id": 2993191,
        "nm": "Monswiller",
        "lat": 48.755112,
        "lon": 7.37732
    },
    {
        "id": 2992771,
        "nm": "Mont-de-Marsan",
        "lat": 43.890221,
        "lon": -0.49713
    },
    {
        "id": 2992126,
        "nm": "Mont-pres-Chambord",
        "lat": 47.562351,
        "lon": 1.45712
    },
    {
        "id": 2992003,
        "nm": "Mont-Saint-Aignan",
        "lat": 49.46307,
        "lon": 1.09364
    },
    {
        "id": 2991992,
        "nm": "Mont-Saint-Martin",
        "lat": 49.5467,
        "lon": 5.79375
    },
    {
        "id": 2993166,
        "nm": "Montady",
        "lat": 43.335899,
        "lon": 3.1278
    },
    {
        "id": 2993160,
        "nm": "Montagnac",
        "lat": 43.480869,
        "lon": 3.48312
    },
    {
        "id": 2993117,
        "nm": "Montagny",
        "lat": 45.626991,
        "lon": 4.75782
    },
    {
        "id": 2993092,
        "nm": "Montaigu",
        "lat": 46.976669,
        "lon": -1.30846
    },
    {
        "id": 2993061,
        "nm": "Montalieu-Vercieu",
        "lat": 45.815769,
        "lon": 5.40393
    },
    {
        "id": 2993053,
        "nm": "Montamise",
        "lat": 46.621811,
        "lon": 0.42442
    },
    {
        "id": 2993051,
        "nm": "Montanay",
        "lat": 45.878181,
        "lon": 4.86302
    },
    {
        "id": 2993028,
        "nm": "Montardon",
        "lat": 43.366669,
        "lon": -0.35
    },
    {
        "id": 2993024,
        "nm": "Montargis",
        "lat": 48,
        "lon": 2.75
    },
    {
        "id": 2993013,
        "nm": "Montarnaud",
        "lat": 43.64743,
        "lon": 3.6969
    },
    {
        "id": 2993006,
        "nm": "Montastruc-la-Conseillere",
        "lat": 43.719818,
        "lon": 1.59019
    },
    {
        "id": 2993004,
        "nm": "Montataire",
        "lat": 49.258999,
        "lon": 2.43777
    },
    {
        "id": 2993002,
        "nm": "Montauban",
        "lat": 44.01667,
        "lon": 1.35
    },
    {
        "id": 2992998,
        "nm": "Montauban-de-Bretagne",
        "lat": 48.199341,
        "lon": -2.04476
    },
    {
        "id": 2992978,
        "nm": "Montauroux",
        "lat": 43.619049,
        "lon": 6.775
    },
    {
        "id": 2992960,
        "nm": "Montayral",
        "lat": 44.475128,
        "lon": 0.98769
    },
    {
        "id": 2992953,
        "nm": "Montbard",
        "lat": 47.616669,
        "lon": 4.33333
    },
    {
        "id": 2992944,
        "nm": "Montbazin",
        "lat": 43.51667,
        "lon": 3.69667
    },
    {
        "id": 2992943,
        "nm": "Montbazon",
        "lat": 47.283482,
        "lon": 0.69988
    },
    {
        "id": 2992938,
        "nm": "Montbeliard",
        "lat": 47.51667,
        "lon": 6.8
    },
    {
        "id": 2992926,
        "nm": "Montberon",
        "lat": 43.715858,
        "lon": 1.47968
    },
    {
        "id": 2992925,
        "nm": "Montbert",
        "lat": 47.056129,
        "lon": -1.4889
    },
    {
        "id": 2992921,
        "nm": "Montbeton",
        "lat": 44.01667,
        "lon": 1.3
    },
    {
        "id": 2992917,
        "nm": "Montblanc",
        "lat": 43.394859,
        "lon": 3.36752
    },
    {
        "id": 2992908,
        "nm": "Montbonnot-Saint-Martin",
        "lat": 45.222359,
        "lon": 5.80353
    },
    {
        "id": 2992890,
        "nm": "Montbrison",
        "lat": 45.599998,
        "lon": 4.05
    },
    {
        "id": 2992886,
        "nm": "Montbron",
        "lat": 45.666672,
        "lon": 0.5
    },
    {
        "id": 2992863,
        "nm": "Montceau-les-Mines",
        "lat": 46.666672,
        "lon": 4.36667
    },
    {
        "id": 2992852,
        "nm": "Montcenis",
        "lat": 46.787849,
        "lon": 4.38738
    },
    {
        "id": 2992838,
        "nm": "Montchanin",
        "lat": 46.749641,
        "lon": 4.4707
    },
    {
        "id": 2992799,
        "nm": "Montcourt-Fromonville",
        "lat": 48.306721,
        "lon": 2.7046
    },
    {
        "id": 2992760,
        "nm": "Montdidier",
        "lat": 49.650002,
        "lon": 2.56667
    },
    {
        "id": 2992744,
        "nm": "Montebourg",
        "lat": 49.48774,
        "lon": -1.38036
    },
    {
        "id": 2992740,
        "nm": "Montech",
        "lat": 43.95816,
        "lon": 1.23204
    },
    {
        "id": 2992704,
        "nm": "Montelier",
        "lat": 44.93726,
        "lon": 5.03118
    },
    {
        "id": 2992703,
        "nm": "Montelimar",
        "lat": 44.55838,
        "lon": 4.75094
    },
    {
        "id": 2992689,
        "nm": "Montendre",
        "lat": 45.284691,
        "lon": -0.40627
    },
    {
        "id": 2992674,
        "nm": "Monterblanc",
        "lat": 47.742111,
        "lon": -2.6795
    },
    {
        "id": 2992671,
        "nm": "Montereau-Fault-Yonne",
        "lat": 48.383331,
        "lon": 2.95
    },
    {
        "id": 2992654,
        "nm": "Montesquieu-Volvestre",
        "lat": 43.207241,
        "lon": 1.22862
    },
    {
        "id": 2992650,
        "nm": "Montesson",
        "lat": 48.909241,
        "lon": 2.13754
    },
    {
        "id": 2992638,
        "nm": "Monteux",
        "lat": 44.034801,
        "lon": 4.99719
    },
    {
        "id": 2992637,
        "nm": "Montevrain",
        "lat": 48.874149,
        "lon": 2.75114
    },
    {
        "id": 2992618,
        "nm": "Montfavet",
        "lat": 43.93335,
        "lon": 4.87342
    },
    {
        "id": 2992616,
        "nm": "Montfermeil",
        "lat": 48.898201,
        "lon": 2.57913
    },
    {
        "id": 2992607,
        "nm": "Montferrand-le-Chateau",
        "lat": 47.175362,
        "lon": 5.91534
    },
    {
        "id": 2992606,
        "nm": "Montferrat",
        "lat": 43.610722,
        "lon": 6.48238
    },
    {
        "id": 2992602,
        "nm": "Montferrier-sur-Lez",
        "lat": 43.667419,
        "lon": 3.85439
    },
    {
        "id": 2992584,
        "nm": "Montfort-le-Gesnois",
        "lat": 48.049999,
        "lon": 0.41667
    },
    {
        "id": 2992581,
        "nm": "Montfort-sur-Meu",
        "lat": 48.135422,
        "lon": -1.95201
    },
    {
        "id": 2992577,
        "nm": "Montfrin",
        "lat": 43.875961,
        "lon": 4.5996
    },
    {
        "id": 2992537,
        "nm": "Montgermont",
        "lat": 48.155918,
        "lon": -1.71464
    },
    {
        "id": 2992536,
        "nm": "Montgeron",
        "lat": 48.705429,
        "lon": 2.45039
    },
    {
        "id": 2992526,
        "nm": "Montgiscard",
        "lat": 43.46072,
        "lon": 1.56738
    },
    {
        "id": 2992495,
        "nm": "Montherme",
        "lat": 49.884651,
        "lon": 4.73013
    },
    {
        "id": 2992466,
        "nm": "Montier-en-Der",
        "lat": 48.47823,
        "lon": 4.77073
    },
    {
        "id": 2992453,
        "nm": "Montignac",
        "lat": 45.064289,
        "lon": 1.16196
    },
    {
        "id": 2992420,
        "nm": "Montigny-en-Gohelle",
        "lat": 50.4254,
        "lon": 2.93902
    },
    {
        "id": 2992418,
        "nm": "Montigny-en-Ostrevent",
        "lat": 50.366669,
        "lon": 3.18333
    },
    {
        "id": 2992415,
        "nm": "Montigny-le-Bretonneux",
        "lat": 48.766361,
        "lon": 2.03405
    },
    {
        "id": 2992404,
        "nm": "Montigny-les-Cormeilles",
        "lat": 48.982021,
        "lon": 2.20035
    },
    {
        "id": 2992402,
        "nm": "Montigny-les-Metz",
        "lat": 49.094349,
        "lon": 6.15167
    },
    {
        "id": 2992387,
        "nm": "Montigny-sur-Loing",
        "lat": 48.335751,
        "lon": 2.74423
    },
    {
        "id": 2992367,
        "nm": "Montivilliers",
        "lat": 49.545181,
        "lon": 0.18769
    },
    {
        "id": 2992354,
        "nm": "Montjean-sur-Loire",
        "lat": 47.38842,
        "lon": -0.85873
    },
    {
        "id": 2992309,
        "nm": "Montlhery",
        "lat": 48.640041,
        "lon": 2.27465
    },
    {
        "id": 2992304,
        "nm": "Montlignon",
        "lat": 49.006359,
        "lon": 2.28705
    },
    {
        "id": 2992293,
        "nm": "Montlouis-sur-Loire",
        "lat": 47.388451,
        "lon": 0.83208
    },
    {
        "id": 2992292,
        "nm": "Montlucon",
        "lat": 46.333328,
        "lon": 2.6
    },
    {
        "id": 2992290,
        "nm": "Montluel",
        "lat": 45.851898,
        "lon": 5.0578
    },
    {
        "id": 2992287,
        "nm": "Montmagny",
        "lat": 48.973381,
        "lon": 2.34688
    },
    {
        "id": 2992260,
        "nm": "Montmedy",
        "lat": 49.520962,
        "lon": 5.36835
    },
    {
        "id": 2992255,
        "nm": "Montmelian",
        "lat": 45.499939,
        "lon": 6.05047
    },
    {
        "id": 2992254,
        "nm": "Montmerle-sur-Saone",
        "lat": 46.083328,
        "lon": 4.76667
    },
    {
        "id": 2992249,
        "nm": "Montmeyran",
        "lat": 44.833199,
        "lon": 4.97473
    },
    {
        "id": 2992240,
        "nm": "Montmirail",
        "lat": 48.872139,
        "lon": 3.53797
    },
    {
        "id": 2992229,
        "nm": "Montmorency",
        "lat": 48.988258,
        "lon": 2.3434
    },
    {
        "id": 2992225,
        "nm": "Montmorillon",
        "lat": 46.433331,
        "lon": 0.86667
    },
    {
        "id": 2992220,
        "nm": "Montmorot",
        "lat": 46.675411,
        "lon": 5.52284
    },
    {
        "id": 2992206,
        "nm": "Montoir-de-Bretagne",
        "lat": 47.33012,
        "lon": -2.15107
    },
    {
        "id": 2992204,
        "nm": "Montoire-sur-le-Loir",
        "lat": 47.753159,
        "lon": 0.86525
    },
    {
        "id": 2992203,
        "nm": "Montois-la-Montagne",
        "lat": 49.217522,
        "lon": 6.02305
    },
    {
        "id": 2992166,
        "nm": "Montpellier",
        "lat": 43.61092,
        "lon": 3.87723
    },
    {
        "id": 2992132,
        "nm": "Montpon-Menesterol",
        "lat": 45,
        "lon": 0.16667
    },
    {
        "id": 2992124,
        "nm": "Montrabe",
        "lat": 43.644772,
        "lon": 1.52384
    },
    {
        "id": 2992119,
        "nm": "Montreal",
        "lat": 43.199799,
        "lon": 2.14122
    },
    {
        "id": 2992116,
        "nm": "Montreal-la-Cluse",
        "lat": 46.183331,
        "lon": 5.58333
    },
    {
        "id": 2992104,
        "nm": "Montredon-Labessonnie",
        "lat": 43.717232,
        "lon": 2.32454
    },
    {
        "id": 2992102,
        "nm": "Montrejeau",
        "lat": 43.085548,
        "lon": 0.5647
    },
    {
        "id": 2992090,
        "nm": "Montreuil",
        "lat": 48.864151,
        "lon": 2.44322
    },
    {
        "id": 2992061,
        "nm": "Montreuil",
        "lat": 50.466671,
        "lon": 1.76667
    },
    {
        "id": 2992084,
        "nm": "Montreuil-Bellay",
        "lat": 47.131062,
        "lon": -0.15209
    },
    {
        "id": 2992050,
        "nm": "Montrevel-en-Bresse",
        "lat": 46.336639,
        "lon": 5.1234
    },
    {
        "id": 2992047,
        "nm": "Montrichard",
        "lat": 47.343102,
        "lon": 1.18653
    },
    {
        "id": 2992024,
        "nm": "Montrond-les-Bains",
        "lat": 45.650982,
        "lon": 4.23187
    },
    {
        "id": 2992017,
        "nm": "Montrouge",
        "lat": 48.8162,
        "lon": 2.31394
    },
    {
        "id": 2992009,
        "nm": "Montry",
        "lat": 48.88409,
        "lon": 2.82914
    },
    {
        "id": 2992008,
        "nm": "Monts",
        "lat": 47.277229,
        "lon": 0.62473
    },
    {
        "id": 2991957,
        "nm": "Montsoult",
        "lat": 49.06942,
        "lon": 2.31966
    },
    {
        "id": 2991947,
        "nm": "Montsurs",
        "lat": 48.13604,
        "lon": -0.55413
    },
    {
        "id": 2991906,
        "nm": "Moosch",
        "lat": 47.85968,
        "lon": 7.05007
    },
    {
        "id": 2991898,
        "nm": "Morainvilliers",
        "lat": 48.92902,
        "lon": 1.93621
    },
    {
        "id": 2991891,
        "nm": "Morangis",
        "lat": 48.703831,
        "lon": 2.33908
    },
    {
        "id": 2991881,
        "nm": "Morbecque",
        "lat": 50.693649,
        "lon": 2.51787
    },
    {
        "id": 2991880,
        "nm": "Morbier",
        "lat": 46.53693,
        "lon": 6.01532
    },
    {
        "id": 2991877,
        "nm": "Morcenx",
        "lat": 44.035358,
        "lon": -0.91375
    },
    {
        "id": 2991868,
        "nm": "Mordelles",
        "lat": 48.07571,
        "lon": -1.84286
    },
    {
        "id": 2991866,
        "nm": "Moreac",
        "lat": 47.91967,
        "lon": -2.81934
    },
    {
        "id": 2991847,
        "nm": "Morestel",
        "lat": 45.675999,
        "lon": 5.47079
    },
    {
        "id": 2991842,
        "nm": "Moret-sur-Loing",
        "lat": 48.372391,
        "lon": 2.81713
    },
    {
        "id": 2991839,
        "nm": "Moreuil",
        "lat": 49.77457,
        "lon": 2.48273
    },
    {
        "id": 2991832,
        "nm": "Morez",
        "lat": 46.525398,
        "lon": 6.02589
    },
    {
        "id": 2991806,
        "nm": "Morhange",
        "lat": 48.922989,
        "lon": 6.64179
    },
    {
        "id": 2991799,
        "nm": "Morieres-les-Avignon",
        "lat": 43.9403,
        "lon": 4.9011
    },
    {
        "id": 2991792,
        "nm": "Morigny-Champigny",
        "lat": 48.44685,
        "lon": 2.18352
    },
    {
        "id": 2991775,
        "nm": "Morlaas",
        "lat": 43.349998,
        "lon": -0.26667
    },
    {
        "id": 2991772,
        "nm": "Morlaix",
        "lat": 48.583328,
        "lon": -3.83333
    },
    {
        "id": 2991754,
        "nm": "Mormant",
        "lat": 48.609009,
        "lon": 2.89026
    },
    {
        "id": 2991747,
        "nm": "Mornac",
        "lat": 45.683331,
        "lon": 0.26667
    },
    {
        "id": 2991743,
        "nm": "Mornant",
        "lat": 45.61898,
        "lon": 4.6737
    },
    {
        "id": 2991741,
        "nm": "Mornas",
        "lat": 44.200249,
        "lon": 4.72902
    },
    {
        "id": 2991719,
        "nm": "Morsang-sur-Orge",
        "lat": 48.6618,
        "lon": 2.35338
    },
    {
        "id": 2991716,
        "nm": "Morsbach",
        "lat": 49.17086,
        "lon": 6.87958
    },
    {
        "id": 2991713,
        "nm": "Morschwiller-le-Bas",
        "lat": 47.736092,
        "lon": 7.26687
    },
    {
        "id": 2991704,
        "nm": "Mortagne-au-Perche",
        "lat": 48.51667,
        "lon": 0.55
    },
    {
        "id": 2991700,
        "nm": "Mortagne-sur-Sevre",
        "lat": 46.992031,
        "lon": -0.94738
    },
    {
        "id": 2991699,
        "nm": "Mortain",
        "lat": 48.64782,
        "lon": -0.94055
    },
    {
        "id": 2991692,
        "nm": "Morteau",
        "lat": 47.057838,
        "lon": 6.60716
    },
    {
        "id": 2991630,
        "nm": "Morzine",
        "lat": 46.181492,
        "lon": 6.70664
    },
    {
        "id": 2991579,
        "nm": "Mouans-Sartoux",
        "lat": 43.622238,
        "lon": 6.97312
    },
    {
        "id": 2991575,
        "nm": "Mouchamps",
        "lat": 46.781311,
        "lon": -1.06179
    },
    {
        "id": 2991551,
        "nm": "Mougins",
        "lat": 43.598728,
        "lon": 7.00434
    },
    {
        "id": 2991546,
        "nm": "Mouguerre",
        "lat": 43.467949,
        "lon": -1.41824
    },
    {
        "id": 2991537,
        "nm": "Mouilleron-le-Captif",
        "lat": 46.718979,
        "lon": -1.45462
    },
    {
        "id": 2991481,
        "nm": "Moulins",
        "lat": 46.566669,
        "lon": 3.33333
    },
    {
        "id": 2991470,
        "nm": "Moulins-les-Metz",
        "lat": 49.10318,
        "lon": 6.10721
    },
    {
        "id": 2991431,
        "nm": "Mourenx",
        "lat": 43.383331,
        "lon": -0.6
    },
    {
        "id": 2991421,
        "nm": "Mouries",
        "lat": 43.689968,
        "lon": 4.87089
    },
    {
        "id": 2991413,
        "nm": "Mourmelon-le-Grand",
        "lat": 49.132561,
        "lon": 4.3642
    },
    {
        "id": 2991407,
        "nm": "Mouroux",
        "lat": 48.822632,
        "lon": 3.03879
    },
    {
        "id": 2991396,
        "nm": "Mours-Saint-Eusebe",
        "lat": 45.068298,
        "lon": 5.05752
    },
    {
        "id": 2991362,
        "nm": "Moussy-le-Neuf",
        "lat": 49.06427,
        "lon": 2.60252
    },
    {
        "id": 2991330,
        "nm": "Mouthiers-sur-Boeme",
        "lat": 45.549999,
        "lon": 0.11667
    },
    {
        "id": 2991320,
        "nm": "Moutiers",
        "lat": 49.233688,
        "lon": 5.96498
    },
    {
        "id": 2991325,
        "nm": "Moutiers",
        "lat": 45.48333,
        "lon": 6.53333
    },
    {
        "id": 2991302,
        "nm": "Mouvaux",
        "lat": 50.69944,
        "lon": 3.13429
    },
    {
        "id": 2991297,
        "nm": "Mouy",
        "lat": 49.31535,
        "lon": 2.31954
    },
    {
        "id": 2991285,
        "nm": "Mouzillon",
        "lat": 47.140961,
        "lon": -1.2819
    },
    {
        "id": 2991283,
        "nm": "Mouzon",
        "lat": 49.607059,
        "lon": 5.07569
    },
    {
        "id": 2991271,
        "nm": "Moyenmoutier",
        "lat": 48.3773,
        "lon": 6.90047
    },
    {
        "id": 2991264,
        "nm": "Moyeuvre-Grande",
        "lat": 49.251652,
        "lon": 6.04754
    },
    {
        "id": 2991258,
        "nm": "Mozac",
        "lat": 45.891659,
        "lon": 3.09095
    },
    {
        "id": 2991255,
        "nm": "Moze-sur-Louet",
        "lat": 47.358559,
        "lon": -0.55294
    },
    {
        "id": 2991220,
        "nm": "Muizon",
        "lat": 49.275002,
        "lon": 3.89083
    },
    {
        "id": 2991214,
        "nm": "Mulhouse",
        "lat": 47.75,
        "lon": 7.33333
    },
    {
        "id": 2991207,
        "nm": "Mulsanne",
        "lat": 47.91172,
        "lon": 0.24938
    },
    {
        "id": 2991199,
        "nm": "Mundolsheim",
        "lat": 48.642151,
        "lon": 7.71378
    },
    {
        "id": 2991189,
        "nm": "Munster",
        "lat": 48.04089,
        "lon": 7.13338
    },
    {
        "id": 2991161,
        "nm": "Mur-de-Bretagne",
        "lat": 48.200001,
        "lon": -2.98333
    },
    {
        "id": 2991179,
        "nm": "Murat",
        "lat": 45.107971,
        "lon": 2.86665
    },
    {
        "id": 2991153,
        "nm": "Muret",
        "lat": 43.466671,
        "lon": 1.35
    },
    {
        "id": 2991128,
        "nm": "Murs-Erigne",
        "lat": 47.400002,
        "lon": -0.55
    },
    {
        "id": 2991102,
        "nm": "Mussidan",
        "lat": 45.035419,
        "lon": 0.3629
    },
    {
        "id": 2991086,
        "nm": "Mutzig",
        "lat": 48.539742,
        "lon": 7.45594
    },
    {
        "id": 2991077,
        "nm": "Muzillac",
        "lat": 47.554508,
        "lon": -2.48041
    },
    {
        "id": 2991036,
        "nm": "Naintre",
        "lat": 46.763538,
        "lon": 0.48683
    },
    {
        "id": 2991027,
        "nm": "Nalliers",
        "lat": 46.470711,
        "lon": -1.02774
    },
    {
        "id": 2990999,
        "nm": "Nancy",
        "lat": 48.683331,
        "lon": 6.2
    },
    {
        "id": 2990995,
        "nm": "Nandy",
        "lat": 48.583012,
        "lon": 2.56292
    },
    {
        "id": 2990992,
        "nm": "Nangis",
        "lat": 48.555351,
        "lon": 3.01306
    },
    {
        "id": 2990987,
        "nm": "Nans-les-Pins",
        "lat": 43.37035,
        "lon": 5.7834
    },
    {
        "id": 2990970,
        "nm": "Nanterre",
        "lat": 48.891979,
        "lon": 2.20675
    },
    {
        "id": 2990969,
        "nm": "Nantes",
        "lat": 47.217251,
        "lon": -1.55336
    },
    {
        "id": 2990958,
        "nm": "Nanteuil-le-Haudouin",
        "lat": 49.14082,
        "lon": 2.81142
    },
    {
        "id": 2990957,
        "nm": "Nanteuil-les-Meaux",
        "lat": 48.929401,
        "lon": 2.89594
    },
    {
        "id": 2990932,
        "nm": "Nantua",
        "lat": 46.150002,
        "lon": 5.61667
    },
    {
        "id": 2990919,
        "nm": "Narbonne",
        "lat": 43.183331,
        "lon": 3
    },
    {
        "id": 2990908,
        "nm": "Narrosse",
        "lat": 43.703812,
        "lon": -1.00742
    },
    {
        "id": 2990890,
        "nm": "Naucelle",
        "lat": 44.198101,
        "lon": 2.3431
    },
    {
        "id": 2990866,
        "nm": "Naveil",
        "lat": 47.795761,
        "lon": 1.03222
    },
    {
        "id": 2990860,
        "nm": "Naves",
        "lat": 45.31395,
        "lon": 1.76708
    },
    {
        "id": 2990852,
        "nm": "Nay",
        "lat": 43.183331,
        "lon": -0.26667
    },
    {
        "id": 2990848,
        "nm": "Nazelles-Negron",
        "lat": 47.433331,
        "lon": 0.95
    },
    {
        "id": 2990835,
        "nm": "Neauphle-le-Chateau",
        "lat": 48.814178,
        "lon": 1.90567
    },
    {
        "id": 2990809,
        "nm": "Negrepelisse",
        "lat": 44.07436,
        "lon": 1.51978
    },
    {
        "id": 2990793,
        "nm": "Nemours",
        "lat": 48.275108,
        "lon": 2.69078
    },
    {
        "id": 2990780,
        "nm": "Nerac",
        "lat": 44.133331,
        "lon": 0.35
    },
    {
        "id": 2990767,
        "nm": "Neris-les-Bains",
        "lat": 46.28688,
        "lon": 2.65869
    },
    {
        "id": 2990751,
        "nm": "Nersac",
        "lat": 45.633331,
        "lon": 0.05
    },
    {
        "id": 2990741,
        "nm": "Nesle",
        "lat": 49.758881,
        "lon": 2.91133
    },
    {
        "id": 2990729,
        "nm": "Nesles-la-Vallee",
        "lat": 49.132019,
        "lon": 2.17099
    },
    {
        "id": 2990727,
        "nm": "Nesmy",
        "lat": 46.590778,
        "lon": -1.40074
    },
    {
        "id": 2990683,
        "nm": "Neuf-Brisach",
        "lat": 48.01783,
        "lon": 7.52795
    },
    {
        "id": 2990682,
        "nm": "Neufchateau",
        "lat": 48.349998,
        "lon": 5.7
    },
    {
        "id": 2990680,
        "nm": "Neufchatel-en-Bray",
        "lat": 49.733158,
        "lon": 1.43956
    },
    {
        "id": 2990678,
        "nm": "Neufchatel-Hardelot",
        "lat": 50.620178,
        "lon": 1.64223
    },
    {
        "id": 2990676,
        "nm": "Neufchef",
        "lat": 49.31514,
        "lon": 6.02341
    },
    {
        "id": 2990628,
        "nm": "Neuilly-en-Thelle",
        "lat": 49.224461,
        "lon": 2.28525
    },
    {
        "id": 2990620,
        "nm": "Neuilly-les-Dijon",
        "lat": 47.27943,
        "lon": 5.10645
    },
    {
        "id": 2990616,
        "nm": "Neuilly-Plaisance",
        "lat": 48.863419,
        "lon": 2.506
    },
    {
        "id": 2990615,
        "nm": "Neuilly-Saint-Front",
        "lat": 49.17012,
        "lon": 3.26393
    },
    {
        "id": 2990612,
        "nm": "Neuilly-sur-Marne",
        "lat": 48.853729,
        "lon": 2.54903
    },
    {
        "id": 2990611,
        "nm": "Neuilly-sur-Seine",
        "lat": 48.883331,
        "lon": 2.26667
    },
    {
        "id": 2990590,
        "nm": "Neuvecelle",
        "lat": 46.39502,
        "lon": 6.61257
    },
    {
        "id": 2990580,
        "nm": "Neuves-Maisons",
        "lat": 48.620289,
        "lon": 6.10698
    },
    {
        "id": 2990576,
        "nm": "Neuvic",
        "lat": 45.10033,
        "lon": 0.46901
    },
    {
        "id": 2990575,
        "nm": "Neuvic",
        "lat": 45.383331,
        "lon": 2.28333
    },
    {
        "id": 2990550,
        "nm": "Neuville-aux-Bois",
        "lat": 48.06813,
        "lon": 2.05372
    },
    {
        "id": 2990546,
        "nm": "Neuville-de-Poitou",
        "lat": 46.683331,
        "lon": 0.25
    },
    {
        "id": 2990543,
        "nm": "Neuville-en-Ferrain",
        "lat": 50.74839,
        "lon": 3.15676
    },
    {
        "id": 2990527,
        "nm": "Neuville-Saint-Remy",
        "lat": 50.18618,
        "lon": 3.22404
    },
    {
        "id": 2990520,
        "nm": "Neuville-sur-Escaut",
        "lat": 50.299999,
        "lon": 3.35
    },
    {
        "id": 2990516,
        "nm": "Neuville-sur-Saone",
        "lat": 45.877041,
        "lon": 4.8492
    },
    {
        "id": 2990515,
        "nm": "Neuville-sur-Sarthe",
        "lat": 48.076149,
        "lon": 0.19264
    },
    {
        "id": 2990474,
        "nm": "Nevers",
        "lat": 46.989559,
        "lon": 3.159
    },
    {
        "id": 2990471,
        "nm": "Nevez",
        "lat": 47.819241,
        "lon": -3.79225
    },
    {
        "id": 2990463,
        "nm": "Nexon",
        "lat": 45.679619,
        "lon": 1.18555
    },
    {
        "id": 2990440,
        "nm": "Nice",
        "lat": 43.703129,
        "lon": 7.26608
    },
    {
        "id": 2990420,
        "nm": "Niederbronn-les-Bains",
        "lat": 48.951649,
        "lon": 7.64271
    },
    {
        "id": 2990392,
        "nm": "Nieppe",
        "lat": 50.70425,
        "lon": 2.83506
    },
    {
        "id": 2990382,
        "nm": "Nieul-le-Dolent",
        "lat": 46.573792,
        "lon": -1.50808
    },
    {
        "id": 2990377,
        "nm": "Nieul-sur-Mer",
        "lat": 46.20583,
        "lon": -1.16449
    },
    {
        "id": 2990364,
        "nm": "Nilvange",
        "lat": 49.339951,
        "lon": 6.05483
    },
    {
        "id": 2990363,
        "nm": "Nimes",
        "lat": 43.833328,
        "lon": 4.35
    },
    {
        "id": 2990355,
        "nm": "Niort",
        "lat": 46.323132,
        "lon": -0.45877
    },
    {
        "id": 2990344,
        "nm": "Nissan-lez-Enserune",
        "lat": 43.289619,
        "lon": 3.12705
    },
    {
        "id": 2990331,
        "nm": "Nivillac",
        "lat": 47.53371,
        "lon": -2.28298
    },
    {
        "id": 2990329,
        "nm": "Nivolas-Vermelle",
        "lat": 45.55518,
        "lon": 5.30682
    },
    {
        "id": 2990307,
        "nm": "Noailles",
        "lat": 49.328659,
        "lon": 2.20024
    },
    {
        "id": 2990294,
        "nm": "Noe",
        "lat": 43.358139,
        "lon": 1.27709
    },
    {
        "id": 2990287,
        "nm": "Noeux-les-Mines",
        "lat": 50.48333,
        "lon": 2.66667
    },
    {
        "id": 2990284,
        "nm": "Nogaro",
        "lat": 43.75856,
        "lon": -0.03293
    },
    {
        "id": 2990276,
        "nm": "Nogent-le-Bas",
        "lat": 48.019741,
        "lon": 5.33323
    },
    {
        "id": 2990273,
        "nm": "Nogent-le-Roi",
        "lat": 48.64785,
        "lon": 1.52933
    },
    {
        "id": 2990272,
        "nm": "Nogent-le-Rotrou",
        "lat": 48.316669,
        "lon": 0.83333
    },
    {
        "id": 2990265,
        "nm": "Nogent-sur-Marne",
        "lat": 48.833328,
        "lon": 2.48333
    },
    {
        "id": 2990264,
        "nm": "Nogent-sur-Oise",
        "lat": 49.27158,
        "lon": 2.47074
    },
    {
        "id": 2990263,
        "nm": "Nogent-sur-Seine",
        "lat": 48.48333,
        "lon": 3.5
    },
    {
        "id": 2990261,
        "nm": "Nogent-sur-Vernisson",
        "lat": 47.846031,
        "lon": 2.74266
    },
    {
        "id": 2990247,
        "nm": "Noidans-les-Vesoul",
        "lat": 47.612991,
        "lon": 6.12571
    },
    {
        "id": 2990195,
        "nm": "Noiseau",
        "lat": 48.77589,
        "lon": 2.54892
    },
    {
        "id": 2990192,
        "nm": "Noisiel",
        "lat": 48.848679,
        "lon": 2.62435
    },
    {
        "id": 2990189,
        "nm": "Noisy-le-Grand",
        "lat": 48.849789,
        "lon": 2.56266
    },
    {
        "id": 2990188,
        "nm": "Noisy-le-Roi",
        "lat": 48.844452,
        "lon": 2.06345
    },
    {
        "id": 2990187,
        "nm": "Noisy-le-Sec",
        "lat": 48.891479,
        "lon": 2.46451
    },
    {
        "id": 2990167,
        "nm": "Nomain",
        "lat": 50.498569,
        "lon": 3.24991
    },
    {
        "id": 2990163,
        "nm": "Nomexy",
        "lat": 48.307411,
        "lon": 6.38572
    },
    {
        "id": 2990158,
        "nm": "Nonancourt",
        "lat": 48.770859,
        "lon": 1.19799
    },
    {
        "id": 2990140,
        "nm": "Nontron",
        "lat": 45.533329,
        "lon": 0.66667
    },
    {
        "id": 2990085,
        "nm": "Nort-sur-Erdre",
        "lat": 47.438808,
        "lon": -1.49833
    },
    {
        "id": 2990064,
        "nm": "Notre-Dame-de-Bondeville",
        "lat": 49.48333,
        "lon": 1.05
    },
    {
        "id": 2990056,
        "nm": "Notre-Dame-de-Gravenchon",
        "lat": 49.489399,
        "lon": 0.57188
    },
    {
        "id": 2990042,
        "nm": "Notre-Dame-de-Sanilhac",
        "lat": 45.12122,
        "lon": 0.71157
    },
    {
        "id": 2990012,
        "nm": "Nouaille-Maupertuis",
        "lat": 46.511131,
        "lon": 0.41667
    },
    {
        "id": 2990007,
        "nm": "Nouan-le-Fuzelier",
        "lat": 47.535999,
        "lon": 2.03647
    },
    {
        "id": 2989953,
        "nm": "Nouvion-sur-Meuse",
        "lat": 49.69949,
        "lon": 4.79562
    },
    {
        "id": 2989952,
        "nm": "Nouvoitou",
        "lat": 48.04105,
        "lon": -1.54714
    },
    {
        "id": 2989943,
        "nm": "Nouzonville",
        "lat": 49.81369,
        "lon": 4.74736
    },
    {
        "id": 2989935,
        "nm": "Noves",
        "lat": 43.877361,
        "lon": 4.90248
    },
    {
        "id": 2989920,
        "nm": "Noyal-Muzillac",
        "lat": 47.59169,
        "lon": -2.45557
    },
    {
        "id": 2989918,
        "nm": "Noyal-Pontivy",
        "lat": 48.066669,
        "lon": -2.88333
    },
    {
        "id": 2989914,
        "nm": "Noyal-sur-Vilaine",
        "lat": 48.112202,
        "lon": -1.52333
    },
    {
        "id": 2989913,
        "nm": "Noyant",
        "lat": 47.510479,
        "lon": 0.11771
    },
    {
        "id": 2989906,
        "nm": "Noyarey",
        "lat": 45.247601,
        "lon": 5.62837
    },
    {
        "id": 2989901,
        "nm": "Noyelles-Godault",
        "lat": 50.41753,
        "lon": 2.99306
    },
    {
        "id": 2989899,
        "nm": "Noyelles-les-Vermelles",
        "lat": 50.490009,
        "lon": 2.72628
    },
    {
        "id": 2989897,
        "nm": "Noyelles-sous-Lens",
        "lat": 50.43084,
        "lon": 2.87221
    },
    {
        "id": 2989890,
        "nm": "Noyen-sur-Sarthe",
        "lat": 47.871868,
        "lon": -0.09916
    },
    {
        "id": 2989879,
        "nm": "Noyers-sur-Cher",
        "lat": 47.277012,
        "lon": 1.4032
    },
    {
        "id": 2989877,
        "nm": "Noyon",
        "lat": 49.583328,
        "lon": 3
    },
    {
        "id": 2989874,
        "nm": "Nozay",
        "lat": 48.659199,
        "lon": 2.24151
    },
    {
        "id": 2989876,
        "nm": "Nozay",
        "lat": 47.564949,
        "lon": -1.62629
    },
    {
        "id": 2989852,
        "nm": "Nueil-les-Aubiers",
        "lat": 46.933331,
        "lon": -0.58333
    },
    {
        "id": 2989837,
        "nm": "Nuits-Saint-Georges",
        "lat": 47.136829,
        "lon": 4.949
    },
    {
        "id": 2989819,
        "nm": "Nyons",
        "lat": 44.366669,
        "lon": 5.13333
    },
    {
        "id": 2989805,
        "nm": "Oberhausbergen",
        "lat": 48.606071,
        "lon": 7.68846
    },
    {
        "id": 2989802,
        "nm": "Oberhoffen-sur-Moder",
        "lat": 48.78059,
        "lon": 7.86926
    },
    {
        "id": 2989796,
        "nm": "Obernai",
        "lat": 48.463131,
        "lon": 7.481
    },
    {
        "id": 2989792,
        "nm": "Oberschaeffolsheim",
        "lat": 48.58643,
        "lon": 7.65018
    },
    {
        "id": 2989785,
        "nm": "Objat",
        "lat": 45.262379,
        "lon": 1.40781
    },
    {
        "id": 2989755,
        "nm": "Octeville",
        "lat": 49.626122,
        "lon": -1.64349
    },
    {
        "id": 2989753,
        "nm": "Octeville-sur-Mer",
        "lat": 49.554958,
        "lon": 0.1166
    },
    {
        "id": 2989742,
        "nm": "Odos",
        "lat": 43.19622,
        "lon": 0.05694
    },
    {
        "id": 2989736,
        "nm": "OEting",
        "lat": 49.166672,
        "lon": 6.91667
    },
    {
        "id": 2989725,
        "nm": "Offemont",
        "lat": 47.664162,
        "lon": 6.88056
    },
    {
        "id": 2989715,
        "nm": "Offranville",
        "lat": 49.872082,
        "lon": 1.04817
    },
    {
        "id": 2989680,
        "nm": "Oignies",
        "lat": 50.46331,
        "lon": 2.99376
    },
    {
        "id": 2989646,
        "nm": "Oissel",
        "lat": 49.333092,
        "lon": 1.09413
    },
    {
        "id": 2989645,
        "nm": "Oissery",
        "lat": 49.070469,
        "lon": 2.81819
    },
    {
        "id": 2989629,
        "nm": "Olemps",
        "lat": 44.346378,
        "lon": 2.5514
    },
    {
        "id": 2989611,
        "nm": "Olivet",
        "lat": 47.86219,
        "lon": 1.8991
    },
    {
        "id": 2989601,
        "nm": "Ollainville",
        "lat": 48.590809,
        "lon": 2.21936
    },
    {
        "id": 2989590,
        "nm": "Ollioules",
        "lat": 43.13517,
        "lon": 5.848
    },
    {
        "id": 2989572,
        "nm": "Olonne-sur-Mer",
        "lat": 46.53524,
        "lon": -1.77293
    },
    {
        "id": 2989569,
        "nm": "Oloron-Sainte-Marie",
        "lat": 43.194408,
        "lon": -0.61069
    },
    {
        "id": 2989525,
        "nm": "Ondres",
        "lat": 43.56461,
        "lon": -1.44449
    },
    {
        "id": 2989506,
        "nm": "Onnaing",
        "lat": 50.385841,
        "lon": 3.59963
    },
    {
        "id": 2989495,
        "nm": "Onzain",
        "lat": 47.499561,
        "lon": 1.17701
    },
    {
        "id": 2989486,
        "nm": "Opio",
        "lat": 43.667591,
        "lon": 6.98566
    },
    {
        "id": 2989467,
        "nm": "Oradour-sur-Glane",
        "lat": 45.934052,
        "lon": 1.0317
    },
    {
        "id": 2989461,
        "nm": "Oraison",
        "lat": 43.916088,
        "lon": 5.91756
    },
    {
        "id": 2989460,
        "nm": "Orange",
        "lat": 44.139198,
        "lon": 4.80791
    },
    {
        "id": 2989445,
        "nm": "Orbec",
        "lat": 49.01667,
        "lon": 0.41667
    },
    {
        "id": 2989441,
        "nm": "Orbey",
        "lat": 48.126511,
        "lon": 7.16455
    },
    {
        "id": 2989430,
        "nm": "Orcet",
        "lat": 45.70351,
        "lon": 3.16807
    },
    {
        "id": 2989422,
        "nm": "Orchies",
        "lat": 50.466671,
        "lon": 3.23333
    },
    {
        "id": 2989417,
        "nm": "Orcines",
        "lat": 45.783798,
        "lon": 3.0122
    },
    {
        "id": 2989382,
        "nm": "Orgeres",
        "lat": 47.998859,
        "lon": -1.66781
    },
    {
        "id": 2989376,
        "nm": "Orgerus",
        "lat": 48.838509,
        "lon": 1.70132
    },
    {
        "id": 2989372,
        "nm": "Orgeval",
        "lat": 48.921619,
        "lon": 1.9779
    },
    {
        "id": 2989362,
        "nm": "Orgon",
        "lat": 43.79108,
        "lon": 5.03869
    },
    {
        "id": 2989317,
        "nm": "Orleans",
        "lat": 47.902889,
        "lon": 1.90389
    },
    {
        "id": 2989301,
        "nm": "Orlienas",
        "lat": 45.658581,
        "lon": 4.71707
    },
    {
        "id": 2989297,
        "nm": "Orly",
        "lat": 48.747921,
        "lon": 2.39252
    },
    {
        "id": 2989281,
        "nm": "Ormes",
        "lat": 47.941521,
        "lon": 1.81823
    },
    {
        "id": 2989271,
        "nm": "Ormesson-sur-Marne",
        "lat": 48.786301,
        "lon": 2.54471
    },
    {
        "id": 2989252,
        "nm": "Ornans",
        "lat": 47.107491,
        "lon": 6.14306
    },
    {
        "id": 2989241,
        "nm": "Ornex",
        "lat": 46.272701,
        "lon": 6.09982
    },
    {
        "id": 2989211,
        "nm": "Orry-la-Ville",
        "lat": 49.13345,
        "lon": 2.5114
    },
    {
        "id": 2989204,
        "nm": "Orsay",
        "lat": 48.695721,
        "lon": 2.18727
    },
    {
        "id": 2989187,
        "nm": "Orthez",
        "lat": 43.48838,
        "lon": -0.77244
    },
    {
        "id": 2989174,
        "nm": "Orval",
        "lat": 46.725811,
        "lon": 2.47144
    },
    {
        "id": 2989170,
        "nm": "Orvault",
        "lat": 47.27095,
        "lon": -1.6219
    },
    {
        "id": 2989130,
        "nm": "Osny",
        "lat": 49.059368,
        "lon": 2.06183
    },
    {
        "id": 2989108,
        "nm": "Ossun",
        "lat": 43.183331,
        "lon": -0.03333
    },
    {
        "id": 2989094,
        "nm": "Ostricourt",
        "lat": 50.45145,
        "lon": 3.03417
    },
    {
        "id": 2989093,
        "nm": "Ostwald",
        "lat": 48.54369,
        "lon": 7.71099
    },
    {
        "id": 2989088,
        "nm": "Othis",
        "lat": 49.073872,
        "lon": 2.67502
    },
    {
        "id": 2989087,
        "nm": "Ottange",
        "lat": 49.44191,
        "lon": 6.01734
    },
    {
        "id": 2989084,
        "nm": "Ottmarsheim",
        "lat": 47.786549,
        "lon": 7.50935
    },
    {
        "id": 2989058,
        "nm": "Oudon",
        "lat": 47.34774,
        "lon": -1.285
    },
    {
        "id": 2989013,
        "nm": "Ouistreham",
        "lat": 49.275661,
        "lon": -0.2591
    },
    {
        "id": 2988998,
        "nm": "Oullins",
        "lat": 45.717739,
        "lon": 4.80382
    },
    {
        "id": 2988971,
        "nm": "Ouroux-sur-Saone",
        "lat": 46.72147,
        "lon": 4.95262
    },
    {
        "id": 2988936,
        "nm": "Outreau",
        "lat": 50.705349,
        "lon": 1.5897
    },
    {
        "id": 2988922,
        "nm": "Ouveillan",
        "lat": 43.28915,
        "lon": 2.97124
    },
    {
        "id": 2988903,
        "nm": "Ouzouer-sur-Loire",
        "lat": 47.76638,
        "lon": 2.48038
    },
    {
        "id": 2988893,
        "nm": "Oye-Plage",
        "lat": 50.977131,
        "lon": 2.04276
    },
    {
        "id": 2988888,
        "nm": "Oyonnax",
        "lat": 46.259171,
        "lon": 5.65727
    },
    {
        "id": 2988867,
        "nm": "Ozoir-la-Ferriere",
        "lat": 48.766991,
        "lon": 2.66871
    },
    {
        "id": 2988856,
        "nm": "Pabu",
        "lat": 48.586079,
        "lon": -3.13608
    },
    {
        "id": 2988853,
        "nm": "Pace",
        "lat": 48.148479,
        "lon": -1.77327
    },
    {
        "id": 2988848,
        "nm": "Pacy-sur-Eure",
        "lat": 49.01667,
        "lon": 1.38333
    },
    {
        "id": 2988823,
        "nm": "Pagny-sur-Moselle",
        "lat": 48.98349,
        "lon": 6.02084
    },
    {
        "id": 2988797,
        "nm": "Paimboeuf",
        "lat": 47.286541,
        "lon": -2.03048
    },
    {
        "id": 2988796,
        "nm": "Paimpol",
        "lat": 48.778412,
        "lon": -3.04375
    },
    {
        "id": 2988758,
        "nm": "Palaiseau",
        "lat": 48.716671,
        "lon": 2.25
    },
    {
        "id": 2988756,
        "nm": "Palaja",
        "lat": 43.17363,
        "lon": 2.38462
    },
    {
        "id": 2988743,
        "nm": "Palau-del-Vidre",
        "lat": 42.571621,
        "lon": 2.96033
    },
    {
        "id": 2988742,
        "nm": "Palavas-les-Flots",
        "lat": 43.528049,
        "lon": 3.92705
    },
    {
        "id": 2988670,
        "nm": "Pamiers",
        "lat": 43.116669,
        "lon": 1.6
    },
    {
        "id": 2988657,
        "nm": "Panazol",
        "lat": 45.834648,
        "lon": 1.32759
    },
    {
        "id": 2988637,
        "nm": "Panissieres",
        "lat": 45.79282,
        "lon": 4.33955
    },
    {
        "id": 2988632,
        "nm": "Pannes",
        "lat": 48.019371,
        "lon": 2.66755
    },
    {
        "id": 2988621,
        "nm": "Pantin",
        "lat": 48.894371,
        "lon": 2.40935
    },
    {
        "id": 2988592,
        "nm": "Paray-le-Monial",
        "lat": 46.454571,
        "lon": 4.11584
    },
    {
        "id": 2988589,
        "nm": "Paray-Vieille-Poste",
        "lat": 48.71402,
        "lon": 2.36283
    },
    {
        "id": 2988576,
        "nm": "Parcay-Meslay",
        "lat": 47.441952,
        "lon": 0.74847
    },
    {
        "id": 2988548,
        "nm": "Parempuyre",
        "lat": 44.950378,
        "lon": -0.60453
    },
    {
        "id": 2988542,
        "nm": "Parentis-en-Born",
        "lat": 44.352741,
        "lon": -1.07095
    },
    {
        "id": 2988523,
        "nm": "Pargny-sur-Saulx",
        "lat": 48.768661,
        "lon": 4.83758
    },
    {
        "id": 2988507,
        "nm": "Paris",
        "lat": 48.853409,
        "lon": 2.3488
    },
    {
        "id": 2988490,
        "nm": "Parmain",
        "lat": 49.112469,
        "lon": 2.21487
    },
    {
        "id": 2988475,
        "nm": "Paron",
        "lat": 48.178879,
        "lon": 3.25076
    },
    {
        "id": 2988447,
        "nm": "Parthenay",
        "lat": 46.650002,
        "lon": -0.25
    },
    {
        "id": 2988393,
        "nm": "Passy",
        "lat": 45.92028,
        "lon": 6.68765
    },
    {
        "id": 2988374,
        "nm": "Patay",
        "lat": 48.048328,
        "lon": 1.695
    },
    {
        "id": 2988358,
        "nm": "Pau",
        "lat": 43.299999,
        "lon": -0.36667
    },
    {
        "id": 2988350,
        "nm": "Pauillac",
        "lat": 45.196442,
        "lon": -0.74873
    },
    {
        "id": 2988339,
        "nm": "Paulhan",
        "lat": 43.53944,
        "lon": 3.4576
    },
    {
        "id": 2988309,
        "nm": "Pavie",
        "lat": 43.609692,
        "lon": 0.59143
    },
    {
        "id": 2988305,
        "nm": "Pavilly",
        "lat": 49.567032,
        "lon": 0.95445
    },
    {
        "id": 2988292,
        "nm": "Payrin-Augmontel",
        "lat": 43.544498,
        "lon": 2.35406
    },
    {
        "id": 2988268,
        "nm": "Peaule",
        "lat": 47.57972,
        "lon": -2.35601
    },
    {
        "id": 2988251,
        "nm": "Pechbonnieu",
        "lat": 43.702419,
        "lon": 1.46538
    },
    {
        "id": 2988236,
        "nm": "Pecquencourt",
        "lat": 50.378502,
        "lon": 3.21277
    },
    {
        "id": 2988220,
        "nm": "Pegomas",
        "lat": 43.598499,
        "lon": 6.93032
    },
    {
        "id": 2988214,
        "nm": "Peille",
        "lat": 43.80587,
        "lon": 7.40429
    },
    {
        "id": 2988186,
        "nm": "Pelissanne",
        "lat": 43.63512,
        "lon": 5.15131
    },
    {
        "id": 2988169,
        "nm": "Pellouailles-les-Vignes",
        "lat": 47.521721,
        "lon": -0.43954
    },
    {
        "id": 2988160,
        "nm": "Pelussin",
        "lat": 45.418079,
        "lon": 4.68248
    },
    {
        "id": 2988082,
        "nm": "Pennautier",
        "lat": 43.245121,
        "lon": 2.31892
    },
    {
        "id": 2988063,
        "nm": "Penta-di-Casinca",
        "lat": 42.466869,
        "lon": 9.45902
    },
    {
        "id": 2988054,
        "nm": "Penvenan",
        "lat": 48.811821,
        "lon": -3.2955
    },
    {
        "id": 2988017,
        "nm": "Percy",
        "lat": 48.917141,
        "lon": -1.18916
    },
    {
        "id": 2988003,
        "nm": "Perenchies",
        "lat": 50.670132,
        "lon": 2.97024
    },
    {
        "id": 2987986,
        "nm": "Periers",
        "lat": 49.186668,
        "lon": -1.40762
    },
    {
        "id": 2987981,
        "nm": "Perignat-les-Sarlieve",
        "lat": 45.73571,
        "lon": 3.14024
    },
    {
        "id": 2987972,
        "nm": "Perigny",
        "lat": 48.69656,
        "lon": 2.55537
    },
    {
        "id": 2987976,
        "nm": "Perigny",
        "lat": 46.15519,
        "lon": -1.09822
    },
    {
        "id": 2987967,
        "nm": "Perigueux",
        "lat": 45.183331,
        "lon": 0.71667
    },
    {
        "id": 2987945,
        "nm": "Pernes-les-Fontaines",
        "lat": 44.000278,
        "lon": 5.05141
    },
    {
        "id": 2987936,
        "nm": "Perols",
        "lat": 43.563129,
        "lon": 3.95203
    },
    {
        "id": 2987930,
        "nm": "Peronnas",
        "lat": 46.190731,
        "lon": 5.20819
    },
    {
        "id": 2987928,
        "nm": "Peronne",
        "lat": 49.933331,
        "lon": 2.93333
    },
    {
        "id": 2987914,
        "nm": "Perpignan",
        "lat": 42.697639,
        "lon": 2.89541
    },
    {
        "id": 2987893,
        "nm": "Perreux",
        "lat": 46.03838,
        "lon": 4.12205
    },
    {
        "id": 2987863,
        "nm": "Perros-Guirec",
        "lat": 48.814541,
        "lon": -3.43963
    },
    {
        "id": 2987843,
        "nm": "Pers-Jussy",
        "lat": 46.106251,
        "lon": 6.26749
    },
    {
        "id": 2987847,
        "nm": "Persan",
        "lat": 49.153358,
        "lon": 2.27218
    },
    {
        "id": 2987834,
        "nm": "Perthes",
        "lat": 48.47821,
        "lon": 2.55509
    },
    {
        "id": 2987825,
        "nm": "Pertuis",
        "lat": 43.69252,
        "lon": 5.50285
    },
    {
        "id": 2987813,
        "nm": "Peschadoires",
        "lat": 45.82391,
        "lon": 3.50243
    },
    {
        "id": 2987805,
        "nm": "Pessac",
        "lat": 44.810108,
        "lon": -0.64129
    },
    {
        "id": 3002918,
        "nm": "Petit-Couronne",
        "lat": 49.383331,
        "lon": 1.01667
    },
    {
        "id": 2987658,
        "nm": "Petit-Mars",
        "lat": 47.395119,
        "lon": -1.45262
    },
    {
        "id": 2987722,
        "nm": "Petite-Foret",
        "lat": 50.366669,
        "lon": 3.48333
    },
    {
        "id": 2987706,
        "nm": "Petite-Rosselle",
        "lat": 49.211769,
        "lon": 6.85607
    },
    {
        "id": 2987554,
        "nm": "Peymeinade",
        "lat": 43.63636,
        "lon": 6.87776
    },
    {
        "id": 2987551,
        "nm": "Peynier",
        "lat": 43.448372,
        "lon": 5.64139
    },
    {
        "id": 2987547,
        "nm": "Peypin",
        "lat": 43.385029,
        "lon": 5.57788
    },
    {
        "id": 2987513,
        "nm": "Peyrehorade",
        "lat": 43.548859,
        "lon": -1.11574
    },
    {
        "id": 2987484,
        "nm": "Peyrins",
        "lat": 45.092411,
        "lon": 5.04767
    },
    {
        "id": 2987472,
        "nm": "Peyrolles-en-Provence",
        "lat": 43.645321,
        "lon": 5.58347
    },
    {
        "id": 2987459,
        "nm": "Peyruis",
        "lat": 44.029591,
        "lon": 5.94262
    },
    {
        "id": 2987441,
        "nm": "Pezenas",
        "lat": 43.45953,
        "lon": 3.42384
    },
    {
        "id": 2987437,
        "nm": "Pezilla-la-Riviere",
        "lat": 42.695358,
        "lon": 2.77115
    },
    {
        "id": 2987431,
        "nm": "Pfaffenhoffen",
        "lat": 48.841061,
        "lon": 7.60678
    },
    {
        "id": 2987429,
        "nm": "Pfastatt",
        "lat": 47.770439,
        "lon": 7.30103
    },
    {
        "id": 2987423,
        "nm": "Phalempin",
        "lat": 50.516911,
        "lon": 3.01584
    },
    {
        "id": 2987421,
        "nm": "Phalsbourg",
        "lat": 48.767521,
        "lon": 7.25695
    },
    {
        "id": 2987409,
        "nm": "Pia",
        "lat": 42.7449,
        "lon": 2.9193
    },
    {
        "id": 2987370,
        "nm": "Picauville",
        "lat": 49.378101,
        "lon": -1.40048
    },
    {
        "id": 2987328,
        "nm": "Piennes",
        "lat": 49.305908,
        "lon": 5.78836
    },
    {
        "id": 2987314,
        "nm": "Pierre-Benite",
        "lat": 45.700901,
        "lon": 4.82511
    },
    {
        "id": 2987320,
        "nm": "Pierre-de-Bresse",
        "lat": 46.883331,
        "lon": 5.25
    },
    {
        "id": 2987297,
        "nm": "Pierrefeu-du-Var",
        "lat": 43.22448,
        "lon": 6.14329
    },
    {
        "id": 2987271,
        "nm": "Pierrefitte-sur-Seine",
        "lat": 48.966911,
        "lon": 2.36104
    },
    {
        "id": 2987270,
        "nm": "Pierrefonds",
        "lat": 49.348782,
        "lon": 2.9779
    },
    {
        "id": 2987259,
        "nm": "Pierrelatte",
        "lat": 44.37756,
        "lon": 4.70198
    },
    {
        "id": 2987256,
        "nm": "Pierrelaye",
        "lat": 49.021099,
        "lon": 2.1548
    },
    {
        "id": 2987230,
        "nm": "Pierres",
        "lat": 48.592091,
        "lon": 1.56444
    },
    {
        "id": 2987222,
        "nm": "Pierrevert",
        "lat": 43.816341,
        "lon": 5.74638
    },
    {
        "id": 2987180,
        "nm": "Pignan",
        "lat": 43.583649,
        "lon": 3.75981
    },
    {
        "id": 2987179,
        "nm": "Pignans",
        "lat": 43.301281,
        "lon": 6.22748
    },
    {
        "id": 2987082,
        "nm": "Pinsaguel",
        "lat": 43.510399,
        "lon": 1.38831
    },
    {
        "id": 2987071,
        "nm": "Piolenc",
        "lat": 44.179451,
        "lon": 4.76408
    },
    {
        "id": 2987056,
        "nm": "Pipriac",
        "lat": 47.809528,
        "lon": -1.94638
    },
    {
        "id": 2987046,
        "nm": "Pire-sur-Seiche",
        "lat": 48.009579,
        "lon": -1.42909
    },
    {
        "id": 2987043,
        "nm": "Piriac-sur-Mer",
        "lat": 47.379379,
        "lon": -2.54616
    },
    {
        "id": 2987003,
        "nm": "Pithiviers",
        "lat": 48.166672,
        "lon": 2.25
    },
    {
        "id": 2987001,
        "nm": "Pithiviers-le-Vieil",
        "lat": 48.163132,
        "lon": 2.20922
    },
    {
        "id": 2986991,
        "nm": "Plabennec",
        "lat": 48.502441,
        "lon": -4.42656
    },
    {
        "id": 2986944,
        "nm": "Plaintel",
        "lat": 48.40733,
        "lon": -2.81733
    },
    {
        "id": 2986933,
        "nm": "Plaisance-du-Touch",
        "lat": 43.565659,
        "lon": 1.29749
    },
    {
        "id": 2986930,
        "nm": "Plaisir",
        "lat": 48.823189,
        "lon": 1.9541
    },
    {
        "id": 2986889,
        "nm": "Plan-de-Cuques",
        "lat": 43.34753,
        "lon": 5.46398
    },
    {
        "id": 2986894,
        "nm": "Plancoet",
        "lat": 48.521992,
        "lon": -2.2354
    },
    {
        "id": 2986855,
        "nm": "Plappeville",
        "lat": 49.130409,
        "lon": 6.12376
    },
    {
        "id": 2986820,
        "nm": "Plechatel",
        "lat": 47.894958,
        "lon": -1.74876
    },
    {
        "id": 2986818,
        "nm": "Pledran",
        "lat": 48.445999,
        "lon": -2.74667
    },
    {
        "id": 2986807,
        "nm": "Plelan-le-Grand",
        "lat": 48.00124,
        "lon": -2.09914
    },
    {
        "id": 2986804,
        "nm": "Plelo",
        "lat": 48.55534,
        "lon": -2.94634
    },
    {
        "id": 2986803,
        "nm": "Plemet",
        "lat": 48.17601,
        "lon": -2.59325
    },
    {
        "id": 2986801,
        "nm": "Plenee-Jugon",
        "lat": 48.36462,
        "lon": -2.40036
    },
    {
        "id": 2986800,
        "nm": "Pleneuf-Val-Andre",
        "lat": 48.592999,
        "lon": -2.54675
    },
    {
        "id": 2986796,
        "nm": "Plerguer",
        "lat": 48.52676,
        "lon": -1.84769
    },
    {
        "id": 2986795,
        "nm": "Plerin",
        "lat": 48.542488,
        "lon": -2.77984
    },
    {
        "id": 2986793,
        "nm": "Plescop",
        "lat": 47.697262,
        "lon": -2.8056
    },
    {
        "id": 2986790,
        "nm": "Pleslin-Trigavou",
        "lat": 48.533329,
        "lon": -2.06667
    },
    {
        "id": 2986785,
        "nm": "Plesse",
        "lat": 47.541801,
        "lon": -1.88609
    },
    {
        "id": 2986772,
        "nm": "Plestin-les-Greves",
        "lat": 48.65844,
        "lon": -3.63056
    },
    {
        "id": 2986771,
        "nm": "Pleubian",
        "lat": 48.84267,
        "lon": -3.139
    },
    {
        "id": 2986768,
        "nm": "Pleudihen-sur-Rance",
        "lat": 48.51667,
        "lon": -1.96667
    },
    {
        "id": 2986762,
        "nm": "Pleumeleuc",
        "lat": 48.18438,
        "lon": -1.91962
    },
    {
        "id": 2986761,
        "nm": "Pleumeur-Bodou",
        "lat": 48.76667,
        "lon": -3.51667
    },
    {
        "id": 2986757,
        "nm": "Pleurtuit",
        "lat": 48.578579,
        "lon": -2.05806
    },
    {
        "id": 2986756,
        "nm": "Pleuven",
        "lat": 47.900002,
        "lon": -4.03333
    },
    {
        "id": 2986747,
        "nm": "Pleyben",
        "lat": 48.23333,
        "lon": -3.96667
    },
    {
        "id": 2986746,
        "nm": "Pleyber-Christ",
        "lat": 48.5,
        "lon": -3.86667
    },
    {
        "id": 2986735,
        "nm": "Plobannalec-Lesconil",
        "lat": 47.816669,
        "lon": -4.21667
    },
    {
        "id": 2986734,
        "nm": "Plobsheim",
        "lat": 48.469791,
        "lon": 7.72442
    },
    {
        "id": 2986733,
        "nm": "Ploemel",
        "lat": 47.651531,
        "lon": -3.0703
    },
    {
        "id": 2986732,
        "nm": "Ploemeur",
        "lat": 47.73333,
        "lon": -3.43333
    },
    {
        "id": 2986730,
        "nm": "Ploeren",
        "lat": 47.657131,
        "lon": -2.86398
    },
    {
        "id": 2986729,
        "nm": "Ploermel",
        "lat": 47.931721,
        "lon": -2.39781
    },
    {
        "id": 2986728,
        "nm": "Ploeuc-sur-Lie",
        "lat": 48.349998,
        "lon": -2.75
    },
    {
        "id": 2986723,
        "nm": "Plogonnec",
        "lat": 48.083328,
        "lon": -4.18333
    },
    {
        "id": 2986715,
        "nm": "Plombieres-les-Bains",
        "lat": 47.963371,
        "lon": 6.45758
    },
    {
        "id": 2986714,
        "nm": "Plombieres-les-Dijon",
        "lat": 47.333328,
        "lon": 4.96667
    },
    {
        "id": 2986713,
        "nm": "Plomelin",
        "lat": 47.933331,
        "lon": -4.15
    },
    {
        "id": 2986712,
        "nm": "Plomeur",
        "lat": 47.833328,
        "lon": -4.28333
    },
    {
        "id": 2986710,
        "nm": "Plomodiern",
        "lat": 48.183331,
        "lon": -4.23333
    },
    {
        "id": 2986708,
        "nm": "Ploneour-Lanvern",
        "lat": 47.900002,
        "lon": -4.28333
    },
    {
        "id": 2986707,
        "nm": "Plonevez-du-Faou",
        "lat": 48.25,
        "lon": -3.83333
    },
    {
        "id": 2986700,
        "nm": "Plouagat",
        "lat": 48.53611,
        "lon": -2.99956
    },
    {
        "id": 2986699,
        "nm": "Plouaret",
        "lat": 48.616669,
        "lon": -3.46667
    },
    {
        "id": 2986698,
        "nm": "Plouarzel",
        "lat": 48.433331,
        "lon": -4.73333
    },
    {
        "id": 2986696,
        "nm": "Plouay",
        "lat": 47.91444,
        "lon": -3.33384
    },
    {
        "id": 2986695,
        "nm": "Ploubalay",
        "lat": 48.581089,
        "lon": -2.14069
    },
    {
        "id": 2986694,
        "nm": "Ploubazlanec",
        "lat": 48.799999,
        "lon": -3.03333
    },
    {
        "id": 2986693,
        "nm": "Ploubezre",
        "lat": 48.700001,
        "lon": -3.45
    },
    {
        "id": 2986692,
        "nm": "Ploudalmezeau",
        "lat": 48.533329,
        "lon": -4.65
    },
    {
        "id": 2986691,
        "nm": "Ploudaniel",
        "lat": 48.533329,
        "lon": -4.31667
    },
    {
        "id": 2986688,
        "nm": "Plouedern",
        "lat": 48.48333,
        "lon": -4.25
    },
    {
        "id": 2986685,
        "nm": "Plouenan",
        "lat": 48.633331,
        "lon": -4
    },
    {
        "id": 2986683,
        "nm": "Plouer-sur-Rance",
        "lat": 48.526691,
        "lon": -2.00298
    },
    {
        "id": 2986682,
        "nm": "Plouescat",
        "lat": 48.666672,
        "lon": -4.16667
    },
    {
        "id": 2986681,
        "nm": "Plouezec",
        "lat": 48.751221,
        "lon": -2.98466
    },
    {
        "id": 2986678,
        "nm": "Ploufragan",
        "lat": 48.491409,
        "lon": -2.79458
    },
    {
        "id": 2986676,
        "nm": "Plougasnou",
        "lat": 48.700001,
        "lon": -3.8
    },
    {
        "id": 2986674,
        "nm": "Plougastel-Daoulas",
        "lat": 48.366669,
        "lon": -4.36667
    },
    {
        "id": 2986673,
        "nm": "Plougonvelin",
        "lat": 48.340591,
        "lon": -4.71846
    },
    {
        "id": 2986672,
        "nm": "Plougonven",
        "lat": 48.51667,
        "lon": -3.71667
    },
    {
        "id": 2986664,
        "nm": "Plouguerneau",
        "lat": 48.599998,
        "lon": -4.5
    },
    {
        "id": 2986663,
        "nm": "Plouguernevel",
        "lat": 48.239399,
        "lon": -3.25071
    },
    {
        "id": 2986662,
        "nm": "Plouguiel",
        "lat": 48.797421,
        "lon": -3.23883
    },
    {
        "id": 2986661,
        "nm": "Plouguin",
        "lat": 48.533329,
        "lon": -4.6
    },
    {
        "id": 2986660,
        "nm": "Plouha",
        "lat": 48.676498,
        "lon": -2.92842
    },
    {
        "id": 2986655,
        "nm": "Plouhinec",
        "lat": 48.01667,
        "lon": -4.48333
    },
    {
        "id": 2986653,
        "nm": "Plouigneau",
        "lat": 48.566669,
        "lon": -3.7
    },
    {
        "id": 2986652,
        "nm": "Plouisy",
        "lat": 48.578171,
        "lon": -3.18434
    },
    {
        "id": 2986649,
        "nm": "Ploumagoar",
        "lat": 48.54509,
        "lon": -3.13233
    },
    {
        "id": 2986647,
        "nm": "Ploumilliau",
        "lat": 48.683331,
        "lon": -3.51667
    },
    {
        "id": 2986640,
        "nm": "Plounevez-Lochrist",
        "lat": 48.616669,
        "lon": -4.21667
    },
    {
        "id": 2986633,
        "nm": "Plourin-les-Morlaix",
        "lat": 48.533329,
        "lon": -3.78333
    },
    {
        "id": 2986632,
        "nm": "Plourivo",
        "lat": 48.745499,
        "lon": -3.07075
    },
    {
        "id": 2986629,
        "nm": "Plouvien",
        "lat": 48.533329,
        "lon": -4.45
    },
    {
        "id": 2986628,
        "nm": "Plouvorn",
        "lat": 48.583328,
        "lon": -4.03333
    },
    {
        "id": 2986626,
        "nm": "Plouzane",
        "lat": 48.383331,
        "lon": -4.61667
    },
    {
        "id": 2986620,
        "nm": "Plozevet",
        "lat": 47.98333,
        "lon": -4.41667
    },
    {
        "id": 2986616,
        "nm": "Pluguffan",
        "lat": 47.98333,
        "lon": -4.18333
    },
    {
        "id": 2986611,
        "nm": "Plumelec",
        "lat": 47.83754,
        "lon": -2.63988
    },
    {
        "id": 2986610,
        "nm": "Plumeliau",
        "lat": 47.957691,
        "lon": -2.97494
    },
    {
        "id": 2986608,
        "nm": "Plumergat",
        "lat": 47.741341,
        "lon": -2.91501
    },
    {
        "id": 2986601,
        "nm": "Pluneret",
        "lat": 47.675251,
        "lon": -2.95782
    },
    {
        "id": 2986593,
        "nm": "Pluvigner",
        "lat": 47.776272,
        "lon": -3.01013
    },
    {
        "id": 2986585,
        "nm": "Podensac",
        "lat": 44.650379,
        "lon": -0.35508
    },
    {
        "id": 2986546,
        "nm": "Poilly-lez-Gien",
        "lat": 47.677238,
        "lon": 2.59743
    },
    {
        "id": 2986524,
        "nm": "Poisat",
        "lat": 45.15863,
        "lon": 5.76188
    },
    {
        "id": 2986501,
        "nm": "Poissy",
        "lat": 48.92902,
        "lon": 2.04952
    },
    {
        "id": 2986499,
        "nm": "Poisy",
        "lat": 45.923061,
        "lon": 6.06435
    },
    {
        "id": 2986495,
        "nm": "Poitiers",
        "lat": 46.583328,
        "lon": 0.33333
    },
    {
        "id": 2986486,
        "nm": "Poix-de-Picardie",
        "lat": 49.783329,
        "lon": 1.98333
    },
    {
        "id": 2986484,
        "nm": "Poix-du-Nord",
        "lat": 50.18927,
        "lon": 3.60956
    },
    {
        "id": 2986472,
        "nm": "Polignac",
        "lat": 45.0709,
        "lon": 3.86031
    },
    {
        "id": 2986467,
        "nm": "Poligny",
        "lat": 46.83712,
        "lon": 5.70504
    },
    {
        "id": 2986460,
        "nm": "Pollestres",
        "lat": 42.641998,
        "lon": 2.87116
    },
    {
        "id": 2986457,
        "nm": "Polliat",
        "lat": 46.248489,
        "lon": 5.12658
    },
    {
        "id": 2986434,
        "nm": "Pomerols",
        "lat": 43.391392,
        "lon": 3.49944
    },
    {
        "id": 2986408,
        "nm": "Pommeuse",
        "lat": 48.816669,
        "lon": 3.01667
    },
    {
        "id": 2986395,
        "nm": "Pommiers",
        "lat": 45.95594,
        "lon": 4.69353
    },
    {
        "id": 2986389,
        "nm": "Pompaire",
        "lat": 46.607269,
        "lon": -0.23237
    },
    {
        "id": 2986385,
        "nm": "Pompey",
        "lat": 48.766529,
        "lon": 6.12162
    },
    {
        "id": 2986376,
        "nm": "Pompignac",
        "lat": 44.851139,
        "lon": -0.43704
    },
    {
        "id": 2986370,
        "nm": "Pomponne",
        "lat": 48.881302,
        "lon": 2.68232
    },
    {
        "id": 2986335,
        "nm": "Pons",
        "lat": 45.57988,
        "lon": -0.54783
    },
    {
        "id": 2986307,
        "nm": "Pont-a-Marcq",
        "lat": 50.522129,
        "lon": 3.11441
    },
    {
        "id": 2986306,
        "nm": "Pont-a-Mousson",
        "lat": 48.90786,
        "lon": 6.0589
    },
    {
        "id": 2986285,
        "nm": "Pont-a-Vendin",
        "lat": 50.473579,
        "lon": 2.88884
    },
    {
        "id": 2986294,
        "nm": "Pont-Audemer",
        "lat": 49.349998,
        "lon": 0.51667
    },
    {
        "id": 2986286,
        "nm": "Pont-Aven",
        "lat": 47.849998,
        "lon": -3.75
    },
    {
        "id": 2986257,
        "nm": "Pont-de-Cheruy",
        "lat": 45.751659,
        "lon": 5.18488
    },
    {
        "id": 2986248,
        "nm": "Pont-de-Larn",
        "lat": 43.50412,
        "lon": 2.40786
    },
    {
        "id": 2986237,
        "nm": "Pont-de-Roide",
        "lat": 47.387379,
        "lon": 6.7684
    },
    {
        "id": 2986227,
        "nm": "Pont-de-Vaux",
        "lat": 46.431702,
        "lon": 4.94012
    },
    {
        "id": 2986220,
        "nm": "Pont-du-Casse",
        "lat": 44.228668,
        "lon": 0.67924
    },
    {
        "id": 2986219,
        "nm": "Pont-du-Chateau",
        "lat": 45.800781,
        "lon": 3.25008
    },
    {
        "id": 2986191,
        "nm": "Pont-Eveque",
        "lat": 45.526909,
        "lon": 4.91432
    },
    {
        "id": 2986109,
        "nm": "Pont-Saint-Esprit",
        "lat": 44.25494,
        "lon": 4.64736
    },
    {
        "id": 2986106,
        "nm": "Pont-Saint-Martin",
        "lat": 47.123379,
        "lon": -1.58455
    },
    {
        "id": 2986104,
        "nm": "Pont-Saint-Vincent",
        "lat": 48.602982,
        "lon": 6.09942
    },
    {
        "id": 2986111,
        "nm": "Pont-Sainte-Marie",
        "lat": 48.318481,
        "lon": 4.09447
    },
    {
        "id": 2986110,
        "nm": "Pont-Sainte-Maxence",
        "lat": 49.301682,
        "lon": 2.60467
    },
    {
        "id": 2986102,
        "nm": "Pont-Scorff",
        "lat": 47.833431,
        "lon": -3.40251
    },
    {
        "id": 2986095,
        "nm": "Pont-sur-Sambre",
        "lat": 50.221951,
        "lon": 3.84693
    },
    {
        "id": 2986092,
        "nm": "Pont-sur-Yonne",
        "lat": 48.28297,
        "lon": 3.20198
    },
    {
        "id": 2986313,
        "nm": "Pontacq",
        "lat": 43.183331,
        "lon": -0.11667
    },
    {
        "id": 2986302,
        "nm": "Pontarlier",
        "lat": 46.903469,
        "lon": 6.35542
    },
    {
        "id": 3024195,
        "nm": "Pontault-Combault",
        "lat": 48.79813,
        "lon": 2.60676
    },
    {
        "id": 2986279,
        "nm": "Pontcarre",
        "lat": 48.797722,
        "lon": 2.70508
    },
    {
        "id": 2986275,
        "nm": "Pontcharra",
        "lat": 45.432899,
        "lon": 6.01424
    },
    {
        "id": 2986274,
        "nm": "Pontcharra-sur-Turdine",
        "lat": 45.877399,
        "lon": 4.48993
    },
    {
        "id": 2986271,
        "nm": "Pontchateau",
        "lat": 47.437969,
        "lon": -2.09011
    },
    {
        "id": 2986204,
        "nm": "Ponteilla",
        "lat": 42.625938,
        "lon": 2.81335
    },
    {
        "id": 2986178,
        "nm": "Ponthierry",
        "lat": 48.533661,
        "lon": 2.54419
    },
    {
        "id": 2986160,
        "nm": "Pontivy",
        "lat": 48.066669,
        "lon": -2.98333
    },
    {
        "id": 2986140,
        "nm": "Pontoise",
        "lat": 49.049999,
        "lon": 2.1
    },
    {
        "id": 2986136,
        "nm": "Pontorson",
        "lat": 48.553162,
        "lon": -1.50754
    },
    {
        "id": 2986127,
        "nm": "Pontpoint",
        "lat": 49.299999,
        "lon": 2.65
    },
    {
        "id": 2986077,
        "nm": "Porcelette",
        "lat": 49.15538,
        "lon": 6.6581
    },
    {
        "id": 2986071,
        "nm": "Porcheville",
        "lat": 48.972542,
        "lon": 1.77973
    },
    {
        "id": 2986066,
        "nm": "Pordic",
        "lat": 48.570511,
        "lon": -2.81783
    },
    {
        "id": 2986060,
        "nm": "Pornic",
        "lat": 47.112049,
        "lon": -2.08888
    },
    {
        "id": 2986059,
        "nm": "Pornichet",
        "lat": 47.266819,
        "lon": -2.33794
    },
    {
        "id": 2986032,
        "nm": "Port-Brillet",
        "lat": 48.11314,
        "lon": -0.9708
    },
    {
        "id": 2986025,
        "nm": "Port-de-Bouc",
        "lat": 43.40657,
        "lon": 4.9809
    },
    {
        "id": 2985999,
        "nm": "Port-en-Bessin-Huppain",
        "lat": 49.344601,
        "lon": -0.75557
    },
    {
        "id": 2985968,
        "nm": "Port-la-Nouvelle",
        "lat": 43.019909,
        "lon": 3.04366
    },
    {
        "id": 2985963,
        "nm": "Port-Louis",
        "lat": 47.707039,
        "lon": -3.35484
    },
    {
        "id": 2985934,
        "nm": "Port-Saint-Louis-du-Rhone",
        "lat": 43.387341,
        "lon": 4.82609
    },
    {
        "id": 2985932,
        "nm": "Port-Saint-Pere",
        "lat": 47.132938,
        "lon": -1.7485
    },
    {
        "id": 2985937,
        "nm": "Port-Sainte-Foy-et-Ponchapt",
        "lat": 44.833328,
        "lon": 0.2
    },
    {
        "id": 2985936,
        "nm": "Port-Sainte-Marie",
        "lat": 44.251579,
        "lon": 0.39134
    },
    {
        "id": 2985929,
        "nm": "Port-sur-Saone",
        "lat": 47.68774,
        "lon": 6.05011
    },
    {
        "id": 2985987,
        "nm": "Portes-les-Valence",
        "lat": 44.873699,
        "lon": 4.881
    },
    {
        "id": 2985982,
        "nm": "Portet-sur-Garonne",
        "lat": 43.523331,
        "lon": 1.40652
    },
    {
        "id": 2985983,
        "nm": "Portets",
        "lat": 44.696789,
        "lon": -0.42452
    },
    {
        "id": 2985972,
        "nm": "Portiragnes",
        "lat": 43.3046,
        "lon": 3.33365
    },
    {
        "id": 2985947,
        "nm": "Porto-Vecchio",
        "lat": 41.591011,
        "lon": 9.27947
    },
    {
        "id": 2985925,
        "nm": "Portvendres",
        "lat": 42.517921,
        "lon": 3.10553
    },
    {
        "id": 2985893,
        "nm": "Pouance",
        "lat": 47.741669,
        "lon": -1.17366
    },
    {
        "id": 2985865,
        "nm": "Pougues-les-Eaux",
        "lat": 47.07518,
        "lon": 3.1015
    },
    {
        "id": 2985849,
        "nm": "Pouillon",
        "lat": 43.604801,
        "lon": -0.99947
    },
    {
        "id": 2985833,
        "nm": "Pouilly-sous-Charlieu",
        "lat": 46.14566,
        "lon": 4.1089
    },
    {
        "id": 2985807,
        "nm": "Pouldreuzic",
        "lat": 47.950001,
        "lon": -4.36667
    },
    {
        "id": 2985778,
        "nm": "Poulx",
        "lat": 43.907982,
        "lon": 4.41629
    },
    {
        "id": 2985751,
        "nm": "Pourrieres",
        "lat": 43.506111,
        "lon": 5.73452
    },
    {
        "id": 2985738,
        "nm": "Poussan",
        "lat": 43.489441,
        "lon": 3.67083
    },
    {
        "id": 2985708,
        "nm": "Pouzauges",
        "lat": 46.779411,
        "lon": -0.83619
    },
    {
        "id": 2985653,
        "nm": "Prades",
        "lat": 42.616669,
        "lon": 2.43333
    },
    {
        "id": 2985641,
        "nm": "Prades-le-Lez",
        "lat": 43.69754,
        "lon": 3.86463
    },
    {
        "id": 2985632,
        "nm": "Pradines",
        "lat": 44.48341,
        "lon": 1.40105
    },
    {
        "id": 2985547,
        "nm": "Prayssac",
        "lat": 44.504398,
        "lon": 1.18862
    },
    {
        "id": 2985491,
        "nm": "Pre-en-Pail",
        "lat": 48.45993,
        "lon": -0.19814
    },
    {
        "id": 2985512,
        "nm": "Precigne",
        "lat": 47.766918,
        "lon": -0.32491
    },
    {
        "id": 2985498,
        "nm": "Precy-sur-Oise",
        "lat": 49.20779,
        "lon": 2.37266
    },
    {
        "id": 2985475,
        "nm": "Preignac",
        "lat": 44.584381,
        "lon": -0.29422
    },
    {
        "id": 2985462,
        "nm": "Premery",
        "lat": 47.169521,
        "lon": 3.32743
    },
    {
        "id": 2985461,
        "nm": "Premesques",
        "lat": 50.65572,
        "lon": 2.95162
    },
    {
        "id": 2985455,
        "nm": "Premilhat",
        "lat": 46.316669,
        "lon": 2.53333
    },
    {
        "id": 2985318,
        "nm": "Prigonrieux",
        "lat": 44.854511,
        "lon": 0.40275
    },
    {
        "id": 2985304,
        "nm": "Pringy",
        "lat": 48.51815,
        "lon": 2.56333
    },
    {
        "id": 2985305,
        "nm": "Pringy",
        "lat": 45.94622,
        "lon": 6.12608
    },
    {
        "id": 2985302,
        "nm": "Prinquiau",
        "lat": 47.362148,
        "lon": -2.00952
    },
    {
        "id": 2985290,
        "nm": "Privas",
        "lat": 44.73333,
        "lon": 4.6
    },
    {
        "id": 2985266,
        "nm": "Propriano",
        "lat": 41.675251,
        "lon": 8.90302
    },
    {
        "id": 2985251,
        "nm": "Prouvy",
        "lat": 50.317928,
        "lon": 3.45096
    },
    {
        "id": 2985231,
        "nm": "Proville",
        "lat": 50.161369,
        "lon": 3.20629
    },
    {
        "id": 2985230,
        "nm": "Provin",
        "lat": 50.514301,
        "lon": 2.90794
    },
    {
        "id": 2985229,
        "nm": "Provins",
        "lat": 48.549999,
        "lon": 3.3
    },
    {
        "id": 2985196,
        "nm": "Prunelli-di-Fiumorbo",
        "lat": 42.010471,
        "lon": 9.32473
    },
    {
        "id": 2985177,
        "nm": "Pruniers-en-Sologne",
        "lat": 47.316669,
        "lon": 1.66667
    },
    {
        "id": 2985163,
        "nm": "Publier",
        "lat": 46.38773,
        "lon": 6.54356
    },
    {
        "id": 2985143,
        "nm": "Puget-sur-Argens",
        "lat": 43.450001,
        "lon": 6.68333
    },
    {
        "id": 2985141,
        "nm": "Puget-Ville",
        "lat": 43.28944,
        "lon": 6.13612
    },
    {
        "id": 2985137,
        "nm": "Pugnac",
        "lat": 45.081902,
        "lon": -0.49618
    },
    {
        "id": 2985128,
        "nm": "Puilboreau",
        "lat": 46.186199,
        "lon": -1.11798
    },
    {
        "id": 2985118,
        "nm": "Puiseaux",
        "lat": 48.092339,
        "lon": 2.05968
    },
    {
        "id": 2985107,
        "nm": "Puiseux-en-France",
        "lat": 49.055519,
        "lon": 2.50035
    },
    {
        "id": 2985096,
        "nm": "Puisserguier",
        "lat": 43.367668,
        "lon": 3.04047
    },
    {
        "id": 2985076,
        "nm": "Pujaut",
        "lat": 44.00404,
        "lon": 4.77575
    },
    {
        "id": 2985073,
        "nm": "Pujols",
        "lat": 44.394241,
        "lon": 0.6881
    },
    {
        "id": 2985064,
        "nm": "Pulnoy",
        "lat": 48.702919,
        "lon": 6.25792
    },
    {
        "id": 2985061,
        "nm": "Pulversheim",
        "lat": 47.837528,
        "lon": 7.30119
    },
    {
        "id": 2985045,
        "nm": "Pusignan",
        "lat": 45.758141,
        "lon": 5.06724
    },
    {
        "id": 2985034,
        "nm": "Puteaux",
        "lat": 48.883411,
        "lon": 2.23894
    },
    {
        "id": 2984965,
        "nm": "Puy-Guillaume",
        "lat": 45.95985,
        "lon": 3.47143
    },
    {
        "id": 2984969,
        "nm": "Puygouzon",
        "lat": 43.900002,
        "lon": 2.16667
    },
    {
        "id": 2984952,
        "nm": "Puylaurens",
        "lat": 43.572021,
        "lon": 2.01227
    },
    {
        "id": 2984929,
        "nm": "Puymoyen",
        "lat": 45.616669,
        "lon": 0.18333
    },
    {
        "id": 2984874,
        "nm": "Quarouble",
        "lat": 50.386341,
        "lon": 3.62306
    },
    {
        "id": 2984799,
        "nm": "Querqueville",
        "lat": 49.66251,
        "lon": -1.69119
    },
    {
        "id": 2984787,
        "nm": "Quesnoy-sur-Deule",
        "lat": 50.713589,
        "lon": 2.99996
    },
    {
        "id": 2984783,
        "nm": "Quessoy",
        "lat": 48.422081,
        "lon": -2.66089
    },
    {
        "id": 2984781,
        "nm": "Questembert",
        "lat": 47.66296,
        "lon": -2.4522
    },
    {
        "id": 2984775,
        "nm": "Quetigny",
        "lat": 47.316669,
        "lon": 5.11667
    },
    {
        "id": 2984760,
        "nm": "Queven",
        "lat": 47.783329,
        "lon": -3.41667
    },
    {
        "id": 2984759,
        "nm": "Quevert",
        "lat": 48.46402,
        "lon": -2.08745
    },
    {
        "id": 2984741,
        "nm": "Quiberon",
        "lat": 47.484119,
        "lon": -3.11962
    },
    {
        "id": 2984728,
        "nm": "Quievrechain",
        "lat": 50.39172,
        "lon": 3.66815
    },
    {
        "id": 2984719,
        "nm": "Quillan",
        "lat": 42.87579,
        "lon": 2.18176
    },
    {
        "id": 2984701,
        "nm": "Quimper",
        "lat": 48,
        "lon": -4.1
    },
    {
        "id": 2984699,
        "nm": "Quimperle",
        "lat": 47.866669,
        "lon": -3.55
    },
    {
        "id": 2984697,
        "nm": "Quincampoix",
        "lat": 49.5271,
        "lon": 1.18848
    },
    {
        "id": 2984686,
        "nm": "Quincieux",
        "lat": 45.910358,
        "lon": 4.77824
    },
    {
        "id": 2984678,
        "nm": "Quincy-sous-Senart",
        "lat": 48.672939,
        "lon": 2.53419
    },
    {
        "id": 2984677,
        "nm": "Quincy-Voisins",
        "lat": 48.901138,
        "lon": 2.87559
    },
    {
        "id": 2984664,
        "nm": "Quinsac",
        "lat": 44.755348,
        "lon": -0.48697
    },
    {
        "id": 2984649,
        "nm": "Quintin",
        "lat": 48.403419,
        "lon": -2.9105
    },
    {
        "id": 2984643,
        "nm": "Quissac",
        "lat": 43.91341,
        "lon": 3.9992
    },
    {
        "id": 2984627,
        "nm": "Rabastens",
        "lat": 43.825119,
        "lon": 1.72382
    },
    {
        "id": 2984600,
        "nm": "Raches",
        "lat": 50.417061,
        "lon": 3.13635
    },
    {
        "id": 2984594,
        "nm": "Racquinghem",
        "lat": 50.692451,
        "lon": 2.35736
    },
    {
        "id": 2984552,
        "nm": "Raillencourt-Sainte-Olle",
        "lat": 50.183331,
        "lon": 3.16667
    },
    {
        "id": 2984548,
        "nm": "Raimbeaucourt",
        "lat": 50.434662,
        "lon": 3.09333
    },
    {
        "id": 2984537,
        "nm": "Raismes",
        "lat": 50.383331,
        "lon": 3.48333
    },
    {
        "id": 2984521,
        "nm": "Ramatuelle",
        "lat": 43.216961,
        "lon": 6.61137
    },
    {
        "id": 2984516,
        "nm": "Rambervillers",
        "lat": 48.3424,
        "lon": 6.6358
    },
    {
        "id": 2984513,
        "nm": "Rambouillet",
        "lat": 48.650002,
        "lon": 1.83333
    },
    {
        "id": 2984495,
        "nm": "Ramonchamp",
        "lat": 47.894299,
        "lon": 6.74171
    },
    {
        "id": 2984493,
        "nm": "Ramonville-Saint-Agne",
        "lat": 43.546181,
        "lon": 1.47491
    },
    {
        "id": 2984438,
        "nm": "Rang-du-Fliers",
        "lat": 50.41708,
        "lon": 1.64431
    },
    {
        "id": 2984420,
        "nm": "Rantigny",
        "lat": 49.327579,
        "lon": 2.44244
    },
    {
        "id": 2984417,
        "nm": "Ranville",
        "lat": 49.230709,
        "lon": -0.2556
    },
    {
        "id": 2984299,
        "nm": "Realmont",
        "lat": 43.777538,
        "lon": 2.18885
    },
    {
        "id": 2984284,
        "nm": "Rebais",
        "lat": 48.84721,
        "lon": 3.23232
    },
    {
        "id": 2984210,
        "nm": "Recquignies",
        "lat": 50.283958,
        "lon": 4.03722
    },
    {
        "id": 2984198,
        "nm": "Redene",
        "lat": 47.849998,
        "lon": -3.46667
    },
    {
        "id": 2984195,
        "nm": "Redessan",
        "lat": 43.831169,
        "lon": 4.49771
    },
    {
        "id": 2984193,
        "nm": "Reding",
        "lat": 48.75177,
        "lon": 7.10747
    },
    {
        "id": 2984192,
        "nm": "Redon",
        "lat": 47.650002,
        "lon": -2.08333
    },
    {
        "id": 2984140,
        "nm": "Rehon",
        "lat": 49.504768,
        "lon": 5.74755
    },
    {
        "id": 2984136,
        "nm": "Reichshoffen",
        "lat": 48.932869,
        "lon": 7.66561
    },
    {
        "id": 2984135,
        "nm": "Reichstett",
        "lat": 48.64856,
        "lon": 7.75455
    },
    {
        "id": 2984127,
        "nm": "Reignier-Esery",
        "lat": 46.133331,
        "lon": 6.26667
    },
    {
        "id": 2984114,
        "nm": "Reims",
        "lat": 49.25,
        "lon": 4.03333
    },
    {
        "id": 2984060,
        "nm": "Remilly",
        "lat": 49.01218,
        "lon": 6.39583
    },
    {
        "id": 2984050,
        "nm": "Remiremont",
        "lat": 48.01754,
        "lon": 6.5882
    },
    {
        "id": 2984037,
        "nm": "Remoulins",
        "lat": 43.939491,
        "lon": 4.56798
    },
    {
        "id": 2984031,
        "nm": "Remy",
        "lat": 49.433331,
        "lon": 2.71667
    },
    {
        "id": 2984025,
        "nm": "Renage",
        "lat": 45.335289,
        "lon": 5.48528
    },
    {
        "id": 2984024,
        "nm": "Renaison",
        "lat": 46.051781,
        "lon": 3.92568
    },
    {
        "id": 2984012,
        "nm": "Renaze",
        "lat": 47.7934,
        "lon": -1.05437
    },
    {
        "id": 2984005,
        "nm": "Renescure",
        "lat": 50.727539,
        "lon": 2.36801
    },
    {
        "id": 2983990,
        "nm": "Rennes",
        "lat": 48.11198,
        "lon": -1.67429
    },
    {
        "id": 2983942,
        "nm": "Replonges",
        "lat": 46.311111,
        "lon": 4.87964
    },
    {
        "id": 2983929,
        "nm": "Requista",
        "lat": 44.033249,
        "lon": 2.53554
    },
    {
        "id": 2983891,
        "nm": "Rethel",
        "lat": 49.51667,
        "lon": 4.36667
    },
    {
        "id": 2983885,
        "nm": "Retiers",
        "lat": 47.913921,
        "lon": -1.37967
    },
    {
        "id": 2983879,
        "nm": "Retournac",
        "lat": 45.206291,
        "lon": 4.03554
    },
    {
        "id": 2983871,
        "nm": "Rety",
        "lat": 50.799999,
        "lon": 1.76667
    },
    {
        "id": 2983856,
        "nm": "Reuilly",
        "lat": 47.084759,
        "lon": 2.04305
    },
    {
        "id": 2983833,
        "nm": "Revel",
        "lat": 43.458118,
        "lon": 2.00469
    },
    {
        "id": 2983812,
        "nm": "Revigny-sur-Ornain",
        "lat": 48.830158,
        "lon": 4.98558
    },
    {
        "id": 2983806,
        "nm": "Revin",
        "lat": 49.940392,
        "lon": 4.63503
    },
    {
        "id": 2983779,
        "nm": "Reyrieux",
        "lat": 45.93306,
        "lon": 4.82394
    },
    {
        "id": 2983770,
        "nm": "Reze",
        "lat": 47.181438,
        "lon": -1.54965
    },
    {
        "id": 2983761,
        "nm": "Rhinau",
        "lat": 48.318089,
        "lon": 7.70613
    },
    {
        "id": 2983735,
        "nm": "Riaille",
        "lat": 47.517979,
        "lon": -1.29404
    },
    {
        "id": 2983732,
        "nm": "Rians",
        "lat": 43.60659,
        "lon": 5.75589
    },
    {
        "id": 2983730,
        "nm": "Riantec",
        "lat": 47.71093,
        "lon": -3.31629
    },
    {
        "id": 2983705,
        "nm": "Ribeauville",
        "lat": 48.195099,
        "lon": 7.31938
    },
    {
        "id": 2983699,
        "nm": "Ribemont",
        "lat": 49.795399,
        "lon": 3.45893
    },
    {
        "id": 2983696,
        "nm": "Riberac",
        "lat": 45.25,
        "lon": 0.33333
    },
    {
        "id": 2983667,
        "nm": "Richardmenil",
        "lat": 48.598511,
        "lon": 6.16992
    },
    {
        "id": 2983656,
        "nm": "Richebourg-lAvoue",
        "lat": 50.569988,
        "lon": 2.74884
    },
    {
        "id": 2983652,
        "nm": "Richelieu",
        "lat": 47.013889,
        "lon": 0.32406
    },
    {
        "id": 2983648,
        "nm": "Richemont",
        "lat": 49.276901,
        "lon": 6.16268
    },
    {
        "id": 2983637,
        "nm": "Richwiller",
        "lat": 47.77948,
        "lon": 7.28225
    },
    {
        "id": 2983631,
        "nm": "Riec-sur-Belon",
        "lat": 47.833328,
        "lon": -3.7
    },
    {
        "id": 2983629,
        "nm": "Riedisheim",
        "lat": 47.74757,
        "lon": 7.36665
    },
    {
        "id": 2983606,
        "nm": "Rieumes",
        "lat": 43.41143,
        "lon": 1.11702
    },
    {
        "id": 2983603,
        "nm": "Rieupeyroux",
        "lat": 44.307991,
        "lon": 2.23819
    },
    {
        "id": 2983590,
        "nm": "Rieux",
        "lat": 47.597809,
        "lon": -2.10828
    },
    {
        "id": 2983582,
        "nm": "Rieux-Minervois",
        "lat": 43.28194,
        "lon": 2.58687
    },
    {
        "id": 2983591,
        "nm": "Rieux-Volvestre",
        "lat": 43.25,
        "lon": 1.2
    },
    {
        "id": 2983542,
        "nm": "Rilhac-Rancon",
        "lat": 45.900002,
        "lon": 1.31667
    },
    {
        "id": 2983536,
        "nm": "Rillieux-la-Pape",
        "lat": 45.816669,
        "lon": 4.9
    },
    {
        "id": 2983499,
        "nm": "Rinxent",
        "lat": 50.80714,
        "lon": 1.72899
    },
    {
        "id": 2983489,
        "nm": "Riom",
        "lat": 45.900002,
        "lon": 3.11667
    },
    {
        "id": 2983487,
        "nm": "Riom-es-Montagnes",
        "lat": 45.283329,
        "lon": 2.66667
    },
    {
        "id": 2983485,
        "nm": "Rion-des-Landes",
        "lat": 43.93449,
        "lon": -0.92388
    },
    {
        "id": 2983482,
        "nm": "Riorges",
        "lat": 46.04179,
        "lon": 4.04966
    },
    {
        "id": 2983440,
        "nm": "Ris-Orangis",
        "lat": 48.6511,
        "lon": 2.41406
    },
    {
        "id": 2983408,
        "nm": "Rive-de-Gier",
        "lat": 45.53067,
        "lon": 4.62131
    },
    {
        "id": 2983397,
        "nm": "Rivery",
        "lat": 49.903278,
        "lon": 2.32235
    },
    {
        "id": 2983395,
        "nm": "Rives",
        "lat": 45.355049,
        "lon": 5.49926
    },
    {
        "id": 2983393,
        "nm": "Rivesaltes",
        "lat": 42.769451,
        "lon": 2.87239
    },
    {
        "id": 2983382,
        "nm": "Rivieres",
        "lat": 45.752949,
        "lon": 0.36128
    },
    {
        "id": 2983369,
        "nm": "Rixheim",
        "lat": 47.7514,
        "lon": 7.40091
    },
    {
        "id": 2983362,
        "nm": "Roanne",
        "lat": 46.033329,
        "lon": 4.06667
    },
    {
        "id": 2983338,
        "nm": "Robion",
        "lat": 43.847069,
        "lon": 5.10975
    },
    {
        "id": 2983332,
        "nm": "Rocbaron",
        "lat": 43.304489,
        "lon": 6.09059
    },
    {
        "id": 2983251,
        "nm": "Roche-la-Moliere",
        "lat": 45.434078,
        "lon": 4.32276
    },
    {
        "id": 2983291,
        "nm": "Rochechouart",
        "lat": 45.816669,
        "lon": 0.81667
    },
    {
        "id": 2983287,
        "nm": "Rochecorbon",
        "lat": 47.41658,
        "lon": 0.75521
    },
    {
        "id": 2983276,
        "nm": "Rochefort",
        "lat": 45.933331,
        "lon": -0.98333
    },
    {
        "id": 2983268,
        "nm": "Rochefort-du-Gard",
        "lat": 43.976521,
        "lon": 4.69023
    },
    {
        "id": 2983262,
        "nm": "Rochefort-sur-Loire",
        "lat": 47.357052,
        "lon": -0.65696
    },
    {
        "id": 2983246,
        "nm": "Rochemaure",
        "lat": 44.587471,
        "lon": 4.70507
    },
    {
        "id": 2983221,
        "nm": "Rocheserviere",
        "lat": 46.937649,
        "lon": -1.51142
    },
    {
        "id": 2983174,
        "nm": "Rocquencourt",
        "lat": 48.83783,
        "lon": 2.10228
    },
    {
        "id": 2983165,
        "nm": "Rocroi",
        "lat": 49.926102,
        "lon": 4.5222
    },
    {
        "id": 2983154,
        "nm": "Rodez",
        "lat": 44.352581,
        "lon": 2.57338
    },
    {
        "id": 2983152,
        "nm": "Rodilhan",
        "lat": 43.827251,
        "lon": 4.43088
    },
    {
        "id": 2983144,
        "nm": "Roeulx",
        "lat": 50.299999,
        "lon": 3.33333
    },
    {
        "id": 2983141,
        "nm": "Roeze-sur-Sarthe",
        "lat": 47.895458,
        "lon": 0.06723
    },
    {
        "id": 2983130,
        "nm": "Rognac",
        "lat": 43.48761,
        "lon": 5.23387
    },
    {
        "id": 2983127,
        "nm": "Rognes",
        "lat": 43.664181,
        "lon": 5.34801
    },
    {
        "id": 2983117,
        "nm": "Rognonas",
        "lat": 43.899929,
        "lon": 4.80369
    },
    {
        "id": 2983095,
        "nm": "Rohrbach-les-Bitche",
        "lat": 49.045158,
        "lon": 7.26588
    },
    {
        "id": 2983083,
        "nm": "Roiffieux",
        "lat": 45.226471,
        "lon": 4.65502
    },
    {
        "id": 2983077,
        "nm": "Roisel",
        "lat": 49.947681,
        "lon": 3.09973
    },
    {
        "id": 2983074,
        "nm": "Roissy-en-Brie",
        "lat": 48.791592,
        "lon": 2.64747
    },
    {
        "id": 2983073,
        "nm": "Roissy-en-France",
        "lat": 49.004429,
        "lon": 2.51703
    },
    {
        "id": 2983050,
        "nm": "Romagnat",
        "lat": 45.728779,
        "lon": 3.09893
    },
    {
        "id": 2983026,
        "nm": "Romainville",
        "lat": 48.885399,
        "lon": 2.43482
    },
    {
        "id": 2983011,
        "nm": "Romans-sur-Isere",
        "lat": 45.046391,
        "lon": 5.0562
    },
    {
        "id": 2983005,
        "nm": "Rombas",
        "lat": 49.249111,
        "lon": 6.09405
    },
    {
        "id": 2982977,
        "nm": "Romille",
        "lat": 48.21619,
        "lon": -1.89229
    },
    {
        "id": 2982973,
        "nm": "Romilly-sur-Andelle",
        "lat": 49.331902,
        "lon": 1.26128
    },
    {
        "id": 2982972,
        "nm": "Romilly-sur-Seine",
        "lat": 48.510849,
        "lon": 3.72634
    },
    {
        "id": 2982967,
        "nm": "Romorantin-Lanthenay",
        "lat": 47.366669,
        "lon": 1.75
    },
    {
        "id": 2982951,
        "nm": "Ronchamp",
        "lat": 47.70063,
        "lon": 6.6359
    },
    {
        "id": 2982944,
        "nm": "Ronchin",
        "lat": 50.598831,
        "lon": 3.09056
    },
    {
        "id": 2982938,
        "nm": "Roncq",
        "lat": 50.7533,
        "lon": 3.12131
    },
    {
        "id": 2982890,
        "nm": "Roost-Warendin",
        "lat": 50.419201,
        "lon": 3.10374
    },
    {
        "id": 2982876,
        "nm": "Roquebrune-Cap-Martin",
        "lat": 43.76408,
        "lon": 7.48206
    },
    {
        "id": 2982875,
        "nm": "Roquebrune-sur-Argens",
        "lat": 43.433331,
        "lon": 6.63333
    },
    {
        "id": 2982873,
        "nm": "Roquecourbe",
        "lat": 43.664421,
        "lon": 2.29264
    },
    {
        "id": 2982863,
        "nm": "Roquefort",
        "lat": 44.035,
        "lon": -0.32323
    },
    {
        "id": 2982859,
        "nm": "Roquefort-la-Bedoule",
        "lat": 43.248829,
        "lon": 5.59015
    },
    {
        "id": 2982851,
        "nm": "Roquemaure",
        "lat": 44.049438,
        "lon": 4.7774
    },
    {
        "id": 2982836,
        "nm": "Roquettes",
        "lat": 43.49733,
        "lon": 1.36848
    },
    {
        "id": 2982835,
        "nm": "Roquevaire",
        "lat": 43.350208,
        "lon": 5.60414
    },
    {
        "id": 2982809,
        "nm": "Roscoff",
        "lat": 48.723808,
        "lon": -3.98709
    },
    {
        "id": 2982798,
        "nm": "Rosenau",
        "lat": 47.634708,
        "lon": 7.54099
    },
    {
        "id": 2982790,
        "nm": "Rosheim",
        "lat": 48.497101,
        "lon": 7.47105
    },
    {
        "id": 2982778,
        "nm": "Rosieres-aux-Salines",
        "lat": 48.592899,
        "lon": 6.33208
    },
    {
        "id": 2982775,
        "nm": "Rosieres-en-Santerre",
        "lat": 49.814339,
        "lon": 2.70095
    },
    {
        "id": 2982774,
        "nm": "Rosieres-pres-Troyes",
        "lat": 48.261822,
        "lon": 4.07396
    },
    {
        "id": 2982757,
        "nm": "Rosny-sous-Bois",
        "lat": 48.870171,
        "lon": 2.4991
    },
    {
        "id": 2982756,
        "nm": "Rosny-sur-Seine",
        "lat": 48.998081,
        "lon": 1.6313
    },
    {
        "id": 2982745,
        "nm": "Rosporden",
        "lat": 47.966671,
        "lon": -3.83333
    },
    {
        "id": 2982733,
        "nm": "Rosselange",
        "lat": 49.258209,
        "lon": 6.06975
    },
    {
        "id": 2982711,
        "nm": "Rostrenen",
        "lat": 48.236961,
        "lon": -3.31442
    },
    {
        "id": 2982682,
        "nm": "Rouans",
        "lat": 47.18322,
        "lon": -1.85929
    },
    {
        "id": 2982681,
        "nm": "Roubaix",
        "lat": 50.69421,
        "lon": 3.17456
    },
    {
        "id": 2982652,
        "nm": "Rouen",
        "lat": 49.44313,
        "lon": 1.09932
    },
    {
        "id": 2982636,
        "nm": "Rouffach",
        "lat": 47.957859,
        "lon": 7.30016
    },
    {
        "id": 2982615,
        "nm": "Rouge",
        "lat": 47.783669,
        "lon": -1.44763
    },
    {
        "id": 2982564,
        "nm": "Rouhling",
        "lat": 49.134499,
        "lon": 6.99429
    },
    {
        "id": 2982558,
        "nm": "Rouille",
        "lat": 46.420238,
        "lon": 0.04073
    },
    {
        "id": 2982556,
        "nm": "Rouillon",
        "lat": 48.00629,
        "lon": 0.13527
    },
    {
        "id": 2982536,
        "nm": "Roullet-Saint-Estephe",
        "lat": 45.583328,
        "lon": 0.05
    },
    {
        "id": 2982498,
        "nm": "Rousies",
        "lat": 50.27346,
        "lon": 4.00382
    },
    {
        "id": 2982472,
        "nm": "Rousset",
        "lat": 43.48307,
        "lon": 5.61959
    },
    {
        "id": 2982454,
        "nm": "Roussillon",
        "lat": 45.37302,
        "lon": 4.80725
    },
    {
        "id": 2982443,
        "nm": "Rousson",
        "lat": 44.19136,
        "lon": 4.14786
    },
    {
        "id": 2982383,
        "nm": "Rouvroy",
        "lat": 50.392471,
        "lon": 2.90396
    },
    {
        "id": 2982343,
        "nm": "Royan",
        "lat": 45.62846,
        "lon": -1.0281
    },
    {
        "id": 2982338,
        "nm": "Royat",
        "lat": 45.76379,
        "lon": 3.04954
    },
    {
        "id": 2982330,
        "nm": "Roye",
        "lat": 49.700378,
        "lon": 2.78959
    },
    {
        "id": 2982317,
        "nm": "Rozay-en-Brie",
        "lat": 48.683331,
        "lon": 2.95816
    },
    {
        "id": 2982287,
        "nm": "Ruaudin",
        "lat": 47.945091,
        "lon": 0.2676
    },
    {
        "id": 2982261,
        "nm": "Rue",
        "lat": 50.2715,
        "lon": 1.67163
    },
    {
        "id": 2982235,
        "nm": "Rueil-Malmaison",
        "lat": 48.876499,
        "lon": 2.18967
    },
    {
        "id": 2982234,
        "nm": "Ruelisheim",
        "lat": 47.823059,
        "lon": 7.3594
    },
    {
        "id": 2982231,
        "nm": "Ruelle-sur-Touvre",
        "lat": 45.683331,
        "lon": 0.23333
    },
    {
        "id": 2982217,
        "nm": "Ruffec",
        "lat": 46.02877,
        "lon": 0.19821
    },
    {
        "id": 2982200,
        "nm": "Rugles",
        "lat": 48.822121,
        "lon": 0.70979
    },
    {
        "id": 2982159,
        "nm": "Rumilly",
        "lat": 45.868729,
        "lon": 5.93652
    },
    {
        "id": 2982146,
        "nm": "Rungis",
        "lat": 48.746071,
        "lon": 2.35274
    },
    {
        "id": 2982143,
        "nm": "Ruoms",
        "lat": 44.45351,
        "lon": 4.34265
    },
    {
        "id": 2982130,
        "nm": "Rupt-sur-Moselle",
        "lat": 47.92271,
        "lon": 6.66291
    },
    {
        "id": 2982102,
        "nm": "Ruy",
        "lat": 45.587719,
        "lon": 5.3189
    },
    {
        "id": 2982076,
        "nm": "Sable-sur-Sarthe",
        "lat": 47.83765,
        "lon": -0.33294
    },
    {
        "id": 2982043,
        "nm": "Saclay",
        "lat": 48.732601,
        "lon": 2.16923
    },
    {
        "id": 2982029,
        "nm": "Sadirac",
        "lat": 44.781792,
        "lon": -0.41334
    },
    {
        "id": 2982023,
        "nm": "Saffre",
        "lat": 47.501431,
        "lon": -1.57856
    },
    {
        "id": 2981962,
        "nm": "Sailly-Labourse",
        "lat": 50.501202,
        "lon": 2.69708
    },
    {
        "id": 2981956,
        "nm": "Sailly-sur-la-Lys",
        "lat": 50.658199,
        "lon": 2.76872
    },
    {
        "id": 2981953,
        "nm": "Sain-Bel",
        "lat": 45.810699,
        "lon": 4.59815
    },
    {
        "id": 2981950,
        "nm": "Sainghin-en-Melantois",
        "lat": 50.58836,
        "lon": 3.16619
    },
    {
        "id": 2981949,
        "nm": "Sainghin-en-Weppes",
        "lat": 50.564072,
        "lon": 2.89804
    },
    {
        "id": 2981943,
        "nm": "Sains-du-Nord",
        "lat": 50.093769,
        "lon": 4.00898
    },
    {
        "id": 2981941,
        "nm": "Sains-en-Gohelle",
        "lat": 50.445122,
        "lon": 2.68301
    },
    {
        "id": 2981925,
        "nm": "Saint-Affrique",
        "lat": 43.95575,
        "lon": 2.88915
    },
    {
        "id": 2981908,
        "nm": "Saint-Agnant",
        "lat": 45.873539,
        "lon": -0.96119
    },
    {
        "id": 2981901,
        "nm": "Saint-Agreve",
        "lat": 45.00993,
        "lon": 4.39375
    },
    {
        "id": 2981898,
        "nm": "Saint-Aignan",
        "lat": 47.268921,
        "lon": 1.37614
    },
    {
        "id": 2981882,
        "nm": "Saint-Aigulin",
        "lat": 45.150002,
        "lon": -0.01667
    },
    {
        "id": 2981879,
        "nm": "Saint-Alban",
        "lat": 43.692699,
        "lon": 1.4102
    },
    {
        "id": 2981878,
        "nm": "Saint-Alban-Leysse",
        "lat": 45.583328,
        "lon": 5.95
    },
    {
        "id": 2981851,
        "nm": "Saint-Amand",
        "lat": 49.043381,
        "lon": -0.96491
    },
    {
        "id": 2981839,
        "nm": "Saint-Amand-les-Eaux",
        "lat": 50.447182,
        "lon": 3.43076
    },
    {
        "id": 2981837,
        "nm": "Saint-Amand-Montrond",
        "lat": 46.716671,
        "lon": 2.51667
    },
    {
        "id": 2981815,
        "nm": "Saint-Amarin",
        "lat": 47.873348,
        "lon": 7.03193
    },
    {
        "id": 2981810,
        "nm": "Saint-Ambroix",
        "lat": 44.25893,
        "lon": 4.19833
    },
    {
        "id": 2981808,
        "nm": "Saint-Ame",
        "lat": 48.02388,
        "lon": 6.66416
    },
    {
        "id": 2981805,
        "nm": "Saint-Amour",
        "lat": 46.436378,
        "lon": 5.34416
    },
    {
        "id": 2981791,
        "nm": "Saint-Andiol",
        "lat": 43.834839,
        "lon": 4.94453
    },
    {
        "id": 2981762,
        "nm": "Saint-Andre-de-Corcy",
        "lat": 45.9259,
        "lon": 4.95166
    },
    {
        "id": 2981758,
        "nm": "Saint-Andre-de-la-Marche",
        "lat": 47.099522,
        "lon": -0.99441
    },
    {
        "id": 2981783,
        "nm": "Saint-Andre-de-la-Roche",
        "lat": 43.73333,
        "lon": 7.28333
    },
    {
        "id": 2981746,
        "nm": "Saint-Andre-de-Sangonis",
        "lat": 43.64753,
        "lon": 3.50209
    },
    {
        "id": 2981745,
        "nm": "Saint-Andre-des-Eaux",
        "lat": 47.31461,
        "lon": -2.31105
    },
    {
        "id": 2981719,
        "nm": "Saint-Andre-le-Gaz",
        "lat": 45.549431,
        "lon": 5.53503
    },
    {
        "id": 2981716,
        "nm": "Saint-Andre-les-Vergers",
        "lat": 48.285271,
        "lon": 4.0521
    },
    {
        "id": 2981779,
        "nm": "Saint-Andre-lez-Lille",
        "lat": 50.666672,
        "lon": 3.05
    },
    {
        "id": 2981673,
        "nm": "Saint-Antoine-de-Breuilh",
        "lat": 44.833328,
        "lon": 0.16667
    },
    {
        "id": 2981655,
        "nm": "Saint-Apollinaire",
        "lat": 47.333328,
        "lon": 5.08333
    },
    {
        "id": 2981629,
        "nm": "Saint-Arnoult-en-Yvelines",
        "lat": 48.57111,
        "lon": 1.9395
    },
    {
        "id": 2981623,
        "nm": "Saint-Astier",
        "lat": 45.145821,
        "lon": 0.52898
    },
    {
        "id": 2981579,
        "nm": "Saint-Aubin-de-Medoc",
        "lat": 44.75,
        "lon": -0.71667
    },
    {
        "id": 2981565,
        "nm": "Saint-Aubin-du-Cormier",
        "lat": 48.25843,
        "lon": -1.40252
    },
    {
        "id": 2981551,
        "nm": "Saint-Aubin-le-Cloud",
        "lat": 46.65308,
        "lon": -0.35258
    },
    {
        "id": 2981547,
        "nm": "Saint-Aubin-les-Elbeuf",
        "lat": 49.3036,
        "lon": 1.01056
    },
    {
        "id": 2981521,
        "nm": "Saint-Aunes",
        "lat": 43.640831,
        "lon": 3.96583
    },
    {
        "id": 2981515,
        "nm": "Saint-Ave",
        "lat": 47.690849,
        "lon": -2.74648
    },
    {
        "id": 2981512,
        "nm": "Saint-Avertin",
        "lat": 47.363571,
        "lon": 0.73993
    },
    {
        "id": 2981492,
        "nm": "Saint-Avold",
        "lat": 49.102699,
        "lon": 6.70064
    },
    {
        "id": 2981488,
        "nm": "Saint-Ay",
        "lat": 47.858898,
        "lon": 1.75137
    },
    {
        "id": 2981481,
        "nm": "Saint-Baldoph",
        "lat": 45.5312,
        "lon": 5.95217
    },
    {
        "id": 2981408,
        "nm": "Saint-Benoit",
        "lat": 46.55315,
        "lon": 0.3419
    },
    {
        "id": 2981402,
        "nm": "Saint-Benoit-de-Carmaux",
        "lat": 44.050369,
        "lon": 2.12911
    },
    {
        "id": 2981393,
        "nm": "Saint-Benoit-sur-Loire",
        "lat": 47.805611,
        "lon": 2.31274
    },
    {
        "id": 2981309,
        "nm": "Saint-Bon-Tarentaise",
        "lat": 45.433731,
        "lon": 6.63686
    },
    {
        "id": 2981338,
        "nm": "Saint-Bonnet-de-Mure",
        "lat": 45.699581,
        "lon": 5.02026
    },
    {
        "id": 2981305,
        "nm": "Saint-Branchs",
        "lat": 47.226551,
        "lon": 0.77306
    },
    {
        "id": 2981304,
        "nm": "Saint-Brandan",
        "lat": 48.390079,
        "lon": -2.86875
    },
    {
        "id": 2981303,
        "nm": "Saint-Bres",
        "lat": 43.667419,
        "lon": 4.03105
    },
    {
        "id": 2981296,
        "nm": "Saint-Brevin-les-Pins",
        "lat": 47.25,
        "lon": -2.16667
    },
    {
        "id": 2981294,
        "nm": "Saint-Briac-sur-Mer",
        "lat": 48.621891,
        "lon": -2.13435
    },
    {
        "id": 2981284,
        "nm": "Saint-Brice-Courcelles",
        "lat": 49.26667,
        "lon": 3.98333
    },
    {
        "id": 2981285,
        "nm": "Saint-Brice-en-Cogles",
        "lat": 48.411572,
        "lon": -1.37019
    },
    {
        "id": 2981283,
        "nm": "Saint-Brice-sous-Foret",
        "lat": 49.00132,
        "lon": 2.35361
    },
    {
        "id": 2981280,
        "nm": "Saint-Brieuc",
        "lat": 48.51667,
        "lon": -2.78333
    },
    {
        "id": 2981263,
        "nm": "Saint-Calais",
        "lat": 47.9221,
        "lon": 0.74587
    },
    {
        "id": 2981259,
        "nm": "Saint-Cannat",
        "lat": 43.620892,
        "lon": 5.2969
    },
    {
        "id": 2981251,
        "nm": "Saint-Caprais-de-Bordeaux",
        "lat": 44.74786,
        "lon": -0.43192
    },
    {
        "id": 2981237,
        "nm": "Saint-Cast-le-Guildo",
        "lat": 48.63028,
        "lon": -2.25777
    },
    {
        "id": 2981228,
        "nm": "Saint-Cere",
        "lat": 44.857262,
        "lon": 1.89415
    },
    {
        "id": 2981227,
        "nm": "Saint-Cergues",
        "lat": 46.23349,
        "lon": 6.31954
    },
    {
        "id": 2981217,
        "nm": "Saint-Cezaire-sur-Siagne",
        "lat": 43.648842,
        "lon": 6.79384
    },
    {
        "id": 2981209,
        "nm": "Saint-Chamas",
        "lat": 43.549461,
        "lon": 5.03324
    },
    {
        "id": 2981206,
        "nm": "Saint-Chamond",
        "lat": 45.473652,
        "lon": 4.52541
    },
    {
        "id": 2981195,
        "nm": "Saint-Chef",
        "lat": 45.633839,
        "lon": 5.36518
    },
    {
        "id": 2981190,
        "nm": "Saint-Cheron",
        "lat": 48.554329,
        "lon": 2.12403
    },
    {
        "id": 2981183,
        "nm": "Saint-Chinian",
        "lat": 43.422379,
        "lon": 2.94643
    },
    {
        "id": 2981173,
        "nm": "Saint-Christol-les-Ales",
        "lat": 44.082561,
        "lon": 4.07506
    },
    {
        "id": 2981172,
        "nm": "Saint-Christoly-de-Blaye",
        "lat": 45.131779,
        "lon": -0.5076
    },
    {
        "id": 2981149,
        "nm": "Saint-Christophe-du-Bois",
        "lat": 47.030121,
        "lon": -0.94441
    },
    {
        "id": 2981146,
        "nm": "Saint-Christophe-du-Ligneron",
        "lat": 46.82478,
        "lon": -1.76586
    },
    {
        "id": 2981117,
        "nm": "Saint-Ciers-sur-Gironde",
        "lat": 45.288551,
        "lon": -0.60794
    },
    {
        "id": 2981087,
        "nm": "Saint-Clair-de-la-Tour",
        "lat": 45.573429,
        "lon": 5.48332
    },
    {
        "id": 2981085,
        "nm": "Saint-Clair-du-Rhone",
        "lat": 45.439091,
        "lon": 4.77178
    },
    {
        "id": 2981077,
        "nm": "Saint-Claude",
        "lat": 46.39164,
        "lon": 5.8643
    },
    {
        "id": 2981060,
        "nm": "Saint-Clement",
        "lat": 48.217239,
        "lon": 3.29609
    },
    {
        "id": 2981073,
        "nm": "Saint-Clement-de-Riviere",
        "lat": 43.683331,
        "lon": 3.83333
    },
    {
        "id": 2981041,
        "nm": "Saint-Cloud",
        "lat": 48.845982,
        "lon": 2.20289
    },
    {
        "id": 2981018,
        "nm": "Saint-Contest",
        "lat": 49.214008,
        "lon": -0.40221
    },
    {
        "id": 2981013,
        "nm": "Saint-Cosme-en-Vairais",
        "lat": 48.26667,
        "lon": 0.46667
    },
    {
        "id": 2981008,
        "nm": "Saint-Coulomb",
        "lat": 48.674648,
        "lon": -1.91092
    },
    {
        "id": 2980980,
        "nm": "Saint-Cyprien",
        "lat": 45.533749,
        "lon": 4.23311
    },
    {
        "id": 2980976,
        "nm": "Saint-Cyprien-Plage",
        "lat": 42.63229,
        "lon": 3.03333
    },
    {
        "id": 2980950,
        "nm": "Saint-Cyr-en-Val",
        "lat": 47.831821,
        "lon": 1.96672
    },
    {
        "id": 2980942,
        "nm": "Saint-Cyr-lEcole",
        "lat": 48.798649,
        "lon": 2.06814
    },
    {
        "id": 2980935,
        "nm": "Saint-Cyr-sur-Loire",
        "lat": 47.400002,
        "lon": 0.66667
    },
    {
        "id": 2980933,
        "nm": "Saint-Cyr-sur-Mer",
        "lat": 43.183521,
        "lon": 5.70914
    },
    {
        "id": 2980916,
        "nm": "Saint-Denis",
        "lat": 48.933331,
        "lon": 2.36667
    },
    {
        "id": 2980898,
        "nm": "Saint-Denis-de-Pile",
        "lat": 45,
        "lon": -0.2
    },
    {
        "id": 2980886,
        "nm": "Saint-Denis-en-Bugey",
        "lat": 45.948898,
        "lon": 5.32808
    },
    {
        "id": 2980885,
        "nm": "Saint-Denis-en-Val",
        "lat": 47.873211,
        "lon": 1.96601
    },
    {
        "id": 2980880,
        "nm": "Saint-Denis-les-Bourg",
        "lat": 46.202171,
        "lon": 5.18924
    },
    {
        "id": 2980856,
        "nm": "Saint-Didier",
        "lat": 44.004238,
        "lon": 5.11053
    },
    {
        "id": 2980836,
        "nm": "Saint-Didier-en-Velay",
        "lat": 45.302341,
        "lon": 4.27561
    },
    {
        "id": 2980830,
        "nm": "Saint-Didier-sur-Chalaronne",
        "lat": 46.177509,
        "lon": 4.81719
    },
    {
        "id": 2980827,
        "nm": "Saint-Die-des-Vosges",
        "lat": 48.283329,
        "lon": 6.95
    },
    {
        "id": 2980816,
        "nm": "Saint-Dizier",
        "lat": 48.633331,
        "lon": 4.95
    },
    {
        "id": 2980808,
        "nm": "Saint-Dolay",
        "lat": 47.544762,
        "lon": -2.15466
    },
    {
        "id": 2980801,
        "nm": "Saint-Doulchard",
        "lat": 47.10371,
        "lon": 2.352
    },
    {
        "id": 2980799,
        "nm": "Saint-Drezery",
        "lat": 43.729912,
        "lon": 3.9762
    },
    {
        "id": 2980636,
        "nm": "Saint-Egreve",
        "lat": 45.23333,
        "lon": 5.68333
    },
    {
        "id": 2980507,
        "nm": "Saint-Eloi",
        "lat": 46.973419,
        "lon": 3.22228
    },
    {
        "id": 2980492,
        "nm": "Saint-Eloy-les-Mines",
        "lat": 46.157928,
        "lon": 2.83623
    },
    {
        "id": 2980392,
        "nm": "Saint-Emilion",
        "lat": 44.883331,
        "lon": -0.15
    },
    {
        "id": 2980350,
        "nm": "Saint-Erblon",
        "lat": 48.018951,
        "lon": -1.65162
    },
    {
        "id": 2980317,
        "nm": "Saint-Estephe",
        "lat": 45.26252,
        "lon": -0.77237
    },
    {
        "id": 2980313,
        "nm": "Saint-Esteve",
        "lat": 42.711761,
        "lon": 2.8449
    },
    {
        "id": 2980291,
        "nm": "Saint-Etienne",
        "lat": 45.433331,
        "lon": 4.4
    },
    {
        "id": 2980283,
        "nm": "Saint-Etienne-au-Mont",
        "lat": 50.67794,
        "lon": 1.63084
    },
    {
        "id": 2980270,
        "nm": "Saint-Etienne-de-Crossey",
        "lat": 45.379139,
        "lon": 5.64527
    },
    {
        "id": 2980268,
        "nm": "Saint-Etienne-de-Fontbellon",
        "lat": 44.601749,
        "lon": 4.3858
    },
    {
        "id": 2980259,
        "nm": "Saint-Etienne-de-Montluc",
        "lat": 47.276901,
        "lon": -1.78072
    },
    {
        "id": 2980256,
        "nm": "Saint-Etienne-de-Saint-Geoirs",
        "lat": 45.33931,
        "lon": 5.3449
    },
    {
        "id": 2980246,
        "nm": "Saint-Etienne-de-Tulmont",
        "lat": 44.049999,
        "lon": 1.46667
    },
    {
        "id": 2980240,
        "nm": "Saint-Etienne-du-Bois",
        "lat": 46.287659,
        "lon": 5.29481
    },
    {
        "id": 2980238,
        "nm": "Saint-Etienne-du-Gres",
        "lat": 43.78112,
        "lon": 4.72163
    },
    {
        "id": 2980236,
        "nm": "Saint-Etienne-du-Rouvray",
        "lat": 49.377941,
        "lon": 1.10467
    },
    {
        "id": 2980219,
        "nm": "Saint-Etienne-les-Remiremont",
        "lat": 48.022869,
        "lon": 6.60868
    },
    {
        "id": 2980184,
        "nm": "Saint-Evarzec",
        "lat": 47.933331,
        "lon": -4.01667
    },
    {
        "id": 2980169,
        "nm": "Saint-Fargeau-Ponthierry",
        "lat": 48.557129,
        "lon": 2.5284
    },
    {
        "id": 2980113,
        "nm": "Saint-Florent-des-Bois",
        "lat": 46.593769,
        "lon": -1.3158
    },
    {
        "id": 2980109,
        "nm": "Saint-Florent-le-Vieil",
        "lat": 47.360691,
        "lon": -1.01515
    },
    {
        "id": 2980107,
        "nm": "Saint-Florent-sur-Cher",
        "lat": 46.995522,
        "lon": 2.25076
    },
    {
        "id": 2980111,
        "nm": "Saint-Florentin",
        "lat": 48.000568,
        "lon": 3.72489
    },
    {
        "id": 2980104,
        "nm": "Saint-Flour",
        "lat": 45.033329,
        "lon": 3.08333
    },
    {
        "id": 2980098,
        "nm": "Saint-Folquin",
        "lat": 50.944729,
        "lon": 2.12433
    },
    {
        "id": 2980097,
        "nm": "Saint-Fons",
        "lat": 45.708801,
        "lon": 4.86057
    },
    {
        "id": 2980080,
        "nm": "Saint-Francois",
        "lat": 46.415379,
        "lon": 3.90542
    },
    {
        "id": 2980059,
        "nm": "Saint-Fulgent",
        "lat": 46.852261,
        "lon": -1.17798
    },
    {
        "id": 2980052,
        "nm": "Saint-Galmier",
        "lat": 45.591991,
        "lon": 4.31743
    },
    {
        "id": 2980045,
        "nm": "Saint-Gaudens",
        "lat": 43.116669,
        "lon": 0.73333
    },
    {
        "id": 2980040,
        "nm": "Saint-Gaultier",
        "lat": 46.635181,
        "lon": 1.41289
    },
    {
        "id": 2980033,
        "nm": "Saint-Gely-du-Fesc",
        "lat": 43.692719,
        "lon": 3.80492
    },
    {
        "id": 2980029,
        "nm": "Saint-Genes-Champanelle",
        "lat": 45.719151,
        "lon": 3.01887
    },
    {
        "id": 2980012,
        "nm": "Saint-Genest-Lerpt",
        "lat": 45.44529,
        "lon": 4.33622
    },
    {
        "id": 2980011,
        "nm": "Saint-Genest-Malifaux",
        "lat": 45.342339,
        "lon": 4.41954
    },
    {
        "id": 2980004,
        "nm": "Saint-Genies-Bellevue",
        "lat": 43.68409,
        "lon": 1.48693
    },
    {
        "id": 2980002,
        "nm": "Saint-Genies-de-Malgoires",
        "lat": 43.950001,
        "lon": 4.21667
    },
    {
        "id": 2979985,
        "nm": "Saint-Genis-Laval",
        "lat": 45.69558,
        "lon": 4.7934
    },
    {
        "id": 2979984,
        "nm": "Saint-Genis-les-Ollieres",
        "lat": 45.757191,
        "lon": 4.72892
    },
    {
        "id": 2979983,
        "nm": "Saint-Genis-Pouilly",
        "lat": 46.243561,
        "lon": 6.02119
    },
    {
        "id": 2979979,
        "nm": "Saint-Genix-sur-Guiers",
        "lat": 45.599659,
        "lon": 5.63436
    },
    {
        "id": 2979976,
        "nm": "Saint-Geoire-en-Valdaine",
        "lat": 45.456989,
        "lon": 5.63416
    },
    {
        "id": 2979943,
        "nm": "Saint-Georges-de-Commiers",
        "lat": 45.03854,
        "lon": 5.70226
    },
    {
        "id": 2979941,
        "nm": "Saint-Georges-de-Didonne",
        "lat": 45.60342,
        "lon": -1.00487
    },
    {
        "id": 2979931,
        "nm": "Saint-Georges-de-Mons",
        "lat": 45.939941,
        "lon": 2.8406
    },
    {
        "id": 2979930,
        "nm": "Saint-Georges-de-Montaigu",
        "lat": 46.946548,
        "lon": -1.29262
    },
    {
        "id": 2979925,
        "nm": "Saint-Georges-de-Reneins",
        "lat": 46.060341,
        "lon": 4.7256
    },
    {
        "id": 2979921,
        "nm": "Saint-Georges-des-Coteaux",
        "lat": 45.76667,
        "lon": -0.71667
    },
    {
        "id": 2979920,
        "nm": "Saint-Georges-des-Groseillers",
        "lat": 48.769939,
        "lon": -0.56768
    },
    {
        "id": 2979901,
        "nm": "Saint-Georges-les-Baillargeaux",
        "lat": 46.67017,
        "lon": 0.40208
    },
    {
        "id": 2979893,
        "nm": "Saint-Georges-sur-Baulche",
        "lat": 47.800388,
        "lon": 3.53144
    },
    {
        "id": 2979892,
        "nm": "Saint-Georges-sur-Cher",
        "lat": 47.32996,
        "lon": 1.13261
    },
    {
        "id": 2979890,
        "nm": "Saint-Georges-sur-Eure",
        "lat": 48.41869,
        "lon": 1.3546
    },
    {
        "id": 2979885,
        "nm": "Saint-Georges-sur-Loire",
        "lat": 47.407921,
        "lon": -0.76194
    },
    {
        "id": 2979880,
        "nm": "Saint-Geours-de-Maremne",
        "lat": 43.689362,
        "lon": -1.22937
    },
    {
        "id": 2979873,
        "nm": "Saint-Gereon",
        "lat": 47.367741,
        "lon": -1.20262
    },
    {
        "id": 2979861,
        "nm": "Saint-Germain",
        "lat": 48.257359,
        "lon": 4.03264
    },
    {
        "id": 2979812,
        "nm": "Saint-Germain-des-Fosses",
        "lat": 46.20211,
        "lon": 3.43245
    },
    {
        "id": 2979796,
        "nm": "Saint-Germain-du-Corbeis",
        "lat": 48.42215,
        "lon": 0.06192
    },
    {
        "id": 2979791,
        "nm": "Saint-Germain-du-Puch",
        "lat": 44.849998,
        "lon": -0.31667
    },
    {
        "id": 2979790,
        "nm": "Saint-Germain-du-Puy",
        "lat": 47.099998,
        "lon": 2.48333
    },
    {
        "id": 2979784,
        "nm": "Saint-Germain-en-Cogles",
        "lat": 48.405312,
        "lon": -1.26369
    },
    {
        "id": 2979783,
        "nm": "Saint-Germain-en-Laye",
        "lat": 48.900002,
        "lon": 2.08333
    },
    {
        "id": 2979780,
        "nm": "Saint-Germain-la-Blanche-Herbe",
        "lat": 49.18327,
        "lon": -0.40426
    },
    {
        "id": 2979772,
        "nm": "Saint-Germain-Laprade",
        "lat": 45.03862,
        "lon": 3.97004
    },
    {
        "id": 2979770,
        "nm": "Saint-Germain-Laval",
        "lat": 48.399681,
        "lon": 2.99781
    },
    {
        "id": 2979755,
        "nm": "Saint-Germain-les-Arpajon",
        "lat": 48.597328,
        "lon": 2.26481
    },
    {
        "id": 2979752,
        "nm": "Saint-Germain-les-Corbeil",
        "lat": 48.622108,
        "lon": 2.48775
    },
    {
        "id": 2979731,
        "nm": "Saint-Germain-sur-Moine",
        "lat": 47.117458,
        "lon": -1.12223
    },
    {
        "id": 2979730,
        "nm": "Saint-Germain-sur-Morin",
        "lat": 48.882568,
        "lon": 2.85127
    },
    {
        "id": 2979699,
        "nm": "Saint-Gervais-la-Foret",
        "lat": 47.567051,
        "lon": 1.35493
    },
    {
        "id": 2979698,
        "nm": "Saint-Gervais-les-Bains",
        "lat": 45.892899,
        "lon": 6.71381
    },
    {
        "id": 2979680,
        "nm": "Saint-Gildas-des-Bois",
        "lat": 47.51622,
        "lon": -2.03659
    },
    {
        "id": 2979679,
        "nm": "Saint-Gilles",
        "lat": 43.676559,
        "lon": 4.43024
    },
    {
        "id": 2979673,
        "nm": "Saint-Gilles",
        "lat": 48.153809,
        "lon": -1.82477
    },
    {
        "id": 2979662,
        "nm": "Saint-Gilles-Croix-de-Vie",
        "lat": 46.683331,
        "lon": -1.93333
    },
    {
        "id": 2979657,
        "nm": "Saint-Girons",
        "lat": 42.98333,
        "lon": 1.15
    },
    {
        "id": 2979648,
        "nm": "Saint-Gobain",
        "lat": 49.595718,
        "lon": 3.3775
    },
    {
        "id": 2979627,
        "nm": "Saint-Gratien",
        "lat": 48.973499,
        "lon": 2.28729
    },
    {
        "id": 2979619,
        "nm": "Saint-Gregoire",
        "lat": 48.150848,
        "lon": -1.68706
    },
    {
        "id": 2979596,
        "nm": "Saint-Heand",
        "lat": 45.528172,
        "lon": 4.37377
    },
    {
        "id": 2979590,
        "nm": "Saint-Herblain",
        "lat": 47.217651,
        "lon": -1.64841
    },
    {
        "id": 2979589,
        "nm": "Saint-Herblon",
        "lat": 47.40786,
        "lon": -1.09738
    },
    {
        "id": 2979554,
        "nm": "Saint-Hilaire-de-Brethmas",
        "lat": 44.080029,
        "lon": 4.12478
    },
    {
        "id": 2979545,
        "nm": "Saint-Hilaire-de-Loulay",
        "lat": 47.0019,
        "lon": -1.3308
    },
    {
        "id": 2979543,
        "nm": "Saint-Hilaire-de-Riez",
        "lat": 46.713081,
        "lon": -1.92583
    },
    {
        "id": 2979539,
        "nm": "Saint-Hilaire-de-Talmont",
        "lat": 46.47002,
        "lon": -1.60358
    },
    {
        "id": 2979531,
        "nm": "Saint-Hilaire-du-Harcouet",
        "lat": 48.577,
        "lon": -1.09004
    },
    {
        "id": 2979529,
        "nm": "Saint-Hilaire-du-Rosier",
        "lat": 45.10038,
        "lon": 5.25012
    },
    {
        "id": 2979502,
        "nm": "Saint-Hilaire-Saint-Mesmin",
        "lat": 47.866138,
        "lon": 1.83351
    },
    {
        "id": 2979488,
        "nm": "Saint-Hippolyte",
        "lat": 42.7855,
        "lon": 2.9662
    },
    {
        "id": 2979475,
        "nm": "Saint-Hippolyte-du-Fort",
        "lat": 43.963619,
        "lon": 3.85572
    },
    {
        "id": 2979431,
        "nm": "Saint-Ismier",
        "lat": 45.247082,
        "lon": 5.82863
    },
    {
        "id": 2979415,
        "nm": "Saint-Jacques-de-la-Lande",
        "lat": 48.06514,
        "lon": -1.72086
    },
    {
        "id": 2979408,
        "nm": "Saint-Jacques-sur-Darnetal",
        "lat": 49.4398,
        "lon": 1.2036
    },
    {
        "id": 2979401,
        "nm": "Saint-James",
        "lat": 48.521801,
        "lon": -1.32629
    },
    {
        "id": 2979394,
        "nm": "Saint-Jean",
        "lat": 43.6642,
        "lon": 1.49941
    },
    {
        "id": 2979371,
        "nm": "Saint-Jean-Bonnefonds",
        "lat": 45.452942,
        "lon": 4.45057
    },
    {
        "id": 2979370,
        "nm": "Saint-Jean-Brevelay",
        "lat": 47.844971,
        "lon": -2.72231
    },
    {
        "id": 2979369,
        "nm": "Saint-Jean-Cap-Ferrat",
        "lat": 43.68922,
        "lon": 7.33238
    },
    {
        "id": 2979344,
        "nm": "Saint-Jean-de-Boiseau",
        "lat": 47.19315,
        "lon": -1.7234
    },
    {
        "id": 2979342,
        "nm": "Saint-Jean-de-Bournay",
        "lat": 45.501339,
        "lon": 5.13963
    },
    {
        "id": 2979341,
        "nm": "Saint-Jean-de-Braye",
        "lat": 47.913029,
        "lon": 1.97705
    },
    {
        "id": 2979316,
        "nm": "Saint-Jean-de-la-Ruelle",
        "lat": 47.91127,
        "lon": 1.86483
    },
    {
        "id": 2979309,
        "nm": "Saint-Jean-de-Luz",
        "lat": 43.38908,
        "lon": -1.6581
    },
    {
        "id": 2979303,
        "nm": "Saint-Jean-de-Maurienne",
        "lat": 45.283329,
        "lon": 6.35
    },
    {
        "id": 2979300,
        "nm": "Saint-Jean-de-Moirans",
        "lat": 45.342621,
        "lon": 5.58615
    },
    {
        "id": 2979299,
        "nm": "Saint-Jean-de-Monts",
        "lat": 46.790878,
        "lon": -2.08219
    },
    {
        "id": 2979298,
        "nm": "Saint-Jean-de-Muzols",
        "lat": 45.080399,
        "lon": 4.81421
    },
    {
        "id": 2979261,
        "nm": "Saint-Jean-de-Vedas",
        "lat": 43.577591,
        "lon": 3.82603
    },
    {
        "id": 2979245,
        "nm": "Saint-Jean-du-Falga",
        "lat": 43.086472,
        "lon": 1.6278
    },
    {
        "id": 2979244,
        "nm": "Saint-Jean-du-Gard",
        "lat": 44.105228,
        "lon": 3.88566
    },
    {
        "id": 2979239,
        "nm": "Saint-Jean-en-Royans",
        "lat": 45.01693,
        "lon": 5.29454
    },
    {
        "id": 2979226,
        "nm": "Saint-Jean-le-Blanc",
        "lat": 47.893269,
        "lon": 1.9154
    },
    {
        "id": 2979209,
        "nm": "Saint-Jeannet",
        "lat": 43.747231,
        "lon": 7.14284
    },
    {
        "id": 2979185,
        "nm": "Saint-Jeoire",
        "lat": 46.137772,
        "lon": 6.45886
    },
    {
        "id": 2979179,
        "nm": "Saint-Joachim",
        "lat": 47.383492,
        "lon": -2.19239
    },
    {
        "id": 2979175,
        "nm": "Saint-Jorioz",
        "lat": 45.832958,
        "lon": 6.16503
    },
    {
        "id": 2979174,
        "nm": "Saint-Jory",
        "lat": 43.741459,
        "lon": 1.37089
    },
    {
        "id": 2979160,
        "nm": "Saint-Jouan-des-Guerets",
        "lat": 48.599319,
        "lon": -1.97372
    },
    {
        "id": 2979148,
        "nm": "Saint-Juery",
        "lat": 43.950001,
        "lon": 2.21667
    },
    {
        "id": 2979119,
        "nm": "Saint-Julien-Chapteuil",
        "lat": 45.033981,
        "lon": 4.06229
    },
    {
        "id": 2979109,
        "nm": "Saint-Julien-de-Concelles",
        "lat": 47.252861,
        "lon": -1.38428
    },
    {
        "id": 2979080,
        "nm": "Saint-Julien-du-Sault",
        "lat": 48.031879,
        "lon": 3.29556
    },
    {
        "id": 2979072,
        "nm": "Saint-Julien-en-Genevois",
        "lat": 46.144341,
        "lon": 6.08256
    },
    {
        "id": 2979054,
        "nm": "Saint-Julien-les-Metz",
        "lat": 49.132881,
        "lon": 6.2024
    },
    {
        "id": 2979087,
        "nm": "Saint-Julien-les-Rosiers",
        "lat": 44.17445,
        "lon": 4.10803
    },
    {
        "id": 2979052,
        "nm": "Saint-Julien-les-Villas",
        "lat": 48.271271,
        "lon": 4.09901
    },
    {
        "id": 2979036,
        "nm": "Saint-Junien",
        "lat": 45.888672,
        "lon": 0.90143
    },
    {
        "id": 2979030,
        "nm": "Saint-Just",
        "lat": 43.658058,
        "lon": 4.11472
    },
    {
        "id": 2979017,
        "nm": "Saint-Just-Chaleyssin",
        "lat": 45.585339,
        "lon": 4.99888
    },
    {
        "id": 2979010,
        "nm": "Saint-Just-en-Chaussee",
        "lat": 49.505032,
        "lon": 2.43285
    },
    {
        "id": 2979002,
        "nm": "Saint-Just-le-Martel",
        "lat": 45.86351,
        "lon": 1.38829
    },
    {
        "id": 2979001,
        "nm": "Saint-Just-Malmont",
        "lat": 45.339729,
        "lon": 4.31335
    },
    {
        "id": 2978997,
        "nm": "Saint-Just-Saint-Rambert",
        "lat": 45.499729,
        "lon": 4.24141
    },
    {
        "id": 2978983,
        "nm": "Saint-Lambert-la-Potherie",
        "lat": 47.482891,
        "lon": -0.67789
    },
    {
        "id": 2978949,
        "nm": "Saint-Laurent-Blangy",
        "lat": 50.29446,
        "lon": 2.80698
    },
    {
        "id": 2978936,
        "nm": "Saint-Laurent-de-Chamousset",
        "lat": 45.739319,
        "lon": 4.4634
    },
    {
        "id": 2978925,
        "nm": "Saint-Laurent-de-la-Salanque",
        "lat": 42.772701,
        "lon": 2.98998
    },
    {
        "id": 2978921,
        "nm": "Saint-Laurent-de-Mure",
        "lat": 45.688702,
        "lon": 5.04656
    },
    {
        "id": 2978918,
        "nm": "Saint-Laurent-des-Arbres",
        "lat": 44.054932,
        "lon": 4.70026
    },
    {
        "id": 2978893,
        "nm": "Saint-Laurent-du-Pont",
        "lat": 45.390091,
        "lon": 5.73521
    },
    {
        "id": 2978911,
        "nm": "Saint-Laurent-Nouan",
        "lat": 47.716671,
        "lon": 1.6
    },
    {
        "id": 2978865,
        "nm": "Saint-Laurent-sur-Sevre",
        "lat": 46.958092,
        "lon": -0.89392
    },
    {
        "id": 2978832,
        "nm": "Saint-Leger-des-Vignes",
        "lat": 46.84063,
        "lon": 3.45488
    },
    {
        "id": 2978828,
        "nm": "Saint-Leger-du-Bourg-Denis",
        "lat": 49.433449,
        "lon": 1.15803
    },
    {
        "id": 2978809,
        "nm": "Saint-Leger-sous-Cholet",
        "lat": 47.094051,
        "lon": -0.91024
    },
    {
        "id": 2978783,
        "nm": "Saint-Leonard",
        "lat": 50.690578,
        "lon": 1.62536
    },
    {
        "id": 2978782,
        "nm": "Saint-Leonard-de-Noblat",
        "lat": 45.835659,
        "lon": 1.49174
    },
    {
        "id": 2978771,
        "nm": "Saint-Leu",
        "lat": 46.730598,
        "lon": 4.50083
    },
    {
        "id": 2978768,
        "nm": "Saint-Leu-la-Foret",
        "lat": 49.01667,
        "lon": 2.25
    },
    {
        "id": 2978758,
        "nm": "Saint-Lo",
        "lat": 49.116241,
        "lon": -1.09031
    },
    {
        "id": 2978749,
        "nm": "Saint-Loubes",
        "lat": 44.915359,
        "lon": -0.42703
    },
    {
        "id": 2978742,
        "nm": "Saint-Louis",
        "lat": 47.58836,
        "lon": 7.56247
    },
    {
        "id": 2978726,
        "nm": "Saint-Louis-de-Montferrand",
        "lat": 44.950001,
        "lon": -0.53543
    },
    {
        "id": 2978706,
        "nm": "Saint-Loup-Cammas",
        "lat": 43.69767,
        "lon": 1.48127
    },
    {
        "id": 2978688,
        "nm": "Saint-Loup-sur-Semouse",
        "lat": 47.88345,
        "lon": 6.2753
    },
    {
        "id": 2978678,
        "nm": "Saint-Lubin-des-Joncherets",
        "lat": 48.76667,
        "lon": 1.21667
    },
    {
        "id": 2978668,
        "nm": "Saint-Lunaire",
        "lat": 48.638111,
        "lon": -2.11392
    },
    {
        "id": 2978666,
        "nm": "Saint-Lupicin",
        "lat": 46.400341,
        "lon": 5.7922
    },
    {
        "id": 2978664,
        "nm": "Saint-Lye",
        "lat": 48.365021,
        "lon": 3.999
    },
    {
        "id": 2978662,
        "nm": "Saint-Lyphard",
        "lat": 47.39822,
        "lon": -2.30642
    },
    {
        "id": 2978661,
        "nm": "Saint-Lys",
        "lat": 43.511269,
        "lon": 1.17557
    },
    {
        "id": 2978658,
        "nm": "Saint-Macaire-en-Mauges",
        "lat": 47.123569,
        "lon": -0.9912
    },
    {
        "id": 2978640,
        "nm": "Saint-Malo",
        "lat": 48.650002,
        "lon": -2.01667
    },
    {
        "id": 2978636,
        "nm": "Saint-Malo-de-Guersac",
        "lat": 47.353451,
        "lon": -2.17773
    },
    {
        "id": 2978622,
        "nm": "Saint-Mammes",
        "lat": 48.384579,
        "lon": 2.81578
    },
    {
        "id": 2978621,
        "nm": "Saint-Mande",
        "lat": 48.838638,
        "lon": 2.41579
    },
    {
        "id": 2978618,
        "nm": "Saint-Mandrier-sur-Mer",
        "lat": 43.077999,
        "lon": 5.929
    },
    {
        "id": 2978589,
        "nm": "Saint-Marcel",
        "lat": 46.773708,
        "lon": 4.89205
    },
    {
        "id": 2978586,
        "nm": "Saint-Marcel",
        "lat": 49.099998,
        "lon": 1.45
    },
    {
        "id": 2978568,
        "nm": "Saint-Marcel-les-Valence",
        "lat": 44.972462,
        "lon": 4.96011
    },
    {
        "id": 2978566,
        "nm": "Saint-Marcellin",
        "lat": 45.15192,
        "lon": 5.32388
    },
    {
        "id": 2978565,
        "nm": "Saint-Marcellin-en-Forez",
        "lat": 45.495491,
        "lon": 4.16923
    },
    {
        "id": 2978550,
        "nm": "Saint-Mard",
        "lat": 49.03701,
        "lon": 2.69645
    },
    {
        "id": 2978529,
        "nm": "Saint-Mars-de-Coutais",
        "lat": 47.11153,
        "lon": -1.73437
    },
    {
        "id": 2978524,
        "nm": "Saint-Mars-du-Desert",
        "lat": 47.365601,
        "lon": -1.40678
    },
    {
        "id": 2978521,
        "nm": "Saint-Mars-la-Briere",
        "lat": 48.03046,
        "lon": 0.37319
    },
    {
        "id": 2978520,
        "nm": "Saint-Mars-la-Jaille",
        "lat": 47.525661,
        "lon": -1.18483
    },
    {
        "id": 2978447,
        "nm": "Saint-Martin-au-Laert",
        "lat": 50.751789,
        "lon": 2.24051
    },
    {
        "id": 2978440,
        "nm": "Saint-Martin-Bellevue",
        "lat": 45.96262,
        "lon": 6.15763
    },
    {
        "id": 2978439,
        "nm": "Saint-Martin-Boulogne",
        "lat": 50.72691,
        "lon": 1.61864
    },
    {
        "id": 2978417,
        "nm": "Saint-Martin-de-Belleville",
        "lat": 45.381748,
        "lon": 6.50519
    },
    {
        "id": 2978396,
        "nm": "Saint-Martin-de-Crau",
        "lat": 43.639549,
        "lon": 4.8127
    },
    {
        "id": 2978394,
        "nm": "Saint-Martin-de-Fontenay",
        "lat": 49.115231,
        "lon": -0.37391
    },
    {
        "id": 2978369,
        "nm": "Saint-Martin-de-Londres",
        "lat": 43.790401,
        "lon": 3.73066
    },
    {
        "id": 2978361,
        "nm": "Saint-Martin-de-Re",
        "lat": 46.20311,
        "lon": -1.36726
    },
    {
        "id": 2978344,
        "nm": "Saint-Martin-de-Seignanx",
        "lat": 43.542831,
        "lon": -1.38946
    },
    {
        "id": 2978325,
        "nm": "Saint-Martin-de-Valgalgues",
        "lat": 44.163151,
        "lon": 4.08364
    },
    {
        "id": 2978349,
        "nm": "Saint-Martin-des-Champs",
        "lat": 48.668411,
        "lon": -1.33393
    },
    {
        "id": 2978351,
        "nm": "Saint-Martin-des-Champs",
        "lat": 48.583328,
        "lon": -3.83333
    },
    {
        "id": 2978337,
        "nm": "Saint-Martin-des-Noyers",
        "lat": 46.72226,
        "lon": -1.17726
    },
    {
        "id": 2978317,
        "nm": "Saint-Martin-dHeres",
        "lat": 45.165279,
        "lon": 5.76337
    },
    {
        "id": 2978287,
        "nm": "Saint-Martin-du-Tertre",
        "lat": 49.10743,
        "lon": 2.34533
    },
    {
        "id": 2978284,
        "nm": "Saint-Martin-du-Var",
        "lat": 43.818119,
        "lon": 7.1903
    },
    {
        "id": 2978276,
        "nm": "Saint-Martin-en-Haut",
        "lat": 45.659691,
        "lon": 4.56153
    },
    {
        "id": 2978263,
        "nm": "Saint-Martin-la-Plaine",
        "lat": 45.54739,
        "lon": 4.59115
    },
    {
        "id": 2978257,
        "nm": "Saint-Martin-le-Beau",
        "lat": 47.355659,
        "lon": 0.90953
    },
    {
        "id": 2978238,
        "nm": "Saint-Martin-le-Vinoux",
        "lat": 45.202999,
        "lon": 5.71667
    },
    {
        "id": 2978199,
        "nm": "Saint-Mathieu-de-Treviers",
        "lat": 43.767948,
        "lon": 3.85814
    },
    {
        "id": 2978197,
        "nm": "Saint-Mathurin-sur-Loire",
        "lat": 47.416672,
        "lon": -0.31667
    },
    {
        "id": 2978184,
        "nm": "Saint-Maur",
        "lat": 46.806568,
        "lon": 1.63904
    },
    {
        "id": 2978179,
        "nm": "Saint-Maur-des-Fosses",
        "lat": 48.793941,
        "lon": 2.49323
    },
    {
        "id": 2978170,
        "nm": "Saint-Maurice",
        "lat": 48.821819,
        "lon": 2.42716
    },
    {
        "id": 2978163,
        "nm": "Saint-Maurice-de-Beynost",
        "lat": 45.8344,
        "lon": 4.9775
    },
    {
        "id": 2978161,
        "nm": "Saint-Maurice-de-Gourdans",
        "lat": 45.8214,
        "lon": 5.19464
    },
    {
        "id": 2978118,
        "nm": "Saint-Maurice-sur-Dargoire",
        "lat": 45.581169,
        "lon": 4.63113
    },
    {
        "id": 2978105,
        "nm": "Saint-Max",
        "lat": 48.704288,
        "lon": 6.20999
    },
    {
        "id": 2978101,
        "nm": "Saint-Maximin",
        "lat": 49.221821,
        "lon": 2.4536
    },
    {
        "id": 2978100,
        "nm": "Saint-Maximin-la-Sainte-Baume",
        "lat": 43.452141,
        "lon": 5.86219
    },
    {
        "id": 2978079,
        "nm": "Saint-Medard-de-Guizieres",
        "lat": 45.01667,
        "lon": -0.05
    },
    {
        "id": 2978072,
        "nm": "Saint-Medard-en-Jalles",
        "lat": 44.896919,
        "lon": -0.72136
    },
    {
        "id": 2978067,
        "nm": "Saint-Meen-le-Grand",
        "lat": 48.189709,
        "lon": -2.19486
    },
    {
        "id": 2978065,
        "nm": "Saint-Melaine-sur-Aubance",
        "lat": 47.366669,
        "lon": -0.5
    },
    {
        "id": 2978062,
        "nm": "Saint-Meloir-des-Ondes",
        "lat": 48.637901,
        "lon": -1.90448
    },
    {
        "id": 2978056,
        "nm": "Saint-Memmie",
        "lat": 48.952469,
        "lon": 4.38409
    },
    {
        "id": 2978017,
        "nm": "Saint-Michel",
        "lat": 49.919521,
        "lon": 4.13278
    },
    {
        "id": 2978023,
        "nm": "Saint-Michel",
        "lat": 45.650002,
        "lon": 0.1
    },
    {
        "id": 2978004,
        "nm": "Saint-Michel-Chef-Chef",
        "lat": 47.180721,
        "lon": -2.14869
    },
    {
        "id": 2977986,
        "nm": "Saint-Michel-de-Maurienne",
        "lat": 45.218418,
        "lon": 6.47258
    },
    {
        "id": 2977957,
        "nm": "Saint-Michel-Mont-Mercure",
        "lat": 46.829411,
        "lon": -0.88298
    },
    {
        "id": 2977953,
        "nm": "Saint-Michel-sur-Meurthe",
        "lat": 48.322189,
        "lon": 6.89024
    },
    {
        "id": 2977952,
        "nm": "Saint-Michel-sur-Orge",
        "lat": 48.634789,
        "lon": 2.30831
    },
    {
        "id": 2977948,
        "nm": "Saint-Mihiel",
        "lat": 48.887459,
        "lon": 5.55099
    },
    {
        "id": 2977947,
        "nm": "Saint-Mitre-les-Remparts",
        "lat": 43.45488,
        "lon": 5.01702
    },
    {
        "id": 2977929,
        "nm": "Saint-Nabord",
        "lat": 48.051708,
        "lon": 6.58248
    },
    {
        "id": 2977921,
        "nm": "Saint-Nazaire",
        "lat": 47.283329,
        "lon": -2.2
    },
    {
        "id": 2977926,
        "nm": "Saint-Nazaire",
        "lat": 42.6679,
        "lon": 2.99168
    },
    {
        "id": 2977922,
        "nm": "Saint-Nazaire-les-Eymes",
        "lat": 45.24921,
        "lon": 5.85254
    },
    {
        "id": 2977901,
        "nm": "Saint-Nicolas",
        "lat": 50.304131,
        "lon": 2.77939
    },
    {
        "id": 2977892,
        "nm": "Saint-Nicolas-dAliermont",
        "lat": 49.878559,
        "lon": 1.22486
    },
    {
        "id": 2977885,
        "nm": "Saint-Nicolas-de-la-Grave",
        "lat": 44.064171,
        "lon": 1.0228
    },
    {
        "id": 2977880,
        "nm": "Saint-Nicolas-de-Port",
        "lat": 48.63089,
        "lon": 6.30038
    },
    {
        "id": 2977879,
        "nm": "Saint-Nicolas-de-Redon",
        "lat": 47.643429,
        "lon": -2.06305
    },
    {
        "id": 2977869,
        "nm": "Saint-Nicolas-du-Pelem",
        "lat": 48.312222,
        "lon": -3.16465
    },
    {
        "id": 2977855,
        "nm": "Saint-Nolff",
        "lat": 47.703651,
        "lon": -2.65209
    },
    {
        "id": 2977854,
        "nm": "Saint-Nom-la-Breteche",
        "lat": 48.859421,
        "lon": 2.02233
    },
    {
        "id": 2977845,
        "nm": "Saint-Omer",
        "lat": 50.75,
        "lon": 2.25
    },
    {
        "id": 2977832,
        "nm": "Saint-Orens-de-Gameville",
        "lat": 43.55402,
        "lon": 1.53411
    },
    {
        "id": 2977824,
        "nm": "Saint-Ouen",
        "lat": 48.900002,
        "lon": 2.33333
    },
    {
        "id": 2977821,
        "nm": "Saint-Ouen",
        "lat": 50.038189,
        "lon": 2.12088
    },
    {
        "id": 2977825,
        "nm": "Saint-Ouen",
        "lat": 47.814041,
        "lon": 1.08067
    },
    {
        "id": 2977800,
        "nm": "Saint-Ouen-lAumone",
        "lat": 49.04353,
        "lon": 2.12134
    },
    {
        "id": 2977774,
        "nm": "Saint-Pair-sur-Mer",
        "lat": 48.814548,
        "lon": -1.56761
    },
    {
        "id": 2977772,
        "nm": "Saint-Palais",
        "lat": 43.328671,
        "lon": -1.03333
    },
    {
        "id": 2977764,
        "nm": "Saint-Palais-sur-Mer",
        "lat": 45.642551,
        "lon": -1.0881
    },
    {
        "id": 2977750,
        "nm": "Saint-Pantaleon-de-Larche",
        "lat": 45.14138,
        "lon": 1.44608
    },
    {
        "id": 2977718,
        "nm": "Saint-Parres-aux-Tertres",
        "lat": 48.297798,
        "lon": 4.11752
    },
    {
        "id": 2977709,
        "nm": "Saint-Pathus",
        "lat": 49.071362,
        "lon": 2.79886
    },
    {
        "id": 2977683,
        "nm": "Saint-Paul-de-Fenouillet",
        "lat": 42.80938,
        "lon": 2.50374
    },
    {
        "id": 2977673,
        "nm": "Saint-Paul-de-Varces",
        "lat": 45.071751,
        "lon": 5.64247
    },
    {
        "id": 2977701,
        "nm": "Saint-Paul-de-Vence",
        "lat": 43.700001,
        "lon": 7.11667
    },
    {
        "id": 2977660,
        "nm": "Saint-Paul-en-Jarez",
        "lat": 45.482391,
        "lon": 4.57132
    },
    {
        "id": 2977648,
        "nm": "Saint-Paul-les-Dax",
        "lat": 43.72715,
        "lon": -1.05162
    },
    {
        "id": 2977638,
        "nm": "Saint-Paul-Trois-Chateaux",
        "lat": 44.349091,
        "lon": 4.76574
    },
    {
        "id": 2977655,
        "nm": "Saint-Paulien",
        "lat": 45.136501,
        "lon": 3.81384
    },
    {
        "id": 2977631,
        "nm": "Saint-Pee-sur-Nivelle",
        "lat": 43.35564,
        "lon": -1.55013
    },
    {
        "id": 2977623,
        "nm": "Saint-Peray",
        "lat": 44.94799,
        "lon": 4.8463
    },
    {
        "id": 2977616,
        "nm": "Saint-Pere",
        "lat": 48.587261,
        "lon": -1.92413
    },
    {
        "id": 2977614,
        "nm": "Saint-Pere-en-Retz",
        "lat": 47.205589,
        "lon": -2.04095
    },
    {
        "id": 2977603,
        "nm": "Saint-Philbert-de-Bouaine",
        "lat": 46.98568,
        "lon": -1.52022
    },
    {
        "id": 2977602,
        "nm": "Saint-Philbert-de-Grand-Lieu",
        "lat": 47.035801,
        "lon": -1.6412
    },
    {
        "id": 2977530,
        "nm": "Saint-Pierre-de-Chandieu",
        "lat": 45.64558,
        "lon": 5.01128
    },
    {
        "id": 2977497,
        "nm": "Saint-Pierre-de-Plesguen",
        "lat": 48.446381,
        "lon": -1.91278
    },
    {
        "id": 2977477,
        "nm": "Saint-Pierre-de-Varengeville",
        "lat": 49.502399,
        "lon": 0.93118
    },
    {
        "id": 2977491,
        "nm": "Saint-Pierre-des-Corps",
        "lat": 47.38623,
        "lon": 0.74849
    },
    {
        "id": 2977462,
        "nm": "Saint-Pierre-du-Mont",
        "lat": 43.884529,
        "lon": -0.52185
    },
    {
        "id": 2977458,
        "nm": "Saint-Pierre-du-Perray",
        "lat": 48.610641,
        "lon": 2.49429
    },
    {
        "id": 2977441,
        "nm": "Saint-Pierre-la-Palud",
        "lat": 45.789558,
        "lon": 4.61291
    },
    {
        "id": 2977432,
        "nm": "Saint-Pierre-le-Moutier",
        "lat": 46.79277,
        "lon": 3.11657
    },
    {
        "id": 2977428,
        "nm": "Saint-Pierre-les-Elbeuf",
        "lat": 49.279011,
        "lon": 1.04305
    },
    {
        "id": 2977425,
        "nm": "Saint-Pierre-les-Nemours",
        "lat": 48.26733,
        "lon": 2.67966
    },
    {
        "id": 2977415,
        "nm": "Saint-Pierre-Montlimart",
        "lat": 47.26976,
        "lon": -1.02738
    },
    {
        "id": 2977414,
        "nm": "Saint-Pierre-Quiberon",
        "lat": 47.520611,
        "lon": -3.13084
    },
    {
        "id": 2977411,
        "nm": "Saint-Pierre-sur-Dives",
        "lat": 49.01667,
        "lon": -0.03333
    },
    {
        "id": 2977390,
        "nm": "Saint-Pol-de-Leon",
        "lat": 48.683331,
        "lon": -3.98333
    },
    {
        "id": 2977388,
        "nm": "Saint-Pol-sur-Mer",
        "lat": 51.031158,
        "lon": 2.33984
    },
    {
        "id": 2977387,
        "nm": "Saint-Pol-sur-Ternoise",
        "lat": 50.38113,
        "lon": 2.33407
    },
    {
        "id": 2977382,
        "nm": "Saint-Pons-de-Thomieres",
        "lat": 43.48333,
        "lon": 2.76667
    },
    {
        "id": 2977365,
        "nm": "Saint-Pourcain-sur-Sioule",
        "lat": 46.309269,
        "lon": 3.28787
    },
    {
        "id": 2977360,
        "nm": "Saint-Prest",
        "lat": 48.49107,
        "lon": 1.53034
    },
    {
        "id": 2977356,
        "nm": "Saint-Priest",
        "lat": 45.696121,
        "lon": 4.93892
    },
    {
        "id": 2977350,
        "nm": "Saint-Priest-en-Jarez",
        "lat": 45.47501,
        "lon": 4.37614
    },
    {
        "id": 2977336,
        "nm": "Saint-Priest-Taurion",
        "lat": 45.88686,
        "lon": 1.40016
    },
    {
        "id": 2977327,
        "nm": "Saint-Privat-des-Vieux",
        "lat": 44.14415,
        "lon": 4.12988
    },
    {
        "id": 2977317,
        "nm": "Saint-Prix",
        "lat": 49.01667,
        "lon": 2.26667
    },
    {
        "id": 2977308,
        "nm": "Saint-Pryve-Saint-Mesmin",
        "lat": 47.881771,
        "lon": 1.8695
    },
    {
        "id": 2977299,
        "nm": "Saint-Quay-Portrieux",
        "lat": 48.649921,
        "lon": -2.83058
    },
    {
        "id": 2977295,
        "nm": "Saint-Quentin",
        "lat": 49.848888,
        "lon": 3.28757
    },
    {
        "id": 2977277,
        "nm": "Saint-Quentin-Fallavier",
        "lat": 45.630501,
        "lon": 5.10924
    },
    {
        "id": 2977274,
        "nm": "Saint-Quentin-la-Poterie",
        "lat": 44.043919,
        "lon": 4.44432
    },
    {
        "id": 2977250,
        "nm": "Saint-Rambert-en-Bugey",
        "lat": 45.94426,
        "lon": 5.43904
    },
    {
        "id": 2977246,
        "nm": "Saint-Raphael",
        "lat": 43.423321,
        "lon": 6.7735
    },
    {
        "id": 2977229,
        "nm": "Saint-Remy",
        "lat": 46.76334,
        "lon": 4.83928
    },
    {
        "id": 2977214,
        "nm": "Saint-Remy-de-Provence",
        "lat": 43.788479,
        "lon": 4.83167
    },
    {
        "id": 2977197,
        "nm": "Saint-Remy-les-Chevreuse",
        "lat": 48.707081,
        "lon": 2.07692
    },
    {
        "id": 2977193,
        "nm": "Saint-Remy-sur-Avre",
        "lat": 48.761421,
        "lon": 1.24532
    },
    {
        "id": 2977189,
        "nm": "Saint-Renan",
        "lat": 48.433331,
        "lon": -4.61667
    },
    {
        "id": 2977159,
        "nm": "Saint-Rogatien",
        "lat": 46.150002,
        "lon": -1.06963
    },
    {
        "id": 2977146,
        "nm": "Saint-Romain-de-Colbosc",
        "lat": 49.53093,
        "lon": 0.35719
    },
    {
        "id": 2977145,
        "nm": "Saint-Romain-de-Jalionas",
        "lat": 45.756969,
        "lon": 5.21527
    },
    {
        "id": 2977126,
        "nm": "Saint-Romain-le-Puy",
        "lat": 45.559502,
        "lon": 4.12839
    },
    {
        "id": 2977100,
        "nm": "Saint-Saens",
        "lat": 49.673019,
        "lon": 1.28525
    },
    {
        "id": 2977070,
        "nm": "Saint-Saturnin",
        "lat": 48.057961,
        "lon": 0.15218
    },
    {
        "id": 2977068,
        "nm": "Saint-Saturnin-les-Apt",
        "lat": 43.933331,
        "lon": 5.38333
    },
    {
        "id": 2977063,
        "nm": "Saint-Saturnin-les-Avignon",
        "lat": 43.955009,
        "lon": 4.92548
    },
    {
        "id": 2977058,
        "nm": "Saint-Saulve",
        "lat": 50.37141,
        "lon": 3.55612
    },
    {
        "id": 2977038,
        "nm": "Saint-Sauveur",
        "lat": 47.805302,
        "lon": 6.38583
    },
    {
        "id": 2977007,
        "nm": "Saint-Sauveur-le-Vicomte",
        "lat": 49.385471,
        "lon": -1.5331
    },
    {
        "id": 2976997,
        "nm": "Saint-Savin",
        "lat": 45.150002,
        "lon": -0.45
    },
    {
        "id": 2977001,
        "nm": "Saint-Savin",
        "lat": 45.627701,
        "lon": 5.30722
    },
    {
        "id": 2976996,
        "nm": "Saint-Savinien",
        "lat": 45.87711,
        "lon": -0.67919
    },
    {
        "id": 2976994,
        "nm": "Saint-Savournin",
        "lat": 43.408482,
        "lon": 5.5269
    },
    {
        "id": 2976986,
        "nm": "Saint-Sebastien-de-Morsent",
        "lat": 49.01096,
        "lon": 1.0873
    },
    {
        "id": 2976984,
        "nm": "Saint-Sebastien-sur-Loire",
        "lat": 47.20768,
        "lon": -1.50332
    },
    {
        "id": 2976944,
        "nm": "Saint-Seurin-sur-lIsle",
        "lat": 45.01667,
        "lon": 0
    },
    {
        "id": 2976942,
        "nm": "Saint-Sever",
        "lat": 43.757271,
        "lon": -0.57357
    },
    {
        "id": 2976919,
        "nm": "Saint-Simeon-de-Bressieux",
        "lat": 45.338501,
        "lon": 5.26591
    },
    {
        "id": 2976883,
        "nm": "Saint-Soupplets",
        "lat": 49.038658,
        "lon": 2.80723
    },
    {
        "id": 2976879,
        "nm": "Saint-Sulpice",
        "lat": 43.775002,
        "lon": 1.68511
    },
    {
        "id": 2976868,
        "nm": "Saint-Sulpice-de-Pommeray",
        "lat": 47.599998,
        "lon": 1.26667
    },
    {
        "id": 2976855,
        "nm": "Saint-Sulpice-de-Royan",
        "lat": 45.670349,
        "lon": -1.01252
    },
    {
        "id": 2976847,
        "nm": "Saint-Sulpice-et-Cameyrac",
        "lat": 44.911308,
        "lon": -0.39048
    },
    {
        "id": 2976843,
        "nm": "Saint-Sulpice-le-Gueretois",
        "lat": 46.20097,
        "lon": 1.82826
    },
    {
        "id": 2976820,
        "nm": "Saint-Sylvestre-sur-Lot",
        "lat": 44.396671,
        "lon": 0.80441
    },
    {
        "id": 2976794,
        "nm": "Saint-Symphorien-sur-Coise",
        "lat": 45.632,
        "lon": 4.45811
    },
    {
        "id": 2976791,
        "nm": "Saint-Thegonnec",
        "lat": 48.51667,
        "lon": -3.95
    },
    {
        "id": 2976780,
        "nm": "Saint-Thibault-des-Vignes",
        "lat": 48.871109,
        "lon": 2.68041
    },
    {
        "id": 2976777,
        "nm": "Saint-Thibery",
        "lat": 43.39658,
        "lon": 3.41774
    },
    {
        "id": 2976756,
        "nm": "Saint-Thuriau",
        "lat": 48.01667,
        "lon": -2.95
    },
    {
        "id": 2976742,
        "nm": "Saint-Tropez",
        "lat": 43.269321,
        "lon": 6.63981
    },
    {
        "id": 2976712,
        "nm": "Saint-Vaast-la-Hougue",
        "lat": 49.588428,
        "lon": -1.26931
    },
    {
        "id": 2976703,
        "nm": "Saint-Valery-en-Caux",
        "lat": 49.866669,
        "lon": 0.73333
    },
    {
        "id": 2976701,
        "nm": "Saint-Valery-sur-Somme",
        "lat": 50.183331,
        "lon": 1.63333
    },
    {
        "id": 2976697,
        "nm": "Saint-Vallier",
        "lat": 46.641071,
        "lon": 4.37107
    },
    {
        "id": 2976699,
        "nm": "Saint-Vallier",
        "lat": 45.175919,
        "lon": 4.81514
    },
    {
        "id": 2976695,
        "nm": "Saint-Vallier-de-Thiey",
        "lat": 43.695389,
        "lon": 6.8443
    },
    {
        "id": 2976693,
        "nm": "Saint-Varent",
        "lat": 46.889339,
        "lon": -0.2321
    },
    {
        "id": 2976691,
        "nm": "Saint-Vaury",
        "lat": 46.20417,
        "lon": 1.75654
    },
    {
        "id": 2976690,
        "nm": "Saint-Venant",
        "lat": 50.61956,
        "lon": 2.53946
    },
    {
        "id": 2976678,
        "nm": "Saint-Viaud",
        "lat": 47.256191,
        "lon": -2.01833
    },
    {
        "id": 2976667,
        "nm": "Saint-Victor",
        "lat": 46.394669,
        "lon": 2.60858
    },
    {
        "id": 2976656,
        "nm": "Saint-Victoret",
        "lat": 43.419571,
        "lon": 5.23396
    },
    {
        "id": 2976637,
        "nm": "Saint-Vigor-le-Grand",
        "lat": 49.282421,
        "lon": -0.68579
    },
    {
        "id": 2976608,
        "nm": "Saint-Vincent-de-Paul",
        "lat": 43.744308,
        "lon": -1.00662
    },
    {
        "id": 2976600,
        "nm": "Saint-Vincent-de-Tyrosse",
        "lat": 43.660309,
        "lon": -1.30799
    },
    {
        "id": 2976579,
        "nm": "Saint-Vit",
        "lat": 47.183331,
        "lon": 5.81667
    },
    {
        "id": 2976565,
        "nm": "Saint-Vrain",
        "lat": 48.543018,
        "lon": 2.33331
    },
    {
        "id": 2976557,
        "nm": "Saint-Witz",
        "lat": 49.091,
        "lon": 2.57122
    },
    {
        "id": 2976556,
        "nm": "Saint-Xandre",
        "lat": 46.204441,
        "lon": -1.10267
    },
    {
        "id": 2976548,
        "nm": "Saint-Yorre",
        "lat": 46.06057,
        "lon": 3.46812
    },
    {
        "id": 2976546,
        "nm": "Saint-Yrieix-la-Perche",
        "lat": 45.516041,
        "lon": 1.20569
    },
    {
        "id": 2976542,
        "nm": "Saint-Yrieix-sur-Charente",
        "lat": 45.683331,
        "lon": 0.11667
    },
    {
        "id": 2976537,
        "nm": "Saint-Yvi",
        "lat": 47.966671,
        "lon": -3.93333
    },
    {
        "id": 2976534,
        "nm": "Saint-Zacharie",
        "lat": 43.385208,
        "lon": 5.70808
    },
    {
        "id": 2980795,
        "nm": "Sainte-Adresse",
        "lat": 49.5089,
        "lon": 0.08446
    },
    {
        "id": 2980761,
        "nm": "Sainte-Anne-sur-Brivet",
        "lat": 47.460709,
        "lon": -2.00415
    },
    {
        "id": 2980742,
        "nm": "Sainte-Bazeille",
        "lat": 44.530731,
        "lon": 0.0974
    },
    {
        "id": 2980723,
        "nm": "Sainte-Catherine",
        "lat": 50.307571,
        "lon": 2.76404
    },
    {
        "id": 2980711,
        "nm": "Sainte-Cecile-les-Vignes",
        "lat": 44.24506,
        "lon": 4.8839
    },
    {
        "id": 2980691,
        "nm": "Sainte-Colombe",
        "lat": 45.524738,
        "lon": 4.86136
    },
    {
        "id": 2980658,
        "nm": "Sainte-Croix-aux-Mines",
        "lat": 48.261238,
        "lon": 7.22445
    },
    {
        "id": 2980648,
        "nm": "Sainte-Croix-en-Plaine",
        "lat": 48.008759,
        "lon": 7.38556
    },
    {
        "id": 2980625,
        "nm": "Sainte-Eulalie",
        "lat": 44.90667,
        "lon": -0.47417
    },
    {
        "id": 2980610,
        "nm": "Sainte-Feyre",
        "lat": 46.139,
        "lon": 1.91517
    },
    {
        "id": 2980603,
        "nm": "Sainte-Florine",
        "lat": 45.40546,
        "lon": 3.31995
    },
    {
        "id": 2980586,
        "nm": "Sainte-Foy-les-Lyon",
        "lat": 45.736919,
        "lon": 4.79688
    },
    {
        "id": 2980570,
        "nm": "Sainte-Gemme-la-Plaine",
        "lat": 46.482861,
        "lon": -1.11321
    },
    {
        "id": 2980565,
        "nm": "Sainte-Gemmes-sur-Loire",
        "lat": 47.422901,
        "lon": -0.55684
    },
    {
        "id": 2980562,
        "nm": "Sainte-Genevieve",
        "lat": 49.2892,
        "lon": 2.19904
    },
    {
        "id": 2980558,
        "nm": "Sainte-Genevieve-des-Bois",
        "lat": 48.64682,
        "lon": 2.31965
    },
    {
        "id": 2980550,
        "nm": "Sainte-Helene",
        "lat": 44.966671,
        "lon": -0.88333
    },
    {
        "id": 2980541,
        "nm": "Sainte-Hermine",
        "lat": 46.55619,
        "lon": -1.05476
    },
    {
        "id": 2980519,
        "nm": "Sainte-Livrade-sur-Lot",
        "lat": 44.399288,
        "lon": 0.5912
    },
    {
        "id": 2980488,
        "nm": "Sainte-Luce-sur-Loire",
        "lat": 47.253811,
        "lon": -1.4843
    },
    {
        "id": 2980476,
        "nm": "Sainte-Marguerite",
        "lat": 48.267349,
        "lon": 6.98439
    },
    {
        "id": 2980446,
        "nm": "Sainte-Marie",
        "lat": 47.69429,
        "lon": -2.0019
    },
    {
        "id": 2980439,
        "nm": "Sainte-Marie-aux-Chenes",
        "lat": 49.191681,
        "lon": 6.00065
    },
    {
        "id": 2980438,
        "nm": "Sainte-Marie-aux-Mines",
        "lat": 48.246799,
        "lon": 7.18528
    },
    {
        "id": 2980429,
        "nm": "Sainte-Marie-de-Re",
        "lat": 46.15237,
        "lon": -1.31281
    },
    {
        "id": 2980411,
        "nm": "Sainte-Marie-Plage",
        "lat": 42.724979,
        "lon": 3.03751
    },
    {
        "id": 2980403,
        "nm": "Sainte-Maure-de-Touraine",
        "lat": 47.111301,
        "lon": 0.62236
    },
    {
        "id": 2980402,
        "nm": "Sainte-Maxime",
        "lat": 43.309071,
        "lon": 6.63849
    },
    {
        "id": 2980400,
        "nm": "Sainte-Menehould",
        "lat": 49.083328,
        "lon": 4.9
    },
    {
        "id": 2980372,
        "nm": "Sainte-Pazanne",
        "lat": 47.103001,
        "lon": -1.8095
    },
    {
        "id": 2980356,
        "nm": "Sainte-Radegonde",
        "lat": 46.98333,
        "lon": -0.25
    },
    {
        "id": 2980335,
        "nm": "Sainte-Savine",
        "lat": 48.296371,
        "lon": 4.04642
    },
    {
        "id": 2980328,
        "nm": "Sainte-Sigolene",
        "lat": 45.24329,
        "lon": 4.23343
    },
    {
        "id": 2980320,
        "nm": "Sainte-Soulle",
        "lat": 46.188469,
        "lon": -1.01607
    },
    {
        "id": 2980205,
        "nm": "Sainte-Tulle",
        "lat": 43.78846,
        "lon": 5.76736
    },
    {
        "id": 2980340,
        "nm": "Saintes",
        "lat": 45.75,
        "lon": -0.63333
    },
    {
        "id": 2980325,
        "nm": "Saintes-Maries-de-la-Mer",
        "lat": 43.452141,
        "lon": 4.42913
    },
    {
        "id": 2977103,
        "nm": "Saintry-sur-Seine",
        "lat": 48.596401,
        "lon": 2.49515
    },
    {
        "id": 2976520,
        "nm": "Saix",
        "lat": 43.583328,
        "lon": 2.18333
    },
    {
        "id": 2976507,
        "nm": "Salaise-sur-Sanne",
        "lat": 45.342339,
        "lon": 4.81829
    },
    {
        "id": 2976491,
        "nm": "Salbert",
        "lat": 47.672359,
        "lon": 6.82209
    },
    {
        "id": 2976490,
        "nm": "Salbris",
        "lat": 47.424198,
        "lon": 2.05124
    },
    {
        "id": 2976481,
        "nm": "Saleilles",
        "lat": 42.654179,
        "lon": 2.95309
    },
    {
        "id": 2976472,
        "nm": "Salernes",
        "lat": 43.563492,
        "lon": 6.23398
    },
    {
        "id": 2976459,
        "nm": "Saleux",
        "lat": 49.8563,
        "lon": 2.23698
    },
    {
        "id": 2976444,
        "nm": "Salies-de-Bearn",
        "lat": 43.47422,
        "lon": -0.92448
    },
    {
        "id": 2976443,
        "nm": "Salies-du-Salat",
        "lat": 43.100739,
        "lon": 0.95866
    },
    {
        "id": 2976421,
        "nm": "Salindres",
        "lat": 44.171741,
        "lon": 4.1602
    },
    {
        "id": 2976413,
        "nm": "Salins-les-Bains",
        "lat": 46.946629,
        "lon": 5.87763
    },
    {
        "id": 2976406,
        "nm": "Sallanches",
        "lat": 45.944229,
        "lon": 6.63162
    },
    {
        "id": 2976404,
        "nm": "Sallaumines",
        "lat": 50.417488,
        "lon": 2.86174
    },
    {
        "id": 2976399,
        "nm": "Salleboeuf",
        "lat": 44.833328,
        "lon": -0.4
    },
    {
        "id": 2976387,
        "nm": "Sallertaine",
        "lat": 46.860168,
        "lon": -1.95522
    },
    {
        "id": 2976384,
        "nm": "Salles",
        "lat": 44.549999,
        "lon": -0.86073
    },
    {
        "id": 2976366,
        "nm": "Salles-la-Source",
        "lat": 44.435051,
        "lon": 2.51283
    },
    {
        "id": 2976358,
        "nm": "Salles-sur-Mer",
        "lat": 46.105431,
        "lon": -1.05741
    },
    {
        "id": 2976348,
        "nm": "Salome",
        "lat": 50.53352,
        "lon": 2.84709
    },
    {
        "id": 2976341,
        "nm": "Salon-de-Provence",
        "lat": 43.640739,
        "lon": 5.09545
    },
    {
        "id": 2976337,
        "nm": "Salouel",
        "lat": 49.869881,
        "lon": 2.2434
    },
    {
        "id": 2976489,
        "nm": "Salses-le-Chateau",
        "lat": 42.833328,
        "lon": 2.91667
    },
    {
        "id": 2976301,
        "nm": "Samatan",
        "lat": 43.492859,
        "lon": 0.92976
    },
    {
        "id": 2976291,
        "nm": "Samer",
        "lat": 50.638401,
        "lon": 1.74628
    },
    {
        "id": 2976284,
        "nm": "Samoens",
        "lat": 46.082821,
        "lon": 6.72647
    },
    {
        "id": 2976281,
        "nm": "Samois-sur-Seine",
        "lat": 48.452511,
        "lon": 2.7504
    },
    {
        "id": 2976279,
        "nm": "Samoreau",
        "lat": 48.429459,
        "lon": 2.75587
    },
    {
        "id": 2976186,
        "nm": "San-Martino-di-Lota",
        "lat": 42.731628,
        "lon": 9.43966
    },
    {
        "id": 2976258,
        "nm": "Sanary-sur-Mer",
        "lat": 43.11784,
        "lon": 5.80006
    },
    {
        "id": 2976245,
        "nm": "Sancoins",
        "lat": 46.833141,
        "lon": 2.92238
    },
    {
        "id": 2976224,
        "nm": "Sandillon",
        "lat": 47.8451,
        "lon": 2.03155
    },
    {
        "id": 2976217,
        "nm": "Sangatte",
        "lat": 50.945641,
        "lon": 1.75321
    },
    {
        "id": 2976195,
        "nm": "Sanguinet",
        "lat": 44.4832,
        "lon": -1.07457
    },
    {
        "id": 2976179,
        "nm": "Sannois",
        "lat": 48.966671,
        "lon": 2.25
    },
    {
        "id": 2981788,
        "nm": "Sant Andreu de Sureda",
        "lat": 42.55201,
        "lon": 2.97129
    },
    {
        "id": 2979993,
        "nm": "Sant Genis de Fontanes",
        "lat": 42.543251,
        "lon": 2.9206
    },
    {
        "id": 2979205,
        "nm": "Sant Joan de Pladecorts",
        "lat": 42.510689,
        "lon": 2.79091
    },
    {
        "id": 2976140,
        "nm": "Santa-Maria-di-Lota",
        "lat": 42.747829,
        "lon": 9.43202
    },
    {
        "id": 2976117,
        "nm": "Santec",
        "lat": 48.700001,
        "lon": -4.03333
    },
    {
        "id": 2976109,
        "nm": "Santeny",
        "lat": 48.727299,
        "lon": 2.57346
    },
    {
        "id": 2976108,
        "nm": "Santes",
        "lat": 50.593159,
        "lon": 2.96289
    },
    {
        "id": 2976090,
        "nm": "Sanvignes-les-Mines",
        "lat": 46.66444,
        "lon": 4.29188
    },
    {
        "id": 2976084,
        "nm": "Saone",
        "lat": 47.22311,
        "lon": 6.11682
    },
    {
        "id": 2976050,
        "nm": "Saran",
        "lat": 47.95013,
        "lon": 1.87601
    },
    {
        "id": 2976043,
        "nm": "Sarcelles",
        "lat": 49,
        "lon": 2.38333
    },
    {
        "id": 2976021,
        "nm": "Sare",
        "lat": 43.312599,
        "lon": -1.58012
    },
    {
        "id": 2976019,
        "nm": "Sarge-les-le-Mans",
        "lat": 48.033329,
        "lon": 0.23333
    },
    {
        "id": 2976007,
        "nm": "Sarlat-la-Caneda",
        "lat": 44.889019,
        "lon": 1.21656
    },
    {
        "id": 2975992,
        "nm": "Sarralbe",
        "lat": 48.998581,
        "lon": 7.03074
    },
    {
        "id": 2975980,
        "nm": "Sarras",
        "lat": 45.18679,
        "lon": 4.80004
    },
    {
        "id": 2975957,
        "nm": "Sarre-Union",
        "lat": 48.938179,
        "lon": 7.09373
    },
    {
        "id": 2975967,
        "nm": "Sarrebourg",
        "lat": 48.73333,
        "lon": 7.05
    },
    {
        "id": 2975964,
        "nm": "Sarreguemines",
        "lat": 49.109951,
        "lon": 7.06747
    },
    {
        "id": 2975953,
        "nm": "Sarrians",
        "lat": 44.084011,
        "lon": 4.96965
    },
    {
        "id": 2975949,
        "nm": "Sarrola-Carcopino",
        "lat": 42.012409,
        "lon": 8.85055
    },
    {
        "id": 2975939,
        "nm": "Sarry",
        "lat": 48.918522,
        "lon": 4.40621
    },
    {
        "id": 2975931,
        "nm": "Sartene",
        "lat": 41.616669,
        "lon": 8.98333
    },
    {
        "id": 2975921,
        "nm": "Sartrouville",
        "lat": 48.9482,
        "lon": 2.19169
    },
    {
        "id": 2975916,
        "nm": "Sarzeau",
        "lat": 47.527721,
        "lon": -2.76933
    },
    {
        "id": 2975908,
        "nm": "Sassenage",
        "lat": 45.205311,
        "lon": 5.66515
    },
    {
        "id": 2975895,
        "nm": "Sathonay-Camp",
        "lat": 45.823101,
        "lon": 4.86754
    },
    {
        "id": 2975850,
        "nm": "Saugues",
        "lat": 44.960388,
        "lon": 3.54784
    },
    {
        "id": 2975844,
        "nm": "Saujon",
        "lat": 45.673092,
        "lon": -0.9262
    },
    {
        "id": 2975833,
        "nm": "Saulcy-sur-Meurthe",
        "lat": 48.237579,
        "lon": 6.96443
    },
    {
        "id": 2975819,
        "nm": "Saulieu",
        "lat": 47.280231,
        "lon": 4.22857
    },
    {
        "id": 2975814,
        "nm": "Saulnes",
        "lat": 49.535549,
        "lon": 5.82629
    },
    {
        "id": 2975802,
        "nm": "Saultain",
        "lat": 50.336761,
        "lon": 3.57723
    },
    {
        "id": 2975785,
        "nm": "Saulx-les-Chartreux",
        "lat": 48.69062,
        "lon": 2.26727
    },
    {
        "id": 2975778,
        "nm": "Saulxures-les-Nancy",
        "lat": 48.689072,
        "lon": 6.24587
    },
    {
        "id": 2975776,
        "nm": "Saulxures-sur-Moselotte",
        "lat": 47.94894,
        "lon": 6.7704
    },
    {
        "id": 2975758,
        "nm": "Saumur",
        "lat": 47.26667,
        "lon": -0.08333
    },
    {
        "id": 2975743,
        "nm": "Sausheim",
        "lat": 47.789761,
        "lon": 7.37134
    },
    {
        "id": 2975726,
        "nm": "Sausset-les-Pins",
        "lat": 43.33136,
        "lon": 5.10431
    },
    {
        "id": 2975702,
        "nm": "Sautron",
        "lat": 47.262741,
        "lon": -1.67107
    },
    {
        "id": 2975683,
        "nm": "Sauvagnon",
        "lat": 43.400002,
        "lon": -0.38333
    },
    {
        "id": 2975649,
        "nm": "Sauvian",
        "lat": 43.292931,
        "lon": 3.26024
    },
    {
        "id": 2975597,
        "nm": "Savenay",
        "lat": 47.360722,
        "lon": -1.94215
    },
    {
        "id": 2975592,
        "nm": "Saverdun",
        "lat": 43.23526,
        "lon": 1.57398
    },
    {
        "id": 2975588,
        "nm": "Saverne",
        "lat": 48.741638,
        "lon": 7.36221
    },
    {
        "id": 2975556,
        "nm": "Savigneux",
        "lat": 45.616699,
        "lon": 4.0833
    },
    {
        "id": 2975553,
        "nm": "Savigny",
        "lat": 45.817322,
        "lon": 4.57543
    },
    {
        "id": 2975536,
        "nm": "Savigny-le-Temple",
        "lat": 48.574089,
        "lon": 2.58287
    },
    {
        "id": 2975528,
        "nm": "Savigny-sur-Braye",
        "lat": 47.87923,
        "lon": 0.80981
    },
    {
        "id": 2975525,
        "nm": "Savigny-sur-Orge",
        "lat": 48.676781,
        "lon": 2.34835
    },
    {
        "id": 2975513,
        "nm": "Savonnieres",
        "lat": 47.347691,
        "lon": 0.54962
    },
    {
        "id": 2975495,
        "nm": "Sayat",
        "lat": 45.827541,
        "lon": 3.05206
    },
    {
        "id": 2975485,
        "nm": "Scaer",
        "lat": 48.033329,
        "lon": -3.7
    },
    {
        "id": 2975469,
        "nm": "Sceaux",
        "lat": 48.77644,
        "lon": 2.29026
    },
    {
        "id": 2975449,
        "nm": "Scherwiller",
        "lat": 48.287128,
        "lon": 7.42135
    },
    {
        "id": 2975446,
        "nm": "Schiltigheim",
        "lat": 48.607491,
        "lon": 7.74931
    },
    {
        "id": 2975445,
        "nm": "Schirmeck",
        "lat": 48.47942,
        "lon": 7.2151
    },
    {
        "id": 2975432,
        "nm": "Schoeneck",
        "lat": 49.216671,
        "lon": 6.91667
    },
    {
        "id": 2975424,
        "nm": "Schweighouse-sur-Moder",
        "lat": 48.816669,
        "lon": 7.73333
    },
    {
        "id": 2975410,
        "nm": "Sciez",
        "lat": 46.32909,
        "lon": 6.37947
    },
    {
        "id": 2975408,
        "nm": "Scionzier",
        "lat": 46.05447,
        "lon": 6.55757
    },
    {
        "id": 2975400,
        "nm": "Scorbe-Clairvaux",
        "lat": 46.810612,
        "lon": 0.41369
    },
    {
        "id": 2975392,
        "nm": "Scy-Chazelles",
        "lat": 49.113602,
        "lon": 6.1161
    },
    {
        "id": 2975387,
        "nm": "Sebazac-Concoures",
        "lat": 44.404839,
        "lon": 2.60324
    },
    {
        "id": 2975361,
        "nm": "Seclin",
        "lat": 50.548729,
        "lon": 3.02731
    },
    {
        "id": 2975349,
        "nm": "Sedan",
        "lat": 49.700001,
        "lon": 4.95
    },
    {
        "id": 2975340,
        "nm": "Sees",
        "lat": 48.604031,
        "lon": 0.17244
    },
    {
        "id": 2975339,
        "nm": "Seez",
        "lat": 45.622089,
        "lon": 6.79957
    },
    {
        "id": 2975321,
        "nm": "Segonzac",
        "lat": 45.616669,
        "lon": -0.21667
    },
    {
        "id": 2975314,
        "nm": "Segre",
        "lat": 47.683331,
        "lon": -0.86667
    },
    {
        "id": 2975292,
        "nm": "Seichamps",
        "lat": 48.71114,
        "lon": 6.26186
    },
    {
        "id": 2975288,
        "nm": "Seiches-sur-le-Loir",
        "lat": 47.573509,
        "lon": -0.35628
    },
    {
        "id": 2975273,
        "nm": "Seignosse",
        "lat": 43.68774,
        "lon": -1.37
    },
    {
        "id": 2975269,
        "nm": "Seilh",
        "lat": 43.694691,
        "lon": 1.35509
    },
    {
        "id": 2975265,
        "nm": "Seillans",
        "lat": 43.634998,
        "lon": 6.64666
    },
    {
        "id": 2975247,
        "nm": "Seine-Port",
        "lat": 48.55743,
        "lon": 2.55316
    },
    {
        "id": 2975233,
        "nm": "Selestat",
        "lat": 48.26667,
        "lon": 7.45
    },
    {
        "id": 2975215,
        "nm": "Selles-sur-Cher",
        "lat": 47.279041,
        "lon": 1.55388
    },
    {
        "id": 2975204,
        "nm": "Seloncourt",
        "lat": 47.459888,
        "lon": 6.85535
    },
    {
        "id": 2975203,
        "nm": "Selongey",
        "lat": 47.588459,
        "lon": 5.18483
    },
    {
        "id": 2975199,
        "nm": "Seltz",
        "lat": 48.895199,
        "lon": 8.10757
    },
    {
        "id": 2975194,
        "nm": "Selvigny",
        "lat": 50.079708,
        "lon": 3.34899
    },
    {
        "id": 2975191,
        "nm": "Semalens",
        "lat": 43.592251,
        "lon": 2.11208
    },
    {
        "id": 2975181,
        "nm": "Semeac",
        "lat": 43.229149,
        "lon": 0.10602
    },
    {
        "id": 2975147,
        "nm": "Semoy",
        "lat": 47.933331,
        "lon": 1.95
    },
    {
        "id": 2975143,
        "nm": "Semur-en-Auxois",
        "lat": 47.48333,
        "lon": 4.33333
    },
    {
        "id": 2975120,
        "nm": "Senas",
        "lat": 43.743752,
        "lon": 5.078
    },
    {
        "id": 2975113,
        "nm": "Sene",
        "lat": 47.618999,
        "lon": -2.737
    },
    {
        "id": 2975088,
        "nm": "Senlis",
        "lat": 49.200001,
        "lon": 2.58333
    },
    {
        "id": 2975080,
        "nm": "Sennecey-le-Grand",
        "lat": 46.641369,
        "lon": 4.86707
    },
    {
        "id": 2975079,
        "nm": "Sennecey-les-Dijon",
        "lat": 47.289841,
        "lon": 5.10485
    },
    {
        "id": 2975067,
        "nm": "Senonches",
        "lat": 48.55999,
        "lon": 1.03069
    },
    {
        "id": 2975063,
        "nm": "Senones",
        "lat": 48.394749,
        "lon": 6.97818
    },
    {
        "id": 2975050,
        "nm": "Sens",
        "lat": 48.200001,
        "lon": 3.28333
    },
    {
        "id": 2975020,
        "nm": "Septemes-les-Vallons",
        "lat": 43.398338,
        "lon": 5.36596
    },
    {
        "id": 2975019,
        "nm": "Septeuil",
        "lat": 48.892448,
        "lon": 1.68357
    },
    {
        "id": 2975018,
        "nm": "Septfonds",
        "lat": 44.178131,
        "lon": 1.61806
    },
    {
        "id": 2974996,
        "nm": "Sequedin",
        "lat": 50.625751,
        "lon": 2.98276
    },
    {
        "id": 2974955,
        "nm": "Seremange-Erzange",
        "lat": 49.318871,
        "lon": 6.09025
    },
    {
        "id": 2974949,
        "nm": "Serent",
        "lat": 47.82333,
        "lon": -2.50571
    },
    {
        "id": 2974942,
        "nm": "Serezin-du-Rhone",
        "lat": 45.629021,
        "lon": 4.82467
    },
    {
        "id": 2974931,
        "nm": "Serifontaine",
        "lat": 49.354401,
        "lon": 1.76873
    },
    {
        "id": 2974925,
        "nm": "Serignan",
        "lat": 43.278728,
        "lon": 3.27712
    },
    {
        "id": 2974923,
        "nm": "Serignan-du-Comtat",
        "lat": 44.188499,
        "lon": 4.84403
    },
    {
        "id": 2974901,
        "nm": "Sermaize-les-Bains",
        "lat": 48.785069,
        "lon": 4.91169
    },
    {
        "id": 2974867,
        "nm": "Serquigny",
        "lat": 49.109428,
        "lon": 0.71016
    },
    {
        "id": 2974821,
        "nm": "Serres-Castet",
        "lat": 43.383331,
        "lon": -0.35
    },
    {
        "id": 2974799,
        "nm": "Serris",
        "lat": 48.84391,
        "lon": 2.78701
    },
    {
        "id": 2974775,
        "nm": "Servian",
        "lat": 43.427158,
        "lon": 3.30032
    },
    {
        "id": 2974747,
        "nm": "Servon",
        "lat": 48.716621,
        "lon": 2.58737
    },
    {
        "id": 2974745,
        "nm": "Servon-sur-Vilaine",
        "lat": 48.12114,
        "lon": -1.45971
    },
    {
        "id": 2974733,
        "nm": "Sete",
        "lat": 43.40176,
        "lon": 3.6966
    },
    {
        "id": 2974710,
        "nm": "Seurre",
        "lat": 46.999229,
        "lon": 5.15138
    },
    {
        "id": 2974699,
        "nm": "Severac-le-Chateau",
        "lat": 44.324291,
        "lon": 3.05929
    },
    {
        "id": 2974681,
        "nm": "Sevran",
        "lat": 48.944721,
        "lon": 2.52746
    },
    {
        "id": 2974678,
        "nm": "Sevres",
        "lat": 48.822922,
        "lon": 2.21757
    },
    {
        "id": 2974677,
        "nm": "Sevres-Anxaumont",
        "lat": 46.570358,
        "lon": 0.46602
    },
    {
        "id": 2974675,
        "nm": "Sevrier",
        "lat": 45.864151,
        "lon": 6.14026
    },
    {
        "id": 2974655,
        "nm": "Seynod",
        "lat": 45.88549,
        "lon": 6.08831
    },
    {
        "id": 2974648,
        "nm": "Seysses",
        "lat": 43.498009,
        "lon": 1.31081
    },
    {
        "id": 2974645,
        "nm": "Seyssinet-Pariset",
        "lat": 45.176762,
        "lon": 5.69387
    },
    {
        "id": 2974644,
        "nm": "Seyssins",
        "lat": 45.155128,
        "lon": 5.67921
    },
    {
        "id": 2974643,
        "nm": "Seyssuel",
        "lat": 45.560059,
        "lon": 4.8532
    },
    {
        "id": 2974640,
        "nm": "Sezanne",
        "lat": 48.72047,
        "lon": 3.72339
    },
    {
        "id": 2974609,
        "nm": "Sierck-les-Bains",
        "lat": 49.439919,
        "lon": 6.36057
    },
    {
        "id": 2974608,
        "nm": "Sierentz",
        "lat": 47.65852,
        "lon": 7.45426
    },
    {
        "id": 2974591,
        "nm": "Sigean",
        "lat": 43.02776,
        "lon": 2.97916
    },
    {
        "id": 2974586,
        "nm": "Signes",
        "lat": 43.2901,
        "lon": 5.86232
    },
    {
        "id": 2974550,
        "nm": "Sille-le-Guillaume",
        "lat": 48.182659,
        "lon": -0.12642
    },
    {
        "id": 2974540,
        "nm": "Sillingy",
        "lat": 45.945419,
        "lon": 6.03392
    },
    {
        "id": 2974519,
        "nm": "Simiane-Collongue",
        "lat": 43.430672,
        "lon": 5.43454
    },
    {
        "id": 2974494,
        "nm": "Sin-le-Noble",
        "lat": 50.361591,
        "lon": 3.13113
    },
    {
        "id": 2974506,
        "nm": "Sinceny",
        "lat": 49.596191,
        "lon": 3.24679
    },
    {
        "id": 2974450,
        "nm": "Sissonne",
        "lat": 49.571072,
        "lon": 3.89369
    },
    {
        "id": 2974446,
        "nm": "Sisteron",
        "lat": 44.18758,
        "lon": 5.94623
    },
    {
        "id": 2974427,
        "nm": "Six-Fours-les-Plages",
        "lat": 43.099998,
        "lon": 5.85
    },
    {
        "id": 2974424,
        "nm": "Sixt-sur-Aff",
        "lat": 47.776482,
        "lon": -2.07867
    },
    {
        "id": 2974423,
        "nm": "Sizun",
        "lat": 48.400002,
        "lon": -4.08333
    },
    {
        "id": 2974418,
        "nm": "Smarves",
        "lat": 46.51078,
        "lon": 0.3498
    },
    {
        "id": 2974413,
        "nm": "Sochaux",
        "lat": 47.50808,
        "lon": 6.82748
    },
    {
        "id": 2974396,
        "nm": "Soignolles-en-Brie",
        "lat": 48.6535,
        "lon": 2.69968
    },
    {
        "id": 2974389,
        "nm": "Soissons",
        "lat": 49.381672,
        "lon": 3.32361
    },
    {
        "id": 2974385,
        "nm": "Soisy-sous-Montmorency",
        "lat": 48.988129,
        "lon": 2.30156
    },
    {
        "id": 2974383,
        "nm": "Soisy-sur-Seine",
        "lat": 48.64875,
        "lon": 2.45223
    },
    {
        "id": 2974378,
        "nm": "Solaize",
        "lat": 45.633331,
        "lon": 4.85
    },
    {
        "id": 2974360,
        "nm": "Solesmes",
        "lat": 50.184681,
        "lon": 3.49799
    },
    {
        "id": 2974338,
        "nm": "Sollies-Pont",
        "lat": 43.189781,
        "lon": 6.0432
    },
    {
        "id": 2974337,
        "nm": "Sollies-Toucas",
        "lat": 43.20821,
        "lon": 6.02496
    },
    {
        "id": 2974336,
        "nm": "Sollies-Ville",
        "lat": 43.182281,
        "lon": 6.03858
    },
    {
        "id": 2974324,
        "nm": "Somain",
        "lat": 50.359612,
        "lon": 3.28108
    },
    {
        "id": 2974273,
        "nm": "Sommieres",
        "lat": 43.785339,
        "lon": 4.08973
    },
    {
        "id": 2974235,
        "nm": "Soorts-Hossegor",
        "lat": 43.664902,
        "lon": -1.39717
    },
    {
        "id": 2974215,
        "nm": "Sorbiers",
        "lat": 45.48814,
        "lon": 4.44933
    },
    {
        "id": 2974195,
        "nm": "Soreze",
        "lat": 43.452412,
        "lon": 2.06799
    },
    {
        "id": 2974188,
        "nm": "Sorgues",
        "lat": 44.010231,
        "lon": 4.87381
    },
    {
        "id": 2974185,
        "nm": "Sorigny",
        "lat": 47.24329,
        "lon": 0.6952
    },
    {
        "id": 2974162,
        "nm": "Sospel",
        "lat": 43.878471,
        "lon": 7.4484
    },
    {
        "id": 2974153,
        "nm": "Sotteville-les-Rouen",
        "lat": 49.409721,
        "lon": 1.09006
    },
    {
        "id": 2974146,
        "nm": "Soual",
        "lat": 43.555302,
        "lon": 2.11679
    },
    {
        "id": 2974135,
        "nm": "Soubise",
        "lat": 45.92395,
        "lon": -1.00938
    },
    {
        "id": 2974130,
        "nm": "Soucelles",
        "lat": 47.568481,
        "lon": -0.41819
    },
    {
        "id": 2974123,
        "nm": "Souchez",
        "lat": 50.39291,
        "lon": 2.73984
    },
    {
        "id": 2974118,
        "nm": "Soucieu-en-Jarrest",
        "lat": 45.680168,
        "lon": 4.70334
    },
    {
        "id": 2974108,
        "nm": "Soudan",
        "lat": 47.737782,
        "lon": -1.30566
    },
    {
        "id": 2974091,
        "nm": "Soues",
        "lat": 43.207359,
        "lon": 0.09874
    },
    {
        "id": 2974087,
        "nm": "Souffelweyersheim",
        "lat": 48.635399,
        "lon": 7.74141
    },
    {
        "id": 2974086,
        "nm": "Soufflenheim",
        "lat": 48.830261,
        "lon": 7.96268
    },
    {
        "id": 2974066,
        "nm": "Souillac",
        "lat": 44.897202,
        "lon": 1.47224
    },
    {
        "id": 2974056,
        "nm": "Soulac-sur-Mer",
        "lat": 45.510681,
        "lon": -1.12524
    },
    {
        "id": 2974007,
        "nm": "Soullans",
        "lat": 46.796242,
        "lon": -1.90106
    },
    {
        "id": 2973993,
        "nm": "Soultz-Haut-Rhin",
        "lat": 47.887402,
        "lon": 7.23042
    },
    {
        "id": 2973990,
        "nm": "Soultz-sous-Forets",
        "lat": 48.93586,
        "lon": 7.88307
    },
    {
        "id": 2973991,
        "nm": "Soultzmatt",
        "lat": 47.96188,
        "lon": 7.23759
    },
    {
        "id": 2973963,
        "nm": "Souppes-sur-Loing",
        "lat": 48.182968,
        "lon": 2.73521
    },
    {
        "id": 2973949,
        "nm": "Sourdeval",
        "lat": 48.723122,
        "lon": -0.92223
    },
    {
        "id": 2973938,
        "nm": "Sours",
        "lat": 48.410431,
        "lon": 1.59889
    },
    {
        "id": 2973918,
        "nm": "Soustons",
        "lat": 43.753281,
        "lon": -1.3278
    },
    {
        "id": 2973897,
        "nm": "Souvigny",
        "lat": 46.53352,
        "lon": 3.19247
    },
    {
        "id": 2973882,
        "nm": "Soyaux",
        "lat": 45.650002,
        "lon": 0.2
    },
    {
        "id": 2973869,
        "nm": "Spay",
        "lat": 47.92384,
        "lon": 0.15258
    },
    {
        "id": 2973857,
        "nm": "Spicheren",
        "lat": 49.192661,
        "lon": 6.96727
    },
    {
        "id": 2973843,
        "nm": "Staffelfelden",
        "lat": 47.826469,
        "lon": 7.25235
    },
    {
        "id": 2973841,
        "nm": "Stains",
        "lat": 48.950001,
        "lon": 2.38333
    },
    {
        "id": 2973823,
        "nm": "Steenvoorde",
        "lat": 50.810459,
        "lon": 2.58244
    },
    {
        "id": 2973821,
        "nm": "Steenwerck",
        "lat": 50.701988,
        "lon": 2.77829
    },
    {
        "id": 2973818,
        "nm": "Steinbourg",
        "lat": 48.770279,
        "lon": 7.41354
    },
    {
        "id": 2973809,
        "nm": "Stenay",
        "lat": 49.494888,
        "lon": 5.18606
    },
    {
        "id": 2973795,
        "nm": "Stiring-Wendel",
        "lat": 49.200001,
        "lon": 6.93333
    },
    {
        "id": 2973783,
        "nm": "Strasbourg",
        "lat": 48.58342,
        "lon": 7.74296
    },
    {
        "id": 2973748,
        "nm": "Suce-sur-Erdre",
        "lat": 47.333328,
        "lon": -1.53333
    },
    {
        "id": 2973745,
        "nm": "Sucy-en-Brie",
        "lat": 48.768719,
        "lon": 2.53474
    },
    {
        "id": 2973720,
        "nm": "Suippes",
        "lat": 49.12886,
        "lon": 4.53446
    },
    {
        "id": 2973703,
        "nm": "Sully-sur-Loire",
        "lat": 47.763721,
        "lon": 2.37238
    },
    {
        "id": 2973702,
        "nm": "Sulniac",
        "lat": 47.673752,
        "lon": -2.57136
    },
    {
        "id": 2973698,
        "nm": "Sundhoffen",
        "lat": 48.042629,
        "lon": 7.4132
    },
    {
        "id": 2974203,
        "nm": "Sureda",
        "lat": 42.530689,
        "lon": 2.95708
    },
    {
        "id": 2973675,
        "nm": "Suresnes",
        "lat": 48.871429,
        "lon": 2.22929
    },
    {
        "id": 2973672,
        "nm": "Surgeres",
        "lat": 46.1082,
        "lon": -0.75148
    },
    {
        "id": 2973645,
        "nm": "Survilliers",
        "lat": 49.097118,
        "lon": 2.54449
    },
    {
        "id": 2973639,
        "nm": "Sury-le-Comtal",
        "lat": 45.534199,
        "lon": 4.18642
    },
    {
        "id": 2973637,
        "nm": "Surzur",
        "lat": 47.578499,
        "lon": -2.62892
    },
    {
        "id": 2973626,
        "nm": "Sussargues",
        "lat": 43.712502,
        "lon": 4.0031
    },
    {
        "id": 2973579,
        "nm": "Taden",
        "lat": 48.4753,
        "lon": -2.01946
    },
    {
        "id": 2973564,
        "nm": "Taillades",
        "lat": 43.835918,
        "lon": 5.09216
    },
    {
        "id": 2973524,
        "nm": "Taissy",
        "lat": 49.215092,
        "lon": 4.09406
    },
    {
        "id": 2973511,
        "nm": "Talange",
        "lat": 49.236698,
        "lon": 6.17282
    },
    {
        "id": 2973510,
        "nm": "Talant",
        "lat": 47.336941,
        "lon": 5.00888
    },
    {
        "id": 2973495,
        "nm": "Talence",
        "lat": 44.804771,
        "lon": -0.59543
    },
    {
        "id": 2973492,
        "nm": "Talensac",
        "lat": 48.108471,
        "lon": -1.92829
    },
    {
        "id": 2973457,
        "nm": "Taluyers",
        "lat": 45.639912,
        "lon": 4.72194
    },
    {
        "id": 2973424,
        "nm": "Taninges",
        "lat": 46.108829,
        "lon": 6.59231
    },
    {
        "id": 2973394,
        "nm": "Tarare",
        "lat": 45.89761,
        "lon": 4.43272
    },
    {
        "id": 2973393,
        "nm": "Tarascon",
        "lat": 43.805828,
        "lon": 4.66028
    },
    {
        "id": 2973392,
        "nm": "Tarascon-sur-Ariege",
        "lat": 42.845451,
        "lon": 1.60332
    },
    {
        "id": 2973385,
        "nm": "Tarbes",
        "lat": 43.23333,
        "lon": 0.08333
    },
    {
        "id": 2973355,
        "nm": "Tarnos",
        "lat": 43.541698,
        "lon": -1.46281
    },
    {
        "id": 2973338,
        "nm": "Tartas",
        "lat": 43.832481,
        "lon": -0.80895
    },
    {
        "id": 2973317,
        "nm": "Tassin-la-Demi-Lune",
        "lat": 45.75499,
        "lon": 4.78812
    },
    {
        "id": 2973303,
        "nm": "Taule",
        "lat": 48.599998,
        "lon": -3.9
    },
    {
        "id": 2973297,
        "nm": "Taupont",
        "lat": 47.95961,
        "lon": -2.43933
    },
    {
        "id": 2973267,
        "nm": "Tavaux",
        "lat": 47.03376,
        "lon": 5.405
    },
    {
        "id": 2973258,
        "nm": "Taverny",
        "lat": 49.025421,
        "lon": 2.21691
    },
    {
        "id": 2973197,
        "nm": "Telgruc-sur-Mer",
        "lat": 48.23333,
        "lon": -4.35
    },
    {
        "id": 2973192,
        "nm": "Teloche",
        "lat": 47.888191,
        "lon": 0.27086
    },
    {
        "id": 2973188,
        "nm": "Templemars",
        "lat": 50.573872,
        "lon": 3.05436
    },
    {
        "id": 2973187,
        "nm": "Templeuve",
        "lat": 50.523361,
        "lon": 3.17809
    },
    {
        "id": 2973182,
        "nm": "Tence",
        "lat": 45.115028,
        "lon": 4.29166
    },
    {
        "id": 2973180,
        "nm": "Tende",
        "lat": 44.085709,
        "lon": 7.5934
    },
    {
        "id": 2973146,
        "nm": "Tergnier",
        "lat": 49.656071,
        "lon": 3.30107
    },
    {
        "id": 2973128,
        "nm": "Ternay",
        "lat": 45.608349,
        "lon": 4.81024
    },
    {
        "id": 2973108,
        "nm": "Terrasson-Lavilledieu",
        "lat": 45.130112,
        "lon": 1.30136
    },
    {
        "id": 2973073,
        "nm": "Terville",
        "lat": 49.347141,
        "lon": 6.13802
    },
    {
        "id": 2973049,
        "nm": "Teteghem",
        "lat": 51.0186,
        "lon": 2.44454
    },
    {
        "id": 2973033,
        "nm": "Teyran",
        "lat": 43.68528,
        "lon": 3.92889
    },
    {
        "id": 2973013,
        "nm": "Thann",
        "lat": 47.816669,
        "lon": 7.08333
    },
    {
        "id": 2973008,
        "nm": "Thaon-les-Vosges",
        "lat": 48.25,
        "lon": 6.41667
    },
    {
        "id": 2972992,
        "nm": "Theding",
        "lat": 49.12941,
        "lon": 6.89315
    },
    {
        "id": 2972979,
        "nm": "Theix",
        "lat": 47.629162,
        "lon": -2.65186
    },
    {
        "id": 2972904,
        "nm": "Thezan-les-Beziers",
        "lat": 43.416672,
        "lon": 3.16667
    },
    {
        "id": 2972893,
        "nm": "Thiais",
        "lat": 48.764961,
        "lon": 2.3961
    },
    {
        "id": 2972889,
        "nm": "Thiant",
        "lat": 50.304798,
        "lon": 3.44796
    },
    {
        "id": 2972857,
        "nm": "Thiers",
        "lat": 45.849998,
        "lon": 3.56667
    },
    {
        "id": 2972851,
        "nm": "Thierville-sur-Meuse",
        "lat": 49.170502,
        "lon": 5.35266
    },
    {
        "id": 2972811,
        "nm": "Thionville",
        "lat": 49.366669,
        "lon": 6.16667
    },
    {
        "id": 2972798,
        "nm": "Thise",
        "lat": 47.284859,
        "lon": 6.08127
    },
    {
        "id": 2972792,
        "nm": "Thiviers",
        "lat": 45.415421,
        "lon": 0.91963
    },
    {
        "id": 2972786,
        "nm": "Thizy",
        "lat": 46.029949,
        "lon": 4.31299
    },
    {
        "id": 2972774,
        "nm": "Thoiry",
        "lat": 46.237621,
        "lon": 5.98111
    },
    {
        "id": 2972754,
        "nm": "Thomery",
        "lat": 48.40723,
        "lon": 2.78852
    },
    {
        "id": 2972749,
        "nm": "Thones",
        "lat": 45.881229,
        "lon": 6.32572
    },
    {
        "id": 2972742,
        "nm": "Thonon-les-Bains",
        "lat": 46.366669,
        "lon": 6.48333
    },
    {
        "id": 2972727,
        "nm": "Thorens-Glieres",
        "lat": 45.994751,
        "lon": 6.24581
    },
    {
        "id": 2972711,
        "nm": "Thorigny-sur-Marne",
        "lat": 48.88689,
        "lon": 2.71806
    },
    {
        "id": 2972696,
        "nm": "Thouare-sur-Loire",
        "lat": 47.268929,
        "lon": -1.43834
    },
    {
        "id": 2972695,
        "nm": "Thouars",
        "lat": 46.976021,
        "lon": -0.21507
    },
    {
        "id": 2972684,
        "nm": "Thourotte",
        "lat": 49.47591,
        "lon": 2.8821
    },
    {
        "id": 2972665,
        "nm": "Thuir",
        "lat": 42.6329,
        "lon": 2.75471
    },
    {
        "id": 2972658,
        "nm": "Thumeries",
        "lat": 50.47662,
        "lon": 3.055
    },
    {
        "id": 2972651,
        "nm": "Thure",
        "lat": 46.832218,
        "lon": 0.45797
    },
    {
        "id": 2972644,
        "nm": "Thurins",
        "lat": 45.680931,
        "lon": 4.63968
    },
    {
        "id": 2972640,
        "nm": "Thury-Harcourt",
        "lat": 48.984341,
        "lon": -0.4752
    },
    {
        "id": 2972633,
        "nm": "Thyez",
        "lat": 46.082489,
        "lon": 6.53777
    },
    {
        "id": 2972620,
        "nm": "Tierce",
        "lat": 47.615871,
        "lon": -0.46609
    },
    {
        "id": 2972607,
        "nm": "Tignes",
        "lat": 45.49604,
        "lon": 6.92463
    },
    {
        "id": 2972605,
        "nm": "Tignieu-Jameyzieu",
        "lat": 45.735641,
        "lon": 5.18046
    },
    {
        "id": 2972600,
        "nm": "Tigy",
        "lat": 47.793652,
        "lon": 2.19766
    },
    {
        "id": 2972555,
        "nm": "Tinchebray",
        "lat": 48.76437,
        "lon": -0.73333
    },
    {
        "id": 2972546,
        "nm": "Tinqueux",
        "lat": 49.25,
        "lon": 3.98333
    },
    {
        "id": 2972544,
        "nm": "Tinteniac",
        "lat": 48.328602,
        "lon": -1.8363
    },
    {
        "id": 2972486,
        "nm": "Tomblaine",
        "lat": 48.683331,
        "lon": 6.21312
    },
    {
        "id": 2972470,
        "nm": "Tonnay-Charente",
        "lat": 45.949001,
        "lon": -0.8935
    },
    {
        "id": 2972468,
        "nm": "Tonneins",
        "lat": 44.392059,
        "lon": 0.31241
    },
    {
        "id": 2972467,
        "nm": "Tonnerre",
        "lat": 47.856281,
        "lon": 3.97369
    },
    {
        "id": 2972444,
        "nm": "Torcy",
        "lat": 48.849998,
        "lon": 2.65
    },
    {
        "id": 2972445,
        "nm": "Torcy",
        "lat": 46.76857,
        "lon": 4.45333
    },
    {
        "id": 2972430,
        "nm": "Torfou",
        "lat": 47.036819,
        "lon": -1.11635
    },
    {
        "id": 2972427,
        "nm": "Torigni-sur-Vire",
        "lat": 49.037022,
        "lon": -0.98214
    },
    {
        "id": 2972412,
        "nm": "Torreilles",
        "lat": 42.75433,
        "lon": 2.99292
    },
    {
        "id": 2972372,
        "nm": "Toucy",
        "lat": 47.736019,
        "lon": 3.29502
    },
    {
        "id": 2972365,
        "nm": "Toufflers",
        "lat": 50.660389,
        "lon": 3.23358
    },
    {
        "id": 2972350,
        "nm": "Toul",
        "lat": 48.683331,
        "lon": 5.9
    },
    {
        "id": 2972339,
        "nm": "Toulenne",
        "lat": 44.556648,
        "lon": -0.26328
    },
    {
        "id": 2972328,
        "nm": "Toulon",
        "lat": 43.116669,
        "lon": 5.93333
    },
    {
        "id": 2972317,
        "nm": "Toulouges",
        "lat": 42.669609,
        "lon": 2.83008
    },
    {
        "id": 2972315,
        "nm": "Toulouse",
        "lat": 43.604259,
        "lon": 1.44367
    },
    {
        "id": 2972307,
        "nm": "Touques",
        "lat": 49.344429,
        "lon": 0.10218
    },
    {
        "id": 2972284,
        "nm": "Tourcoing",
        "lat": 50.723911,
        "lon": 3.16117
    },
    {
        "id": 2972270,
        "nm": "Tourlaville",
        "lat": 49.638279,
        "lon": -1.56639
    },
    {
        "id": 2972253,
        "nm": "Tournan-en-Brie",
        "lat": 48.741459,
        "lon": 2.772
    },
    {
        "id": 2972237,
        "nm": "Tournefeuille",
        "lat": 43.588718,
        "lon": 1.31922
    },
    {
        "id": 2972203,
        "nm": "Tournus",
        "lat": 46.567581,
        "lon": 4.90574
    },
    {
        "id": 2972195,
        "nm": "Tourrette-Levens",
        "lat": 43.78746,
        "lon": 7.27364
    },
    {
        "id": 2972273,
        "nm": "Tourrettes-sur-Loup",
        "lat": 43.716671,
        "lon": 7.05
    },
    {
        "id": 2972191,
        "nm": "Tours",
        "lat": 47.383331,
        "lon": 0.68333
    },
    {
        "id": 2972168,
        "nm": "Tourves",
        "lat": 43.407761,
        "lon": 5.92415
    },
    {
        "id": 2972163,
        "nm": "Tourville-la-Riviere",
        "lat": 49.32782,
        "lon": 1.10551
    },
    {
        "id": 2972156,
        "nm": "Toury",
        "lat": 48.19397,
        "lon": 1.93484
    },
    {
        "id": 2972146,
        "nm": "Toussieu",
        "lat": 45.653709,
        "lon": 4.98618
    },
    {
        "id": 2972095,
        "nm": "Trainou",
        "lat": 47.97353,
        "lon": 2.10399
    },
    {
        "id": 2972058,
        "nm": "Trans-en-Provence",
        "lat": 43.505001,
        "lon": 6.48571
    },
    {
        "id": 2972049,
        "nm": "Trappes",
        "lat": 48.774132,
        "lon": 2.01781
    },
    {
        "id": 2972010,
        "nm": "Trebes",
        "lat": 43.21064,
        "lon": 2.44165
    },
    {
        "id": 2972009,
        "nm": "Trebeurden",
        "lat": 48.76667,
        "lon": -3.56667
    },
    {
        "id": 2971978,
        "nm": "Treffiagat",
        "lat": 47.816669,
        "lon": -4.26667
    },
    {
        "id": 2971953,
        "nm": "Tregastel",
        "lat": 48.816669,
        "lon": -3.5
    },
    {
        "id": 2971929,
        "nm": "Treguier",
        "lat": 48.783329,
        "lon": -3.23333
    },
    {
        "id": 2971926,
        "nm": "Tregunc",
        "lat": 47.849998,
        "lon": -3.85
    },
    {
        "id": 2971908,
        "nm": "Treillieres",
        "lat": 47.330601,
        "lon": -1.61918
    },
    {
        "id": 2971903,
        "nm": "Treize-Septiers",
        "lat": 46.985241,
        "lon": -1.22921
    },
    {
        "id": 2971896,
        "nm": "Trelaze",
        "lat": 47.445648,
        "lon": -0.4654
    },
    {
        "id": 2971890,
        "nm": "Trelissac",
        "lat": 45.197659,
        "lon": 0.78615
    },
    {
        "id": 2971889,
        "nm": "Trelivan",
        "lat": 48.43198,
        "lon": -2.11748
    },
    {
        "id": 2971887,
        "nm": "Trelon",
        "lat": 50.058048,
        "lon": 4.102
    },
    {
        "id": 2971874,
        "nm": "Tremblay-en-France",
        "lat": 48.949558,
        "lon": 2.5684
    },
    {
        "id": 2971861,
        "nm": "Trementines",
        "lat": 47.123569,
        "lon": -0.785
    },
    {
        "id": 2971856,
        "nm": "Tremeven",
        "lat": 47.900002,
        "lon": -3.53333
    },
    {
        "id": 2971782,
        "nm": "Tresques",
        "lat": 44.106892,
        "lon": 4.5874
    },
    {
        "id": 2971777,
        "nm": "Tressange",
        "lat": 49.40538,
        "lon": 5.98138
    },
    {
        "id": 2971774,
        "nm": "Tresserve",
        "lat": 45.677849,
        "lon": 5.90153
    },
    {
        "id": 2971773,
        "nm": "Tresses",
        "lat": 44.847809,
        "lon": -0.46296
    },
    {
        "id": 2971765,
        "nm": "Trets",
        "lat": 43.448181,
        "lon": 5.68328
    },
    {
        "id": 2971722,
        "nm": "Trevoux",
        "lat": 45.941109,
        "lon": 4.76727
    },
    {
        "id": 2971689,
        "nm": "Triel-sur-Seine",
        "lat": 48.97818,
        "lon": 2.00743
    },
    {
        "id": 2971686,
        "nm": "Trieux",
        "lat": 49.324459,
        "lon": 5.93644
    },
    {
        "id": 2971680,
        "nm": "Trignac",
        "lat": 47.318089,
        "lon": -2.18895
    },
    {
        "id": 2971673,
        "nm": "Trilport",
        "lat": 48.956848,
        "lon": 2.95076
    },
    {
        "id": 2971651,
        "nm": "Trith-Saint-Leger",
        "lat": 50.316669,
        "lon": 3.48333
    },
    {
        "id": 2971641,
        "nm": "Troarn",
        "lat": 49.178349,
        "lon": -0.18169
    },
    {
        "id": 2971580,
        "nm": "Trosly-Breuil",
        "lat": 49.400002,
        "lon": 2.96667
    },
    {
        "id": 2971555,
        "nm": "Trouville-sur-Mer",
        "lat": 49.3657,
        "lon": 0.08041
    },
    {
        "id": 2971553,
        "nm": "Trouy",
        "lat": 47.011532,
        "lon": 2.36018
    },
    {
        "id": 2971549,
        "nm": "Troyes",
        "lat": 48.299999,
        "lon": 4.08333
    },
    {
        "id": 2971536,
        "nm": "Truchtersheim",
        "lat": 48.663132,
        "lon": 7.60752
    },
    {
        "id": 2971504,
        "nm": "Tucquegnieux",
        "lat": 49.301399,
        "lon": 5.88247
    },
    {
        "id": 2971482,
        "nm": "Tulle",
        "lat": 45.26667,
        "lon": 1.76667
    },
    {
        "id": 2971480,
        "nm": "Tullins",
        "lat": 45.298611,
        "lon": 5.48608
    },
    {
        "id": 2971469,
        "nm": "Turckheim",
        "lat": 48.087479,
        "lon": 7.27707
    },
    {
        "id": 2971412,
        "nm": "Uchaud",
        "lat": 43.758572,
        "lon": 4.26843
    },
    {
        "id": 2971407,
        "nm": "Uckange",
        "lat": 49.30304,
        "lon": 6.1492
    },
    {
        "id": 2971399,
        "nm": "Ugine",
        "lat": 45.750839,
        "lon": 6.41611
    },
    {
        "id": 2971377,
        "nm": "Unieux",
        "lat": 45.400398,
        "lon": 4.27812
    },
    {
        "id": 7626220,
        "nm": "University of Technology of Compiegne",
        "lat": 49.414799,
        "lon": 2.81683
    },
    {
        "id": 2971357,
        "nm": "Urcuit",
        "lat": 43.485939,
        "lon": -1.33668
    },
    {
        "id": 2971336,
        "nm": "Urrugne",
        "lat": 43.363609,
        "lon": -1.69921
    },
    {
        "id": 2971321,
        "nm": "Urville-Nacqueville",
        "lat": 49.674438,
        "lon": -1.73664
    },
    {
        "id": 2971305,
        "nm": "Ussac",
        "lat": 45.19389,
        "lon": 1.51337
    },
    {
        "id": 2971298,
        "nm": "Ussel",
        "lat": 45.549999,
        "lon": 2.31667
    },
    {
        "id": 2971286,
        "nm": "Ustaritz",
        "lat": 43.3965,
        "lon": -1.45604
    },
    {
        "id": 2971274,
        "nm": "Uxegney",
        "lat": 48.196522,
        "lon": 6.36971
    },
    {
        "id": 2971259,
        "nm": "Uzerche",
        "lat": 45.4212,
        "lon": 1.56395
    },
    {
        "id": 2971258,
        "nm": "Uzes",
        "lat": 44.013618,
        "lon": 4.41529
    },
    {
        "id": 2971186,
        "nm": "Vagney",
        "lat": 48.00629,
        "lon": 6.7174
    },
    {
        "id": 2971176,
        "nm": "Vailhauques",
        "lat": 43.671589,
        "lon": 3.72042
    },
    {
        "id": 2971169,
        "nm": "Vailly-sur-Aisne",
        "lat": 49.40834,
        "lon": 3.51631
    },
    {
        "id": 2971157,
        "nm": "Vaires-sur-Marne",
        "lat": 48.876492,
        "lon": 2.63982
    },
    {
        "id": 2971154,
        "nm": "Vaison-la-Romaine",
        "lat": 44.23896,
        "lon": 5.07461
    },
    {
        "id": 2971147,
        "nm": "Vaivre-et-Montoille",
        "lat": 47.630211,
        "lon": 6.10362
    },
    {
        "id": 6544556,
        "nm": "Val Thorens",
        "lat": 45.297771,
        "lon": 6.58377
    },
    {
        "id": 6619659,
        "nm": "Val-de-Reuil",
        "lat": 49.273849,
        "lon": 1.21021
    },
    {
        "id": 2971117,
        "nm": "Valbonne",
        "lat": 43.632919,
        "lon": 6.99911
    },
    {
        "id": 2998998,
        "nm": "Valdahon",
        "lat": 47.150002,
        "lon": 6.35
    },
    {
        "id": 2971072,
        "nm": "Valdoie",
        "lat": 47.667992,
        "lon": 6.84446
    },
    {
        "id": 2971056,
        "nm": "Valencay",
        "lat": 47.162071,
        "lon": 1.56852
    },
    {
        "id": 2971053,
        "nm": "Valence",
        "lat": 44.933331,
        "lon": 4.9
    },
    {
        "id": 2971054,
        "nm": "Valence",
        "lat": 44.108231,
        "lon": 0.89101
    },
    {
        "id": 2971041,
        "nm": "Valenciennes",
        "lat": 50.349998,
        "lon": 3.53333
    },
    {
        "id": 2971039,
        "nm": "Valencin",
        "lat": 45.61285,
        "lon": 5.01565
    },
    {
        "id": 2971033,
        "nm": "Valensole",
        "lat": 43.83799,
        "lon": 5.98323
    },
    {
        "id": 2971030,
        "nm": "Valentigney",
        "lat": 47.463879,
        "lon": 6.83168
    },
    {
        "id": 2971027,
        "nm": "Valenton",
        "lat": 48.74527,
        "lon": 2.46467
    },
    {
        "id": 2971025,
        "nm": "Valergues",
        "lat": 43.66824,
        "lon": 4.06124
    },
    {
        "id": 2971006,
        "nm": "Valfin-les-Saint-Claude",
        "lat": 46.43758,
        "lon": 5.85513
    },
    {
        "id": 2970962,
        "nm": "Vallauris",
        "lat": 43.57803,
        "lon": 7.05451
    },
    {
        "id": 2970948,
        "nm": "Valleiry",
        "lat": 46.111172,
        "lon": 5.97267
    },
    {
        "id": 2970932,
        "nm": "Valleroy",
        "lat": 49.209049,
        "lon": 5.9383
    },
    {
        "id": 2970923,
        "nm": "Vallet",
        "lat": 47.16227,
        "lon": -1.26607
    },
    {
        "id": 2970865,
        "nm": "Valmont",
        "lat": 49.083832,
        "lon": 6.69942
    },
    {
        "id": 2970860,
        "nm": "Valognes",
        "lat": 49.508808,
        "lon": -1.47047
    },
    {
        "id": 2970839,
        "nm": "Valras-Plage",
        "lat": 43.248081,
        "lon": 3.29032
    },
    {
        "id": 2970838,
        "nm": "Valreas",
        "lat": 44.383659,
        "lon": 4.99084
    },
    {
        "id": 2970828,
        "nm": "Vals-les-Bains",
        "lat": 44.663872,
        "lon": 4.36861
    },
    {
        "id": 2970826,
        "nm": "Vals-pres-le-Puy",
        "lat": 45.031551,
        "lon": 3.87787
    },
    {
        "id": 2970797,
        "nm": "Vandoeuvre-les-Nancy",
        "lat": 48.650002,
        "lon": 6.18333
    },
    {
        "id": 2970777,
        "nm": "Vannes",
        "lat": 47.666672,
        "lon": -2.75
    },
    {
        "id": 2970761,
        "nm": "Vanves",
        "lat": 48.823448,
        "lon": 2.29025
    },
    {
        "id": 2970747,
        "nm": "Varades",
        "lat": 47.384579,
        "lon": -1.02842
    },
    {
        "id": 2970739,
        "nm": "Varangeville",
        "lat": 48.636051,
        "lon": 6.32112
    },
    {
        "id": 2970693,
        "nm": "Varennes-Jarcy",
        "lat": 48.679138,
        "lon": 2.56152
    },
    {
        "id": 2970692,
        "nm": "Varennes-le-Grand",
        "lat": 46.718681,
        "lon": 4.86872
    },
    {
        "id": 2970685,
        "nm": "Varennes-sur-Allier",
        "lat": 46.31472,
        "lon": 3.39846
    },
    {
        "id": 2970681,
        "nm": "Varennes-sur-Loire",
        "lat": 47.237671,
        "lon": 0.0535
    },
    {
        "id": 2970679,
        "nm": "Varennes-sur-Seine",
        "lat": 48.373039,
        "lon": 2.92571
    },
    {
        "id": 3024865,
        "nm": "Varennes-Vauzelles",
        "lat": 47.016781,
        "lon": 3.14037
    },
    {
        "id": 2970673,
        "nm": "Varetz",
        "lat": 45.193901,
        "lon": 1.45121
    },
    {
        "id": 2970669,
        "nm": "Varilhes",
        "lat": 43.045139,
        "lon": 1.62805
    },
    {
        "id": 2970653,
        "nm": "Varois-et-Chaignot",
        "lat": 47.350578,
        "lon": 5.12838
    },
    {
        "id": 2970650,
        "nm": "Varreddes",
        "lat": 49.003052,
        "lon": 2.92788
    },
    {
        "id": 2970606,
        "nm": "Vatan",
        "lat": 47.074471,
        "lon": 1.8101
    },
    {
        "id": 2970546,
        "nm": "Vaucouleurs",
        "lat": 48.60313,
        "lon": 5.66659
    },
    {
        "id": 2970540,
        "nm": "Vaucresson",
        "lat": 48.840778,
        "lon": 2.15652
    },
    {
        "id": 2970477,
        "nm": "Vaugneray",
        "lat": 45.737171,
        "lon": 4.65873
    },
    {
        "id": 2970472,
        "nm": "Vauhallan",
        "lat": 48.73354,
        "lon": 2.20277
    },
    {
        "id": 2970469,
        "nm": "Vaujours",
        "lat": 48.930222,
        "lon": 2.5711
    },
    {
        "id": 2970462,
        "nm": "Vaulnaveys-le-Haut",
        "lat": 45.116959,
        "lon": 5.81257
    },
    {
        "id": 2970456,
        "nm": "Vaulx-en-Velin",
        "lat": 45.781799,
        "lon": 4.92085
    },
    {
        "id": 2970455,
        "nm": "Vaulx-Milieu",
        "lat": 45.612259,
        "lon": 5.181
    },
    {
        "id": 2970432,
        "nm": "Vaureal",
        "lat": 49.033329,
        "lon": 2.03333
    },
    {
        "id": 2970407,
        "nm": "Vauvert",
        "lat": 43.69529,
        "lon": 4.27705
    },
    {
        "id": 2970338,
        "nm": "Vaux-le-Penil",
        "lat": 48.52803,
        "lon": 2.69165
    },
    {
        "id": 2970317,
        "nm": "Vaux-sur-Mer",
        "lat": 45.646061,
        "lon": -1.05841
    },
    {
        "id": 2970313,
        "nm": "Vaux-sur-Seine",
        "lat": 49.012711,
        "lon": 1.96942
    },
    {
        "id": 2970287,
        "nm": "Vayres",
        "lat": 44.900002,
        "lon": -0.31667
    },
    {
        "id": 2970275,
        "nm": "Veauche",
        "lat": 45.562939,
        "lon": 4.29031
    },
    {
        "id": 2970253,
        "nm": "Vedene",
        "lat": 43.97744,
        "lon": 4.90428
    },
    {
        "id": 2970237,
        "nm": "Veigne",
        "lat": 47.285561,
        "lon": 0.74079
    },
    {
        "id": 2970236,
        "nm": "Veigy-Foncenex",
        "lat": 46.270439,
        "lon": 6.25419
    },
    {
        "id": 2970216,
        "nm": "Velaux",
        "lat": 43.528389,
        "lon": 5.25661
    },
    {
        "id": 2970203,
        "nm": "Velizy-Villacoublay",
        "lat": 48.781979,
        "lon": 2.19395
    },
    {
        "id": 2970187,
        "nm": "Velleron",
        "lat": 43.957588,
        "lon": 5.02879
    },
    {
        "id": 2970163,
        "nm": "Vemars",
        "lat": 49.06942,
        "lon": 2.56643
    },
    {
        "id": 2970157,
        "nm": "Venansault",
        "lat": 46.685162,
        "lon": -1.51415
    },
    {
        "id": 2970154,
        "nm": "Venarey-les-Laumes",
        "lat": 47.542019,
        "lon": 4.46022
    },
    {
        "id": 2970148,
        "nm": "Vence",
        "lat": 43.721619,
        "lon": 7.11232
    },
    {
        "id": 2970144,
        "nm": "Vendargues",
        "lat": 43.658329,
        "lon": 3.97
    },
    {
        "id": 2970143,
        "nm": "Vendat",
        "lat": 46.160149,
        "lon": 3.35451
    },
    {
        "id": 2970128,
        "nm": "Vendenheim",
        "lat": 48.669479,
        "lon": 7.70983
    },
    {
        "id": 2970120,
        "nm": "Vendeuvre-du-Poitou",
        "lat": 46.73579,
        "lon": 0.30996
    },
    {
        "id": 2970119,
        "nm": "Vendeuvre-sur-Barse",
        "lat": 48.237862,
        "lon": 4.46905
    },
    {
        "id": 2970113,
        "nm": "Vendin-le-Vieil",
        "lat": 50.47385,
        "lon": 2.86674
    },
    {
        "id": 2970114,
        "nm": "Vendin-les-Bethune",
        "lat": 50.540119,
        "lon": 2.60043
    },
    {
        "id": 2970110,
        "nm": "Vendome",
        "lat": 47.799999,
        "lon": 1.06667
    },
    {
        "id": 2970092,
        "nm": "Venelles",
        "lat": 43.598389,
        "lon": 5.4853
    },
    {
        "id": 2970086,
        "nm": "Venerque",
        "lat": 43.43457,
        "lon": 1.44588
    },
    {
        "id": 2970081,
        "nm": "Venette",
        "lat": 49.417049,
        "lon": 2.80317
    },
    {
        "id": 2970080,
        "nm": "Veneux-les-Sablons",
        "lat": 48.378719,
        "lon": 2.79499
    },
    {
        "id": 2970072,
        "nm": "Venissieux",
        "lat": 45.702541,
        "lon": 4.87147
    },
    {
        "id": 2970061,
        "nm": "Venoy",
        "lat": 47.80518,
        "lon": 3.63695
    },
    {
        "id": 2970054,
        "nm": "Ventabren",
        "lat": 43.538471,
        "lon": 5.29541
    },
    {
        "id": 2970033,
        "nm": "Ventiseri",
        "lat": 41.941689,
        "lon": 9.33172
    },
    {
        "id": 2970018,
        "nm": "Verberie",
        "lat": 49.31115,
        "lon": 2.7321
    },
    {
        "id": 2969958,
        "nm": "Verdun",
        "lat": 49.166672,
        "lon": 5.38333
    },
    {
        "id": 2969960,
        "nm": "Verdun-sur-Garonne",
        "lat": 43.854462,
        "lon": 1.23425
    },
    {
        "id": 2969947,
        "nm": "Veretz",
        "lat": 47.357059,
        "lon": 0.80575
    },
    {
        "id": 2969944,
        "nm": "Verfeil",
        "lat": 43.65781,
        "lon": 1.6634
    },
    {
        "id": 2969930,
        "nm": "Vergeze",
        "lat": 43.744041,
        "lon": 4.22109
    },
    {
        "id": 2969871,
        "nm": "Verlinghem",
        "lat": 50.682911,
        "lon": 2.99907
    },
    {
        "id": 2969864,
        "nm": "Vermelles",
        "lat": 50.489491,
        "lon": 2.74739
    },
    {
        "id": 2969741,
        "nm": "Vern-sur-Seiche",
        "lat": 48.045139,
        "lon": -1.60057
    },
    {
        "id": 2969854,
        "nm": "Vernaison",
        "lat": 45.646931,
        "lon": 4.81249
    },
    {
        "id": 2969850,
        "nm": "Vernantes",
        "lat": 47.3932,
        "lon": 0.05304
    },
    {
        "id": 2998879,
        "nm": "Vernet",
        "lat": 43.433331,
        "lon": 1.41667
    },
    {
        "id": 2969806,
        "nm": "Verneuil-en-Halatte",
        "lat": 49.27914,
        "lon": 2.5241
    },
    {
        "id": 2969799,
        "nm": "Verneuil-sur-Avre",
        "lat": 48.739491,
        "lon": 0.92731
    },
    {
        "id": 2969796,
        "nm": "Verneuil-sur-Seine",
        "lat": 48.973881,
        "lon": 1.9648
    },
    {
        "id": 2969794,
        "nm": "Verneuil-sur-Vienne",
        "lat": 45.85524,
        "lon": 1.10133
    },
    {
        "id": 2969781,
        "nm": "Verniolle",
        "lat": 43.081619,
        "lon": 1.64904
    },
    {
        "id": 2969766,
        "nm": "Vernon",
        "lat": 49.092918,
        "lon": 1.46332
    },
    {
        "id": 2969749,
        "nm": "Vernou-la-Celle-sur-Seine",
        "lat": 48.38789,
        "lon": 2.84718
    },
    {
        "id": 2969750,
        "nm": "Vernou-sur-Brenne",
        "lat": 47.419361,
        "lon": 0.84758
    },
    {
        "id": 2969751,
        "nm": "Vernouillet",
        "lat": 48.971458,
        "lon": 1.98082
    },
    {
        "id": 2969752,
        "nm": "Vernouillet",
        "lat": 48.720901,
        "lon": 1.36951
    },
    {
        "id": 2969722,
        "nm": "Verquin",
        "lat": 50.502399,
        "lon": 2.63888
    },
    {
        "id": 2969692,
        "nm": "Verrieres-le-Buisson",
        "lat": 48.745651,
        "lon": 2.26796
    },
    {
        "id": 2969679,
        "nm": "Versailles",
        "lat": 48.799999,
        "lon": 2.13333
    },
    {
        "id": 2969665,
        "nm": "Verson",
        "lat": 49.15432,
        "lon": -0.45628
    },
    {
        "id": 2969664,
        "nm": "Versonnex",
        "lat": 45.927528,
        "lon": 5.92585
    },
    {
        "id": 2969617,
        "nm": "Vert-le-Grand",
        "lat": 48.57172,
        "lon": 2.35776
    },
    {
        "id": 2969616,
        "nm": "Vert-le-Petit",
        "lat": 48.551628,
        "lon": 2.36526
    },
    {
        "id": 2969608,
        "nm": "Vert-Saint-Denis",
        "lat": 48.56818,
        "lon": 2.62008
    },
    {
        "id": 2969646,
        "nm": "Vertaizon",
        "lat": 45.771358,
        "lon": 3.28884
    },
    {
        "id": 2969613,
        "nm": "Verton",
        "lat": 50.40234,
        "lon": 1.64766
    },
    {
        "id": 2969612,
        "nm": "Vertou",
        "lat": 47.16869,
        "lon": -1.46929
    },
    {
        "id": 2969607,
        "nm": "Vertus",
        "lat": 48.90609,
        "lon": 4.00216
    },
    {
        "id": 2969599,
        "nm": "Vervins",
        "lat": 49.833328,
        "lon": 3.9
    },
    {
        "id": 2969578,
        "nm": "Vescovato",
        "lat": 42.492779,
        "lon": 9.43916
    },
    {
        "id": 2969562,
        "nm": "Vesoul",
        "lat": 47.633331,
        "lon": 6.16667
    },
    {
        "id": 2969543,
        "nm": "Vetraz-Monthoux",
        "lat": 46.174301,
        "lon": 6.25852
    },
    {
        "id": 2969516,
        "nm": "Veynes",
        "lat": 44.533329,
        "lon": 5.81667
    },
    {
        "id": 2969506,
        "nm": "Veyre-Monton",
        "lat": 45.668659,
        "lon": 3.17144
    },
    {
        "id": 2969502,
        "nm": "Veyrier-du-Lac",
        "lat": 45.879902,
        "lon": 6.17751
    },
    {
        "id": 2969465,
        "nm": "Vezin-le-Coquet",
        "lat": 48.118568,
        "lon": -1.75466
    },
    {
        "id": 2969423,
        "nm": "Viarmes",
        "lat": 49.130821,
        "lon": 2.37074
    },
    {
        "id": 2969421,
        "nm": "Vias",
        "lat": 43.311562,
        "lon": 3.41774
    },
    {
        "id": 2969411,
        "nm": "Vibraye",
        "lat": 48.056068,
        "lon": 0.74171
    },
    {
        "id": 2969401,
        "nm": "Vic-en-Bigorre",
        "lat": 43.383331,
        "lon": 0.05
    },
    {
        "id": 2969400,
        "nm": "Vic-Fezensac",
        "lat": 43.771832,
        "lon": 0.31368
    },
    {
        "id": 2969389,
        "nm": "Vic-la-Gardiole",
        "lat": 43.490799,
        "lon": 3.7975
    },
    {
        "id": 2969388,
        "nm": "Vic-le-Comte",
        "lat": 45.643169,
        "lon": 3.24638
    },
    {
        "id": 2969365,
        "nm": "Vic-sur-Cere",
        "lat": 44.97929,
        "lon": 2.62485
    },
    {
        "id": 2969392,
        "nm": "Vichy",
        "lat": 46.116669,
        "lon": 3.41667
    },
    {
        "id": 2969353,
        "nm": "Vidauban",
        "lat": 43.427799,
        "lon": 6.4329
    },
    {
        "id": 2969316,
        "nm": "Vieillevigne",
        "lat": 46.972141,
        "lon": -1.43405
    },
    {
        "id": 2969284,
        "nm": "Vienne",
        "lat": 45.51667,
        "lon": 4.86667
    },
    {
        "id": 2969257,
        "nm": "Vierzon",
        "lat": 47.216671,
        "lon": 2.08333
    },
    {
        "id": 2969234,
        "nm": "Vieux-Berquin",
        "lat": 50.694889,
        "lon": 2.64444
    },
    {
        "id": 2969219,
        "nm": "Vieux-Charmont",
        "lat": 47.5219,
        "lon": 6.83738
    },
    {
        "id": 2969213,
        "nm": "Vieux-Conde",
        "lat": 50.459438,
        "lon": 3.56738
    },
    {
        "id": 2969176,
        "nm": "Vieux-Thann",
        "lat": 47.803471,
        "lon": 7.12068
    },
    {
        "id": 2969160,
        "nm": "Vif",
        "lat": 45.054359,
        "lon": 5.67757
    },
    {
        "id": 2969146,
        "nm": "Vignacourt",
        "lat": 50.01236,
        "lon": 2.19743
    },
    {
        "id": 2969111,
        "nm": "Vigneux-de-Bretagne",
        "lat": 47.32547,
        "lon": -1.73678
    },
    {
        "id": 2969109,
        "nm": "Vigneux-sur-Seine",
        "lat": 48.702911,
        "lon": 2.41357
    },
    {
        "id": 2969087,
        "nm": "Vignoux-sur-Barangeon",
        "lat": 47.20068,
        "lon": 2.17258
    },
    {
        "id": 2969073,
        "nm": "Vihiers",
        "lat": 47.146309,
        "lon": -0.53238
    },
    {
        "id": 2969058,
        "nm": "Villabe",
        "lat": 48.589489,
        "lon": 2.45096
    },
    {
        "id": 2969046,
        "nm": "Village-Neuf",
        "lat": 47.59016,
        "lon": 7.57019
    },
    {
        "id": 2969032,
        "nm": "Villaines-la-Juhel",
        "lat": 48.344158,
        "lon": -0.27734
    },
    {
        "id": 2968985,
        "nm": "Villard-Bonnot",
        "lat": 45.240002,
        "lon": 5.89015
    },
    {
        "id": 2968984,
        "nm": "Villard-de-Lans",
        "lat": 45.070702,
        "lon": 5.55281
    },
    {
        "id": 2968935,
        "nm": "Villars",
        "lat": 45.47118,
        "lon": 4.35447
    },
    {
        "id": 2968917,
        "nm": "Villars-les-Dombes",
        "lat": 46.00227,
        "lon": 5.02905
    },
    {
        "id": 2968897,
        "nm": "Villaz",
        "lat": 45.950691,
        "lon": 6.18717
    },
    {
        "id": 2968819,
        "nm": "Ville-dAvray",
        "lat": 48.823582,
        "lon": 2.19311
    },
    {
        "id": 2968703,
        "nm": "Ville-la-Grand",
        "lat": 46.202999,
        "lon": 6.2501
    },
    {
        "id": 2968879,
        "nm": "Villebarou",
        "lat": 47.62344,
        "lon": 1.32252
    },
    {
        "id": 2968861,
        "nm": "Villebon-sur-Yvette",
        "lat": 48.70594,
        "lon": 2.24019
    },
    {
        "id": 2968823,
        "nm": "Villecresnes",
        "lat": 48.72002,
        "lon": 2.5394
    },
    {
        "id": 2968805,
        "nm": "Villedieu-la-Blouere",
        "lat": 47.147381,
        "lon": -1.06286
    },
    {
        "id": 2968801,
        "nm": "Villedieu-les-Poeles",
        "lat": 48.833328,
        "lon": -1.21667
    },
    {
        "id": 2968800,
        "nm": "Villedieu-sur-Indre",
        "lat": 46.845982,
        "lon": 1.53975
    },
    {
        "id": 2968771,
        "nm": "Villefontaine",
        "lat": 45.612499,
        "lon": 5.14558
    },
    {
        "id": 2968758,
        "nm": "Villefranche-de-Lauragais",
        "lat": 43.400002,
        "lon": 1.71694
    },
    {
        "id": 2968755,
        "nm": "Villefranche-de-Rouergue",
        "lat": 44.349998,
        "lon": 2.05
    },
    {
        "id": 2968765,
        "nm": "Villefranche-sur-Cher",
        "lat": 47.299999,
        "lon": 1.76667
    },
    {
        "id": 2968749,
        "nm": "Villefranche-sur-Mer",
        "lat": 43.7047,
        "lon": 7.30776
    },
    {
        "id": 2968748,
        "nm": "Villefranche-sur-Saone",
        "lat": 45.98333,
        "lon": 4.71667
    },
    {
        "id": 2968744,
        "nm": "Villefranque",
        "lat": 43.43631,
        "lon": -1.45324
    },
    {
        "id": 2968705,
        "nm": "Villejuif",
        "lat": 48.7939,
        "lon": 2.35992
    },
    {
        "id": 2968701,
        "nm": "Villelaure",
        "lat": 43.713188,
        "lon": 5.43072
    },
    {
        "id": 2968691,
        "nm": "Villelongue-de-la-Salanque",
        "lat": 42.726372,
        "lon": 2.9824
    },
    {
        "id": 2968682,
        "nm": "Villemandeur",
        "lat": 47.987011,
        "lon": 2.71802
    },
    {
        "id": 2968655,
        "nm": "Villemoisson-sur-Orge",
        "lat": 48.666321,
        "lon": 2.33657
    },
    {
        "id": 2968653,
        "nm": "Villemomble",
        "lat": 48.883331,
        "lon": 2.5
    },
    {
        "id": 2968631,
        "nm": "Villemoustaussou",
        "lat": 43.251862,
        "lon": 2.36552
    },
    {
        "id": 2968626,
        "nm": "Villemur-sur-Tarn",
        "lat": 43.867081,
        "lon": 1.50281
    },
    {
        "id": 2968624,
        "nm": "Villenauxe-la-Grande",
        "lat": 48.583328,
        "lon": 3.55
    },
    {
        "id": 2968620,
        "nm": "Villenave-dOrnon",
        "lat": 44.77327,
        "lon": -0.5442
    },
    {
        "id": 2968575,
        "nm": "Villeneuve",
        "lat": 44.433331,
        "lon": 2.03333
    },
    {
        "id": 2968614,
        "nm": "Villeneuve",
        "lat": 43.89431,
        "lon": 5.86184
    },
    {
        "id": 6543862,
        "nm": "Villeneuve-dAscq",
        "lat": 50.616692,
        "lon": 3.16664
    },
    {
        "id": 2968574,
        "nm": "Villeneuve-de-Berg",
        "lat": 44.55732,
        "lon": 4.50265
    },
    {
        "id": 2968571,
        "nm": "Villeneuve-de-la-Raho",
        "lat": 42.63596,
        "lon": 2.91651
    },
    {
        "id": 2968569,
        "nm": "Villeneuve-de-Marsan",
        "lat": 43.889061,
        "lon": -0.30926
    },
    {
        "id": 2968555,
        "nm": "Villeneuve-la-Garenne",
        "lat": 48.93935,
        "lon": 2.31478
    },
    {
        "id": 2968554,
        "nm": "Villeneuve-la-Guyard",
        "lat": 48.340931,
        "lon": 3.06176
    },
    {
        "id": 2968546,
        "nm": "Villeneuve-le-Roi",
        "lat": 48.736839,
        "lon": 2.40081
    },
    {
        "id": 2968545,
        "nm": "Villeneuve-les-Avignon",
        "lat": 43.968399,
        "lon": 4.7963
    },
    {
        "id": 2968544,
        "nm": "Villeneuve-les-Beziers",
        "lat": 43.31517,
        "lon": 3.28059
    },
    {
        "id": 2968536,
        "nm": "Villeneuve-les-Maguelone",
        "lat": 43.533329,
        "lon": 3.86667
    },
    {
        "id": 2968533,
        "nm": "Villeneuve-Loubet",
        "lat": 43.66663,
        "lon": 7.1204
    },
    {
        "id": 2968529,
        "nm": "Villeneuve-Saint-Georges",
        "lat": 48.732189,
        "lon": 2.44925
    },
    {
        "id": 2968528,
        "nm": "Villeneuve-Saint-Germain",
        "lat": 49.379761,
        "lon": 3.35952
    },
    {
        "id": 2968515,
        "nm": "Villeneuve-sur-Lot",
        "lat": 44.408539,
        "lon": 0.70415
    },
    {
        "id": 2968511,
        "nm": "Villeneuve-sur-Yonne",
        "lat": 48.08247,
        "lon": 3.29688
    },
    {
        "id": 2968510,
        "nm": "Villeneuve-Tolosane",
        "lat": 43.523159,
        "lon": 1.34102
    },
    {
        "id": 2968507,
        "nm": "Villennes-sur-Seine",
        "lat": 48.941368,
        "lon": 1.99137
    },
    {
        "id": 2968502,
        "nm": "Villenoy",
        "lat": 48.94112,
        "lon": 2.8602
    },
    {
        "id": 2968496,
        "nm": "Villeparisis",
        "lat": 48.942081,
        "lon": 2.61463
    },
    {
        "id": 2968482,
        "nm": "Villepinte",
        "lat": 48.962029,
        "lon": 2.53253
    },
    {
        "id": 2968475,
        "nm": "Villepreux",
        "lat": 48.828152,
        "lon": 1.9976
    },
    {
        "id": 2968456,
        "nm": "Villerest",
        "lat": 46,
        "lon": 4.03333
    },
    {
        "id": 2968419,
        "nm": "Villers-Bocage",
        "lat": 49.079601,
        "lon": -0.65412
    },
    {
        "id": 2968415,
        "nm": "Villers-Bretonneux",
        "lat": 49.868439,
        "lon": 2.51688
    },
    {
        "id": 2968405,
        "nm": "Villers-Cotterets",
        "lat": 49.253109,
        "lon": 3.09003
    },
    {
        "id": 2968379,
        "nm": "Villers-le-Lac",
        "lat": 47.06319,
        "lon": 6.66699
    },
    {
        "id": 2968368,
        "nm": "Villers-les-Nancy",
        "lat": 48.671028,
        "lon": 6.15083
    },
    {
        "id": 2968360,
        "nm": "Villers-Outreaux",
        "lat": 50.0359,
        "lon": 3.29947
    },
    {
        "id": 2968348,
        "nm": "Villers-Saint-Paul",
        "lat": 49.288841,
        "lon": 2.48968
    },
    {
        "id": 2968346,
        "nm": "Villers-Semeuse",
        "lat": 49.742008,
        "lon": 4.74697
    },
    {
        "id": 2968335,
        "nm": "Villers-sous-Saint-Leu",
        "lat": 49.212349,
        "lon": 2.39485
    },
    {
        "id": 2968325,
        "nm": "Villers-sur-Mer",
        "lat": 49.322639,
        "lon": 0.00027
    },
    {
        "id": 2968316,
        "nm": "Villerupt",
        "lat": 49.467369,
        "lon": 5.93285
    },
    {
        "id": 2968275,
        "nm": "Villetaneuse",
        "lat": 48.958328,
        "lon": 2.34167
    },
    {
        "id": 2968254,
        "nm": "Villeurbanne",
        "lat": 45.76667,
        "lon": 4.88333
    },
    {
        "id": 2968242,
        "nm": "Villeveque",
        "lat": 47.560951,
        "lon": -0.42383
    },
    {
        "id": 2968238,
        "nm": "Villeveyrac",
        "lat": 43.50095,
        "lon": 3.60723
    },
    {
        "id": 2968176,
        "nm": "Villiers-le-Bel",
        "lat": 49.008751,
        "lon": 2.39819
    },
    {
        "id": 2968152,
        "nm": "Villiers-Saint-Frederic",
        "lat": 48.816669,
        "lon": 1.88333
    },
    {
        "id": 2968142,
        "nm": "Villiers-sur-Marne",
        "lat": 48.831001,
        "lon": 2.54844
    },
    {
        "id": 2968139,
        "nm": "Villiers-sur-Orge",
        "lat": 48.659531,
        "lon": 2.30002
    },
    {
        "id": 2968072,
        "nm": "Vimoutiers",
        "lat": 48.927719,
        "lon": 0.19835
    },
    {
        "id": 2968070,
        "nm": "Vimy",
        "lat": 50.372429,
        "lon": 2.81034
    },
    {
        "id": 2968066,
        "nm": "Vinassan",
        "lat": 43.20443,
        "lon": 3.07463
    },
    {
        "id": 2968064,
        "nm": "Vinay",
        "lat": 45.210751,
        "lon": 5.40806
    },
    {
        "id": 2968054,
        "nm": "Vincennes",
        "lat": 48.848598,
        "lon": 2.43769
    },
    {
        "id": 2968051,
        "nm": "Vincey",
        "lat": 48.33749,
        "lon": 6.33134
    },
    {
        "id": 2968035,
        "nm": "Vineuil",
        "lat": 47.583801,
        "lon": 1.37602
    },
    {
        "id": 2968023,
        "nm": "Vinon-sur-Verdon",
        "lat": 43.72451,
        "lon": 5.81081
    },
    {
        "id": 2968008,
        "nm": "Violaines",
        "lat": 50.541599,
        "lon": 2.7886
    },
    {
        "id": 2967972,
        "nm": "Vire",
        "lat": 48.833328,
        "lon": -0.88333
    },
    {
        "id": 2967955,
        "nm": "Vireux-Wallerand",
        "lat": 50.081959,
        "lon": 4.73017
    },
    {
        "id": 2967949,
        "nm": "Viriat",
        "lat": 46.254841,
        "lon": 5.21567
    },
    {
        "id": 2967934,
        "nm": "Viroflay",
        "lat": 48.800781,
        "lon": 2.16181
    },
    {
        "id": 2967920,
        "nm": "Viry",
        "lat": 46.117168,
        "lon": 6.03717
    },
    {
        "id": 2967917,
        "nm": "Viry-Chatillon",
        "lat": 48.672119,
        "lon": 2.39318
    },
    {
        "id": 2967916,
        "nm": "Viry-Noureuil",
        "lat": 49.632141,
        "lon": 3.24322
    },
    {
        "id": 2967879,
        "nm": "Vitre",
        "lat": 48.11776,
        "lon": -1.20577
    },
    {
        "id": 2967870,
        "nm": "Vitrolles",
        "lat": 43.459999,
        "lon": 5.24861
    },
    {
        "id": 2967863,
        "nm": "Vitry-en-Artois",
        "lat": 50.326599,
        "lon": 2.97999
    },
    {
        "id": 2967856,
        "nm": "Vitry-le-Francois",
        "lat": 48.73333,
        "lon": 4.58333
    },
    {
        "id": 2967850,
        "nm": "Vitry-sur-Orne",
        "lat": 49.265541,
        "lon": 6.11113
    },
    {
        "id": 2967849,
        "nm": "Vitry-sur-Seine",
        "lat": 48.787159,
        "lon": 2.40332
    },
    {
        "id": 2967845,
        "nm": "Vittel",
        "lat": 48.200851,
        "lon": 5.94843
    },
    {
        "id": 2967837,
        "nm": "Viuz-en-Sallaz",
        "lat": 46.145561,
        "lon": 6.40986
    },
    {
        "id": 2967823,
        "nm": "Vivier-au-Court",
        "lat": 49.733261,
        "lon": 4.82939
    },
    {
        "id": 2967820,
        "nm": "Viviers",
        "lat": 44.485149,
        "lon": 4.68721
    },
    {
        "id": 2967803,
        "nm": "Vivonne",
        "lat": 46.429531,
        "lon": 0.26443
    },
    {
        "id": 2967802,
        "nm": "Vivy",
        "lat": 47.326481,
        "lon": -0.05531
    },
    {
        "id": 2967796,
        "nm": "Vizille",
        "lat": 45.07819,
        "lon": 5.77074
    },
    {
        "id": 2967758,
        "nm": "Voiron",
        "lat": 45.363949,
        "lon": 5.59209
    },
    {
        "id": 2967745,
        "nm": "Voisins-le-Bretonneux",
        "lat": 48.757931,
        "lon": 2.05137
    },
    {
        "id": 2967710,
        "nm": "Volvic",
        "lat": 45.87196,
        "lon": 3.03832
    },
    {
        "id": 2967708,
        "nm": "Volx",
        "lat": 43.873829,
        "lon": 5.8413
    },
    {
        "id": 2967700,
        "nm": "Vonnas",
        "lat": 46.21867,
        "lon": 4.99161
    },
    {
        "id": 2967695,
        "nm": "Voreppe",
        "lat": 45.294762,
        "lon": 5.63324
    },
    {
        "id": 2967648,
        "nm": "Vouille",
        "lat": 46.315498,
        "lon": -0.36844
    },
    {
        "id": 2967647,
        "nm": "Vouille",
        "lat": 46.64011,
        "lon": 0.16778
    },
    {
        "id": 2967641,
        "nm": "Voujeaucourt",
        "lat": 47.475128,
        "lon": 6.77431
    },
    {
        "id": 2967628,
        "nm": "Vouneuil-sous-Biard",
        "lat": 46.573872,
        "lon": 0.26988
    },
    {
        "id": 2967627,
        "nm": "Vouneuil-sur-Vienne",
        "lat": 46.71793,
        "lon": 0.53936
    },
    {
        "id": 2967625,
        "nm": "Vourles",
        "lat": 45.656738,
        "lon": 4.77157
    },
    {
        "id": 2967612,
        "nm": "Vouvray",
        "lat": 47.410881,
        "lon": 0.79892
    },
    {
        "id": 2967603,
        "nm": "Vouziers",
        "lat": 49.400002,
        "lon": 4.7
    },
    {
        "id": 2967595,
        "nm": "Voves",
        "lat": 48.271381,
        "lon": 1.62583
    },
    {
        "id": 2967570,
        "nm": "Vrigne-aux-Bois",
        "lat": 49.73716,
        "lon": 4.85567
    },
    {
        "id": 2967542,
        "nm": "Vulaines-sur-Seine",
        "lat": 48.431862,
        "lon": 2.76476
    },
    {
        "id": 2967516,
        "nm": "Wahagnies",
        "lat": 50.486649,
        "lon": 3.03448
    },
    {
        "id": 2967494,
        "nm": "Wallers",
        "lat": 50.374321,
        "lon": 3.39188
    },
    {
        "id": 2967482,
        "nm": "Wambrechies",
        "lat": 50.682758,
        "lon": 3.04784
    },
    {
        "id": 2967460,
        "nm": "Warhem",
        "lat": 50.975922,
        "lon": 2.49303
    },
    {
        "id": 2967449,
        "nm": "Warmeriville",
        "lat": 49.352261,
        "lon": 4.21882
    },
    {
        "id": 2967438,
        "nm": "Wasquehal",
        "lat": 50.670429,
        "lon": 3.13382
    },
    {
        "id": 2967437,
        "nm": "Wasselonne",
        "lat": 48.63723,
        "lon": 7.44731
    },
    {
        "id": 2967434,
        "nm": "Wassy",
        "lat": 48.498112,
        "lon": 4.94775
    },
    {
        "id": 2967426,
        "nm": "Watten",
        "lat": 50.836849,
        "lon": 2.21346
    },
    {
        "id": 2967423,
        "nm": "Wattignies",
        "lat": 50.586391,
        "lon": 3.04394
    },
    {
        "id": 2967421,
        "nm": "Wattrelos",
        "lat": 50.70118,
        "lon": 3.21812
    },
    {
        "id": 2967411,
        "nm": "Wavrin",
        "lat": 50.57386,
        "lon": 2.9363
    },
    {
        "id": 2967410,
        "nm": "Waziers",
        "lat": 50.387169,
        "lon": 3.1149
    },
    {
        "id": 2967404,
        "nm": "Weitbruch",
        "lat": 48.754551,
        "lon": 7.77935
    },
    {
        "id": 2967397,
        "nm": "Wervicq-Sud",
        "lat": 50.774502,
        "lon": 3.04207
    },
    {
        "id": 2967386,
        "nm": "Weyersheim",
        "lat": 48.71537,
        "lon": 7.80097
    },
    {
        "id": 2967372,
        "nm": "Wignehies",
        "lat": 50.015499,
        "lon": 4.00914
    },
    {
        "id": 2967363,
        "nm": "Willems",
        "lat": 50.632061,
        "lon": 3.2384
    },
    {
        "id": 2967351,
        "nm": "Wimereux",
        "lat": 50.76963,
        "lon": 1.61139
    },
    {
        "id": 2967350,
        "nm": "Wimille",
        "lat": 50.764179,
        "lon": 1.63137
    },
    {
        "id": 2967343,
        "nm": "Wingles",
        "lat": 50.49382,
        "lon": 2.855
    },
    {
        "id": 2967337,
        "nm": "Wintzenheim",
        "lat": 48.072689,
        "lon": 7.29072
    },
    {
        "id": 2967331,
        "nm": "Wisches",
        "lat": 48.508808,
        "lon": 7.26814
    },
    {
        "id": 2967325,
        "nm": "Wissembourg",
        "lat": 49.037079,
        "lon": 7.94548
    },
    {
        "id": 2967322,
        "nm": "Wissous",
        "lat": 48.733521,
        "lon": 2.32338
    },
    {
        "id": 2967320,
        "nm": "Witry-les-Reims",
        "lat": 49.291618,
        "lon": 4.1192
    },
    {
        "id": 2967319,
        "nm": "Wittelsheim",
        "lat": 47.809471,
        "lon": 7.24154
    },
    {
        "id": 2967318,
        "nm": "Wittenheim",
        "lat": 47.8078,
        "lon": 7.33702
    },
    {
        "id": 2967312,
        "nm": "Wittisheim",
        "lat": 48.263409,
        "lon": 7.58703
    },
    {
        "id": 2967309,
        "nm": "Wizernes",
        "lat": 50.7117,
        "lon": 2.24316
    },
    {
        "id": 2967297,
        "nm": "Woippy",
        "lat": 49.14946,
        "lon": 6.14909
    },
    {
        "id": 2967293,
        "nm": "Wolfisheim",
        "lat": 48.587231,
        "lon": 7.66708
    },
    {
        "id": 2967288,
        "nm": "Wormhout",
        "lat": 50.88129,
        "lon": 2.46901
    },
    {
        "id": 2967287,
        "nm": "Woustviller",
        "lat": 49.076359,
        "lon": 7.00487
    },
    {
        "id": 2967269,
        "nm": "Xertigny",
        "lat": 48.043941,
        "lon": 6.40836
    },
    {
        "id": 2967252,
        "nm": "Ydes",
        "lat": 45.333328,
        "lon": 2.46667
    },
    {
        "id": 2967249,
        "nm": "Yenne",
        "lat": 45.704201,
        "lon": 5.75795
    },
    {
        "id": 2967245,
        "nm": "Yerres",
        "lat": 48.71785,
        "lon": 2.49338
    },
    {
        "id": 2967242,
        "nm": "Yerville",
        "lat": 49.667198,
        "lon": 0.89594
    },
    {
        "id": 2967234,
        "nm": "Yffiniac",
        "lat": 48.48428,
        "lon": -2.67647
    },
    {
        "id": 2967203,
        "nm": "Yssingeaux",
        "lat": 45.133331,
        "lon": 4.11667
    },
    {
        "id": 2967201,
        "nm": "Ytrac",
        "lat": 44.913429,
        "lon": 2.36295
    },
    {
        "id": 3013701,
        "nm": "Yutz",
        "lat": 49.355709,
        "lon": 6.1926
    },
    {
        "id": 2967189,
        "nm": "Yvetot",
        "lat": 49.617439,
        "lon": 0.75814
    },
    {
        "id": 2967179,
        "nm": "Yvrac",
        "lat": 44.877861,
        "lon": -0.4587
    },
    {
        "id": 2967166,
        "nm": "Yzeure",
        "lat": 46.564381,
        "lon": 3.35495
    },
    {
        "id": 2967139,
        "nm": "Zillisheim",
        "lat": 47.695621,
        "lon": 7.29516
    }
];


/***/ }),

/***/ "../../../../../src/app/cities/cities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CitiesService = (function () {
    function CitiesService(http) {
        this.http = http;
        this.subjectCurrentWeather = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.currentWeather = this.subjectCurrentWeather
            .asObservable()
            .do(function (currentCity) { return console.log('new current weather', currentCity); });
        this.subjectForecastWeather = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.forecastWeather = this.subjectForecastWeather
            .asObservable()
            .do(function (forecastCity) { return console.log('new forecast weather', forecastCity); });
    }
    CitiesService.prototype.updateWeather = function (currentWeather, forecastWeather) {
        this.subjectCurrentWeather.next(currentWeather);
        this.subjectForecastWeather.next(forecastWeather);
    };
    CitiesService.prototype.getCurrentWeather = function (city) {
        return this.http
            .get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=baae20ca430564fec195985afb9eb4e1")
            .map(function (res) { return res.json(); });
    };
    CitiesService.prototype.getForecastWeather = function (city) {
        return this.http
            .get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=baae20ca430564fec195985afb9eb4e1")
            .map(function (res) { return res.json(); });
    };
    CitiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], CitiesService);
    return CitiesService;
}());



/***/ }),

/***/ "../../../../../src/app/progressbar/progressbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" color=\"accent\" *ngIf=\"isDisplay\" style=\"position:fixed\"></mat-progress-bar>"

/***/ }),

/***/ "../../../../../src/app/progressbar/progressbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/progressbar/progressbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_service__ = __webpack_require__("../../../../../src/app/progressbar/progressbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressbarComponent = (function () {
    function ProgressbarComponent($progressbar) {
        this.$progressbar = $progressbar;
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$progressbar
            .changes
            .subscribe(function (display) { _this.isDisplay = display; });
    };
    ProgressbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',
            template: __webpack_require__("../../../../../src/app/progressbar/progressbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/progressbar/progressbar.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__progressbar_service__["a" /* ProgressBarService */]])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/progressbar/progressbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgressBarService = (function () {
    function ProgressBarService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.changes = this.subject
            .asObservable()
            .do(function (changes) { return console.log('new state', changes); });
    }
    ProgressBarService.prototype.show = function () {
        this.subject.next(true);
    };
    ProgressBarService.prototype.hide = function () {
        this.subject.next(false);
    };
    ProgressBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])()
    ], ProgressBarService);
    return ProgressBarService;
}());



/***/ }),

/***/ "../../../../../src/app/weather-city/weather-city.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <strong>{{city?.name}} - </strong> <span> {{city?.dt * 1000 | date:'EEEE, MMMM d, y, h:mm a'}}</span>\n</mat-toolbar>\n<mat-card>\n  <p>Humidity : {{city?.main.humidity}}</p>\n  <mat-card-content *ngFor=\"let weather of city?.weather\">\n    <p><strong>{{weather.main}} - </strong><i class=\"wi wi-icon-{{weather.id}}\"></i> - {{weather.description}}</p>\n    <p>Temp : {{city.main.temp - 273.15 | number}} °C</p>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/weather-city/weather-city.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather-city/weather-city.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherCityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherCityComponent = (function () {
    function WeatherCityComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], WeatherCityComponent.prototype, "city", void 0);
    WeatherCityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'weather-city',
            template: __webpack_require__("../../../../../src/app/weather-city/weather-city.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weather-city/weather-city.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherCityComponent);
    return WeatherCityComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map