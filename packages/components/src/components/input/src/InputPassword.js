import { useRef } from 'react';

import { InputIcon } from './InputIcon';

import useTheme from '../../../hooks/theme/useTheme';

import { theming } from '../../../theme/theming';

export const InputPassword = ({
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
            background-color: ${theming.colors.gray0};
            border-color: ${theme.borderColor};
          }

          :global(.input-normal)
            :global(input[type='text'])
            + :global(button)
            :global(svg)
            :global(path) {
            fill: ${theme.hover.borderColor};
          }

          :global(.input-normal)
            :global(input[type='text'])
            + :global(button)
            :global(svg)
            :global(circle) {
            fill: ${theming.colors.gray0};
          }
        `}
      </style>
    </>
  );
};
