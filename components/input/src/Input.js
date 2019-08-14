import { Label } from 'components/typography';
import InputText from './InputText';
import InputIcon from './InputIcon';

const defaultStyle = {
  marginBottom: '20px'
};

const Input = ({
  appearance = 'minimal',
  type = 'text',
  id = null,
  name = '',
  labelText = '',
  placeholder = '',
  icon = '',
  customStyle = {},
  onClick = null
}) => (
  <>
    {labelText && <Label id={`${id}-label`} htmlFor={id} text={labelText} />}
    {icon ? (
      <InputIcon
        appearance={appearance}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        icon={icon}
        customStyle={{ ...defaultStyle, ...customStyle }}
        onClick={onClick}
      />
    ) : (
      <InputText
        appearance={appearance}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        customStyle={{ ...defaultStyle, ...customStyle }}
      />
    )}
  </>
);

export default Input;
