import { useRef } from 'react';

import { InputIcon } from './InputIcon';

import useTheme from '../../../utils/theme/useTheme';

import { gray0, gray600 } from '@storeen/system';

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
            background-color: ${gray0};
            border-color: ${theme.borderColor};
          }

          :global(.input-normal)
            :global(input[type='text'])
            + :global(button)
            :global(svg)
            :global(path) {
            stroke: ${gray600};
            fill: ${theme.hover.borderColor};
          }

          :global(.input-normal)
            :global(input[type='text'])
            + :global(button)
            :global(svg)
            :global(circle) {
            stroke: ${gray600};
            fill: ${gray0};
          }
        `}
      </style>
    </>
  );
};
