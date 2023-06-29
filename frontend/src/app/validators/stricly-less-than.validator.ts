import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function striclyLessThan(excludedMax: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value >= excludedMax
      ? { errorMessage: 'Value of should be greater than ' + excludedMax }
      : null;
  };
}
