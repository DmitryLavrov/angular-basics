import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective{
  @Input('appStyle') color: string = 'blue'
  @Input() fontWeight? = 'normal'
  @Input() dStyle: {border?:string, borderRadius?: string}

  constructor(private  el: ElementRef, private renderer: Renderer2) {
    console.log('el', el);
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'darkblue')
    // el.nativeElement.style.color = 'darkred'
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log('event',event);
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
    this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyle.border)
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius)
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null)
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null)
    this.renderer.setStyle(this.el.nativeElement, 'border', null)
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null)
  }
}
