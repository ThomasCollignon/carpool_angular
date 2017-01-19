import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Driver } from '../model/driver.component';
import { UtilService } from './util.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DriversService {
    private driversInitUrl = './app/data/driversInit.json';
    private host = 'http://lowcost-env.uwghuuaeu3.us-west-2.elasticbeanstalk.com/';
    private host1 = 'http://localhost:8081/carpool_web_connector/';
    private driverListUrl = this.host + 'rest/driverList';
    private driverUrl = this.host1 + 'rest/driver';

    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    constructor(private http: Http, private utilService: UtilService) {
    }

    // This returns an Observable object
    getDriversInit() {
        return this.http.get(this.driversInitUrl)
            .map(res => res.json());
    }

    getDrivers() {
        let driverListUrl = this.utilService.getUrl("driverList");
        return this.http.get(driverListUrl)
            .map(res => res.json());
    }

    addDriver(name: String) {
        console.log("Writing new driver: " + name);
        var body = "drivername=" + name;
        let driverUrl = this.utilService.getUrl("driver");
        return this.http
            .post(driverUrl, body, { headers: this.headers })
            .map(res => res.json().data);
    }
}
