const breakpoints = ['40em', '52em', '64em', '80em'];
const [small, medium, large, xlarge] = breakpoints;

breakpoints.small = small;
breakpoints.medium = medium;
breakpoints.large = large;
breakpoints.xlarge = xlarge;

export const theming = {
  breakpoints,
  fontSizes: ['14px', '16px', '18px', '20px', '22px', '24px', '26px', '28px'],
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
    '80px',
    '85px',
    '90px',
    '100px'
  ],
  radii: ['0', '4px', '5px', '6px', '8px'],
  shadows: [
    '0 0 0 3px rgba(85, 121, 229, 0.25)',
    '0 0 0 3px rgba(206, 65, 49, 0.25)',
    '0 0 0 3px rgba(6, 146, 81, 0.25)'
  ],
  colors: {
    gray0: '#ffffff',
    gray100: '#fafafd',
    gray200: '#efefef',
    gray300: '#e3e3e3',
    gray400: '#dadada',
    gray500: '#acacac',
    gray600: '#8c8c8c',
    gray700: '#646464',
    gray800: '#515151',
    gray900: '#333333',

    blue0: '#f7f9ff',
    blue100: '#e7edff',
    blue200: '#d6e0ff',
    blue300: '#c3d2ff',
    blue400: '#aec2ff',
    blue500: '#96b1ff',
    blue600: '#7a9cff',
    blue700: '#5c82f6',

    red0: '#fff8f8',
    red100: '#ffe8e8',
    red200: '#ffd7d7',
    red300: '#ffc5c5',
    red400: '#ffafaf',
    red500: '#ff9595',
    red600: '#ff7474',
    red700: '#ff3e3e',

    green0: '#f6fbf6',
    green100: '#e3f1e3',
    green200: '#cfe7cf',
    green300: '#b9dcb9',
    green400: '#a0d0a0',
    green500: '#84c284',
    green600: '#63b163',
    green700: '#399c39'
  }
};
