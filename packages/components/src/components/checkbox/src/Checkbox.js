import { Label, Paragraph } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

import { borderRadius4 } from '@storeen/system';

const labelStyle = {
  display: 'inline-flex'
};

export const Checkbox = ({
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
        <Label id={`${id}-checkbox-label`} htmlFor={id} sx={labelStyle}>
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value || isChecked}
            checked={isChecked}
            aria-checked={isChecked}
            aria-label={`${id}-checkbox-label`}
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
            border-radius: ${borderRadius4};
            border: 1px solid ${theme.borderColor};
            width: 18px;
            height: 18px;
            position: absolute;
            top: 0;
            left: 0;
            transform: rotate(0deg) scale(1);
            display: block;
          }

          span::after {
            content: '';
            border-width: 0 2px 2px 0;
            border-style: solid;
            border-color: transparent ${theme.focus.borderColor}
              ${theme.focus.borderColor} transparent;
            width: 5px;
            height: 10px;
            position: absolute;
            top: 3px;
            left: 7px;
            transform: rotate(45deg) scale(0);
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
            transform: rotate(45deg) scale(1);
          }
        `}
      </style>
    </>
  );
};
