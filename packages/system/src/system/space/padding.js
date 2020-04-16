import { system } from '@styled-system/core';

const config = {
  padding: {
    property: 'padding',
    scale: 'space'
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space'
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space'
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space'
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space'
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space'
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space'
  }
};

export const padding = system(config);
