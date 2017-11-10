import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent {
  @Input() city: any;
  
  constructor() { }
}
