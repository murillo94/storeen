import { Box } from '../../box';
import { Text } from '../../typography';

export const TextTableCell = ({
  children,
  text = '',
  textCustomStyle,
  ...props
}) => (
  <Box
    styleConfig={{
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      flex: '1 1 0%',
      span: {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }}
    {...props}
  >
    {text && <Text sx={textCustomStyle}>{text}</Text>}
    {children}
  </Box>
);
