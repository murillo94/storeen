import { mono700, mono900, primary700 } from 'utils/theme/colors';

const fonts = {
  default: mono900,
  muted: mono700,
  primary: primary700
};

const useFont = color => fonts[color] || color;

export default useFont;
