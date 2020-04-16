import { system } from '@styled-system/core';

import { getNegativeSpace } from '../../utils/getNegativeSpace';

const config = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getNegativeSpace
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getNegativeSpace
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getNegativeSpace
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getNegativeSpace
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getNegativeSpace
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getNegativeSpace
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getNegativeSpace
  }
};

export const margin = system(config);
