import Button from 'components/button';
import InputText from './InputText';

const buttonStyle = {
  borderLeft: 0
};

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
      <InputText
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        border={border}
        marginBottom={marginBottom}
      />
      <Button
        appearance="minimal"
        icon={icon}
        customStyle={{ border, ...buttonStyle }}
        onClick={onClick}
      />
    </div>

    <style jsx>
      {`
        .container {
          display: flex;
          align-items: center;
        }

        .container :global(input) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-right: none;
        }

        .container :global(button) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: none;
          height: 39px;
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
