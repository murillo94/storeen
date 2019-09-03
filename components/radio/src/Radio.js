import { Label } from 'components/typography';

import useTheme from 'themes/useTheme';

const Radio = ({
  appearance = 'minimal',
  id = null,
  value = '',
  checked = false
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <div>
        <Label htmlFor={id}>
          <input type="radio" id={id} value={value} aria-checked={checked} />
          <span>{value}</span>
        </Label>
      </div>

      <style jsx>
        {`
          div + div {
            margin-top: 10px;
          }

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
            border-radius: 5px;
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

          input:checked + span::before {
            border-color: ${theme.focus.borderColor};
          }

          input:checked:focus + span::before {
            border-color: ${theme.focus.borderColor};
            box-shadow: ${theme.focus.boxShadow};
          }

          input:checked + span::after {
            transform: scale(1);
          }
        `}
      </style>
    </>
  );
};

export default Radio;
