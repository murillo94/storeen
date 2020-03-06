import { Label, Paragraph } from 'components/typography';

import useTheme from 'hooks/theme/useTheme';

import { radius400 } from 'utils/theme/radius';

const labelStyle = {
  display: 'inline-flex'
};

const descriptionStyle = {
  margin: '5px 0 0'
};

const Checkbox = ({
  appearance = 'minimal',
  id = null,
  name = '',
  value = '',
  text = '',
  description = '',
  checked = false,
  onChange = () => null
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <div
        className={`input-check input-form ${description &&
          'with-description'}`}
      >
        <Label
          id={`${id}-checkbox-label`}
          htmlFor={id}
          customStyle={labelStyle}
        >
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value || checked}
            checked={checked}
            aria-checked={checked}
            aria-label={`${id}-checkbox-label`}
            onChange={onChange}
          />
          <span>{text}</span>
        </Label>
        {description && (
          <Paragraph
            text={description}
            color="muted"
            customStyle={descriptionStyle}
          />
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
            border-radius: ${radius400};
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

export default Checkbox;
