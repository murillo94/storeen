import { useState } from 'react';
import dynamic from 'next/dynamic';

import Page from '../../../layouts/adminSettingsContent/store';

import {
  Container,
  Box,
  Badge,
  ImageDescription,
  Disclosure,
  Paragraph,
  Input,
  Switch,
  Footer,
  Button
} from '@storeen/components';

import useSettingsPayments from '../../../containers/useSettingsPayments';

import useLayout from '../../../hooks/layout/useLayout';

const Dialog = dynamic(
  () => import('@storeen/components').then(mod => mod.Dialog),
  { ssr: false }
);

const ContainerPayment = ({ children, disclosure, onClick }) => (
  <Container padding={3} marginBottom={4}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
    {disclosure}
    <Badge onClick={onClick}>todo</Badge>
  </Container>
);

const PaymentsSettings = () => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const {
    state: { mercadoPago, wirecard, pagSeguro, paypal },
    actions: { onChange }
  } = useSettingsPayments();

  const handleClickDialog = () => {
    setVisibleDialog(!visibleDialog);
  };

  return (
    <>
      <Container
        title="Meios de pagamento"
        subTitle="Selecione um meio de pagamento para receber os pagamentos."
      >
        <ContainerPayment
          disclosure={
            <Disclosure isVisible={mercadoPago.active}>
              <Paragraph color="muted" marginBottom={4}>
                Informe o endereço de e-mail que você usou para criar sua conta
                do Mercado Pago. Mais informações sobre como conectar o Mercado
                Pago podem ser encontradas aqui.
              </Paragraph>
              <Input
                type="email"
                labelText="Email"
                id="mercado-pago-email"
                name="mercadoPago.email"
                value={mercadoPago.email}
                onChange={onChange}
              />
            </Disclosure>
          }
          onClick={handleClickDialog}
        >
          <ImageDescription
            src={require('../../../public/images/payments/mercadopago.svg')}
            alt="Mercado Pago logo"
            description="Mercado Pago"
            width="32px"
            height="32px"
          />
          <Switch
            id="mercado-pago"
            name="mercadoPago.active"
            isChecked={mercadoPago.active}
            onChange={onChange}
          />
        </ContainerPayment>
        <ContainerPayment
          disclosure={
            <Disclosure isVisible={wirecard.active}>
              <Paragraph color="muted" marginBottom={4}>
                Informe o endereço de e-mail que você usou para criar sua conta
                da Wirecard. Mais informações sobre como conectar o Wirecard
                podem ser encontradas aqui.
              </Paragraph>
              <Input
                type="email"
                labelText="Email"
                id="wirecard-email"
                name="wirecard.email"
                value={wirecard.email}
                onChange={onChange}
              />
            </Disclosure>
          }
          onClick={handleClickDialog}
        >
          <ImageDescription
            src={require('../../../public/images/payments/wirecard.svg')}
            alt="Wirecard logo"
            description="Wirecard"
            width="32px"
            height="32px"
          />
          <Switch
            id="wirecard"
            name="wirecard.active"
            isChecked={wirecard.active}
            onChange={onChange}
          />
        </ContainerPayment>
        <ContainerPayment
          disclosure={
            <Disclosure isVisible={pagSeguro.active}>
              <Paragraph color="muted" marginBottom={4}>
                Informe o endereço de e-mail que você usou para criar sua conta
                da PagSeguro. Mais informações sobre como conectar o PagSeguro
                podem ser encontradas aqui.
              </Paragraph>
              <Input
                type="email"
                labelText="Email"
                id="pag-seguro-email"
                name="pagSeguro.email"
                value={pagSeguro.email}
                onChange={onChange}
              />
            </Disclosure>
          }
          onClick={handleClickDialog}
        >
          <ImageDescription
            src={require('../../../public/images/payments/pagseguro.svg')}
            alt="PagSeguro logo"
            description="PagSeguro"
            width="32px"
            height="32px"
          />
          <Switch
            id="pag-seguro"
            name="pagSeguro.active"
            isChecked={pagSeguro.active}
            onChange={onChange}
          />
        </ContainerPayment>
        <ContainerPayment
          disclosure={
            <Disclosure isVisible={paypal.active}>
              <Paragraph color="muted" marginBottom={4}>
                Informe o endereço de e-mail que você usou para criar sua conta
                da PayPal. Mais informações sobre como conectar o PayPal podem
                ser encontradas aqui.
              </Paragraph>
              <Input
                type="email"
                labelText="Email"
                id="paypal-email"
                name="paypal.email"
                value={paypal.email}
                onChange={onChange}
              />
            </Disclosure>
          }
          onClick={handleClickDialog}
        >
          <ImageDescription
            src={require('../../../public/images/payments/paypal.svg')}
            alt="PayPal logo"
            description="PayPal"
            width="32px"
            height="32px"
          />
          <Switch
            id="paypal"
            name="paypal.active"
            isChecked={paypal.active}
            onChange={onChange}
          />
        </ContainerPayment>
      </Container>
      <Footer>
        <Button>Salvar</Button>
      </Footer>
      <Dialog isVisible={visibleDialog} onClose={handleClickDialog}>
        todo
      </Dialog>
    </>
  );
};

export default useLayout(Page)(PaymentsSettings);
