import { Label } from 'components/typography';
import Icon from 'components/icon';

import useTheme from 'hooks/theme/useTheme';

import { mono0, mono600 } from 'utils/theme/colors';
import { radius600 } from 'utils/theme/radius';

const Select = ({
  appearance = 'minimal',
  id = null,
  name = '',
  value = '',
  labelText = '',
  options = [],
  onChange = null
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <div className="input-normal input-form">
        {labelText && (
          <Label id={`${id}-select-label`} htmlFor={id}>
            {labelText}
          </Label>
        )}
        <div className="container">
          <select id={id} name={name} value={value} onChange={onChange}>
            <option value="" aria-label="Empty" hidden />
            {options.map(option => (
              <option
                key={option.value}
                value={option.value}
                aria-label={option.value}
              >
                {option.value}
              </option>
            ))}
          </select>
          <Icon name="chevron-down" size={18} color={mono600} />
        </div>
      </div>

      <style jsx>
        {`
          .container {
            width: 100%;
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }

          .container :global(svg) {
            pointer-events: none;
            position: absolute;
            right: 6px;
          }

          select {
            font-size: 14px;
            background-color: ${mono0};
            background-clip: padding-box;
            border: 1px solid ${theme.borderColor};
            border-radius: ${radius600};
            padding: 10px 30px 10px 10px;
            outline: 0;
            appearance: none;
            width: 100%;
            display: block;
          }

          select:focus {
            box-shadow: ${theme.focus.boxShadow};
            border-color: ${theme.focus.borderColor};
          }
        `}
      </style>
    </>
  );
};

export default Select;
