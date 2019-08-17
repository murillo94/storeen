import Button from 'components/button';
import InputText from './InputText';

const buttonStyle = {
  borderLeft: 0
};

const InputIcon = ({
  appearance,
  type,
  id,
  name,
  placeholder,
  icon,
  onClick
}) => (
  <>
    <div className="container">
      <InputText
        appearance={appearance}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <Button
        appearance={appearance}
        icon={icon}
        customStyle={buttonStyle}
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
