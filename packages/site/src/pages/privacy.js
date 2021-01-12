import { Box, Heading, Paragraph } from '@storeen/components';

import useLayout from '@site/hooks/useLayout';

const Carrers = () => (
  <Box as="section" paddingX={3} paddingY={4} marginBottom={15}>
    <Heading marginBottom={4}>Política de privacidade</Heading>
    <Paragraph marginBottom={10}>todo</Paragraph>
  </Box>
);

export default useLayout(Carrers);
