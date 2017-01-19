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
var ReservationsService = (function () {
    function ReservationsService(http, utilService) {
        this.http = http;
        this.utilService = utilService;
        this.reservationsInitUrl = './app/data/reservationsInit.json';
    }
    // This returns an Observable object
    ReservationsService.prototype.getReservations = function () {
        var reservationSimpleListUrl = this.utilService.getUrl("reservationSimpleList");
        return this.http.get(reservationSimpleListUrl)
            .map(function (res) { return res.json(); });
    };
    // This returns an Observable object
    ReservationsService.prototype.getReservationsInit = function () {
        return this.http.get(this.reservationsInitUrl)
            .map(function (res) { return res.json(); });
    };
    ReservationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, util_service_1.UtilService])
    ], ReservationsService);
    return ReservationsService;
}());
exports.ReservationsService = ReservationsService;
//# sourceMappingURL=reservations.service.js.map