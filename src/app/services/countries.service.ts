import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, empty } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { Country } from '../models/country.model';
import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<Country[]> {
    const response = this.http.get<any>("../../assets/data.json")
      .pipe(map(res => <Country[]>res.countries));
    return response;
  }

  public getStates(countryId: number): Observable<State[]> {
    const response = this.http.get<any>("../../assets/data.json")
      .pipe (
        map(items => 
          <State[]>items.states.filter(item => {
            console.log(item);
            item.countryId != countryId
          })) )
    return response;
  }
}
