import { Container } from '../../container';
import { TableOptions } from './TableOptions';
import { Box } from '../../box';

export const Table = ({
  children,
  title = '',
  optionsTitle,
  optionsHeader,
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
            borderRadius: 3,
            borderCollapse: 'collapse',
            overflow: 'hidden',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  );
};
