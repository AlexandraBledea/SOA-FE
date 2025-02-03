import { AbstractControl, ValidationErrors } from '@angular/forms';

export class BirthDataValidator {
  static dateFormat(control: AbstractControl): ValidationErrors | null {
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/; // Regex for yyyy-mm-dd format
    const value = control.value;

    if (value && !dateFormatRegex.test(value)) {
      return { invalidDateFormat: true }; // Validation error
    }
    return null; // No error
  }
}
