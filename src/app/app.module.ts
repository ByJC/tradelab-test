import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatFormFieldModule, MatAutocompleteModule, 
  MatInputModule, MatSelectModule, MatProgressBarModule, MatCardModule,
  MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AutocompleteCitiesComponent } from './autocomplete-cities/autocomplete-cities.component';
import { WeatherCityComponent } from './weather-city/weather-city.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressBarService } from './progressbar/progressbar.service';
import { CitiesService } from './cities/cities.service';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteCitiesComponent,
    WeatherCityComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [ProgressBarService, CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
