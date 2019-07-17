import Label from '../label';
import Button from '../button';

const InputNormal = ({ type, id, name, placeholder, border, marginBottom }) => (
  <>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      spellCheck="false"
      autoComplete="off"
      autoCapitalize="off"
      autoCorrect="off"
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

const InputIcon = ({
  type,
  id,
  name,
  placeholder,
  icon,
  border,
  marginBottom,
  onClick
}) => (
  <>
    <div className="container">
      <div className="input">
        <InputNormal
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          border={border}
          marginBottom={0}
        />
      </div>
      <span className="icon">
        <Button icon={icon} border={border} onClick={onClick} />
      </span>
    </div>

    <style jsx>
      {`
        .container {
          border: 1px solid gray;
          border-radius: 8px;
          display: flex;
          align-items: center;
          margin-bottom: ${marginBottom};
        }

        .input {
          display: inline-block;
          flex: 0.99;
        }

        .icon {
          flex: 0.01;
          text-align: center;
        }
      `}
    </style>
  </>
);

const Input = ({
  type = 'text',
  id = null,
  name = '',
  placeholder = '',
  labelText = '',
  icon = '',
  border = '1px solid gray',
  marginBottom = '20px',
  onClick = null
}) => (
  <>
    {labelText && <Label htmlFor={id} text={labelText} />}
    {icon ? (
      <InputIcon
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        icon={icon}
        border="none"
        marginBottom={marginBottom}
        onClick={onClick}
      />
    ) : (
      <InputNormal
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        border={border}
        marginBottom={marginBottom}
      />
    )}
  </>
);

export default Input;
