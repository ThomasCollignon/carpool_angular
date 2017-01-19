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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
// importing my component
var sample_component_1 = require('./component/sample.component');
var reservations_component_1 = require('./component/reservations.component');
var add_reservation_component_1 = require('./component/add_reservation.component');
// import { AddDriverComponent } from './component/add_driver.component';
var drivers_and_cars_component_1 = require('./component/drivers_and_cars.component');
// services
var reservations_service_1 = require('./service/reservations.service');
var drivers_service_1 = require('./service/drivers.service');
var util_service_1 = require('./service/util.service');
// decorator
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ],
            // adding my component
            declarations: [
                sample_component_1.SampleComponent,
                reservations_component_1.ReservationsComponent,
                add_reservation_component_1.AddReservationComponent,
                // AddDriverComponent,
                drivers_and_cars_component_1.DriversAndCarsComponent
            ],
            // services declared here are singletons for all the app
            providers: [
                reservations_service_1.ReservationsService,
                drivers_service_1.DriversService,
                util_service_1.UtilService
            ],
            bootstrap: [
                sample_component_1.SampleComponent,
                reservations_component_1.ReservationsComponent,
                add_reservation_component_1.AddReservationComponent,
                // AddDriverComponent,
                drivers_and_cars_component_1.DriversAndCarsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map