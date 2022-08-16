import { Component, OnDestroy, OnInit } from '@angular/core';
import{interval, Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  private firstObsSubscription: Subscription;
  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

  constructor() { }

  ngOnInit() {
    //  this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });


    this.firstObsSubscription = customIntervalObservable.pipe(filter (data => {return Number(data) > 0}),
      map(
      (data: any) => {
        return 'Round: ' + (data+1);
      }
    )).subscribe(
      {
        next: data => {
          console.log(data);
        },
        error: (error: { message: any; }) => {
          console.log(error);
          alert(error.message);
        },
        complete: () => {
          console.log('Completed!');
        }

      }
    );
  }


}


