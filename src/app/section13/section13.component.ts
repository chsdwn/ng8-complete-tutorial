import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section13',
  templateUrl: './section13.component.html',
  styleUrls: ['./section13.component.css']
})
export class Section13Component implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
