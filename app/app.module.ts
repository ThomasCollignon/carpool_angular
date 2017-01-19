import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// importing my component
import { SampleComponent } from './component/sample.component';
import { ReservationsComponent } from './component/reservations.component';
import { AddReservationComponent } from './component/add_reservation.component';
// import { AddDriverComponent } from './component/add_driver.component';
import { DriversAndCarsComponent } from './component/drivers_and_cars.component';

// services
import { ReservationsService } from './service/reservations.service';
import { DriversService } from './service/drivers.service';
import { UtilService } from './service/util.service';

// decorator
@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    // adding my component
    declarations: [
        SampleComponent,
        ReservationsComponent,
        AddReservationComponent,
        // AddDriverComponent,
        DriversAndCarsComponent
    ],
    // services declared here are singletons for all the app
    providers: [
        ReservationsService,
        DriversService,
        UtilService
    ],
    bootstrap: [
        SampleComponent,
        ReservationsComponent,
        AddReservationComponent,
        // AddDriverComponent,
        DriversAndCarsComponent
    ]
})
export class AppModule { }
