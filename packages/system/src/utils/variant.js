import { get, createParser } from '@styled-system/core';
import css from '@styled-system/css';

export const variant = config => props => {
  const prop = Object.keys(config)[0];
  const getValue = (n, scale) => get(scale, n);

  getValue.defaults = config[prop];

  return css(
    createParser({
      [prop]: getValue
    })(props)
  );
};
