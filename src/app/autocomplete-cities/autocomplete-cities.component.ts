import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/forkJoin';

import { cities } from '../cities/cities-fr';
import { ProgressBarService } from '../progressbar/progressbar.service';
import { CitiesService } from '../cities/cities.service';

@Component({
  selector: 'autocomplete-cities',
  templateUrl: 'autocomplete-cities.component.html',
  styleUrls: ['autocomplete-cities.component.scss']
})

export class AutocompleteCitiesComponent {

  myControl: FormControl = new FormControl();
  cities: any = cities;
  citySelected: any = {};

  filteredOptions: Observable<any[]>;

  constructor(private pbService: ProgressBarService, public http: Http, private cService : CitiesService) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .startWith(this.cities[0].nm)
      .debounceTime(200)
      .map(val => val ? this.filter(val) : this.cities.slice());

    this.submit(this.cities[0].nm);
  }

  filter(name: string) {
    return this.cities.filter(city => city.nm.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  submit(city) {
    const citySend = city ? city : this.myControl.value;
    this.pbService.show();
    Observable.forkJoin([
        this.cService.getCurrentWeather(citySend),
        this.cService.getForecastWeather(citySend),
    ])
    .subscribe(([current,forecast]) => {
      this.pbService.hide();
      this.cService.updateWeather(current, forecast);
    });

  }

}
