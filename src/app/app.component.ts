import {Component, OnInit} from '@angular/core';

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

export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Хочу выучить Angular', text: 'Я все еще учу Angular', id: 1},
    {title: 'Хочу выучить следующий блок', text: 'Я почти начал его учить',id:2},
  ];

  ngOnInit() {
    // setTimeout(()=>{
    //   console.log('Timeout');
    //   this.posts[0] ={
    //     title : 'Changed',
    //     text: 'Some text',
    //     id: 33
    //   }
    // }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }

  removePost(id: Number) {
    console.log('id', id);
    this.posts = this.posts.filter(p => p.id !== id)
  }
}

