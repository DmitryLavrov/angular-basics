import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({background: 'blue'})),
      state('end',style({
        background: 'red',
        transform: 'scale(1.2)'
      })),
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  boxState = 'start'

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }
}

