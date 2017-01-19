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
var drivers_service_1 = require('../service/drivers.service');
var AddDriverComponent = (function () {
    function AddDriverComponent(driversService) {
        this.driversService = driversService;
    }
    AddDriverComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.driversService.getDriversInit().subscribe(
        //     res => this.drivers = res,
        //     error => console.error('Error: ' + error),
        //     () => console.log('Log Coli: Init data for drivers are retrieved: ' + this.drivers)
        // );
        this.driversService.getDrivers().subscribe(function (res) { return _this.drivers = res; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Log Coli: Init data for drivers are retrieved: ' + _this.drivers); });
    };
    AddDriverComponent.prototype.addDriver = function (value) {
        var _this = this;
        this.driversService.addDriver(value).subscribe(function (res) { return _this.output = res; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Log Coli: If this is displayed it means great success!'); });
    };
    AddDriverComponent = __decorate([
        core_1.Component({
            // selector for tag in index.html
            selector: 'adddriver',
            // to use relative urls
            moduleId: module.id,
            templateUrl: '../html/add_driver.component.html',
            styleUrls: ['../css/add_driver.component.css']
        }), 
        __metadata('design:paramtypes', [drivers_service_1.DriversService])
    ], AddDriverComponent);
    return AddDriverComponent;
}());
exports.AddDriverComponent = AddDriverComponent;
//# sourceMappingURL=add_driver.component.js.map