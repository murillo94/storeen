import { Button } from '../../button';
import { Text } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

import { theming } from '../../../theme/theming';

import { borderRadius6 } from '@storeen/system';

export const Badge = ({
  appearance = 'default',
  text = '',
  onClick = null
}) => {
  const theme = useTheme(appearance);
  const badgeStyle = {
    color: theme.borderColor,
    backgroundColor: theming.colors.gray0,
    border: `1px solid ${theme.borderColor}`,
    borderRadius: borderRadius6
  };

  return (
    <>
      {onClick ? (
        <Button
          appearance={appearance}
          onClick={onClick}
          paddingY={0}
          paddingX={1}
          sx={badgeStyle}
        >
          {text}
        </Button>
      ) : (
        <Text paddingY={0} paddingX={1} sx={badgeStyle}>
          {text}
        </Text>
      )}
    </>
  );
};
