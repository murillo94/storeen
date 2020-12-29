import {
  Box,
  Inline,
  Anchor,
  Image,
  Heading,
  Paragraph,
  Button,
  Stack,
  Footer
} from '@storeen/components';

const Home = () => (
  <Box as="main">
    <Box as="nav" padding={6}>
      <Inline>
        <Inline isProportional={false} sx={{ justifyContent: 'center' }}>
          <Anchor href="#">funcionalidades</Anchor>
          <Anchor href="#">planos</Anchor>
        </Inline>
        <Image
          src={require('@site/public/images/logo-all-horizontal.svg')}
          alt="Storeen logo com nome horizontal"
          width="200px"
          height="50px"
          marginX="auto"
          sx={{
            display: ['block']
          }}
        />
        <Inline isProportional={false} sx={{ justifyContent: 'center' }}>
          <Anchor href="https://app-storeen.vercel.app/">entrar</Anchor>
          <Anchor href="#">criar loja</Anchor>
        </Inline>
      </Inline>
    </Box>
    <Box as="section" padding={6} sx={{ textAlign: 'center' }}>
      <Heading marginBottom={4}>Crie sua loja virtual completa</Heading>
      <Paragraph marginBottom={10}>
        Sem limites de acessos, fotos e produtos. Nós cuidamos da tecnologia e
        você só precisa se preocupar em vender
      </Paragraph>
      <Box marginBottom={10}>
        <Box
          sx={{
            backgroundColor: 'gray300',
            width: ['100px', '50%'],
            height: '100px'
          }}
          marginX="auto"
        />
      </Box>
      <Inline isProportional={false} sx={{ justifyContent: 'center' }}>
        <Button appearance="minimal">ver exemplo</Button>
        <Button>criar minha loja agora</Button>
      </Inline>
    </Box>
    <Box as="section" padding={6} sx={{ textAlign: 'center' }}>
      <Stack space="xlarge">
        <Inline>
          <Box>
            <Heading is="h2" marginBottom={4}>
              Fácil de usar
            </Heading>
            <Paragraph>
              Por meio de uma interface simples em menos de 10 minutos o seu
              site está no ar pronto para os seus clientes comprarem. É tão
              simples que você pode usar imediatamente sem nenhum tipo de
              treinamento!
            </Paragraph>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            />
          </Box>
        </Inline>
        <Inline>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            />
          </Box>
          <Box>
            <Heading is="h2" marginBottom={4}>
              Rápido, elegante e simples
            </Heading>
            <Paragraph>
              Seja no computador, celular ou qualquer outro tipo de tela. Nós
              entregamos uma experiência interetiva e rápida ao seu cliente
              final do jeito que eles desejam
            </Paragraph>
          </Box>
        </Inline>
      </Stack>
    </Box>
    <Box as="section" padding={6} sx={{ textAlign: 'center' }}>
      <Heading is="h2" marginBottom={10}>
        Focamos na tecnologia para que você possa focar na receita
      </Heading>
      <Stack space="xlarge">
        <Inline>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            >
              <Heading is="h3">Acompanhe seus pedidos</Heading>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            >
              <Heading is="h3">Pagamento integrado</Heading>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            >
              <Heading is="h3">Crie cupons</Heading>
            </Box>
          </Box>
        </Inline>
        <Inline>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            >
              <Heading is="h3">Checkout seguro</Heading>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            >
              <Heading is="h3">Mix de produtos</Heading>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            >
              <Heading is="h3">Otimização e altíssima velocidade</Heading>
            </Box>
          </Box>
        </Inline>
      </Stack>
    </Box>
    <Box as="section" padding={6} sx={{ textAlign: 'center' }}>
      <Stack space="xlarge">
        <Inline>
          <Box>
            <Heading is="h2">Sem limitações</Heading>
            <Paragraph>
              De vida a sua loja de maneira escalável sem qualquer tipo de
              empecilho, sem pegadinhas. Sem limite de produtos, fotos ou
              acessos. Seja livre!
            </Paragraph>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            />
          </Box>
        </Inline>
        <Inline>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            />
          </Box>
          <Box>
            <Heading is="h2">Aprenda com o seu público</Heading>
            <Paragraph>
              Atráves do acompanhamento dos gráficos e resultados da loja, você
              elimina custos e cria uma inteligência para sempre entender
              intenção e gostos do seu cliente final
            </Paragraph>
          </Box>
        </Inline>
      </Stack>
    </Box>
    <Box as="section" padding={6} sx={{ textAlign: 'center' }}>
      <Heading is="h2" marginBottom={4}>
        Estamos aqui para te ajudar
      </Heading>
      <Paragraph marginBottom={10}>
        Saiba como fazer uma ótima loja, atrair seu público e muito mais, tudo
        isso em nossa universidade ou em nossa páginas de FAQs
      </Paragraph>
      <Stack space="xlarge">
        <Inline>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            >
              <Heading is="h2" marginBottom={4}>
                Universidade
              </Heading>
              <Paragraph>
                Não se sinta mais sozinho neste imenso e desafiador mundo do
                empreendedorismo. Vamos te ajudar a entender melhor a dinâmica
                do e-commerce.
              </Paragraph>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: 'gray300',
                width: ['100px', '50%'],
                height: '100px'
              }}
              marginX="auto"
            >
              <Heading is="h2" marginBottom={4}>
                FAQ&apos;s
              </Heading>
              <Paragraph>
                Aprenda sobre a plataforma e a como vender, com respostas às
                perguntas mais comuns de vendas
              </Paragraph>
            </Box>
          </Box>
        </Inline>
      </Stack>
    </Box>
    <Footer>
      <Box as="section" padding={6} sx={{ textAlign: 'center', width: '100%' }}>
        <Inline sx={{ justifyContent: 'space-between' }}>
          <Image
            src={require('@site/public/images/logo-all-horizontal.svg')}
            alt="Storeen logo com nome horizontal"
            width="200px"
            height="50px"
            marginX="auto"
            sx={{
              display: ['block']
            }}
          />
          <Inline>
            <Box
              sx={{
                width: ['100px', '50%'],
                height: '100px',
                '> a': {
                  display: 'block',
                  marginBottom: 2
                }
              }}
              marginX="auto"
            >
              <Heading is="h3" marginBottom={2}>
                Produto
              </Heading>
              <Anchor href="#">funcionalidades</Anchor>
              <Anchor href="#">planos</Anchor>
            </Box>
            <Box
              sx={{
                width: ['100px', '50%'],
                height: '100px',
                '> a': {
                  display: 'block',
                  marginBottom: 2
                }
              }}
              marginX="auto"
            >
              <Heading is="h3" marginBottom={2}>
                Empresa
              </Heading>
              <Anchor href="#">Sobre nós</Anchor>
              <Anchor href="#">Carreiras</Anchor>
              <Anchor href="#">Contato</Anchor>
            </Box>
          </Inline>
        </Inline>
      </Box>
    </Footer>
  </Box>
);

export default Home;
