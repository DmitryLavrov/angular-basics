import {Component} from '@angular/core';

export interface Posts {
  title: String,
  text: String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  search = ''
  searchField = 'title'

  posts: Posts[] = [
    {title: 'Заголовок 1', text: 'Текст 3'},
    {title: 'Текст 2', text: 'Текст 1'},
    {title: 'Заголовок 3', text: 'Заголовок 2'},
  ]

  addPost(){
    this.posts.unshift({
      title: 'Новый пост',
      text: 'Текст для нового поста'
    })
  }
}

