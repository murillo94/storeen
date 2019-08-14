import useTheme from 'themes/useTheme';

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
            border-radius: 8px;
            padding: 10px;
            outline: 0;
            width: 100%;
            display: block;
          }

          :focus {
            box-shadow: 0 0 0 3px rgba(96, 120, 255, 0.2);
            border-color: #6078ff;
          }
        `}
      </style>
    </>
  );
};

export default InputText;
