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
var UtilService = (function () {
    function UtilService() {
        this.central = false;
        this.centralHostUrl = 'http://lowcost-env.uwghuuaeu3.us-west-2.elasticbeanstalk.com/rest/';
        this.localHostUrl = 'http://localhost:8081/carpool_web_connector/rest/';
    }
    UtilService.prototype.getUrl = function (resource) {
        var resourceUrl;
        if (this.central) {
            resourceUrl = this.centralHostUrl + resource;
        }
        else {
            resourceUrl = this.localHostUrl + resource;
        }
        return resourceUrl;
    };
    UtilService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UtilService);
    return UtilService;
}());
exports.UtilService = UtilService;
//# sourceMappingURL=util.service.js.map