import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective{
  constructor(private  el: ElementRef, private renderer: Renderer2) {
    console.log('el', el);
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'darkblue')
    // el.nativeElement.style.color = 'darkred'
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log('event',event);
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'darkblue')
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null)
  }
}
