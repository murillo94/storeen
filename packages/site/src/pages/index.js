import Link from 'next/link';

import {
  Box,
  Inline,
  Anchor,
  Heading,
  Paragraph,
  Image,
  Button,
  Stack,
  Icon
} from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const Home = () => {
  const handleSignUp = () =>
    window.open('https://app-storeen.vercel.app/', '_ blank');

  return (
    <>
      <Box
        as="section"
        marginBottom={15}
        sx={{
          background:
            '-webkit-linear-gradient(top, rgb(255, 255, 255) 0%, rgb(242, 243, 245) 100%)',
          textAlign: 'center'
        }}
      >
        <Wrapper>
          <Heading is="h1" marginBottom={4} sx={{ textAlign: 'center' }}>
            Crie sua loja virtual completa
          </Heading>
          <Paragraph size={200} marginBottom={10}>
            Sem limites de acessos, fotos e produtos. Nós cuidamos da tecnologia
            e você só precisa se preocupar em vender
          </Paragraph>
          <Stack space="xsmall" marginBottom={4}>
            <Button onClick={handleSignUp}>criar minha loja agora</Button>
            <Paragraph color="muted">teste gratuito por 14 dias</Paragraph>
          </Stack>
          <Box>
            <Image
              src={require('@site/public/images/intro-product.png')}
              alt="Storeen product"
              width="100%"
              height="100%"
            />
          </Box>
        </Wrapper>
      </Box>
      <Box as="section" marginBottom={15}>
        <Wrapper>
          <Stack space="xxlarge">
            <Inline sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <Heading is="h2" marginBottom={4}>
                  Fácil de usar
                </Heading>
                <Paragraph
                  size={200}
                  sx={{ textAlign: 'justify', width: ['100%', '80%'] }}
                >
                  Por meio de uma interface simples em menos de 10 minutos o seu
                  site está no ar pronto para os seus clientes comprarem. É tão
                  simples que você pode usar imediatamente sem nenhum tipo de
                  treinamento!
                </Paragraph>
              </Box>
              <Box>
                <Image
                  src={require('@site/public/images/product-1.png')}
                  alt="Storeen product"
                  width={['100%', '95%']}
                  height="100%"
                />
              </Box>
            </Inline>
            <Inline
              sx={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box>
                <Image
                  src={require('@site/public/images/product-2.png')}
                  alt="Storeen product"
                  width={['100%', '95%']}
                  height="100%"
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: ['flex-start', 'flex-end']
                }}
              >
                <Heading is="h2" marginBottom={4}>
                  Rápido, elegante e simples
                </Heading>
                <Paragraph
                  size={200}
                  sx={{ textAlign: 'justify', width: ['100%', '80%'] }}
                >
                  Seja no computador, celular ou qualquer outro tipo de tela.
                  Nós entregamos uma experiência interetiva e rápida ao seu
                  cliente final do jeito que eles desejam
                </Paragraph>
              </Box>
            </Inline>
          </Stack>
        </Wrapper>
      </Box>
      <Box as="section" marginBottom={15}>
        <Wrapper>
          <Heading is="h2" marginBottom={10} sx={{ textAlign: 'center' }}>
            Focamos na tecnologia para que você possa focar na receita
          </Heading>
          <Stack space="large">
            <Inline
              isProportional={false}
              spaceX="large"
              sx={{ justifyContent: 'center' }}
            >
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['100%', '160px'],
                  height: ['auto', '160px']
                }}
                padding={4}
              >
                <Heading is="h5">Site próprio</Heading>
                <Icon name="database" size={30} />
              </Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['100%', '160px'],
                  height: ['auto', '160px']
                }}
                padding={4}
              >
                <Heading is="h5">Acompanhe seus pedidos</Heading>
                <Icon name="package" size={30} />
              </Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['100%', '160px'],
                  height: ['auto', '160px']
                }}
                padding={4}
              >
                <Heading is="h5">Pagamento integrado</Heading>
                <Icon name="credit-card" size={30} />
              </Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['100%', '160px'],
                  height: ['auto', '160px']
                }}
                padding={4}
              >
                <Heading is="h5">Crie cupons</Heading>
                <Icon name="gift" size={30} />
              </Box>
            </Inline>
            <Inline
              isProportional={false}
              spaceX="large"
              sx={{ justifyContent: 'center' }}
            >
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['100%', '160px'],
                  height: ['auto', '160px']
                }}
                padding={4}
              >
                <Heading is="h5">Checkout seguro</Heading>
                <Icon name="shield" size={30} />
              </Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['100%', '160px'],
                  height: ['auto', '160px']
                }}
                padding={4}
              >
                <Heading is="h5">Mix de produtos</Heading>
                <Icon name="tag" size={30} />
              </Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['100%', '160px'],
                  height: ['auto', '160px']
                }}
                padding={4}
              >
                <Heading is="h5">SEO</Heading>
                <Icon name="share-2" size={30} />
              </Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['100%', '160px'],
                  height: ['auto', '160px']
                }}
                padding={4}
              >
                <Heading is="h5">Altíssima velocidade</Heading>
                <Icon name="upload-cloud" size={30} />
              </Box>
            </Inline>
          </Stack>
        </Wrapper>
      </Box>
      <Box as="section" marginBottom={15}>
        <Wrapper>
          <Stack space="xxlarge">
            <Inline sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <Heading is="h2" marginBottom={4}>
                  Sem limitações
                </Heading>
                <Paragraph
                  size={200}
                  sx={{ textAlign: 'justify', width: ['100%', '80%'] }}
                >
                  De vida a sua loja de maneira escalável sem qualquer tipo de
                  empecilho, sem pegadinhas. Sem limite de produtos, fotos ou
                  acessos. Seja livre!
                </Paragraph>
              </Box>
              <Box>
                <Image
                  src={require('@site/public/images/product-3.png')}
                  alt="Storeen product"
                  width={['100%', '95%']}
                  height="100%"
                />
              </Box>
            </Inline>
            <Inline sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Box>
                <Image
                  src={require('@site/public/images/product-4.png')}
                  alt="Storeen product"
                  width={['100%', '95%']}
                  height="100%"
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: ['flex-start', 'flex-end']
                }}
              >
                <Heading is="h2" marginBottom={4}>
                  Aprenda com o seu público
                </Heading>
                <Paragraph
                  size={200}
                  sx={{ textAlign: 'justify', width: ['100%', '80%'] }}
                >
                  Atráves do acompanhamento dos gráficos e resultados da loja,
                  você elimina custos e cria uma inteligência para sempre
                  entender intenção e gostos do seu cliente final
                </Paragraph>
              </Box>
            </Inline>
          </Stack>
        </Wrapper>
      </Box>
      <Box as="section" marginBottom={15}>
        <Wrapper>
          <Heading is="h2" marginBottom={4} sx={{ textAlign: 'center' }}>
            Estamos aqui para te ajudar
          </Heading>
          <Paragraph size={200} marginBottom={10} sx={{ textAlign: 'center' }}>
            Saiba como fazer uma ótima loja, atrair seu público e muito mais,
            tudo isso em nossa universidade ou em nossa páginas de FAQs
          </Paragraph>
          <Inline
            isProportional={false}
            spaceX="large"
            sx={{ justifyContent: 'center' }}
          >
            <Stack
              space="large"
              padding={5}
              sx={{
                textAlign: 'left',
                backgroundColor: 'gray100',
                borderRadius: 4,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                width: ['100%', '250px', '360px']
              }}
            >
              <Box>
                <Heading is="h3" marginBottom={4}>
                  Universidade
                </Heading>
                <Paragraph>
                  Não se sinta mais sozinho neste imenso e desafiador mundo do
                  empreendedorismo. Vamos te ajudar a entender melhor a dinâmica
                  do e-commerce.
                </Paragraph>
              </Box>
              <Inline
                isProportional={false}
                sx={{ justifyContent: 'space-between' }}
              >
                <Link href="/university" passHref>
                  <Anchor
                    href=""
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '> svg': {
                        marginLeft: 2
                      }
                    }}
                  >
                    Ver universidade <Icon name="arrow-right" size={18} />
                  </Anchor>
                </Link>
                <Icon name="edit-2" size={30} />
              </Inline>
            </Stack>
            <Stack
              space="large"
              padding={5}
              sx={{
                textAlign: 'left',
                backgroundColor: 'gray100',
                borderRadius: 4,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                width: ['100%', '250px', '360px']
              }}
            >
              <Box>
                <Heading is="h3" marginBottom={4}>
                  FAQ&apos;s
                </Heading>
                <Paragraph>
                  Aprenda sobre a plataforma e a como vender, com respostas para
                  as perguntas mais comuns de vendas
                </Paragraph>
              </Box>
              <Inline
                isProportional={false}
                sx={{ justifyContent: 'space-between' }}
              >
                <Link href="/faq" passHref>
                  <Anchor
                    href="#"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '> svg': {
                        marginLeft: 2
                      }
                    }}
                  >
                    Confira as FAQ&apos;s
                    <Icon name="arrow-right" size={18} />
                  </Anchor>
                </Link>
                <Icon name="book-open" size={30} />
              </Inline>
            </Stack>
          </Inline>
        </Wrapper>
      </Box>
      <Box
        as="section"
        paddingX={3}
        paddingY={8}
        marginBottom={-15}
        sx={{
          backgroundColor: 'blue600',
          textAlign: 'center'
        }}
      >
        <Heading is="h2" color="gray100" marginBottom={4}>
          Pronto para começar a vender?
        </Heading>
        <Paragraph size={200} color="gray100" marginBottom={6}>
          Nossa plataforma está pronta para te receber. Comece a vender hoje
          mesmo!
        </Paragraph>
        <Button appearance="default" onClick={handleSignUp}>
          abrir minha loja
        </Button>
      </Box>
    </>
  );
};

export default useLayout(Home);
