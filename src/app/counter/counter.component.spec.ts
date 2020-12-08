import { FormBuilder } from '@angular/forms';
import {CounterComponent} from './counter.component';

describe('CounterComponent', () => {

  let component: CounterComponent

  beforeEach(() => {
    component = new CounterComponent(new FormBuilder())
  })

  // beforeAll, afterEach, afterAll

  it('should increment counter', () => {
    component.increment()
    expect(component.counter).toBe(1)
  })

  it('should decrement counter', () => {
    component.decrement()
    expect(component.counter).toBe(-1)
  })

  it('should send value by event emitter', () =>{
    let result = null
    component.counterEmitter.subscribe(value => {result = value})
    component.increment()
    expect(result).toBe(1)
  })

  it('should create form with 2 controls', () => {
    expect(component.form.contains('login')).toBeTruthy()
    expect(component.form.contains('email')).toBeTruthy()
  })

  it('should mark login if value is empty', () => {
    const control = component.form.get('login')
    control.setValue('')
    expect(control.valid).toBeFalse()
  })
})
