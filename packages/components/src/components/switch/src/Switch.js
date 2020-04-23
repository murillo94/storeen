import { Text, Label } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

import { gray0, gray200, primary } from '@storeen/system';

export const Switch = ({
  appearance = 'minimal',
  id = null,
  name = '',
  value = '',
  leftText = '',
  rightText = '',
  colorText = 'muted',
  isChecked = false,
  onChange = () => null,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <div>
        <Text
          color={colorText}
          sx={{ marginRight: leftText && '7px' }}
        >
          {leftText}
        </Text>
        <Label id={`${id}-switch-label`} htmlFor={id}>
          <input
            type="checkbox"
            role="switch"
            id={id}
            name={name}
            value={value || isChecked}
            checked={isChecked}
            aria-checked={isChecked}
            aria-label={`${id}-switch-label`}
            onChange={onChange}
            {...props}
          />
          <span />
        </Label>
        <Text
          color={colorText}
          sx={{ marginLeft: rightText && '7px' }}
        >
          {rightText}
        </Text>
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            align-items: center;
          }

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
            background-color: ${gray200};
            border-radius: 20px;
            width: 44px;
            height: 22px;
            transition: background-color 0.12s ease-in-out 0s;
            display: flex;
            align-items: center;
            user-select: none;
          }

          span:before {
            content: '';
            background-color: ${gray0};
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
            background-color: ${gray0};
            margin-left: 5px;
            transform: translateX(100%);
          }
        `}
      </style>
    </>
  );
};
