import useTheme from 'themes/useTheme';
import { radius800 } from 'themes/radius';

const InputText = ({
  appearance,
  type,
  id,
  name,
  placeholder,
  customStyle
}) => {
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
        style={{ ...customStyle }}
      />

      <style jsx>
        {`
          input {
            font-size: 14px;
            border: 1px solid ${theme.borderColor};
            border-radius: ${radius800};
            padding: 10px;
            outline: 0;
            width: 100%;
            display: block;
          }

          :focus {
            box-shadow: ${theme.focus.boxShadow};
            border-color: ${theme.focus.borderColor};
          }
        `}
      </style>
    </>
  );
};

export default InputText;
