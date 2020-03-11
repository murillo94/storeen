import { gray900, gray800, purple700 } from '@storeen/system';

const fonts = {
  default: gray900,
  muted: gray800,
  primary: purple700
};

const useFont = color => fonts[color] || color;

export default useFont;
