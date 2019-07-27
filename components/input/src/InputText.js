const InputText = ({ type, id, name, placeholder, border, marginBottom }) => (
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
          border: ${border};
          border-radius: 8px;
          padding: 10px;
          margin-bottom: ${marginBottom};
          width: 100%;
          display: block;
        }
      `}
    </style>
  </>
);

export default InputText;
