import { Container } from '../../container';
import { TableOptions } from './TableOptions';
import { Box } from '../../box';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';

export const Table = ({
  children,
  title = '',
  optionsTitle,
  optionsHeader,
  headers = [],
  placeholderSearchSuffix = '',
  ariaLabel = null,
  hasSearch = false,
  ...props
}) => {
  return (
    <Container title={title} optionsTitle={optionsTitle} padding={0}>
      {(optionsHeader || hasSearch) && (
        <TableOptions
          hasSearch={hasSearch}
          placeholderSearchSuffix={placeholderSearchSuffix}
        >
          {optionsHeader}
        </TableOptions>
      )}
      <Box
        styleConfig={{
          overflowX: 'auto',
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': '-ms-autohiding-scrollbar'
        }}
        {...props}
      >
        <Box
          as="table"
          aria-label={title || ariaLabel}
          styleConfig={{
            borderCollapse: 'collapse',
            width: '100%'
          }}
        >
          <TableHead headers={headers} />
          <TableBody>{children}</TableBody>
        </Box>
      </Box>
    </Container>
  );
};
