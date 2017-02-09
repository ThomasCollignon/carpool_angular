// Mark the class as an Angular component
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Reservation } from '../model/reservation.component';
import { ReservationsService } from '../service/reservations.service';

@Component({
    // selector for tag in index.html
    selector: 'reservations',
    moduleId: module.id,
    templateUrl: '../html/reservations.component.html',
    styleUrls: ['../css/reservations.component.css']
})

// component logic
// the 'export' means that it can be imported into the app
export class ReservationsComponent implements OnInit {
    selectedReservation: Reservation;
    reservations: Reservation[];

    // Dependency injection
    constructor(
        private reservationsService: ReservationsService) { }

    ngOnInit(): void {
        // this.reservationsService.getReservationsInit().subscribe(
        //     res => this.reservations = res,
        //     error => console.error('Error: ' + error),
        //     () => console.log('Log Coli: Init data for reservations are retrieved: ' + this.reservations)
        // );
        this.reservationsService.getReservations().subscribe(
            res => this.reservations = res,
            error => console.error('Error: ' + error),
            () => console.log('Log Coli: Init data for reservations are retrieved: ' + JSON.stringify(this.reservations, undefined, 2))
        );
    }

    buttonClicked() {
        alert('button clicked');
    }
    onClick(reservation: Reservation) {
        this.selectedReservation = reservation;
        // alert('Selected reservation: ' + this.selectedReservation.person);
    }
}