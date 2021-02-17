import { Box } from '../../box';
import { Input } from '../../input';
import { Inline } from '../../inline';

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
      alignItems: 'center',
      flexDirection: ['column', 'row'],
      input: {
        width: '300px'
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
        ariaLabel={`Buscar ${placeholderSearchSuffix}`}
        id="search"
        name="search"
        icon="search"
        placeholder={`Buscar ${placeholderSearchSuffix}`}
      />
    )}
    <Inline>{children}</Inline>
  </Box>
);
