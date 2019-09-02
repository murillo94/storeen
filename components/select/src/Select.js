import useTheme from 'themes/useTheme';
import { mono0, mono500 } from 'themes/colors';
import { radius600 } from 'themes/radius';

const Select = ({ appearance = 'minimal' }) => {
  const theme = useTheme(appearance);

  return (
    <>
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <style jsx>
        {`
          select {
            font-size: 14px;
            background-color: ${mono0};
            background-clip: padding-box;
            border: 1px solid ${theme.borderColor};
            border-radius: ${radius600};
            padding: 10px;
            outline: 0;
            appearance: none;
            width: 100%;
            display: block;
          }

          select:focus {
            box-shadow: ${theme.focus.boxShadow};
            border-color: ${theme.focus.borderColor};
          }

          select::placeholder {
            color: ${mono500};
          }
        `}
      </style>
    </>
  );
};

export default Select;
