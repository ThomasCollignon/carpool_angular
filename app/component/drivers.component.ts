import { Component } from '@angular/core';
import { Driver } from '../model/driver.component';
import { OnInit } from '@angular/core';
import { DriversService } from '../service/drivers.service';

@Component({
    // selector for tag in index.html
    selector: 'drivers',
    // to use relative urls
    moduleId: module.id,
    templateUrl: '../html/drivers.component.html',
    styleUrls: ['../css/drivers.component.css']
})
export class DriversComponent implements OnInit {
    drivers: Driver[];
    output;

    constructor(
        private driversService: DriversService) { }

    ngOnInit(): void {
        this.refreshDriverList();
    }

    refreshDriverList() {
        this.driversService.getDrivers().subscribe(
            res => this.drivers = res,
            error => console.error('Error: ' + error),
            () => console.log('Log Coli: Init data for drivers are retrieved: ' + JSON.stringify(this.drivers, undefined, 2)
            ));
    }

}
