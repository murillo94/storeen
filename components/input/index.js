import { Label } from '../typography';
import Button from '../button';

const InputNormal = ({ type, id, name, placeholder, border, marginBottom }) => (
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
      <div className="icon">
        <Button icon={icon} border={border} onClick={onClick} />
      </div>
    </div>

    <style jsx>
      {`
        .container {
          border: 1px solid gray;
          border-radius: 8px;
          margin-bottom: ${marginBottom};
          display: flex;
          align-items: center;
        }

        .input {
          display: inline-block;
          flex: 0.99;
        }

        .icon {
          text-align: center;
          flex: 0.01;
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
    {labelText && <Label id={`${id}-label`} htmlFor={id} text={labelText} />}
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
