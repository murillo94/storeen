import css from '@styled-system/css';

// eslint-disable-next-line no-shadow
export const sx = ({ sx = {}, styleConfig = {} }) =>
  css({ ...styleConfig, ...sx })();
