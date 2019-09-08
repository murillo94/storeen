import Page from 'layouts/adminSettingsContent/page';

import Container from 'components/container';
import { Input } from 'components/input';
import Footer from 'components/footer';
import Button from 'components/button';

const LegalSettings = () => (
  <Page>
    <Container
      title="Política de reembolso"
      subTitle="Uma boa política de devolução ou reembolso pode ajudar a proteger a sua empresa e ganhar a confiança dos clientes."
      isForm
    >
      <Input
        labelText="Descrição"
        id="refund-description"
        name="refund-description"
      />
      <Button appearance="minimal" text="Copiar modelo" />
    </Container>
    <Container
      title="Política de privacidade"
      subTitle="Garanta ao seu usuário o sigilo dos dados fornecidos."
      isForm
    >
      <Input
        labelText="Descrição"
        id="privacy-description"
        name="privacy-description"
      />
      <Button appearance="minimal" text="Copiar modelo" />
    </Container>
    <Container
      title="Termos de serviço"
      subTitle="Estabeleça o que os usuários podem e não podem fazer ao comprar em seu site."
      isForm
    >
      <Input
        labelText="Descrição"
        id="service-description"
        name="service-description"
      />
      <Button appearance="minimal" text="Copiar modelo" />
    </Container>
    <Container
      title="Política de envio"
      subTitle="Informe aos seus clientes como será o envio, controle e prazos para a entrega."
      isForm
    >
      <Input
        labelText="Descrição"
        id="shipping-description"
        name="shipping-description"
      />
      <Button appearance="minimal" text="Copiar modelo" />
    </Container>
    <Footer>
      <Button text="Salvar" />
    </Footer>
  </Page>
);

export default LegalSettings;
