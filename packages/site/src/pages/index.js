import { useState } from 'react';

import {
  Box,
  Inline,
  Anchor,
  Image,
  Heading,
  Paragraph,
  Button,
  Stack,
  Icon,
  Switch,
  Footer,
  theming
} from '@storeen/components';

const TYPE = {
  monthly: 'monthly',
  annually: 'annually'
};

const Home = () => {
  const [plan, setPlan] = useState(TYPE.monthly);

  return (
    <Box as="main">
      <Box as="nav" padding={6} marginBottom={10}>
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
      <Box
        as="section"
        sx={{ textAlign: 'center', maxWidth: ['38em', '50em', '62em', '78em'] }}
        paddingX={3}
        marginBottom={12}
        marginX="auto"
      >
        <Heading marginBottom={4}>Crie sua loja virtual completa</Heading>
        <Paragraph marginBottom={10}>
          Sem limites de acessos, fotos e produtos. Nós cuidamos da tecnologia e
          você só precisa se preocupar em vender
        </Paragraph>
        <Box marginBottom={10}>
          <Box
            sx={{
              backgroundColor: 'gray200',
              borderRadius: 4,
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
      <Box
        as="section"
        sx={{ textAlign: 'center', maxWidth: ['38em', '50em', '62em', '78em'] }}
        paddingX={3}
        marginBottom={12}
        marginX="auto"
      >
        <Stack space="xlarge">
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
              <Box
                sx={{
                  backgroundColor: 'gray200',
                  borderRadius: 4,
                  width: ['100px', '50%'],
                  height: ['auto', '100px']
                }}
                marginX="auto"
              />
            </Box>
          </Inline>
          <Inline>
            <Box>
              <Box
                sx={{
                  backgroundColor: 'gray200',
                  borderRadius: 4,
                  width: ['100px', '50%'],
                  height: ['auto', '100px']
                }}
                marginX="auto"
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
      </Box>
      <Box
        as="section"
        sx={{ textAlign: 'center', maxWidth: ['38em', '50em', '62em', '78em'] }}
        paddingX={3}
        marginBottom={12}
        marginX="auto"
      >
        <Heading is="h2" marginBottom={10}>
          Focamos na tecnologia para que você possa focar na receita
        </Heading>
        <Stack space="xlarge">
          <Inline
            isProportional={false}
            spaceX="xlarge"
            sx={{ justifyContent: 'center' }}
          >
            <Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['160px'],
                  height: ['auto', '160px']
                }}
                padding={3}
                marginX="auto"
              >
                <Heading is="h3">Acompanhe seus pedidos</Heading>
                <Icon name="package" size={30} />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['160px'],
                  height: ['auto', '160px']
                }}
                padding={3}
                marginX="auto"
              >
                <Heading is="h3">Pagamento integrado</Heading>
                <Icon name="credit-card" size={30} />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['160px'],
                  height: ['auto', '160px']
                }}
                padding={3}
                marginX="auto"
              >
                <Heading is="h3">Crie cupons</Heading>
                <Icon name="gift" size={30} />
              </Box>
            </Box>
          </Inline>
          <Inline
            isProportional={false}
            spaceX="xlarge"
            sx={{ justifyContent: 'center' }}
          >
            <Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['160px'],
                  height: ['auto', '160px']
                }}
                padding={3}
                marginX="auto"
              >
                <Heading is="h3">Checkout seguro</Heading>
                <Icon name="shield" size={30} />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['160px'],
                  height: ['auto', '160px']
                }}
                padding={3}
                marginX="auto"
              >
                <Heading is="h3">Mix de produtos</Heading>
                <Icon name="tag" size={30} />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray0',
                  boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.15)',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['160px'],
                  height: ['auto', '160px']
                }}
                padding={3}
                marginX="auto"
              >
                <Heading is="h3">Altíssima velocidade</Heading>
                <Icon name="upload-cloud" size={30} />
              </Box>
            </Box>
          </Inline>
        </Stack>
      </Box>
      <Box
        as="section"
        sx={{ textAlign: 'center', maxWidth: ['38em', '50em', '62em', '78em'] }}
        paddingX={3}
        marginBottom={12}
        marginX="auto"
      >
        <Stack space="xlarge">
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
              <Box
                sx={{
                  backgroundColor: 'gray200',
                  borderRadius: 4,
                  width: ['100px', '50%'],
                  height: ['auto', '100px']
                }}
                marginX="auto"
              />
            </Box>
          </Inline>
          <Inline>
            <Box>
              <Box
                sx={{
                  backgroundColor: 'gray200',
                  borderRadius: 4,
                  width: ['100px', '50%'],
                  height: ['auto', '100px']
                }}
                marginX="auto"
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
      </Box>
      <Box
        as="section"
        sx={{ textAlign: 'center', maxWidth: ['38em', '50em', '62em', '78em'] }}
        paddingX={3}
        marginBottom={12}
        marginX="auto"
      >
        <Heading is="h2" marginBottom={4}>
          Estamos aqui para te ajudar
        </Heading>
        <Paragraph marginBottom={10}>
          Saiba como fazer uma ótima loja, atrair seu público e muito mais, tudo
          isso em nossa universidade ou em nossa páginas de FAQs
        </Paragraph>
        <Stack space="xlarge">
          <Inline
            isProportional={false}
            spaceX="xlarge"
            sx={{ justifyContent: 'center' }}
          >
            <Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray200',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['400px'],
                  height: ['auto', '260px']
                }}
                padding={5}
                marginX="auto"
              >
                <Box>
                  <Heading is="h2" marginBottom={4}>
                    Universidade
                  </Heading>
                  <Paragraph>
                    Não se sinta mais sozinho neste imenso e desafiador mundo do
                    empreendedorismo. Vamos te ajudar a entender melhor a
                    dinâmica do e-commerce.
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
            </Box>
            <Box>
              <Box
                sx={{
                  textAlign: 'left',
                  backgroundColor: 'gray200',
                  borderRadius: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  display: 'flex',
                  width: ['400px'],
                  height: ['auto', '260px']
                }}
                padding={5}
                marginX="auto"
              >
                <Box>
                  <Heading is="h2" marginBottom={4}>
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
            </Box>
          </Inline>
        </Stack>
      </Box>
      <Box
        as="section"
        sx={{ textAlign: 'center', maxWidth: ['38em', '50em', '62em', '78em'] }}
        paddingX={3}
        marginBottom={12}
        marginX="auto"
      >
        <Heading is="h2" marginBottom={4}>
          Planos
        </Heading>
        <Paragraph marginBottom={6}>
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
        <Paragraph marginBottom={8} color="success">
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
            <Heading is="h3" marginBottom={3}>
              {plan === TYPE.monthly ? 'Mensal' : 'Anual'}
            </Heading>
            <Paragraph marginBottom={6}>
              {plan === TYPE.monthly ? 'R$ 59,90' : '575,04'}
            </Paragraph>
            <Stack space="small">
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
          </Box>
        </Box>
      </Box>
      <Footer padding={6}>
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
          <Stack space="small">
            <Image
              src={require('@site/public/images/logo-all-horizontal.svg')}
              alt="Storeen logo com nome horizontal"
              width="150px"
              height="50px"
            />
            <Paragraph>
              O jeito mais fácil de criar uma loja virtual completa
            </Paragraph>
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
              <Heading is="h3" marginBottom={4}>
                Produto
              </Heading>
              <Anchor href="#">funcionalidades</Anchor>
              <Anchor href="#">planos</Anchor>
            </Box>
            <Box
              sx={{
                '> a': {
                  display: 'block',
                  marginBottom: 2
                }
              }}
            >
              <Heading is="h3" marginBottom={4}>
                Empresa
              </Heading>
              <Anchor href="#">sobre nós</Anchor>
              <Anchor href="#">carreiras</Anchor>
              <Anchor href="#">contato</Anchor>
            </Box>
          </Inline>
        </Inline>
      </Footer>
    </Box>
  );
};

export default Home;
