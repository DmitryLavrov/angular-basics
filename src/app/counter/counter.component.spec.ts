import {CounterComponent} from "./counter.component";
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('CounterComponent', () => {
  let component: CounterComponent
  let fixture: ComponentFixture<CounterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })

    fixture = TestBed.createComponent(CounterComponent)
    component = fixture.componentInstance
  })

  it('should be created', () => {
    expect(component).toBeDefined()
  });
})
