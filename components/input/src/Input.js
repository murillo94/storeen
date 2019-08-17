import { Label } from 'components/typography';
import InputText from './InputText';
import InputIcon from './InputIcon';

const Input = ({
  appearance = 'minimal',
  type = 'text',
  id = null,
  name = '',
  labelText = '',
  placeholder = '',
  icon = '',

  onClick = null
}) => (
  <>
    <div>
      {labelText && <Label id={`${id}-label`} htmlFor={id} text={labelText} />}
      {icon ? (
        <InputIcon
          appearance={appearance}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          icon={icon}
          onClick={onClick}
        />
      ) : (
        <InputText
          appearance={appearance}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
        />
      )}
    </div>

    <style jsx>
      {`
        div + div {
          margin-top: 20px;
        }
      `}
    </style>
  </>
);

export default Input;
