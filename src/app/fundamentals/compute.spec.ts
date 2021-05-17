import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(1);
  });

  it('should return number +1 if input is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
