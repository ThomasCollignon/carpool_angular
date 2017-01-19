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
var http_1 = require('@angular/http');
var util_service_1 = require('./util.service');
require('rxjs/add/operator/map');
var DriversService = (function () {
    function DriversService(http, utilService) {
        this.http = http;
        this.utilService = utilService;
        this.driversInitUrl = './app/data/driversInit.json';
        this.host = 'http://lowcost-env.uwghuuaeu3.us-west-2.elasticbeanstalk.com/';
        this.host1 = 'http://localhost:8081/carpool_web_connector/';
        this.driverListUrl = this.host + 'rest/driverList';
        this.driverUrl = this.host1 + 'rest/driver';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    }
    // This returns an Observable object
    DriversService.prototype.getDriversInit = function () {
        return this.http.get(this.driversInitUrl)
            .map(function (res) { return res.json(); });
    };
    DriversService.prototype.getDrivers = function () {
        var driverListUrl = this.utilService.getUrl("driverList");
        return this.http.get(driverListUrl)
            .map(function (res) { return res.json(); });
    };
    DriversService.prototype.addDriver = function (name) {
        console.log("Writing new driver: " + name);
        var body = "drivername=" + name;
        var driverUrl = this.utilService.getUrl("driver");
        return this.http
            .post(driverUrl, body, { headers: this.headers })
            .map(function (res) { return res.json().data; });
    };
    DriversService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, util_service_1.UtilService])
    ], DriversService);
    return DriversService;
}());
exports.DriversService = DriversService;
//# sourceMappingURL=drivers.service.js.map