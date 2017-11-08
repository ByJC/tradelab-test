import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent implements OnInit {
  @Input() city: any;
  
  constructor() { }

  ngOnInit() {
  }

}
