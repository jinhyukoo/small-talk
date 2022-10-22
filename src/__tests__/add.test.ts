/* global describe, it, expect */
import add from '@/common/utils/add';

describe('mock test file for env setting', () => {
  it('add 함수는 number type 인자 2개를 더한 값을 반환한다.', () => {
    // Given
    const a = 1;
    const b = 2;
    // When
    const result = add(a, b);
    // Then
    expect(result).toBe(3);
  });
});
