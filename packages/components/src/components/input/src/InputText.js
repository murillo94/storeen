import MaskedInput from 'react-text-mask';

import useTheme from '../../../hooks/theme/useTheme';

import { theming } from '../../../theme/theming';

import { MASKS } from '../utils/mask';

const Input = ({
  appearance,
  type,
  id,
  innerRef,
  name,
  value,
  placeholder,
  onChange
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <input
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
      />

      <style jsx>
        {`
          input {
            font-size: ${theming.fontSizes[0]};
            background-clip: padding-box;
            border: 1px solid ${theme.borderColor};
            border-radius: ${theming.radii[3]};
            padding: 10px;
            outline: 0;
            width: 100%;
            display: block;
          }

          input[type='number'] {
            appearance: none;
          }

          input[type='number']::-webkit-inner-spin-button,
          input[type='number']::-webkit-outer-spin-button {
            appearance: none;
          }

          :focus {
            box-shadow: ${theme.focus.boxShadow};
            border-color: ${theme.focus.borderColor};
          }

          ::placeholder {
            color: ${theming.colors.gray500};
          }
        `}
      </style>
    </>
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
