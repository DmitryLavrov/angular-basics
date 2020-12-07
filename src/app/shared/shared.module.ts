import {NgModule} from '@angular/core';
import {ColorDirective} from './color.directive';
import {PageNamePipe} from './page-name.pipe';

@NgModule({
  declarations: [
    ColorDirective,
    PageNamePipe
  ],
  imports: [
  ],
  exports: [
    ColorDirective,
    PageNamePipe
  ]
})
export class SharedModule {}
