import { Box } from '../../box';
import { Label, Paragraph } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

export const Checkbox = ({
  children,
  appearance = 'minimal',
  id = null,
  name = '',
  value = '',
  description = '',
  isChecked,
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
        id={`${id}-checkbox-label`}
        htmlFor={id}
        marginBottom={1}
        sx={{ display: 'inline-flex', position: 'relative', cursor: 'pointer' }}
      >
        <Box
          as="input"
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={isChecked}
          aria-label={`${id}-checkbox-label`}
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
              transform: 'rotate(45deg) scale(1)'
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
              borderRadius: 1,
              border: `1px solid ${theme.borderColor}`,
              width: '18px',
              height: '18px',
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'rotate(0deg) scale(1)',
              display: 'block'
            },
            '&::after': {
              content: '""',
              borderWidth: '0 2px 2px 0',
              borderStyle: 'solid',
              borderColor: `transparent ${theme.focus.borderColor}
                  ${theme.focus.borderColor} transparent`,
              width: '5px',
              height: '10px',
              position: 'absolute',
              top: '3px',
              left: '7px',
              transform: 'rotate(45deg) scale(0)',
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
