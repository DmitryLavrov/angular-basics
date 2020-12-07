import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: 'Counter {{counter}}'
})

export class CounterComponent {
  counter = 0

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }
}
