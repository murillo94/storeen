import {
  Box,
  Heading,
  Paragraph,
  Stack,
  Inline,
  Input,
  Button
} from '@storeen/components';

import useLayout from '@site/hooks/useLayout';

const Contact = () => (
  <Box as="section" paddingX={3} paddingY={4} marginBottom={15}>
    <Heading marginBottom={4}>Fale conosco</Heading>
    <Paragraph marginBottom={10}>
      Quer saber mais sobre a Storeen? Preencha o formulário abaixo e a nossa
      equipe lhe enviará mais informações para que possamos entender as
      necessidades do seu negócio.
    </Paragraph>
    <Stack space="large">
      <Stack sx={{ maxWidth: ['100%', '38em'] }} marginX="auto">
        <Inline>
          <Input placeholder="Nome" id="first-name" name="first-name" />
          <Input placeholder="Sobrenome" id="second-name" name="second-name" />
        </Inline>
        <Input type="email" placeholder="Email" id="email" name="email" />
        <Input
          placeholder="Nome da empresa"
          id="company-name"
          name="company-name"
        />
        <Input placeholder="Comentários" id="comments" name="comments" />
      </Stack>
      <Button>enviar mensagem</Button>
    </Stack>
  </Box>
);

export default useLayout(Contact);
