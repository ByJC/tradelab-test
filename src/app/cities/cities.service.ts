import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable ()
export class CitiesService {

    subjectCurrentWeather = new BehaviorSubject<any>(false);
    currentWeather = this.subjectCurrentWeather
                    .asObservable()
                    .do(currentCity => console.log('new current weather', currentCity));
                    
    subjectForecastWeather = new BehaviorSubject<any>(false);
    forecastWeather = this.subjectForecastWeather
                    .asObservable()
                    .do(forecastCity => console.log('new forecast weather', forecastCity));

    constructor(public http: Http) {}

    updateWeather(currentWeather, forecastWeather) {
      this.subjectCurrentWeather.next(currentWeather);
      this.subjectForecastWeather.next(forecastWeather);
    }

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