import { Component } from '@angular/core';

@Component({
  selector: 'app-practice2v3',
  templateUrl: './practice2v3.component.html',
  styleUrls: ['./practice2v3.component.css']
})
export class Practice2v3Component {
  isToggled = false;
  toggleLogs = [];

  onToggleDetails() {
    this.isToggled = !this.isToggled;
    if (this.isToggled === true) {
      this.toggleLogs.push({
        id: this.toggleLogs.length + 1,
        log: 'th time toggled'
      });
    }
  }
}
