import { useRef } from 'react';

import InputIcon from './InputIcon';

import useTheme from '@storeen/system/src/hooks/theme/useTheme';

import { mono0, mono600 } from '@storeen/system/src/utils/theme/colors';

const InputPassword = ({
  appearance,
  type,
  id,
  name,
  value,
  placeholder,
  onChange
}) => {
  const inputPasswordRef = useRef(null);
  const theme = useTheme(appearance);

  const handleClickPassword = () => {
    const inputType = inputPasswordRef.current.type;

    inputPasswordRef.current.type = inputType === 'text' ? 'password' : 'text';
  };

  return (
    <>
      <InputIcon
        appearance={appearance}
        type={type}
        id={id}
        innerRef={inputPasswordRef}
        name={name}
        value={value}
        placeholder={placeholder}
        icon="eye"
        onChange={onChange}
        onClick={handleClickPassword}
      />

      <style jsx>
        {`
          :global(.input-normal) :global(div) :global(button[type='submit']) {
            background-color: ${mono0};
            border-color: ${theme.borderColor};
          }

          :global(.input-normal)
            :global(input[type='text'])
            + :global(button)
            :global(svg)
            :global(path) {
            stroke: ${mono600};
            fill: ${theme.hover.borderColor};
          }

          :global(.input-normal)
            :global(input[type='text'])
            + :global(button)
            :global(svg)
            :global(circle) {
            stroke: ${mono600};
            fill: ${mono0};
          }
        `}
      </style>
    </>
  );
};

export default InputPassword;
