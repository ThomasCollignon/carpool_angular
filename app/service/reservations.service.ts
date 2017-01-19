import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Reservation } from '../model/reservation.component';
import { UtilService } from './util.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservationsService {

    private reservationsInitUrl = './app/data/reservationsInit.json';

    constructor(private http: Http, private utilService: UtilService) {
    }

    // This returns an Observable object
    getReservations() {
        let reservationSimpleListUrl = this.utilService.getUrl("reservationSimpleList");
        return this.http.get(reservationSimpleListUrl)
            .map(res => res.json());
    }

    // This returns an Observable object
    getReservationsInit() {
        return this.http.get(this.reservationsInitUrl)
            .map(res => res.json());
    }
}
