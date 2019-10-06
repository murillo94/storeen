import { useState } from 'react';

import Page from 'layouts/adminSettingsContent/store';

import Container from 'components/container';
import Input from 'components/input';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'utils/layouts/useLayout';

const refundModel = 'Política de reembolso';
const privacyModel = 'Política de privacidade';
const serviceModel = 'Termos de serviço';
const shippingModel = 'Política de envio';

const LegalSettings = () => {
  const [refundDescription, setRefundDescription] = useState('');
  const [privacyDescription, setPrivacyDescription] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [shippingDescription, setShippingDescription] = useState('');

  const handleClickCopyRefundModel = () => setRefundDescription(refundModel);

  const handleClickCopyPrivacyModel = () => setPrivacyDescription(privacyModel);

  const handleClickCopyServiceModel = () => setServiceDescription(serviceModel);

  const handleClickCopyShippingModel = () =>
    setShippingDescription(shippingModel);

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
          name="refund-description"
          value={refundDescription}
        />
        <Button
          appearance="minimal"
          text="Copiar modelo"
          onClick={handleClickCopyRefundModel}
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
          name="privacy-description"
          value={privacyDescription}
        />
        <Button
          appearance="minimal"
          text="Copiar modelo"
          onClick={handleClickCopyPrivacyModel}
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
          name="service-description"
          value={serviceDescription}
        />
        <Button
          appearance="minimal"
          text="Copiar modelo"
          onClick={handleClickCopyServiceModel}
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
          name="shipping-description"
          value={shippingDescription}
        />
        <Button
          appearance="minimal"
          text="Copiar modelo"
          onClick={handleClickCopyShippingModel}
        />
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(LegalSettings);
