import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { cities } from './cities-fr';
import { ProgressBarService } from '../progressbar/progressbar.service';


/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'autocomplete-cities',
  templateUrl: 'autocomplete-cities.component.html',
  styleUrls: ['autocomplete-cities.component.scss']
})
export class AutocompleteCitiesComponent {

  myControl: FormControl = new FormControl();
  cities : any = cities;
  citySelected : any = {};

  constructor(private pbService : ProgressBarService) {

  }

   ngOnInit() {
      this.myControl.valueChanges
         .startWith(null)
         .map(val => {
           console.log(val);
           this.pbService.show();
         }).subscribe();
   }

}
