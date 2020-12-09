import {Component} from '@angular/core';
import {animationBox} from './animate/app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animationBox],
})

export class AppComponent {

  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animationStarted(event: AnimationEvent) {
    console.log('animationStarted: ', event);
  }

  animationDone(event: AnimationEvent) {
    console.log('animationDone: ', event);
  }
}

