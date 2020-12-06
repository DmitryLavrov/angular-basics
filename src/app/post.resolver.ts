import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {Post, PostsService} from './posts.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post>{

  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    return this.postsService.getById(+route.params['id'])
  }
}
