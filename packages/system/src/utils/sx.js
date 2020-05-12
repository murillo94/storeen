import css from '@styled-system/css';

// eslint-disable-next-line no-shadow
export const sx = () => ({ sx = {}, styleConfig = {}, theme }) =>
  css({ ...styleConfig, ...sx })(theme);
