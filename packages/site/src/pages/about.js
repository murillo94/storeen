import {
  Box,
  Heading,
  Paragraph,
  Image,
  Stack,
  Inline,
  Anchor,
  Button
} from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const About = () => {
  const handleSignUp = () =>
    window.open('https://app-storeen.vercel.app/sign-up', '_ blank');

  return (
    <Wrapper>
      <Heading marginBottom={4} sx={{ textAlign: 'center' }}>
        Sobre a Storeen
      </Heading>
      <Paragraph color="muted" marginBottom={10} sx={{ textAlign: 'center' }}>
        Aqui prezamos pelo sucesso e pela ótima experiência do nosso cliente.
        Estamos focando naquilo em que somos melhores, construindo um bom
        produto, para ter o impacto que queremos ter sobre o mundo.
      </Paragraph>
      <Image
        src={require('@site/public/images/about-1.png')}
        alt="Storeen about"
        width={['100%', '65%']}
        height="100%"
      />
      <Box as="section" paddingY={4} marginY={10}>
        <Stack space="xlarge" sx={{ textAlign: 'justify' }}>
          <Stack space="xsmall">
            <Heading is="h3">Por que a Storeen?</Heading>
            <Paragraph>
              Loja online é a nossa especialidade e acreditamos que somos o
              caminho mais rápido e fácil para você digitalizar o seu negócio e
              assim explorar todo o potencial de vendas que sua loja tem na
              internet. Estudamos e projetamos cuidadosamente cada
              característica a fim de proporcionar a melhor experiência ao
              usuário final e você.
            </Paragraph>
          </Stack>
          <Stack space="xsmall">
            <Heading is="h3">Autônomo e independente</Heading>
            <Stack>
              <Paragraph>
                Somos uma equipe pequena, não temos que reportar a nenhum
                investidor, as únicas partes interessadas que temos, são nossos
                clientes e respondemos apenas a eles.
              </Paragraph>
              <Paragraph>
                Somos independentes e sempre seremos. Não estamos procurando
                acrescentar características inúteis apenas para justificar a
                taxa ou para atingir algum alvo comercial imposto de fora. Nosso
                objetivo é criar uma ferramenta inteligente que possa realmente
                ajudar as pessoas a venderem mais e aumentar a lucratividade dos
                seus negócios, por isso queremos fazê-lo a um preço justo e
                sustentável. Tão simples quanto isso.
              </Paragraph>
            </Stack>
          </Stack>
          <Stack space="xsmall">
            <Heading is="h3">Focado na privacidade</Heading>
            <Stack>
              <Paragraph>
                Sabemos o quanto seus dados são importantes e, por esta razão,
                construímos todos os recursos a partir do zero, tendo em mente a
                privacidade. Podemos prometer isso a todos os clientes que
                utilizam a Storeen porque nosso modal de negócios é baseado em
                uma assinatura. Se você não está pagando por um produto, você é
                o produto.
              </Paragraph>
              <Paragraph>
                Nós não vendemos ou compartilhamos dados, você é o único
                proprietário de seus dados e pode apagá-los ou exportá-los a
                qualquer momento sem nenhum motivo e com um simples clique a
                partir de sua página de configurações.
              </Paragraph>
            </Stack>
          </Stack>
          <Stack space="xsmall">
            <Heading is="h3">Perguntas</Heading>
            <Paragraph>
              Entre em contato com a gente por{' '}
              <Anchor href="mailto:contato@storeen.com.br" color="primary">
                e-mail
              </Anchor>
              .
            </Paragraph>
          </Stack>
        </Stack>
      </Box>
      <Box as="section" paddingY={4}>
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
          <Heading
            is="h3"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            Pronto para impulsionar seus negócios?
          </Heading>
          <Button onClick={handleSignUp}>começar</Button>
        </Inline>
      </Box>
    </Wrapper>
  );
};

export default useLayout(About);
