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

const Home = () => (
  <>
    <Box
      as="section"
      paddingX={3}
      paddingY={4}
      marginBottom={15}
      sx={{
        background:
          '-webkit-linear-gradient(top, rgb(255, 255, 255) 0%, rgb(242, 243, 245) 100%)',
        textAlign: 'center'
      }}
    >
      <Wrapper>
        <Heading marginBottom={4}>Crie sua loja virtual completa</Heading>
        <Paragraph marginBottom={10}>
          Sem limites de acessos, fotos e produtos. Nós cuidamos da tecnologia e
          você só precisa se preocupar em vender
        </Paragraph>
        <Inline
          isProportional={false}
          marginBottom={4}
          sx={{ justifyContent: 'center' }}
        >
          <Button appearance="minimal">ver exemplo</Button>
          <Button>criar minha loja agora</Button>
        </Inline>
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
    <Box
      as="section"
      paddingX={3}
      paddingY={4}
      marginBottom={15}
      sx={{ textAlign: 'center' }}
    >
      <Wrapper>
        <Stack space="xxlarge">
          <Inline>
            <Box
              sx={{
                textAlign: 'left'
              }}
            >
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
              <Image
                src={require('@site/public/images/product-1.png')}
                alt="Storeen product"
                width="100%"
                height="100%"
              />
            </Box>
          </Inline>
          <Inline>
            <Box>
              <Image
                src={require('@site/public/images/product-2.png')}
                alt="Storeen product"
                width="100%"
                height="100%"
              />
            </Box>
            <Box
              sx={{
                textAlign: 'right'
              }}
            >
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
      </Wrapper>
    </Box>
    <Box
      as="section"
      paddingX={3}
      paddingY={4}
      marginBottom={15}
      sx={{ textAlign: 'center' }}
    >
      <Wrapper>
        <Heading is="h2" marginBottom={10}>
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
    <Box
      as="section"
      paddingX={3}
      paddingY={4}
      marginBottom={15}
      sx={{ textAlign: 'center' }}
    >
      <Wrapper>
        <Stack space="xxlarge">
          <Inline>
            <Box
              sx={{
                textAlign: 'left'
              }}
            >
              <Heading is="h2">Sem limitações</Heading>
              <Paragraph>
                De vida a sua loja de maneira escalável sem qualquer tipo de
                empecilho, sem pegadinhas. Sem limite de produtos, fotos ou
                acessos. Seja livre!
              </Paragraph>
            </Box>
            <Box>
              <Image
                src={require('@site/public/images/product-3.png')}
                alt="Storeen product"
                width="100%"
                height="100%"
              />
            </Box>
          </Inline>
          <Inline>
            <Box>
              <Image
                src={require('@site/public/images/product-4.png')}
                alt="Storeen product"
                width="100%"
                height="100%"
              />
            </Box>
            <Box
              sx={{
                textAlign: 'right'
              }}
            >
              <Heading is="h2">Aprenda com o seu público</Heading>
              <Paragraph>
                Atráves do acompanhamento dos gráficos e resultados da loja,
                você elimina custos e cria uma inteligência para sempre entender
                intenção e gostos do seu cliente final
              </Paragraph>
            </Box>
          </Inline>
        </Stack>
      </Wrapper>
    </Box>
    <Box
      as="section"
      paddingX={3}
      paddingY={4}
      marginBottom={15}
      sx={{ textAlign: 'center' }}
    >
      <Wrapper>
        <Heading is="h2" marginBottom={4}>
          Estamos aqui para te ajudar
        </Heading>
        <Paragraph marginBottom={10}>
          Saiba como fazer uma ótima loja, atrair seu público e muito mais, tudo
          isso em nossa universidade ou em nossa páginas de FAQs
        </Paragraph>
        <Inline
          isProportional={false}
          spaceX="large"
          sx={{ justifyContent: 'center' }}
        >
          <Box
            sx={{
              textAlign: 'left',
              backgroundColor: 'gray100',
              borderRadius: 4,
              justifyContent: 'space-between',
              flexDirection: 'column',
              display: 'flex',
              width: ['100%', '250px', '360px'],
              height: ['auto', '260px']
            }}
            padding={5}
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
              <Anchor
                href="#"
                sx={{
                  display: 'flex',
                  alignItens: 'center',
                  '> svg': {
                    marginLeft: 2
                  }
                }}
              >
                Ver universidade <Icon name="arrow-right" size={18} />
              </Anchor>
              <Icon name="edit-2" size={30} />
            </Inline>
          </Box>
          <Box
            sx={{
              textAlign: 'left',
              backgroundColor: 'gray100',
              borderRadius: 4,
              justifyContent: 'space-between',
              flexDirection: 'column',
              display: 'flex',
              width: ['100%', '250px', '360px'],
              height: ['auto', '260px']
            }}
            padding={5}
          >
            <Box>
              <Heading is="h3" marginBottom={4}>
                FAQ&apos;s
              </Heading>
              <Paragraph>
                Aprenda sobre a plataforma e a como vender, com respostas às
                perguntas mais comuns de vendas
              </Paragraph>
            </Box>
            <Inline
              isProportional={false}
              sx={{ justifyContent: 'space-between' }}
            >
              <Anchor
                href="#"
                sx={{
                  display: 'flex',
                  alignItens: 'center',
                  '> svg': {
                    marginLeft: 2
                  }
                }}
              >
                Confira as FAQ&apos;s
                <Icon name="arrow-right" size={18} />
              </Anchor>
              <Icon name="book-open" size={30} />
            </Inline>
          </Box>
        </Inline>
      </Wrapper>
    </Box>
    <Box
      as="section"
      padding={6}
      sx={{
        backgroundColor: 'blue200',
        textAlign: 'center'
      }}
    >
      <Heading is="h2" marginBottom={10}>
        Comece, é fácil
      </Heading>
      <Button>Abrir minha loja</Button>
    </Box>
  </>
);

export default useLayout(Home);
