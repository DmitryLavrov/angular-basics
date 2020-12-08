import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  template: `Posts component`,
  selector: 'app-posts'
})
export class PostsComponent implements OnInit {
  posts = []
  message: string

  constructor(private service: PostsService) {
  }

  ngOnInit(): void {
    this.service.fetch().subscribe(p => {
      this.posts = p
    })
  }

  add(title: string) {
    const post = { title }
    this.service.create(post).subscribe(() => {
      this.posts.push(post)
    }, err => this.message = err)
  }

  delete(id) {
    if (window.confirm('Are you sure?')) {
      this.service.remove(id).subscribe()
    }
  }
}
