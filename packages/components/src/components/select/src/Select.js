import { Box } from '../../box';
import { Label } from '../../typography';
import { Icon } from '../../icon';

import useTheme from '../../../hooks/theme/useTheme';

import { theming } from '../../../theme/theming';

export const Select = ({
  appearance = 'minimal',
  id = null,
  name = '',
  value = '',
  labelText = '',
  options = [],
  onChange = () => null,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <Box>
      {labelText && (
        <Label id={`${id}-select-label`} htmlFor={id} marginBottom={1}>
          {labelText}
        </Label>
      )}
      <Box
        className="container"
        styleConfig={{
          width: '100%',
          position: 'relative',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          svg: {
            pointerEvents: 'none',
            position: 'absolute',
            right: '6px'
          }
        }}
      >
        <Box
          as="select"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          paddingLeft={2}
          paddingRight={6}
          paddingY={2}
          styleConfig={{
            fontSize: 0,
            backgroundColor: 'gray0',
            backgroundClip: 'padding-box',
            border: `1px solid ${theme.borderColor}`,
            borderRadius: 3,
            outline: 0,
            appearance: 'none',
            width: '100%',
            display: 'block',
            focus: {
              boxShadow: theme.focus.boxShadow,
              borderColor: theme.focus.borderColor
            }
          }}
          {...props}
        >
          <option value="" aria-label="Empty" hidden />
          {options.map(option => (
            <option
              key={option.value}
              value={option.value}
              aria-label={option.value}
            >
              {option.value}
            </option>
          ))}
        </Box>
        <Icon name="chevron-down" size={18} color={theming.colors.gray700} />
      </Box>
    </Box>
  );
};
