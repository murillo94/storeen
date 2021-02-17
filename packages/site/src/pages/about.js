import {
  Box,
  Heading,
  Paragraph,
  Image,
  Stack,
  Inline,
  Button
} from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const About = () => (
  <Box
    as="section"
    paddingX={3}
    paddingY={4}
    marginBottom={15}
    sx={{ textAlign: 'center' }}
  >
    <Wrapper>
      <Heading marginBottom={4}>Sobre a Storeen</Heading>
      <Paragraph marginBottom={10} color="muted">
        Aqui prezamos pelo sucesso e pela ótima experiência do nosso cliente.
        Estamos focando naquilo em que somos melhores, construindo um bom
        produto, para ter o impacto que queremos ter sobre o mundo.
      </Paragraph>
      <Image
        src={require('@site/public/images/about-1.png')}
        alt="Storeen about"
        width="65%"
        height="100%"
      />
      <Box as="section" paddingX={3} paddingY={4} marginY={10}>
        <Stack space="xlarge" sx={{ textAlign: 'justify' }}>
          <Box>
            <Heading is="h3" marginBottom={2}>
              Por que a Storeen?
            </Heading>
            <Paragraph marginBottom={4}>todo</Paragraph>
          </Box>
          <Box>
            <Heading is="h3" marginBottom={2}>
              Autônomo e independente
            </Heading>
            <Paragraph marginBottom={4}>
              Somos uma equipe pequena, não temos que reportar a nenhum
              investidor, as únicas partes interessadas que temos, são nossos
              clientes e respondemos apenas a eles.
            </Paragraph>
            <Paragraph marginBottom={4}>
              Somos independentes e sempre seremos. Não estamos procurando
              acrescentar características inúteis apenas para justificar a taxa
              ou para atingir algum alvo comercial imposto de fora. Nosso
              objetivo é criar uma ferramenta inteligente que possa realmente
              ajudar as pessoas a venderem mais e aumentar a lucratividade dos
              seus negócios, por isso queremos fazê-lo a um preço justo e
              sustentável. Tão simples quanto isso.
            </Paragraph>
          </Box>
          <Box>
            <Heading is="h3" marginBottom={2}>
              Focado na privacidade
            </Heading>
            <Paragraph marginBottom={4}>
              Sabemos o quanto seus dados são importantes e, por esta razão,
              construímos todos os recursos a partir do zero, tendo em mente a
              privacidade. Podemos prometer isso a todos os clientes que
              utilizam a Storeen porque nosso modal de negócios é baseado em uma
              assinatura. Se você não está pagando por um produto, você é o
              produto.
            </Paragraph>
            <Paragraph marginBottom={4}>
              Nós não vendemos ou compartilhamos dados, você é o único
              proprietário de seus dados e pode apagá-los ou exportá-los a
              qualquer momento sem nenhum motivo e com um simples clique a
              partir de sua página de configurações.
            </Paragraph>
          </Box>
          <Box>
            <Heading is="h3" marginBottom={2}>
              Perguntas
            </Heading>
            <Paragraph marginBottom={4}>
              Entre em contato com a gente por e-mail.
            </Paragraph>
          </Box>
        </Stack>
      </Box>
      <Box as="section" paddingX={3} paddingY={4}>
        <Inline
          sx={{
            backgroundColor: 'gray0',
            boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.1)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'gray300',
            borderRadius: 4
          }}
          padding={6}
        >
          <Heading is="h3" sx={{ display: 'flex', alignItems: 'center' }}>
            Pronto para impulsionar seus negócios?
          </Heading>
          <Button>Começar</Button>
        </Inline>
      </Box>
    </Wrapper>
  </Box>
);

export default useLayout(About);
