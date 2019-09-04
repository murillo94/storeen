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
  <div className="input-normal input-form">
    {labelText && (
      <Label id={`${id}-label`} htmlFor={id}>
        {labelText}
      </Label>
    )}
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
);

export default Input;
