import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComponent } from './routing.component';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

class RouterStab {
  navigate(path: string[]) {}
}

class ActivatedRouteStab {
  params: Observable<Params>
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      providers: [
        {provide: Router, useClass: RouterStab},
        {provide: ActivatedRoute, useClass: ActivatedRouteStab}
      ]
    })

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should navigate to posts on goBack() ', function() {
    let router = TestBed.inject(Router)
    let spy = spyOn(router, 'navigate')
    component.goBack()
    expect(spy).toHaveBeenCalledWith(['/posts'])
  });
});
