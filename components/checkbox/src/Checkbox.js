import { Label } from 'components/typography';

import useTheme from 'themes/useTheme';

const Checkbox = ({
  appearance = 'minimal',
  id = null,
  value = '',
  checked = false
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <Label htmlFor={id}>
        <input type="checkbox" id={id} value={value} aria-checked={checked} />
        <span>{value}</span>
      </Label>

      <style jsx>
        {`
          :global(label) {
            cursor: pointer;
            position: relative;
          }

          input {
            opacity: 0;
          }

          span {
            margin-left: 5px;
            display: inline-block;
          }

          span::before {
            content: '';
            border-radius: 4px;
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
            border-width: 0 2px 2px 0;
            border-style: solid;
            border-color: transparent ${theme.focus.borderColor}
              ${theme.focus.borderColor} transparent;
            width: 5px;
            height: 10px;
            position: absolute;
            top: 4px;
            left: 7px;
            transform: rotate(45deg) scale(0);
            display: block;
          }

          span::before,
          span::after {
            transition: all 0.15s ease-in-out;
          }

          input:checked + span::before {
            border-color: ${theme.focus.borderColor};
          }

          input:checked:focus + span::before {
            border-color: ${theme.focus.borderColor};
            box-shadow: ${theme.focus.boxShadow};
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
