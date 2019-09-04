import MaskedInput from 'react-text-mask';

import { MASKS } from '../utils/mask';

import useTheme from 'themes/useTheme';
import { mono500 } from 'themes/colors';
import { radius600 } from 'themes/radius';

const Input = ({
  appearance,
  type,
  id,
  name,
  value,
  innerRef,
  placeholder
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        ref={innerRef}
        aria-describedby={`${id}-message`}
        aria-labelledby={`${id}-label`}
        placeholder={placeholder}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
      />

      <style jsx>
        {`
          input {
            font-size: 14px;
            background-clip: padding-box;
            border: 1px solid ${theme.borderColor};
            border-radius: ${radius600};
            padding: 10px;
            outline: 0;
            width: 100%;
            display: block;
          }

          :focus {
            box-shadow: ${theme.focus.boxShadow};
            border-color: ${theme.focus.borderColor};
          }

          ::placeholder {
            color: ${mono500};
          }
        `}
      </style>
    </>
  );
};

const InputText = ({ mask, ...props }) => {
  const validMask = MASKS[mask];

  return (
    <>
      {validMask ? (
        <MaskedInput
          mask={validMask}
          render={(ref, propsMask) => (
            <Input innerRef={ref} {...props} {...propsMask} />
          )}
        />
      ) : (
        <Input {...props} />
      )}
    </>
  );
};

export default InputText;
