import { Box } from '../../box';
import { Input } from '../../input';
import { FormGroup } from '../../form';

export const TableOptions = ({
  children,
  hasSearch,
  placeholderSearchSuffix,
  ...props
}) => (
  <Box
    paddingTop={4}
    paddingBottom={6}
    paddingX={4}
    styleConfig={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItens: 'center',
      flexDirection: ['column', 'row'],
      input: {
        width: '300px'
      },
      'input, button[type="submit"]': {
        backgroundColor: 'gray75',
        borderColor: 'gray75'
      },
      '.form-group': {
        marginTop: [4, 0],
        'div > button': {
          padding: '8.5px',
          width: ['100%', 'auto']
        }
      }
    }}
    {...props}
  >
    {hasSearch && (
      <Input
        id="search"
        name="search"
        icon="search"
        placeholder={`Buscar ${placeholderSearchSuffix}`}
      />
    )}
    <FormGroup>{children}</FormGroup>
  </Box>
);
