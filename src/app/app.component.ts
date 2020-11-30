import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export interface Posts {
  title: String,
  text: String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() =>{
      resolve('Promise Resolved')
    }, 4000)
  })

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(()=>{
      obs.next(new Date())
    }, 1000)
  })

  // date: Date

  ngOnInit() {
    // this.date$.subscribe(date => {
    //   this.date = date
    // })
  }
}

