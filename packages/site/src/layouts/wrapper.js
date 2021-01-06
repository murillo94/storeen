import Link from 'next/link';

import {
  Box,
  Inline,
  Anchor,
  Image,
  Heading,
  Paragraph,
  Stack,
  Icon,
  Footer
} from '@storeen/components';

const Page = ({ children }) => (
  <>
    <Box
      as="main"
      sx={{ textAlign: 'center', maxWidth: ['38em', '50em', '62em', '78em'] }}
      marginX="auto"
    >
      <Box as="nav" padding={6} marginBottom={10}>
        <Inline>
          <Inline isProportional={false} sx={{ justifyContent: 'center' }}>
            <Link href="#" passHref>
              <Anchor>funcionalidades</Anchor>
            </Link>
            <Link href="/pricing" passHref>
              <Anchor>planos</Anchor>
            </Link>
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
            <Anchor href="https://app-storeen.vercel.app">entrar</Anchor>
            <Anchor href="#">criar loja</Anchor>
          </Inline>
        </Inline>
      </Box>
      {children}
    </Box>
    <Footer padding={12} sx={{ backgroundColor: 'blue200' }}>
      <Inline
        sx={{
          textAlign: 'left',
          alignItems: 'self-start',
          maxWidth: ['38em', '50em', '62em', '78em']
        }}
        spaceX="xxlarge"
        paddingX={3}
        marginX="auto"
      >
        <Stack space="medium">
          <Box>
            <Image
              src={require('@site/public/images/logo-all-horizontal.svg')}
              alt="Storeen logo com nome horizontal"
              width="150px"
              height="50px"
            />
            <Paragraph>
              O jeito mais fácil de criar uma loja virtual completa
            </Paragraph>
          </Box>
          <Inline isProportional={false} isCollapse={false} spaceX="small">
            <Anchor
              href="#"
              ariaLabel="Twitter"
              sx={{
                backgroundColor: 'gray0',
                width: '36px',
                height: '36px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icon name="twitter" />
            </Anchor>
            <Anchor
              href="#"
              ariaLabel="Instagram"
              sx={{
                backgroundColor: 'gray0',
                width: '36px',
                height: '36px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icon name="instagram" />
            </Anchor>
            <Anchor
              href="#"
              ariaLabel="Linkedin"
              sx={{
                backgroundColor: 'gray0',
                width: '36px',
                height: '36px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icon name="linkedin" />
            </Anchor>
          </Inline>
        </Stack>
        <Inline
          isProportional={false}
          spaceX="xxlarge"
          sx={{ flexWrap: 'initial', alignItems: 'self-start' }}
        >
          <Box
            sx={{
              '> a': {
                display: 'block',
                marginBottom: 2
              }
            }}
          >
            <Heading is="h5" marginBottom={4}>
              Produto
            </Heading>
            <Link href="#" passHref>
              <Anchor>funcionalidades</Anchor>
            </Link>
            <Link href="/pricing" passHref>
              <Anchor>planos</Anchor>
            </Link>
          </Box>
          <Box
            sx={{
              '> a': {
                display: 'block',
                marginBottom: 2
              }
            }}
          >
            <Heading is="h5" marginBottom={4}>
              Empresa
            </Heading>
            <Link href="#" passHref>
              <Anchor>sobre nós</Anchor>
            </Link>
            <Link href="/careers" passHref>
              <Anchor>carreiras</Anchor>
            </Link>
            <Link href="/contact" passHref>
              <Anchor>contato</Anchor>
            </Link>
          </Box>
        </Inline>
      </Inline>
    </Footer>
  </>
);

export default Page;
