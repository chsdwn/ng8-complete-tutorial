import { Component } from '@angular/core';

@Component({
  selector: 'app-practice2v2',
  templateUrl: './practice2v2.component.html',
  styleUrls: ['./practice2v2.component.css']
})
export class Practice2v2Component {
  username = '';

  onResetUsername() {
    this.username = '';
  }
}
