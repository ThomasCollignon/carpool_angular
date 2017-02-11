// Mark the class as an Angular component
import { Component } from '@angular/core';

@Component({
    // selector for tag in index.html
    selector: 'cars',
    // to use relative urls
    moduleId: module.id,
    templateUrl: '../html/cars.component.html',
    styleUrls: ['../css/cars.component.css']
})

// component logic
// the 'export' means that it can be imported into the app
export class CarsComponent {
}