import Button from 'components/button';
import { Text } from 'components/typography';

import useTheme from 'hooks/theme/useTheme';

import { radius600 } from 'utils/theme/radius';
import { mono0 } from 'utils/theme/colors';

const Badge = ({ appearance = 'default', text = '', onClick = null }) => {
  const theme = useTheme(appearance);
  const badgeStyle = {
    color: theme.borderColor,
    backgroundColor: mono0,
    border: `1px solid ${theme.borderColor}`,
    borderRadius: radius600,
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

export default Badge;
