import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComponent } from './routing.component';
import { Subject} from 'rxjs';
import {ActivatedRoute, Params, Router, RouterOutlet} from '@angular/router';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class RouterStab {
  navigate(path: string[]) {}
}

class ActivatedRouteStab {
  private subject = new Subject<Params>()

  push(params: Params) {
    this.subject.next(params)
  }

  get params() {
    return this.subject.asObservable()
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide: Router, useClass: RouterStab},
        {provide: ActivatedRoute, useClass: ActivatedRouteStab}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it('should navigate to 404 if id=0', function() {
    let router = TestBed.inject(Router)
    let route: ActivatedRouteStab = TestBed.inject(ActivatedRoute) as unknown as ActivatedRouteStab
    let spy = spyOn(router, 'navigate')

    route.push({id: '0'})

    expect(spy).toHaveBeenCalledWith(['/404'])
  });

  it('should have router-outlet directive', function() {
    const de = fixture.debugElement.query(By.directive(RouterOutlet))
    expect(de).not.toBeNull()
  });
});
