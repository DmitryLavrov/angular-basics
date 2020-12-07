import { greet } from "./greet"

describe('greet(name)', () => {
  it('should contain name', () => {
    const result = greet('Jhon')
    expect(result).toContain('Jhon')
  })
})
