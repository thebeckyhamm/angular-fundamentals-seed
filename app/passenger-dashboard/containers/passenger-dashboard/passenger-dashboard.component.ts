import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                [items]="passengers"></passenger-count>
            <div *ngFor="let passenger of passengers">
                {{ passenger.fullname}}
            </div>
            <passenger-detail
                *ngFor="let passenger of passengers"
                [detail]="passenger"
                (remove)="handleRemove($event)"
                (edit)="handleEdit($event)"></passenger-detail>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor() {}

    ngOnInit() {
        console.log('ngOnInit');
        this.passengers = [{
            id: 1,
            fullname: 'Stephen',
            checkedIn: true,
            checkInDate: null,
            children: null
        }, {
            id: 2,
            fullname: 'Rose',
            checkedIn: false,
            checkInDate: null,
            children: null
        }, {
            id: 3,
            fullname: 'James',
            checkedIn: true,
            checkInDate: null,
            children: null
        }, {
            id: 4,
            fullname: 'Louise',
            checkedIn: true,
            checkInDate: null,
            children: [{ name: 'James', age: 12 }]
        }, {
            id: 5,
            fullname: 'Tina',
            checkedIn: false,
            checkInDate: 1424850000,
            children: null
        }];
    }

    handleRemove(event) {
        this.passengers = this.passengers.filter((passenger) => passenger.id !== event.id);
    }

    handleEdit(event) {
        this.passengers = this.passengers.map((passenger) => {
            if (passenger.id === event.id) {
                passenger = Object.assign({}, passenger, event);
            }
            return passenger;
        });
    }

}

