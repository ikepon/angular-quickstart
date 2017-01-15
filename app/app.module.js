"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('./rxjs-extensions');
var core_1 = require('@angular/core');
// ブラウザで表示させるために必要
var platform_browser_1 = require('@angular/platform-browser');
// Form用のmodule. two way binding に必要
var forms_1 = require('@angular/forms');
// httpアクセスに必要
var http_1 = require('@angular/http');
// // Router用のmodule.
// import { RouterModule }  from '@angular/router';
// AppRoutingModule の読み込み
var app_routing_module_1 = require('./app-routing.module');
// in-memory web api 用
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
// AppComponent を読みこんでる
var app_component_1 = require('./app.component');
// DashboardComponent の読み込み
var dashboard_component_1 = require('./dashboard.component');
// HeroesComponent の読み込み
var heroes_component_1 = require('./heroes.component');
// HeroDetailComponent の読み込み
var hero_detail_component_1 = require('./hero-detail.component');
// HeroSearchComponent の読み込み
var hero_search_component_1 = require('./hero-search.component');
// HeroService の読み込み
var hero_service_1 = require('./hero.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                heroes_component_1.HeroesComponent,
                hero_detail_component_1.HeroDetailComponent,
                hero_search_component_1.HeroSearchComponent
            ],
            providers: [hero_service_1.HeroService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map