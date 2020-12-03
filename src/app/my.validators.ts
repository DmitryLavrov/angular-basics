import {FormControl} from '@angular/forms';

export class MyValidators {

  static restrictedEmails(control: FormControl) {
    if (['q@q', 'w@w'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }
}
