import {
  Box,
  Inline,
  Anchor,
  Image,
  Heading,
  Paragraph,
  Button,
  Stack
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
        você só precisa se preocupar em vender.
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
            <Heading is="h2">Fácil de usar</Heading>
            <Paragraph>teste</Paragraph>
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
            <Heading is="h2">Rápido, elegante e simples</Heading>
            <Paragraph>teste</Paragraph>
          </Box>
        </Inline>
      </Stack>
    </Box>
    <Box as="section" padding={6} sx={{ textAlign: 'center' }}>
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
              <Heading is="h3">teste 1</Heading>
              <Paragraph>teste</Paragraph>
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
              <Heading is="h3">teste 2</Heading>
              <Paragraph>teste</Paragraph>
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
              <Heading is="h3">teste 3</Heading>
              <Paragraph>teste</Paragraph>
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
              <Heading is="h3">teste 4</Heading>
              <Paragraph>teste</Paragraph>
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
              <Heading is="h3">teste 5</Heading>
              <Paragraph>teste</Paragraph>
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
              <Heading is="h3">teste 6</Heading>
              <Paragraph>teste</Paragraph>
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
            <Paragraph>teste</Paragraph>
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
            <Paragraph>teste</Paragraph>
          </Box>
        </Inline>
      </Stack>
    </Box>
  </Box>
);

export default Home;
