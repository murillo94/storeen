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
  Footer,
  theming,
  Button
} from '@storeen/components';
import { Wrapper } from '@site/components';

const Page = ({ children }) => {
  const handleSignIn = () =>
    window.open('https://app-storeen.vercel.app/', '_ blank');

  const handleSignUp = () =>
    window.open('https://app-storeen.vercel.app/', '_ blank');

  return (
    <Box
      sx={{ position: 'relative', minHeight: '100vh' }}
      paddingBottom={['530px', '310px']}
    >
      <Box
        as="nav"
        paddingY={3}
        paddingX={6}
        marginBottom={10}
        sx={{
          backgroundColor: 'hsla(0, 0%, 100%, 0.85)',
          borderBottom: `1px solid ${theming.colors.gray200}`,
          textAlign: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 1
        }}
      >
        <Wrapper>
          <Link href="/" passHref>
            <Anchor
              sx={{
                display: ['block', 'none']
              }}
            >
              <Image
                src={require('@site/public/images/logo-all-horizontal.svg')}
                alt="Storeen logo com nome horizontal"
                width="150px"
                height="50px"
                marginX="auto"
                marginBottom={5}
              />
            </Anchor>
          </Link>
          <Inline spaceX="small">
            <Inline
              isProportional={false}
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Link href="#" passHref>
                <Anchor>funcionalidades</Anchor>
              </Link>
              <Link href="/pricing" passHref>
                <Anchor>planos</Anchor>
              </Link>
            </Inline>
            <Link href="/" passHref>
              <Anchor
                sx={{
                  display: ['none', 'block']
                }}
              >
                <Image
                  src={require('@site/public/images/logo-all-horizontal.svg')}
                  alt="Storeen logo com nome horizontal"
                  width="150px"
                  height="50px"
                />
              </Anchor>
            </Link>
            <Inline
              isProportional={false}
              spaceX="small"
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Button appearance="minimal" onClick={handleSignIn}>
                entrar
              </Button>
              <Button onClick={handleSignUp}>criar loja</Button>
            </Inline>
          </Inline>
        </Wrapper>
      </Box>
      <Box as="main">{children}</Box>
      <Footer
        padding={12}
        margin={0}
        sx={{
          backgroundColor: 'gray0',
          borderTop: `1px solid ${theming.colors.gray200}`,
          position: 'absolute',
          bottom: '0',
          width: '100%'
        }}
      >
        <Inline
          sx={{
            textAlign: 'left',
            alignItems: 'self-start',
            maxWidth: ['38em', '50em', '62em', '78em']
          }}
          spaceY="medium"
          spaceX="xxlarge"
          paddingX={3}
          marginX="auto"
        >
          <Stack space="medium">
            <Box>
              <Link href="/" passHref>
                <Anchor
                  sx={{
                    display: ['none', 'block']
                  }}
                >
                  <Image
                    src={require('@site/public/images/logo-all-horizontal.svg')}
                    alt="Storeen logo com nome horizontal"
                    width="150px"
                    height="50px"
                  />
                </Anchor>
              </Link>
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
            spaceY="medium"
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
              <Link href="/" passHref>
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
              <Link href="/about" passHref>
                <Anchor>sobre nós</Anchor>
              </Link>
              {/* <Link href="/careers" passHref>
              <Anchor>carreiras</Anchor>
            </Link> */}
              <Link href="/contact" passHref>
                <Anchor>contato</Anchor>
              </Link>
              <Link href="/terms" passHref>
                <Anchor>termos de uso</Anchor>
              </Link>
              <Link href="/privacy" passHref>
                <Anchor>política de privacidade</Anchor>
              </Link>
            </Box>
          </Inline>
        </Inline>
      </Footer>
    </Box>
  );
};

export default Page;
