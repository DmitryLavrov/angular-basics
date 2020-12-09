import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {bounce, bounceOutUp} from 'ng-animate'

@Component({
  selector: 'app-animate',
  template: `
    <button class="btn" (click)="visible=!visible">Toggle</button>
    <hr>
    <div [@bounce] class="rect" *ngIf="visible"></div>
  `,
  styleUrls: ['./animate.component.scss'],
  animations:[
    trigger('bounce', [
        transition('void => *', useAnimation(bounce)),
        transition('* => void', useAnimation(bounceOutUp,{
          params: {timing: 3, delay: 1}
        }))
      ])
  ]
})
export class AnimateComponent implements OnInit {
  visible = true

  constructor() { }

  ngOnInit(): void {
  }

}
