import { Button } from '../../button';
import { Text } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

export const Badge = ({
  children,
  appearance = 'default',
  onClick = null,
  ...props
}) => {
  const theme = useTheme(appearance);
  const badgeStyle = {
    color: theme.borderColor,
    backgroundColor: 'gray0',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.borderColor,
    borderRadius: 3
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
          {...props}
        >
          {children}
        </Button>
      ) : (
        <Text paddingY={0} paddingX={1} sx={badgeStyle} {...props}>
          {children}
        </Text>
      )}
    </>
  );
};
