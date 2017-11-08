import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private cService: CitiesService) { }

  ngOnInit() {
    this.cService
      .currentWeather
      .subscribe(weather => { console.log(weather); });

    this.cService
      .forecastWeather
      .subscribe(weather => { console.log(weather); });
  }
}
