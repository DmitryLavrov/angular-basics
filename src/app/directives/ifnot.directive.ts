import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {

  @Input('appIfNot') set ifNot(condition: boolean) {
    if (!condition) {
      // Показать элемент
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      // Скрыть элемент
      this.viewContainer.clear()
    }
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
