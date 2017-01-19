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
// Mark the class as an Angular component
var core_1 = require('@angular/core');
var reservations_service_1 = require('../service/reservations.service');
var ReservationsComponent = (function () {
    // Dependency injection
    function ReservationsComponent(reservationsService) {
        this.reservationsService = reservationsService;
    }
    ReservationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.reservationsService.getReservationsInit().subscribe(
        //     res => this.reservations = res,
        //     error => console.error('Error: ' + error),
        //     () => console.log('Log Coli: Init data for reservations are retrieved: ' + this.reservations)
        // );
        this.reservationsService.getReservations().subscribe(function (res) { return _this.reservations = res; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Log Coli: Init data for reservations are retrieved: ' + _this.reservations); });
    };
    ReservationsComponent.prototype.buttonClicked = function () {
        alert('button clicked');
    };
    ReservationsComponent.prototype.onClick = function (reservation) {
        this.selectedReservation = reservation;
        // alert('Selected reservation: ' + this.selectedReservation.person);
    };
    ReservationsComponent = __decorate([
        core_1.Component({
            // selector for tag in index.html
            selector: 'reservations',
            moduleId: module.id,
            templateUrl: '../html/reservations.component.html',
            styleUrls: ['../css/reservations.component.css']
        }), 
        __metadata('design:paramtypes', [reservations_service_1.ReservationsService])
    ], ReservationsComponent);
    return ReservationsComponent;
}());
exports.ReservationsComponent = ReservationsComponent;
//# sourceMappingURL=reservations.component.js.map