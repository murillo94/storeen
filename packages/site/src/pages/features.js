import {
  Box,
  Heading,
  Paragraph,
  Inline,
  Stack,
  Anchor,
  Button,
  theming
} from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const Features = () => {
  const handleSignUp = () =>
    window.open('https://app-storeen.vercel.app/', '_ blank');

  return (
    <Wrapper>
      <Heading marginBottom={4} sx={{ textAlign: 'center' }}>
        Funcionalidades
      </Heading>
      <Paragraph color="muted" marginBottom={10} sx={{ textAlign: 'center' }}>
        Tudo o que você precisa para encantar seus clientes e vender mais
      </Paragraph>
      <Box as="section" paddingY={4} paddingX={3} marginBottom={15}>
        <Inline isProportional={false} spaceX="xxlarge">
          <Stack sx={{ minWidth: '150px' }}>
            <Box>
              <Anchor href="#recursos-ilimitados" color="muted">
                Recursos ilimitados
              </Anchor>
            </Box>
            <Box>
              <Anchor href="#gerenciamento-da-loja" color="muted">
                Gerenciamento da loja
              </Anchor>
            </Box>
            <Box>
              <Anchor href="#temas" color="muted">
                Temas (templates)
              </Anchor>
            </Box>
            <Box>
              <Anchor href="#produtos" color="muted">
                Produtos
              </Anchor>
            </Box>
            <Box>
              <Anchor href="#pagamento" color="muted">
                Pagamento
              </Anchor>
            </Box>
            <Box>
              <Anchor href="#dominio" color="muted">
                Domínio
              </Anchor>
            </Box>
            <Box>
              <Anchor href="#frete" color="muted">
                Frete
              </Anchor>
            </Box>
          </Stack>
          <Stack space="xlarge">
            <Box
              as="section"
              id="recursos-ilimitados"
              sx={{
                borderBottom: `1px solid ${theming.colors.gray200}`,
                scrollMarginTop: '120px'
              }}
            >
              <Heading is="h3" marginBottom={8} color="primary">
                Recursos ilimitados
              </Heading>
              <Inline>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Sem limite de produtos
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Você não precisa pagar mais se quiser cadastrar uma grande
                    quantidade de produtos – aqui, o cadastro de produtos é
                    ilimitado!
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Sem limite de pageviews
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Pagar valores diferenciados de acordo com o número de
                    visitas que sua loja recebe? Aqui, não tem dessa aqui você
                    tem acessos ilimitados.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Sem limite de imagens
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    É possível cadastrar quantas fotos você quiser para cada
                    produto – e você ainda pode editar as fotos na própria
                    plataforma e ganhar tempo.
                  </Paragraph>
                </Stack>
              </Inline>
            </Box>
            <Box
              as="section"
              id="gerenciamento-da-loja"
              sx={{
                borderBottom: `1px solid ${theming.colors.gray200}`,
                scrollMarginTop: '120px'
              }}
            >
              <Heading is="h3" marginBottom={8} color="primary">
                Gerenciamento da loja
              </Heading>
              <Inline>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Gerenciamento de pedidos
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Em nosso painel administrativo, você pode gerenciar todos os
                    pedidos da sua loja em um só lugar, de forma rápida e fácil.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Categorias
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Organize sua loja criando categorias e subcategorias para
                    facilitar a vida do seu cliente na hora de encontrar o
                    produto.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Relatórios
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Oferecemos vários relatórios para te auxiliar a gerenciar o
                    seu e-commerce sem sair do seu painel administrativo.
                  </Paragraph>
                </Stack>
              </Inline>
            </Box>
            <Box
              as="section"
              id="temas"
              sx={{
                borderBottom: `1px solid ${theming.colors.gray200}`,
                scrollMarginTop: '120px'
              }}
            >
              <Heading is="h3" marginBottom={8} color="primary">
                Temas (templates)
              </Heading>
              <Inline>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Temas gratuitos
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Possuímos temas prontos, lindos e gratuitos para o layout da
                    sua loja virtual! É só escolher e personalizar.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Temas responsivos
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Nossos temas se ajustam automaticamente ao dispositivo
                    (computador, celular ou tablet) que o cliente estiver
                    usando. Sim, seu cliente poderá acessar sua loja do celular
                    sem nenhum problema.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Temas acessíveis
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Nossos temas respeitam todas as normas da web e com isso
                    possibilita a inserção de todas as pessoas na sua loja.
                  </Paragraph>
                </Stack>
              </Inline>
            </Box>
            <Box
              as="section"
              id="produtos"
              sx={{
                borderBottom: `1px solid ${theming.colors.gray200}`,
                scrollMarginTop: '120px'
              }}
            >
              <Heading is="h3" marginBottom={8} color="primary">
                Produtos
              </Heading>
              <Inline>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Upload ilimitado de imagens
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Quantas fotos são necessárias para ilustrar o seu produto?
                    Independente do número, fique tranquilo aqui você pode fazer
                    o upload de quantas imagens quiser, sem pagar a mais por
                    isso.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Produtos com variações
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Você pode cadastrar variações nos seus produtos, como cor e
                    tamanho. Além disso, tem a possibilidade de mudar o preço,
                    as dimensões dos produtos e controlar o estoque de cada
                    variação.
                  </Paragraph>
                </Stack>
              </Inline>
            </Box>
            <Box
              as="section"
              id="pagamento"
              sx={{
                borderBottom: `1px solid ${theming.colors.gray200}`,
                scrollMarginTop: '120px'
              }}
            >
              <Heading is="h3" marginBottom={8} color="primary">
                Pagamento
              </Heading>
              <Inline>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Checkout transparente
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Quando faz a compra, seu cliente não precisa sair da sua
                    loja para efetuar o pagamento. Parece pouco, mas isso
                    garante muito mais conversão e vendas.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Todas os meios de pagamento
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Oferecemos a possibilidade dos seus clientes fazerem
                    pagamentos por qualquer meio.
                  </Paragraph>
                </Stack>
              </Inline>
            </Box>
            <Box
              as="section"
              id="dominio"
              sx={{
                borderBottom: `1px solid ${theming.colors.gray200}`,
                scrollMarginTop: '120px'
              }}
            >
              <Heading is="h3" marginBottom={8} color="primary">
                Domínio
              </Heading>
              <Inline>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Utilize seu domínio próprio
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Você pode configurar seu domínio próprio da sua loja na
                    minestore sem nenhum problema. Basta somente fazer a
                    configuração.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Utilize o domínio da storeen
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Se você não quiser ou tiver um domínio próprio, pode
                    utilizar gratuitamente o subdomínio oferecido pela
                    minestore. Exemplo nomedasualoja.storeen.com.br.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Certificado SSL
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Todas as lojas da minestore possuem certificado SSL
                    gratuito, o que garante segurança para você e seus clientes
                    com dados criptografados.
                  </Paragraph>
                </Stack>
              </Inline>
            </Box>
            <Box
              as="section"
              id="frete"
              sx={{
                scrollMarginTop: '120px'
              }}
            >
              <Heading is="h3" marginBottom={8} color="primary">
                Frete
              </Heading>
              <Inline>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Entrega via Correios
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Você tem a opção de trabalhar com a entrega dos seus
                    produtos via Correios. Habilite esta opção, informe os dados
                    solicitados e pronto. Na hora da compra seu cliente só
                    precisará informar o CEP e o cálculo do valor será
                    automático.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Frete personalizado
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Personalize a entrega dos seus produtos e configure a
                    entrega da maneira que precisar.
                  </Paragraph>
                </Stack>
                <Stack>
                  <Heading is="h4" marginBottom={2}>
                    Frete via melhor envio
                  </Heading>
                  <Paragraph color="muted" marginBottom={8}>
                    Você consegue fazer a integração com o melhor envio
                    diretamente no painel administrativo da sua loja.
                  </Paragraph>
                </Stack>
              </Inline>
            </Box>
          </Stack>
        </Inline>
      </Box>
      <Box as="section" paddingY={4} paddingX={3}>
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
            is="h4"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            Experimente a Storeen grátis por 14 dias
          </Heading>
          <Button onClick={handleSignUp}>começar</Button>
        </Inline>
      </Box>
    </Wrapper>
  );
};

export default useLayout(Features);
