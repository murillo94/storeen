import { mono900, mono800, primary700 } from '@storeen/system';

const fonts = {
  default: mono900,
  muted: mono800,
  primary: primary700
};

const useFont = color => fonts[color] || color;

export default useFont;
