import Page from '../../../layouts/adminSettingsContent/store';

import { Container, Input, Footer, Button } from '@storeen/components';

import useSettingsLegal from '../../../containers/useSettingsLegal';

import useLayout from '../../../hooks/layout/useLayout';

const LegalSettings = () => {
  const {
    state: { refund, privacy, service, shipping },
    actions: { onChange, handleClickCopyModel }
  } = useSettingsLegal();

  return (
    <>
      <Container
        title="Política de reembolso"
        subTitle="Uma boa política de devolução ou reembolso pode ajudar a proteger a sua empresa e ganhar a confiança dos clientes."
        isForm
      >
        <Input
          labelText="Descrição"
          id="refund-description"
          name="refund.description"
          value={refund.description}
          onChange={onChange}
        />
        <Button
          appearance="minimal"
          text="Copiar modelo"
          onClick={() => handleClickCopyModel('refund')}
        />
      </Container>
      <Container
        title="Política de privacidade"
        subTitle="Garanta ao seu usuário o sigilo dos dados fornecidos."
        isForm
      >
        <Input
          labelText="Descrição"
          id="privacy-description"
          name="privacy.description"
          value={privacy.description}
          onChange={onChange}
        />
        <Button
          appearance="minimal"
          text="Copiar modelo"
          onClick={() => handleClickCopyModel('privacy')}
        />
      </Container>
      <Container
        title="Termos de serviço"
        subTitle="Estabeleça o que os usuários podem e não podem fazer ao comprar em seu site."
        isForm
      >
        <Input
          labelText="Descrição"
          id="service-description"
          name="service.description"
          value={service.description}
          onChange={onChange}
        />
        <Button
          appearance="minimal"
          text="Copiar modelo"
          onClick={() => handleClickCopyModel('service')}
        />
      </Container>
      <Container
        title="Política de envio"
        subTitle="Informe aos seus clientes como será o envio, controle e prazos para a entrega."
        isForm
      >
        <Input
          labelText="Descrição"
          id="shipping-description"
          name="shipping.description"
          value={shipping.description}
          onChange={onChange}
        />
        <Button
          appearance="minimal"
          text="Copiar modelo"
          onClick={() => handleClickCopyModel('shipping')}
        />
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(LegalSettings);
