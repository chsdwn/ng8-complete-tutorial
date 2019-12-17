import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    /* this.observableSubscription = interval(1000).subscribe(count => {
      console.log(count);
    }); */
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    /* customIntervalObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    })); */

    this.observableSubscription = customIntervalObservable
      .pipe(
        filter(data => {
          return data > 0; // "Round: 1" passes
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        }))
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      }, () => {
        console.log('completed'); // No need to be unsubscribed if the observer completed.
      });
  }

  ngOnDestroy(): void {
    this.observableSubscription.unsubscribe();
  }
}
