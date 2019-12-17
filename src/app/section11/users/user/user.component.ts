import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  updatedURLParams: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params.id, // ['id']
      name: this.route.snapshot.params.name // ['name']
    };
    // if you subscribe an observable object. you can load it when it's changed. you don't need to check or wait.
    // now data updates when a user clicks "Load Ali" link
    this.updatedURLParams = this.route.params.subscribe(
      (updatedURLParams: Params) => {
        this.user = {
          id: updatedURLParams.id,
          name: updatedURLParams.name
        };
      }
    );
  }

  ngOnDestroy() {
    // Removes updatedURLParams from memory
    this.updatedURLParams.unsubscribe();
  }

}
