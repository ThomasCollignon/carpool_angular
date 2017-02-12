import { Component } from '@angular/core';
import { Driver } from '../model/driver.component';
import { DriversService } from '../service/drivers.service';

@Component({
    // selector for tag in index.html
    selector: 'adddriver',
    // to use relative urls
    moduleId: module.id,
    templateUrl: '../html/add_driver.component.html',
    styleUrls: ['../css/add_driver.component.css']
})

export class AddDriverComponent {
    driverInput: Driver;
    output;

    constructor(
        private driversService: DriversService) { }

    addDriver(value: String) {
        this.driversService.addDriver(value).subscribe(
            res => this.output = res,
            error => console.error('Error: ' + error),
            () => console.log('Log Coli: If this is displayed it means great success!'));
    }
}
