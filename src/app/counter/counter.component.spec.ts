import {CounterComponent} from './counter.component';

describe('CounterComponent', () => {

  let component = new CounterComponent()

  beforeEach(() => {
    component = new CounterComponent()
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
})
