import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-practice15',
  templateUrl: './practice15.component.html',
  styleUrls: ['./practice15.component.css']
})
export class Practice15Component implements OnInit {
  // Template Driven From
  /* @ViewChild('projectForm', {static: true}) projectForm: NgForm;
  project = {
    projectName: '',
    email: '',
    status: ''
  };
  statuses = [
    'Stable',
    'Critical',
    'Finished'
  ];
  forbiddenNames = [
    'Test'
  ];
  isFormSubmitted = false;

  constructor() {
  }

  ngOnInit() {

  }

  onSubmit() {
    this.project.projectName = this.projectForm.value.projectName;
    this.project.email = this.projectForm.value.email;
    this.project.status = this.projectForm.value.status;
    this.isFormSubmitted = true;
    console.log(this.project);
  } */

  // Reactive Form
  projectForm: FormGroup;
  statuses = [
    'Stable',
    'Critical',
    'Finished'
  ];
  forbiddenNames = [
    'Test'
  ];

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name': new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('finished')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  forbiddenNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      if (this.forbiddenNames.indexOf(control.value) === -1) {
        resolve(null);
      } else {
        resolve({'isNameForbidden': true});
      }
    });
    return promise;
  }
}
