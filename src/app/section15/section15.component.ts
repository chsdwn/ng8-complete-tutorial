import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-section15',
  templateUrl: './section15.component.html',
  styleUrls: ['./section15.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Section15Component implements OnInit {
  @ViewChild('form', {static: true}) signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
    this.signupForm.reset();
  }

    /* this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    }); */

  /* onSubmit(form: NgForm) {
    console.log(form);
  } */
}
