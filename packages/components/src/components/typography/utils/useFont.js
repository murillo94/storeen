import { theming } from '../../../theme/theming';

const fonts = {
  default: theming.colors.gray900,
  muted: theming.colors.gray700,
  primary: theming.colors.blue700,
  positive: theming.colors.green700,
  negative: theming.colors.red700
};

const useFont = color => fonts[color] || color;

export default useFont;
