import { Box } from '../../box';
import { Text, Label } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

export const Switch = ({
  appearance = 'minimal',
  id = null,
  name = '',
  value = '',
  leftText = '',
  rightText = '',
  colorText = 'muted',
  isChecked,
  onChange = () => null,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <Box
      styleConfig={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Text color={colorText} marginRight={leftText ? 1 : 0}>
        {leftText}
      </Text>
      <Label
        id={`${id}-switch-label`}
        htmlFor={id}
        margin={0}
        sx={{ position: 'relative', cursor: 'pointer' }}
      >
        <Box
          as="input"
          type="checkbox"
          role="switch"
          id={id}
          name={name}
          value={value || isChecked}
          checked={isChecked}
          aria-checked={isChecked}
          aria-label={`${id}-switch-label`}
          onChange={onChange}
          margin={0}
          styleConfig={{
            position: 'absolute',
            opacity: 0,
            '&:focus + span': {
              border: theme.focus.borderColor,
              boxShadow: 0
            },
            '&:checked + span': {
              backgroundColor: theme.focus.borderColor
            },
            '&:checked + span::before': {
              backgroundColor: 'gray0',
              marginLeft: 1,
              transform: 'translateX(100%)'
            }
          }}
          {...props}
        />
        <Box
          as="span"
          styleConfig={{
            backgroundColor: 'gray400',
            borderRadius: '20px',
            width: '44px',
            height: '22px',
            transition: 'background-color 0.12s ease-in-out 0s',
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
            '&::before': {
              content: '""',
              backgroundColor: 'gray0',
              borderRadius: '50%',
              marginLeft: '3px',
              width: '18px',
              height: '18px',
              transform: 'translateX(0%)',
              transition: 'transform 0.15s ease-in-out 0s'
            }
          }}
        />
      </Label>
      <Text color={colorText} marginLeft={rightText ? 1 : 0}>
        {rightText}
      </Text>
    </Box>
  );
};
