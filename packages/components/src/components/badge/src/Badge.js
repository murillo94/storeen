import { Button } from '../../button';
import { Text } from '../../typography';

import useTheme from '../../../utils/theme/useTheme';

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
    borderRadius: borderRadius6,
    padding: '1px 6px'
  };

  return (
    <>
      {onClick ? (
        <Button
          appearance={appearance}
          text={text}
          onClick={onClick}
          customStyle={badgeStyle}
        />
      ) : (
        <Text text={text} customStyle={badgeStyle} />
      )}
    </>
  );
};
