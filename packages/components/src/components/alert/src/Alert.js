import { Box } from '../../box';
import { Heading, Paragraph } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

export const Alert = ({
  children,
  appearance = 'positive',
  title = '',
  description = '',
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <Box
      role="alert"
      padding={4}
      styleConfig={{
        backgroundColor: 'gray0',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'gray300',
        borderLeftWidth: '4px',
        borderLeftStyle: 'solid',
        borderLeftColor: theme.borderColor,
        borderRadius: 3
      }}
      {...props}
    >
      {title && <Heading is="h4">{title}</Heading>}
      {description && (
        <Paragraph color="muted" marginTop={2}>
          {description}
        </Paragraph>
      )}
      {children}
    </Box>
  );
};
