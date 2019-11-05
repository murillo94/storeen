import { memo } from 'react';

import { Label } from 'components/typography';
import InputText from './InputText';
import InputPassword from './InputPassword';
import InputIcon from './InputIcon';

const Input = memo(
  ({
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
    onChange = null,
    onClick = null
  }) => (
    <div className="input-normal input-form">
      {labelText && (
        <Label id={`${id}-input-label`} htmlFor={id}>
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
          onChange={onChange}
          onClick={onClick}
        />
      ) : (
        <>
          {type === 'password' ? (
            <InputPassword
              appearance={appearance}
              type={type}
              id={id}
              innerRef={innerRef}
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
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
              onChange={onChange}
            />
          )}
        </>
      )}
    </div>
  ),
  (prevProps, nextProps) => prevProps.value === nextProps.value
);

export default Input;
