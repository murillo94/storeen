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
        type="submit"
        icon={icon}
        customStyle={buttonStyle}
        onClick={onClick}
      />
    </div>

    <style jsx>
      {`
        .container {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          width: 100%;
        }

        .container :global(input) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-right: none;
          flex: 1 1 auto;
        }

        .container :global(button) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: none;
        }

        .container :global(input):focus,
        .container :global(input):focus {
          z-index: 1;
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
