import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CustomvalidationService } from './custom-validation.service';

@Directive({
  selector: '[appPhoneValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneValidationDirective, multi: true }]
})
export class PhoneValidationDirective implements Validator {

  constructor(private customValidator: CustomvalidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.phoneValidator()(control);
  }
}