import {
  mono0,
  mono200,
  mono100,
  mono900,
  primary700,
  primary600,
  negative700,
  negative600,
  positive700,
  positive600
} from 'themes/colors';

const theme = {
  default: {
    color: mono0,
    backgroundColor: primary700,
    borderColor: primary700,
    hover: {
      color: mono0,
      backgroundColor: primary600,
      borderColor: primary600
    }
  },
  minimal: {
    color: mono900,
    backgroundColor: 'transparent',
    borderColor: mono200,
    hover: {
      color: mono900,
      backgroundColor: mono100,
      borderColor: mono100
    }
  },
  negative: {
    color: mono0,
    backgroundColor: negative700,
    borderColor: negative700,
    hover: {
      color: mono0,
      backgroundColor: negative600,
      borderColor: negative600
    }
  },
  positive: {
    color: mono0,
    backgroundColor: positive700,
    borderColor: positive700,
    hover: {
      color: mono0,
      backgroundColor: positive600,
      borderColor: positive600
    }
  }
};

const useTheme = appearance => theme[appearance];

export default useTheme;
