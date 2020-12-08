import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";

describe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    service = new PostsService(null)
    component = new PostsComponent(service)
  })

})
