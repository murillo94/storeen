import currency from 'currency.js';

export const formatBRL = value =>
  currency(value, { symbol: 'R$ ', separator: '.', decimal: ',' }).format();
