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
            width: 100%;
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default InputText;
