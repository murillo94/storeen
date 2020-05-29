import { memo } from 'react';

import { Box } from '../../box';
import { Label } from '../../typography';
import { InputText } from './InputText';
import { InputPassword } from './InputPassword';
import { InputIcon } from './InputIcon';

export const Input = memo(
  ({
    appearance = 'minimal',
    type = 'text',
    innerRef = null,
    id = null,
    name = '',
    value,
    labelText = '',
    placeholder = '',
    icon = '',
    mask = '',
    onChange = () => null,
    onClick = () => null,
    ...props
  }) => (
    <Box className="input-form">
      {labelText && (
        <Label id={`${id}-input-label`} htmlFor={id} marginBottom={1}>
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
          {...props}
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
              {...props}
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
              {...props}
            />
          )}
        </>
      )}
    </Box>
  ),
  (prevProps, nextProps) => prevProps.value === nextProps.value
);
