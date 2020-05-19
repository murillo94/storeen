import { Box } from '../../box';
import { Button } from '../../button';
import { Heading } from '../../typography';

export const SubHeader = ({
  children,
  title = '',
  hasBack = false,
  onClick = null,
  ...props
}) => (
  <>
    <Box
      as="header"
      styleConfig={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '39px'
      }}
      {...props}
    >
      <Box
        styleConfig={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {hasBack && (
          <Button
            appearance="minimal"
            icon="chevron-left"
            hasBorder={false}
            onClick={onClick}
          />
        )}
        <Heading marginLeft={hasBack ? 1 : 0}>{title}</Heading>
      </Box>
      {children && (
        <Box
          styleConfig={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  </>
);
