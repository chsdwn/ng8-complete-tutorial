import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges {

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('on changes');
  }

  ngOnInit() {
    console.log('on init');
  }
}
