import { Box } from '../../box';
import { Button } from '../../button';
import { InputText } from './InputText';

export const InputIcon = ({
  appearance,
  type,
  id,
  innerRef,
  name,
  value,
  placeholder,
  icon,
  mask,
  onChange,
  onClick,
  ...props
}) => (
  <Box
    styleConfig={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      width: '100%'
    }}
  >
    <InputText
      appearance={appearance}
      mask={mask}
      type={type}
      id={id}
      innerRef={innerRef}
      name={name}
      value={value}
      placeholder={placeholder}
      sx={{
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 'none',
        flex: 0.95
      }}
      onChange={onChange}
      {...props}
    />
    <Button
      appearance={appearance}
      type="submit"
      icon={icon}
      sx={{
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: 0,
        flex: 0.05
      }}
      onClick={onClick}
    />
  </Box>
);
