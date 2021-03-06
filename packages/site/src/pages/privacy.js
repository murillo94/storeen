import { Box, Heading, Paragraph, Stack } from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const Privacy = () => (
  <Wrapper>
    <Heading marginBottom={4} sx={{ textAlign: 'center' }}>
      Política de privacidade
    </Heading>
    <Paragraph color="muted" marginBottom={10} sx={{ textAlign: 'center' }}>
      Última modificação: 16 de fevereiro de 2021.
    </Paragraph>
    <Box as="section" paddingY={4}>
      <Stack space="xlarge" sx={{ textAlign: 'justify' }}>
        <Stack space="xsmall">
          <Heading is="h3">Tipo de informação armazenada</Heading>
          <Stack>
            <Paragraph>
              Quando você cria uma conta na Storeen, capturamos informações como
              nome do responsável, e-mail, telefone, endereço, CNPJ. Além disso,
              também são armazenados dados da loja como nome de produto, foto,
              preço, descrição, estoque, entre outros dados.
            </Paragraph>
            <Paragraph>
              O sistema também armazena dados cadastrais, preferências e
              histórico de compra de clientes que se cadastraram nas respectivas
              lojas. Esses dados apenas podem ser consultados pelo lojista ou
              pelo próprio cliente, mediante identificação por senha.
            </Paragraph>
          </Stack>
        </Stack>
        <Stack space="xsmall">
          <Heading is="h3">Forma de armazenamento</Heading>
          <Paragraph>
            Os dados são armazenados na plataforma e acessados remotamente,
            sendo necessário apenas um computador com acesso à Internet. Os
            dados podem ser consultados através do Painel Administrativo da loja
            virtual pelos usuários gestores, que possuem acesso a partir de uma
            identificação com senha.
          </Paragraph>
        </Stack>
        <Stack space="xsmall">
          <Heading is="h3">Utilização dos dados armazenados</Heading>
          <Stack>
            <Paragraph>
              Utilizamos seus dados pessoais para enviar avisos importantes,
              como comunicados da ferramenta, changelog, condições e políticas,
              informações sobre o pacote do plano adquirido, entre outras. Como
              estas informações são importantes para a sua interação com a
              Storeen, você não poderá optar por não receber esse tipo de
              comunicação.
            </Paragraph>
            <Paragraph>
              Poderemos utilizar seus dados pessoais para nos ajudar a
              desenvolver, oferecer e melhorar os nossos produtos, serviços,
              conteúdo, parcerias e publicidade, bem como para auditoria,
              análise de dados e pesquisas para aprimorar os produtos, serviços
              e comunicações com os nossos clientes. Nesses casos, você poderá
              optar por receber ou não essa comunicação.
            </Paragraph>
            <Paragraph>
              Utilizaremos seus dados, ainda, para faturamento e cobrança dos
              serviços contratados;
            </Paragraph>
            <Paragraph>
              Contato via e-mail, telefone ou correspondência.
            </Paragraph>
            <Paragraph>
              Alguns dados poderão ser disponibilizados na loja virtual do
              USUÁRIO, bem como através de e-mails de acordo com a Política de
              Uso vigente.
            </Paragraph>
            <Paragraph>
              Nosso site poderá conter links para outros sites não pertencentes
              à Storeen. Nesses casos não seremos responsáveis pelas ações
              desses sites, para os quais não será aplicável a presente Política
              de Privacidade.
            </Paragraph>
            <Paragraph>
              A Storeen é titular de direitos sobre todos os bancos de dados e
              dispositivos de armazenamento de dados, bem como sobre os
              softwares de que utiliza. No entanto, a Storeen não será titular
              das informações do Usuário armazenadas no Site e/ou recebidas em
              decorrência das vendas realizadas através do Site, as quais sempre
              pertencerão aos Usuários.
            </Paragraph>
          </Stack>
        </Stack>
        <Stack space="xsmall">
          <Heading is="h3">
            O que você deve fazer para proteger seus dados?
          </Heading>
          <Stack>
            <Paragraph>
              Você também é responsável pela segurança e sigilo das suas senhas
              e/ou informações confidenciais. Dessa forma, recomendamos:
            </Paragraph>
            <Paragraph>
              Ao acessar a Internet busque sempre conhecer a política de
              privacidade do site que você está acessando. Use senhas complexas
              que dificultem sua detecção por outras pessoas, senhas simples são
              facilmente quebradas. Nunca forneça sua senha a ninguém e procure
              criar senhas novas periodicamente. Crie acessos distintos para os
              funcionários acessarem o painel administrativo da sua loja. Você
              poderá excluí-los quando necessário. Se você tiver qualquer dúvida
              com relação à nossa Política de Privacidade, entre em contato
              conosco.
            </Paragraph>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  </Wrapper>
);

export default useLayout(Privacy);
