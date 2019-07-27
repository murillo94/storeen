import InputText from './InputText';
import Button from '../../button';

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
        <InputText
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

export default InputIcon;
