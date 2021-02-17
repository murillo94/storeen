import { useState } from 'react';

import {
  Box,
  Heading,
  Switch,
  Inline,
  Paragraph,
  Stack,
  Icon,
  Button,
  theming
} from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const TYPE = {
  monthly: 'monthly',
  annually: 'annually'
};

const Pricing = () => {
  const [plan, setPlan] = useState(TYPE.monthly);

  const handleSignUp = () =>
    window.open('https://app-storeen.vercel.app/', '_ blank');

  return (
    <Wrapper>
      <Box
        as="section"
        paddingX={3}
        paddingY={4}
        marginBottom={15}
        sx={{ textAlign: 'center' }}
      >
        <Heading is="h1" marginBottom={4}>
          Um preço. Simples.
        </Heading>
        <Paragraph marginBottom={6} color="muted">
          Preço simples, resultados massivos. Venda todos os dias por menos de
          R$ 2 por dia.
        </Paragraph>
        <Box marginBottom={4}>
          <Switch
            id="type"
            name="isAnnually"
            value="isAnnually"
            leftText="mensal"
            rightText="anual"
            isChecked={plan === TYPE.annually}
            onChange={() => {
              setPlan(prevPlan =>
                prevPlan === TYPE.monthly ? TYPE.annually : TYPE.monthly
              );
            }}
          />
        </Box>
        <Paragraph marginBottom={10} color="positive">
          Economize 20% (R$ 143,76) no plano anual!
        </Paragraph>
        <Box>
          <Box
            sx={{
              backgroundColor: 'gray0',
              boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.1)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'blue700',
              borderRadius: 4,
              justifyContent: 'space-between',
              flexDirection: 'column',
              display: 'flex',
              width: ['80%', '350px']
            }}
            padding={6}
            marginX="auto"
          >
            <Stack space="large">
              <Box>
                <Heading is="h3" marginBottom={3}>
                  {plan === TYPE.monthly ? 'Mensal' : 'Anual'}
                </Heading>
                <Heading is="h2">
                  R$ {plan === TYPE.monthly ? '59,90' : '575,04'}
                </Heading>
              </Box>
              <Stack space="xsmall">
                <Inline
                  isProportional={false}
                  isCollapse={false}
                  sx={{
                    '> p': {
                      marginLeft: 2
                    }
                  }}
                >
                  <Icon
                    name="check-circle"
                    color={theming.colors.blue700}
                    size={24}
                  />
                  <Paragraph>Suporte exclusivo por chat</Paragraph>
                </Inline>
                <Inline
                  isProportional={false}
                  isCollapse={false}
                  sx={{
                    '> p': {
                      marginLeft: 2
                    }
                  }}
                >
                  <Icon
                    name="check-circle"
                    color={theming.colors.blue700}
                    size={24}
                  />
                  <Paragraph>Produtos ilimitados</Paragraph>
                </Inline>
                <Inline
                  isProportional={false}
                  isCollapse={false}
                  sx={{
                    '> p': {
                      marginLeft: 2
                    }
                  }}
                >
                  <Icon
                    name="check-circle"
                    color={theming.colors.blue700}
                    size={24}
                  />
                  <Paragraph>Imagens ilimitados</Paragraph>
                </Inline>
                <Inline
                  isProportional={false}
                  isCollapse={false}
                  sx={{
                    '> p': {
                      marginLeft: 2
                    }
                  }}
                >
                  <Icon
                    name="check-circle"
                    color={theming.colors.blue700}
                    size={24}
                  />
                  <Paragraph>Acessos ilimitadas</Paragraph>
                </Inline>
                <Inline
                  isProportional={false}
                  isCollapse={false}
                  sx={{
                    '> p': {
                      marginLeft: 2
                    }
                  }}
                >
                  <Icon
                    name="check-circle"
                    color={theming.colors.blue700}
                    size={24}
                  />
                  <Paragraph>Certificado de segurança SSL</Paragraph>
                </Inline>
                <Inline
                  isProportional={false}
                  isCollapse={false}
                  sx={{
                    '> p': {
                      marginLeft: 2
                    }
                  }}
                >
                  <Icon
                    name="check-circle"
                    color={theming.colors.blue700}
                    size={24}
                  />
                  <Paragraph>Otimizações de SEO para produtos</Paragraph>
                </Inline>
                <Inline
                  isProportional={false}
                  isCollapse={false}
                  sx={{
                    '> p': {
                      marginLeft: 2
                    }
                  }}
                >
                  <Icon
                    name="check-circle"
                    color={theming.colors.blue700}
                    size={24}
                  />
                  <Paragraph>Checkout transparente</Paragraph>
                </Inline>
                <Inline
                  isProportional={false}
                  isCollapse={false}
                  sx={{
                    '> p': {
                      marginLeft: 2
                    }
                  }}
                >
                  <Icon
                    name="check-circle"
                    color={theming.colors.blue700}
                    size={24}
                  />
                  <Paragraph>Utilização de domínio próprio</Paragraph>
                </Inline>
                <Inline
                  isProportional={false}
                  isCollapse={false}
                  sx={{
                    '> p': {
                      marginLeft: 2
                    }
                  }}
                >
                  <Icon
                    name="check-circle"
                    color={theming.colors.blue700}
                    size={24}
                  />
                  <Paragraph>Estatísticas em tempo real</Paragraph>
                </Inline>
              </Stack>
              <Box>
                <Button marginBottom={2}>criar minha loja agora</Button>
                <Paragraph color="muted">Teste gratuito por 14 dias</Paragraph>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box as="section" paddingX={3} paddingY={4} marginBottom={15}>
        <Box
          marginBottom={10}
          sx={{ borderBottom: `1px solid ${theming.colors.gray200}` }}
        >
          <Heading is="h2" marginBottom={2}>
            Perguntas frequentes sobre o plano
          </Heading>
          <Paragraph color="muted" marginBottom={8}>
            Verifique as perguntas e respostas abaixo, caso a sua dúvida não
            esteja nas perguntas nos envie um e-mail e iremos entrar em contato
            com você.
          </Paragraph>
        </Box>
        <Stack space="xlarge" sx={{ textAlign: 'justify' }}>
          <Box>
            <Heading is="h3" marginBottom={2}>
              Como funciona o pagamento do plano?
            </Heading>
            <Paragraph>
              Existem dois métodos de pagamento o mensal e o anual, optando pelo
              anual você conta com desconto extra na contratação da sua loja
              virtual.
            </Paragraph>
          </Box>
          <Box>
            <Heading is="h3" marginBottom={2}>
              Em quanto tempo minha loja virtual entra no ar?
            </Heading>
            <Paragraph>
              Após a confirmação do pagamento via cartão, transferência ou
              pagamentos via boleto a sua loja estará no ar instantaneamente.
            </Paragraph>
          </Box>
          <Box>
            <Heading is="h3" marginBottom={2}>
              É possível gerenciar minha loja usando celular?
            </Heading>
            <Paragraph>
              Sim! você pode usar o nosso site normalmente pois damos suporte
              responsivo para qualquer tipo de dispositivo para que você consiga
              acompanhar a performance da sua loja de qualquer lugar.
            </Paragraph>
          </Box>
          <Box>
            <Heading is="h3" marginBottom={2}>
              Como funciona o sistema de frete?
            </Heading>
            <Paragraph>
              O frete é calculado de acordo com o CEP que você(Vendedor)
              cadastrou e com o CEP que o cliente digita no site para efetuar a
              compra. Por padrão o app já vem com o PAC e SEDEX habilitados. É
              possível também personalizar o prazo de entrega dos produtos,
              criar fretes personalizados por cidade, estado ou para o país e
              também habilitar a retirada do produto na loja.
            </Paragraph>
          </Box>
          <Box>
            <Heading is="h3" marginBottom={2}>
              Preciso de CNPJ para criar uma loja?
            </Heading>
            <Paragraph>
              Não precisa! Você consegue criar a sua loja na Bagy mesmo sendo
              pessoa física.
            </Paragraph>
          </Box>
          <Box>
            <Heading is="h3" marginBottom={2}>
              A Storeen disponibiliza um teste grátis?
            </Heading>
            <Paragraph>
              O nosso plano fornece um período experimental de 14 dias para uso
              da plataforma sem qualquer tipo de cobrança.
            </Paragraph>
          </Box>
        </Stack>
      </Box>
      <Box as="section" paddingX={3} paddingY={4} marginBottom={15}>
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
            Experimente a Storeen grátis por 14 dias
          </Heading>
          <Button onClick={handleSignUp}>Começar</Button>
        </Inline>
      </Box>
    </Wrapper>
  );
};

export default useLayout(Pricing);
