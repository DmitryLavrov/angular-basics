import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective{
  constructor(private  el: ElementRef, private renderer: Renderer2) {
    console.log('el', el);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'darkblue')
    // el.nativeElement.style.color = 'darkred'
  }
}
