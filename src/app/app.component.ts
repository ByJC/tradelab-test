import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CitiesService } from './cities/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentCityWeather : Observable<any>;
  forecastCityWeather : any;

  constructor(private cService: CitiesService) { }

  ngOnInit() {
    this.currentCityWeather = this.cService.currentWeather;
    this.cService.forecastWeather
      .subscribe(weather => this.forecastCityWeather = weather);
  }
}
