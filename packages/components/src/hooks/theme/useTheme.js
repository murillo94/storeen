import {
  gray0,
  gray100,
  gray200,
  gray900,
  purple700,
  purple600,
  red700,
  red600,
  green700,
  green600,
  primary,
  negative,
  positive
} from '@storeen/system';

const theme = {
  default: {
    color: gray0,
    backgroundColor: purple700,
    borderColor: purple700,
    hover: {
      color: gray0,
      backgroundColor: purple600,
      borderColor: purple600
    },
    focus: {
      boxShadow: primary,
      borderColor: purple700
    }
  },
  minimal: {
    color: gray900,
    backgroundColor: 'transparent',
    borderColor: gray200,
    hover: {
      color: gray900,
      backgroundColor: gray100,
      borderColor: gray100
    },
    focus: {
      boxShadow: primary,
      borderColor: purple700
    }
  },
  negative: {
    color: gray0,
    backgroundColor: red700,
    borderColor: red700,
    hover: {
      color: gray0,
      backgroundColor: red600,
      borderColor: red600
    },
    focus: {
      boxShadow: negative,
      borderColor: red600
    }
  },
  positive: {
    color: gray0,
    backgroundColor: green700,
    borderColor: green700,
    hover: {
      color: gray0,
      backgroundColor: green600,
      borderColor: green600
    },
    focus: {
      boxShadow: positive,
      borderColor: green600
    }
  }
};

const useTheme = appearance => theme[appearance];

export default useTheme;
