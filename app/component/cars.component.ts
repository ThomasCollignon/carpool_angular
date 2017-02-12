import { Component } from '@angular/core';
import { Car } from '../model/car.component';
import { OnInit } from '@angular/core';
import { CarsService } from '../service/cars.service';

@Component({
    // selector for tag in index.html
    selector: 'cars',
    // to use relative urls
    moduleId: module.id,
    templateUrl: '../html/cars.component.html',
    styleUrls: ['../css/cars.component.css']
})
export class CarsComponent implements OnInit {
    cars: Car[];
    output;

    constructor(
        private carsService: CarsService) { }

    ngOnInit(): void {
        this.carsService.getCars().subscribe(
            res => this.cars = res,
            error => console.error('Error: ' + error),
            () => console.log('Log Coli: Init data for cars are retrieved: ' + JSON.stringify(this.cars, undefined, 2)
            ));
    }
}
