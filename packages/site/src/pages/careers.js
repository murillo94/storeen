import { Box, Heading, Paragraph } from '@storeen/components';

import useLayout from '@site/hooks/useLayout';

const Carrers = () => (
  <Box as="section" paddingX={3} paddingY={4} marginBottom={15}>
    <Heading marginBottom={4}>Trabalhe na Storeen</Heading>
    <Paragraph marginBottom={10}>
      Junte-se à nossa equipe e faça parte da construção de uma nova era de
      vender online
    </Paragraph>
    <Heading is="h3">Não temos vagas em aberto no momento</Heading>
  </Box>
);

export default useLayout(Carrers);
