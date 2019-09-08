import Button from 'components/button';
import InputText from './InputText';

const buttonStyle = {
  borderLeft: 0
};

const InputIcon = ({
  appearance,
  type,
  id,
  innerRef,
  name,
  value,
  placeholder,
  icon,
  mask,
  onClick
}) => (
  <>
    <div>
      <InputText
        appearance={appearance}
        mask={mask}
        type={type}
        id={id}
        innerRef={innerRef}
        name={name}
        value={value}
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
        div {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          width: 100%;
        }

        div :global(input) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-right: none;
          flex: 1 1 auto;
        }

        div :global(button) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: none;
        }

        div :global(input):focus,
        div :global(input):focus {
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
