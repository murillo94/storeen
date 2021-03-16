import { Box, Heading, Paragraph } from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const University = () => (
  <Wrapper>
    <Heading marginBottom={4} sx={{ textAlign: 'center' }}>
      Universidade
    </Heading>
    <Paragraph color="muted" marginBottom={10} sx={{ textAlign: 'center' }}>
      Aprenda tudo sobre e-commerce e não tenha dúvidas sobre nossa plataforma.
    </Paragraph>
    <Box as="section" paddingY={4}>
      <Heading is="h3">
        Novidades saindo do forno logo mais, fique atento!
      </Heading>
    </Box>
  </Wrapper>
);

export default useLayout(University);
