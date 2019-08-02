import { Label } from '../../typography';
import InputText from './InputText';
import InputIcon from './InputIcon';

const Input = ({
  type = 'text',
  id = null,
  name = '',
  labelText = '',
  placeholder = '',
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
        border={border}
        marginBottom={marginBottom}
        onClick={onClick}
      />
    ) : (
      <InputText
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
