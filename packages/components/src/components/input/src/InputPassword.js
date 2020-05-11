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
  onChange,
  ...props
}) => {
  const inputPasswordRef = useRef(null);
  const theme = useTheme(appearance);
  const defaultProps = {
    ...props,
    innerRef: inputPasswordRef
  };

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
        name={name}
        value={value}
        placeholder={placeholder}
        icon="eye"
        onChange={onChange}
        onClick={handleClickPassword}
        {...defaultProps}
      />

      <style jsx>
        {`
          :global(.input-form) :global(div) :global(button[type='submit']) {
            background-color: ${theming.colors.gray0};
            border-color: ${theme.borderColor};
          }

          :global(.input-form)
            :global(input[type='text'])
            + :global(button)
            :global(svg)
            :global(path) {
            fill: ${theme.hover.borderColor};
          }

          :global(.input-form)
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
