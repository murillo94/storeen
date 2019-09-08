import { Label } from 'components/typography';
import InputText from './InputText';
import InputIcon from './InputIcon';

const Input = ({
  appearance = 'minimal',
  type = 'text',
  id = null,
  innerRef = null,
  name = '',
  value = '',
  labelText = '',
  placeholder = '',
  icon = '',
  mask = '',
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
        innerRef={innerRef}
        name={name}
        value={value}
        placeholder={placeholder}
        icon={icon}
        mask={mask}
        onClick={onClick}
      />
    ) : (
      <InputText
        appearance={appearance}
        type={type}
        id={id}
        innerRef={innerRef}
        name={name}
        value={value}
        placeholder={placeholder}
        mask={mask}
      />
    )}
  </div>
);

export default Input;
