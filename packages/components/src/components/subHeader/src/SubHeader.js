import { Box } from '../../box';
import { Button } from '../../button';
import { Heading, Paragraph } from '../../typography';

export const SubHeader = ({
  children,
  title = '',
  subTitle = '',
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
        <Box
          marginLeft={hasBack ? 1 : 0}
          styleConfig={{ display: 'flex', flexDirection: 'column' }}
        >
          <Heading>{title}</Heading>
          {subTitle && (
            <Paragraph color="muted" marginTop={1} marginBottom={2}>
              {subTitle}
            </Paragraph>
          )}
        </Box>
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
