import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';


@Injectable ()
export class CitiesService {

    subjectCurrentWeather = new ReplaySubject<any>();
    currentWeather = this.subjectCurrentWeather
                    .asObservable()
                    .do(currentCity => console.log('new current weather', currentCity));
                    
    subjectForecastWeather = new ReplaySubject<any>();
    forecastWeather = this.subjectForecastWeather
                    .asObservable()
                    .do(forecastCity => console.log('new forecast weather', forecastCity));

    constructor(public http: Http) {}

    updateWeather(currentWeather, forecastWeather) {
      this.subjectCurrentWeather.next(currentWeather);
      this.subjectForecastWeather.next(forecastWeather);
    }

    getCurrentWeather(city) {
        return this.http
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=baae20ca430564fec195985afb9eb4e1`)
                .map(res => res.json());
    }
    getForecastWeather(city) {
        return this.http
                .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=baae20ca430564fec195985afb9eb4e1`)
                .map(res => res.json());
    }
}