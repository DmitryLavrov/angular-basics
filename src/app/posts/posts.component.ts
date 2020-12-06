import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  showIds = false

  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log('Params: ', params);
      this.showIds = !!params.showIds
    })
    this.route.fragment.subscribe((fragment)=>{
      console.log('Fragment: ', fragment);
    })
  }

  showIdsProgram() {
    this.router.navigate(['/posts'],{
      queryParams: {showIds: true},
      fragment: 'program-fragment'
    })
  }
}
