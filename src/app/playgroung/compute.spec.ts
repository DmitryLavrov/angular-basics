import { compute } from "./compute"

describe('compute(x)',() => {
  it('should return 0 if x < 0', () => {
    const result = compute(-1)
    expect(result).toBe(0)
  })

  it('should return x+1 if >= 0', () => {
    const result = compute(1)
    expect(result).toBe(2)
  })
})
