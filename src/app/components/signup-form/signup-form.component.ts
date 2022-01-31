import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CountriesService } from '../../services/countries.service';
import { SignupService } from '../../services/signup.service';
import { SignupData } from '../../models/signup-data.model';
import { Country } from 'src/app/models/country.model';
import { State } from 'src/app/models/state.model';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @Output()
  save = new EventEmitter<SignupData>();

  model:SignupData;
  countries:Country[];
  states:State[];

  constructor(private countriesService: CountriesService, private signupService: SignupService, private router: Router) {
  }

  submit(form: NgForm) {

  }

  async ngOnInit() {

    this.model = {
      username: '',
      phoneNumber: '',
      email: '',
      country: '',
      state: ''
    }

    this.countries = await this.countriesService.getCountries().toPromise();


  }

  async getStates(country:number) {
    this.states = await this.countriesService.getStates(country).toPromise();
  }
}
