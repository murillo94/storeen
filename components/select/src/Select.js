import Icon from 'components/icon';

import useTheme from 'themes/useTheme';
import { mono0, mono600 } from 'themes/colors';
import { radius600 } from 'themes/radius';

const Select = ({ appearance = 'minimal', placeholder = 'teste' }) => {
  const theme = useTheme(appearance);

  return (
    <>
      <div>
        <select>
          <option value="">{placeholder}</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <Icon name="chevron-down" size={18} color={mono600} />
      </div>

      <style jsx>
        {`
          div {
            width: 100%;
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }

          div :global(svg) {
            pointer-events: none;
            position: absolute;
            right: 5px;
          }

          div + div {
            margin-top: 20px;
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
