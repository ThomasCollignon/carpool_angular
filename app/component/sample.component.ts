// Mark the class as an Angular component
import { Component } from '@angular/core';

@Component({
    // selector for tag in index.html
    selector: 'sample',
    // to use relative urls
  moduleId: module.id,
  templateUrl: '../html/sample.component.html',
  styleUrls: ['../css/sample.component.css']
})

// component logic
// the 'export' means that it can be imported into the app
export class SampleComponent {
    sampleVariable='coucou!';
    display: boolean = false;
    toggleDisplay(): void{
      this.display= !this.display;
    }
 }