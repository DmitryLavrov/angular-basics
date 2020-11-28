import {Component} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Хочу выучить Angular', text: 'Я все еще учу Angular', id: 1},
    {title: 'Хочу выучить следующий блок', text: 'Я почти начал его учить',id:2},
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }

  removePost(id: Number) {
    console.log('id', id);
    this.posts = this.posts.filter(p => p.id !== id)
  }
}

