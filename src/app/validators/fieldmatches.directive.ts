import { AbstractControl, ValidationErrors, Validator, NgModel, NG_VALIDATORS, FormGroup } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { CustomvalidationService } from './custom-validation.service';

@Directive({
  selector: '[fieldmatches]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: FieldmatchesDirective, multi: true }
  ]
})
export class FieldmatchesDirective implements Validator {

  @Input('fieldmatches') MatchPassword: string[] = [];

  constructor(private customValidator: CustomvalidationService) { }

  validate(formGroup: FormGroup): ValidationErrors {
    return this.customValidator.MatchPassword(this.MatchPassword[0], this.MatchPassword[1])(formGroup);
  }

  public registerOnValidatorChange(fn: () => void): void {

  }
}
