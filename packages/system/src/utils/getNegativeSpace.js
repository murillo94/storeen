import { get } from '@styled-system/core';

const isNumber = n => typeof n === 'number' && !isNaN(n);

export const getNegativeSpace = (n, scale) => {
  if (!isNumber(n)) return get(scale, n, n);

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = get(scale, absolute, absolute);

  if (!isNumber(value)) return isNegative ? `-${value}` : value;

  return value * (isNegative ? -1 : 1);
};
