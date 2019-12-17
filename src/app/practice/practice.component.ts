import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  username: string;
  isDetailsVisible = false;
  logDetailsButtonClicks = [];

  constructor() { }

  ngOnInit() {
  }

  updateUsername(event: any) {
    this.username = (event.target as HTMLInputElement).value;
  }

  clearUsername() {
    this.username = '';
  }

  toggleDetails() {
    this.log();
    return this.isDetailsVisible = !this.isDetailsVisible;
  }

  log() {
    length = this.logDetailsButtonClicks.length;
    this.logDetailsButtonClicks.push(
      {id: length + 1, name : 'button toggled'}
    );
  }
}
