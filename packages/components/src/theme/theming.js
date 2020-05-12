const breakpoints = ['40em', '52em', '64em', '80em'];
const [small, medium, large, xlarge] = breakpoints;

breakpoints.small = small;
breakpoints.medium = medium;
breakpoints.large = large;
breakpoints.xlarge = xlarge;

export const theming = {
  breakpoints,
  fontSizes: ['14px', '16px', '18px', '28px'],
  fontWeights: ['400', '500', '600'],
  space: [
    '0',
    '5px',
    '10px',
    '15px',
    '20px',
    '25px',
    '30px',
    '35px',
    '40px',
    '45px',
    '60px',
    '65px',
    '80px'
  ],
  radii: ['0', '4px', '5px', '6px', '8px'],
  shadows: [
    '0 0 0 3px rgba(85, 121, 229, 0.25)',
    '0 0 0 3px rgba(206,65,49, 0.25)',
    '0 0 0 3px rgba(6,146,81, 0.25)'
  ],
  colors: {
    purple100: '#bfcfff',
    purple200: '#afc3ff',
    purple300: '#9fb7ff',
    purple400: '#8fabff',
    purple500: '#7e9fff',
    purple600: '#6f93ff',
    purple700: '#5f87ff',
    purple800: '#5579e5',

    red100: '#f4b6af',
    red200: '#f2a49b',
    red300: '#ef9187',
    red400: '#ec7f73',
    red500: '#ea6d5e',
    red600: '#e75b4b',
    red700: '#e54937',

    green100: '#9bdabd',
    green200: '#83d1ac',
    green300: '#6ac79c',
    green400: '#51be8b',
    green500: '#38b57a',
    green600: '#1fac6a',
    green700: '#07a35a',

    gray0: '#ffffff',
    gray50: '#fafafd',
    gray75: '#f4f6f8',
    gray100: '#ececec',
    gray200: '#d1d1d1',
    gray300: '#c7c7c7',
    gray400: '#bebebe',
    gray500: '#b5b5b5',
    gray600: '#acacac',
    gray700: '#a3a3a3',
    gray800: '#717171',
    gray900: '#333333'
  }
};
