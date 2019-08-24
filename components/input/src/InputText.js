import useTheme from 'themes/useTheme';
import { mono500 } from 'themes/colors';
import { radius600 } from 'themes/radius';

const InputText = ({ appearance, type, id, name, placeholder }) => {
  const theme = useTheme(appearance);

  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        aria-describedby={`${id}-message`}
        aria-labelledby={`${id}-label`}
        placeholder={placeholder}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
      />

      <style jsx>
        {`
          input {
            font-size: 14px;
            background-clip: padding-box;
            border: 1px solid ${theme.borderColor};
            border-radius: ${radius600};
            padding: 10px;
            outline: 0;
            width: 100%;
            display: block;
          }

          :focus {
            box-shadow: ${theme.focus.boxShadow};
            border-color: ${theme.focus.borderColor};
          }

          ::placeholder {
            color: ${mono500};
          }
        `}
      </style>
    </>
  );
};

export default InputText;
