import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function notNullOrUndefined(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === null || control.value === undefined
      ? { errorMessage: 'Value of should not be null' }
      : null;
  };
}
