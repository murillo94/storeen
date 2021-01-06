import { useState } from 'react';

import {
  Box,
  Inline,
  Heading,
  Paragraph,
  Button,
  Stack,
  Icon,
  Switch,
  theming
} from '@storeen/components';

import useLayout from '@site/hooks/useLayout';

const TYPE = {
  monthly: 'monthly',
  annually: 'annually'
};

const Pricing = () => {
  const [plan, setPlan] = useState(TYPE.monthly);

  return (
    <Box as="section" paddingX={3} paddingY={4} marginBottom={15}>
      <Heading is="h2" marginBottom={4}>
        Planos
      </Heading>
      <Paragraph marginBottom={6}>
        Preço simples, resultados massivos. Venda todos os dias por menos de R$
        2 por dia.
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
      <Paragraph marginBottom={8} color="positive">
        Economize 20% (R$ 143,76) no plano anual!
      </Paragraph>
      <Box>
        <Box
          sx={{
            backgroundColor: 'gray0',
            boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'gray300',
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
            <Button>criar minha loja agora</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default useLayout(Pricing);
