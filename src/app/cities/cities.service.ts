import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable ()
export class CitiesService {

    constructor(public http: Http) {}

    getCurrent(city) {
        return this.http
                .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=baae20ca430564fec195985afb9eb4e1`)
                .map(res => res.json());
    }
    getForecast(city) {
        return this.http
                .get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=baae20ca430564fec195985afb9eb4e1`)
                .map(res => res.json());
    }
}