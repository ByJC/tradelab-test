import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import { cities } from './cities-fr';
import { ProgressBarService } from '../progressbar/progressbar.service';
import {Http} from '@angular/http';


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

  constructor(private pbService: ProgressBarService, public http: Http) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .startWith(null)
      .debounceTime(500)
      .map(val => val ? this.filter(val) : this.cities.slice());
  }

  filter(name: string) {
    return this.cities.filter(city => city.nm.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  submit() {
    console.log(this.myControl.value);
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=baae20ca430564fec195985afb9eb4e1')
      .map(res => {
        console.log(res);
      })
      .subscribe();

  }

}
