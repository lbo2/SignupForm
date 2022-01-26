import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CountriesService } from '../../services/countries.service';
import { SignupService } from '../../services/signup.service';
import { SignupData } from '../../models/signup-data.model';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @Output()
  save = new EventEmitter<SignupData>();

  constructor(private countriesService: CountriesService, private signupService: SignupService, private router: Router) {
  }

  submit(form: NgForm) {

  }

  ngOnInit() {

  }
}
