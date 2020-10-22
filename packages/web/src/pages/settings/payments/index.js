import { useState } from 'react';
import dynamic from 'next/dynamic';

import Page from '@web/layouts/adminSettingsContent/store';

import {
  Container,
  Box,
  Badge,
  Icon,
  ImageDescription,
  Disclosure,
  Paragraph,
  Input,
  Switch,
  Footer,
  Button,
  Inline,
  theming
} from '@storeen/components';

import useSettingsPayments from '@web/containers/useSettingsPayments';

import useLayout from '@web/hooks/layout/useLayout';

const Dialog = dynamic(
  () => import('@storeen/components').then(mod => mod.Dialog),
  { ssr: false }
);

const ContainerPayment = ({ children, disclosure }) => (
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
  </Container>
);

const Info = ({ onClick }) => (
  <Badge appearance="minimal" onClick={onClick} marginLeft={[0, 2]}>
    <Icon name="help-circle" color={theming.colors.gray600} />
  </Badge>
);

const PaymentsSettings = () => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const {
    state: { info, mercadoPago, wirecard, pagSeguro, paypal },
    actions: { onChange, onClickInfo }
  } = useSettingsPayments();

  const handleClickDialog = payment => {
    setVisibleDialog(!visibleDialog);
    onClickInfo(payment);
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
        >
          <Inline>
            <ImageDescription
              src={require('@web/public/images/payments/mercadopago.svg')}
              alt="Mercado Pago logo"
              description="Mercado Pago"
              width="32px"
              height="32px"
            />
            <Info onClick={() => handleClickDialog('mercadoPago')} />
          </Inline>
          <Switch
            id="mercado-pago-active"
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
          <Inline>
            <ImageDescription
              src={require('@web/public/images/payments/wirecard.svg')}
              alt="Wirecard logo"
              description="Wirecard"
              width="32px"
              height="32px"
            />
            <Info onClick={() => handleClickDialog('wirecard')} />
          </Inline>
          <Switch
            id="wirecard-active"
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
          <Inline>
            <ImageDescription
              src={require('@web/public/images/payments/pagseguro.svg')}
              alt="PagSeguro logo"
              description="PagSeguro"
              width="32px"
              height="32px"
            />
            <Info onClick={() => handleClickDialog('pagSeguro')} />
          </Inline>
          <Switch
            id="pag-seguro-active"
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
          <Inline>
            <ImageDescription
              src={require('@web/public/images/payments/paypal.svg')}
              alt="PayPal logo"
              description="PayPal"
              width="32px"
              height="32px"
            />
            <Info onClick={() => handleClickDialog('paypal')} />
          </Inline>
          <Switch
            id="paypal-active"
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
        {info}
      </Dialog>
    </>
  );
};

export default useLayout(Page)(PaymentsSettings);
