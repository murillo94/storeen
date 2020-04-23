import { Button } from '../../button';
import { Text } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

import { gray0, borderRadius6 } from '@storeen/system';

export const Badge = ({
  appearance = 'default',
  text = '',
  onClick = null
}) => {
  const theme = useTheme(appearance);
  const badgeStyle = {
    color: theme.borderColor,
    backgroundColor: gray0,
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
