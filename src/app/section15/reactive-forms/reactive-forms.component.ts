import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['Male', 'Female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Ali', 'Veli'];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this))
      }),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });
    /* this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    ); */
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData': {
        'username': 'chsdwn',
        'email': 'adense2@gmail.com'
      },
      'gender': 'Male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'rubymell'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  getHobbiesControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) { // If the value is not in list returns -1
      return {'nameIsForbidden': true};
    }
    return null; // This should be null not {'nameIsForbidden': false}
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
