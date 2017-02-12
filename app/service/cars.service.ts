import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Car } from '../model/car.component';
import { UtilService } from './util.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {
    private carsInitUrl = './app/data/carsInit.json';
    private host = 'http://lowcost-env.uwghuuaeu3.us-west-2.elasticbeanstalk.com/';
    private host1 = 'http://localhost:8081/carpool_web_connector/';
    private carListUrl = this.host + 'rest/carList';
    private carUrl = this.host1 + 'rest/car';

    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    constructor(private http: Http, private utilService: UtilService) {
    }

    // This returns an Observable object
    getCarsInit() {
        return this.http.get(this.carsInitUrl)
            .map(res => res.json());
    }

    getCars() {
        let carListUrl = this.utilService.getUrl("carList");
        return this.http.get(carListUrl)
            .map(res => res.json());
    }

    addCar(name: String) {
        console.log("Writing new car: " + name);
        var body = "carname=" + name;
        let carUrl = this.utilService.getUrl("car");
        return this.http
            .post(carUrl, body, { headers: this.headers })
            .map(res => res.json().data);
    }
}
