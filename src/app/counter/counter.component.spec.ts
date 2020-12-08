import {CounterComponent} from "./counter.component";
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

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

  it('should render counter property', function() {
    const num = 42
    component.counter = num
    fixture.detectChanges()
    const de = fixture.debugElement.query(By.css('.counter'))
    const el: HTMLElement = de.nativeElement
    expect(el.textContent).toContain(num.toString())
  });
})
