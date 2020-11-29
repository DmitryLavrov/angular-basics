import {Pipe, PipeTransform} from '@angular/core';
import {Posts} from '../app.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(posts: Posts[], search: String = '', field: String = 'title'): Posts[] {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter(post => {
      return post[field.toString()].toLowerCase().includes(search.toLowerCase());
    });
  }
}

