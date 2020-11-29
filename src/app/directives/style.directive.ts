import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() fontWeight? = 'normal';
  @Input() dStyle: { border?: string, borderRadius?: string };

  @HostBinding('style.color') elColor = null;
  @HostBinding('style.fontWeight') elFontWeight = null;
  @HostBinding('style.border') elBorder = null;
  @HostBinding('style.borderRadius') elBorderRadius = null;

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log('event', event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    this.elFontWeight = this.fontWeight;
    this.elBorder = this.dStyle.border;
    this.elBorderRadius = this.dStyle.borderRadius;
    // this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
    // this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyle.border)
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius)
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    this.elFontWeight = null;
    this.elBorder = null;
    this.elBorderRadius = null;
    // this.renderer.setStyle(this.el.nativeElement, 'color', null)
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null)
    // this.renderer.setStyle(this.el.nativeElement, 'border', null)
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null)
  }
}
