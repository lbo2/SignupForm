import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, empty } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Country } from '../models/country.model';
import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<Country[]> {
    return empty();
  }

  public getStates(countryId: number): Observable<State[]> {
    return empty();
  }
}
