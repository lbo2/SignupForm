import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { SignupData } from '../../models/signup-data.model';
import { Country } from '../../models/country.model';
import { State } from '../../models/state.model';
import { SignupService } from '../../services/signup.service';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'signup-details',
    templateUrl: './signup-details.component.html'
})
export class SignupDetailsComponent implements OnInit {
    signupData: SignupData;
    countries: Country[];
    states: State[];
    country:any;
    state:any;
    countryName:string;
    stateName:string;


    constructor(private signupService: SignupService, private router: Router, private countriesService: CountriesService) {
        
    }

    async ngOnInit() {
        const getDataSubscription = this.signupService.getData().subscribe(async (data: SignupData) => {
            if (data) {
              this.signupData = data;
              this.countries = await this.countriesService.getCountries().toPromise();
              this.states = await this.countriesService.getStates(parseInt(this.signupData.country)).toPromise();

              this.country = this.countries.filter(c => { return c.id == parseInt(this.signupData.country) });
              this.countryName = this.country[0].name;

              this.state = this.states.filter(s => { return s.id == parseInt(this.signupData.state) });
              this.stateName = this.state[0].name;
            }
        });

        getDataSubscription.unsubscribe();
        
    }

    goBack(){
        this.router.navigate(['']);
    }
}
