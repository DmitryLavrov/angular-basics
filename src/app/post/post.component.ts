import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

export class PostComponent implements OnInit{

  post: Post

  constructor(
    private rout: ActivatedRoute,
     private router: Router
    ) {}

  id = ''

  ngOnInit(): void {
    // this.post = this.rout.snapshot.data.post
    this.rout.data.subscribe(data => {
      this.post = data.post
    })

    // this.rout.params.subscribe((params) => {
    //   console.log('Params:', params);
    //   this.post = this.postService.getById(+params.id)
    // })
  }

  loadPost() {
    this.router.navigate(['/post', 44])
  }
}

