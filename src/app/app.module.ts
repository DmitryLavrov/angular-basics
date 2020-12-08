import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CounterComponent} from "./counter/counter.component";
import {FormsModule} from "@angular/forms";
import {PostsComponent} from "./posts/posts.component";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
