import { Label } from 'components/typography';

import useTheme from 'hooks/theme/useTheme';

import { primary } from 'utils/theme/shadows';
import { mono0, mono200 } from 'utils/theme/colors';

const Switch = ({
  appearance = 'minimal',
  id = null,
  name = '',
  value = '',
  checked = false,
  onChange = null
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <div>
        <Label id={`${id}-switch-label`} htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value || checked}
            checked={checked}
            aria-checked={checked}
            onChange={onChange}
          />
          <span className="slider round" />
        </Label>
      </div>
      <style jsx>
        {`
          div :global(label) {
            margin: 0;
            position: relative;
            cursor: pointer;
          }

          input {
            margin: 0;
            position: absolute;
            opacity: 0;
          }

          span {
            background-color: ${mono200};
            border-radius: 20px;
            width: 44px;
            height: 22px;
            transition: all 0.12s ease-in-out 0s;
            display: flex;
            align-items: center;
            user-select: none;
          }

          span:before {
            content: '';
            background-color: ${mono0};
            border-radius: 50%;
            margin-left: 3px;
            width: 18px;
            height: 18px;
            transform: translateX(0%);
            transition: transform 0.15s ease-in-out 0s;
          }

          input:focus + span {
            border: ${theme.focus.borderColor};
            box-shadow: ${primary};
          }

          input:checked + span {
            background-color: ${theme.focus.borderColor};
          }

          input:checked + span:before {
            background-color: ${mono0};
            margin-left: 5px;
            transform: translateX(100%);
          }
        `}
      </style>
    </>
  );
};

export default Switch;
