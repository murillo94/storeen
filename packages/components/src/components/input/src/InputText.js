import MaskedInput from 'react-text-mask';

import { Box } from '../../box';

import useTheme from '../../../hooks/theme/useTheme';

import { MASKS } from '../utils/mask';

const Input = ({
  appearance,
  type,
  id,
  innerRef,
  name,
  value,
  placeholder,
  onChange,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <Box
      as="input"
      type={type}
      id={id}
      ref={innerRef}
      name={name}
      value={value}
      aria-label={`${id}-input-label`}
      placeholder={placeholder}
      autoComplete="off"
      autoCapitalize="off"
      autoCorrect="off"
      spellCheck="false"
      onChange={onChange}
      padding={2}
      styleConfig={{
        fontSize: 0,
        backgroundClip: 'padding-box',
        border: `1px solid ${theme.borderColor}`,
        borderRadius: 3,
        outline: 0,
        width: '100%',
        display: 'block',
        '&[type="number"], &[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
          appearance: 'none'
        },
        '&:focus': {
          boxShadow: theme.focus.boxShadow,
          borderColor: theme.focus.borderColor,
          zIndex: 1
        },
        '&::placeholder': {
          color: 'gray500'
        }
      }}
      {...props}
    />
  );
};

export const InputText = ({ mask, ...props }) => {
  const validMask = MASKS[mask];

  return (
    <>
      {validMask ? (
        <MaskedInput
          mask={validMask}
          onChange={props.onChange}
          render={(ref, propsMask) => (
            <Input {...props} {...propsMask} innerRef={ref} />
          )}
        />
      ) : (
        <Input {...props} />
      )}
    </>
  );
};
