import { Box } from '../../box';
import { Label, Paragraph } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

export const Radio = ({
  children,
  appearance = 'minimal',
  id = null,
  name = '',
  value = '',
  description = '',
  isChecked = false,
  onChange = () => null,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <Box
      styleConfig={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Label
        id={`${id}-radio-label`}
        htmlFor={id}
        sx={{
          display: 'inline-flex',
          position: 'relative',
          cursor: 'pointer'
        }}
      >
        <Box
          as="input"
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={isChecked}
          aria-checked={isChecked}
          aria-label={`${id}-radio-label`}
          onChange={onChange}
          margin={0}
          styleConfig={{
            width: '18px',
            height: '18px',
            opacity: 0,
            '&:focus + span::before': {
              borderColor: theme.focus.borderColor,
              boxShadow: theme.focus.boxShadow
            },
            '&:checked + span::before': {
              borderColor: theme.focus.borderColor
            },
            '&:checked + span::after': {
              transform: 'scale(1)'
            }
          }}
          {...props}
        />
        <Box
          as="span"
          marginLeft={1}
          styleConfig={{
            userSelect: 'none',
            display: 'inline-block',
            '&::before': {
              content: '""',
              borderRadius: '50%',
              border: `1px solid ${theme.borderColor}`,
              width: '18px',
              height: '18px',
              position: 'absolute',
              top: '1px',
              left: 0,
              transform: 'rotate(0deg) scale(1)',
              display: 'block'
            },
            '&::after': {
              content: '""',
              border: `5px solid ${theme.focus.borderColor}`,
              borderRadius: 2,
              position: 'absolute',
              top: '5px',
              left: '4px',
              transform: 'scale(0)',
              display: 'block'
            },
            '&::before, &::after': {
              transition: 'all 0.15s ease-in-out'
            }
          }}
        >
          {children}
        </Box>
      </Label>
      {description && (
        <Paragraph color="muted" marginTop={1}>
          {description}
        </Paragraph>
      )}
    </Box>
  );
};
