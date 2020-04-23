import { Label, Paragraph } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

import { borderRadius5 } from '@storeen/system';

const labelStyle = {
  display: 'inline-flex'
};

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
    <>
      <div
        className={`input-check input-form ${
          description && 'with-description'
        }`}
      >
        <Label id={`${id}-radio-label`} htmlFor={id} sx={labelStyle}>
          <input
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={isChecked}
            aria-checked={isChecked}
            aria-label={`${id}-radio-label`}
            onChange={onChange}
            {...props}
          />
          <span>{children}</span>
        </Label>
        {description && (
          <Paragraph color="muted" marginTop={1}>
            {description}
          </Paragraph>
        )}
      </div>

      <style jsx>
        {`
          :global(.input-check > label) {
            position: relative;
            cursor: pointer;
          }

          div {
            display: flex;
            flex-direction: column;
          }

          input {
            margin: 0;
            width: 18px;
            height: 18px;
            opacity: 0;
          }

          span {
            margin-left: 6px;
            user-select: none;
            display: inline-block;
          }

          span::before {
            content: '';
            border-radius: 50%;
            border: 1px solid ${theme.borderColor};
            width: 18px;
            height: 18px;
            position: absolute;
            top: 1px;
            left: 0;
            transform: rotate(0deg) scale(1);
            display: block;
          }

          span::after {
            content: '';
            border: 5px solid ${theme.focus.borderColor};
            border-radius: ${borderRadius5};
            position: absolute;
            top: 5px;
            left: 4px;
            transform: scale(0);
            display: block;
          }

          span::before,
          span::after {
            transition: all 0.15s ease-in-out;
          }

          input:focus + span::before {
            border-color: ${theme.focus.borderColor};
            box-shadow: ${theme.focus.boxShadow};
          }

          input:checked + span::before {
            border-color: ${theme.focus.borderColor};
          }

          input:checked + span::after {
            transform: scale(1);
          }
        `}
      </style>
    </>
  );
};
