import Page from 'layouts/adminSettingsContent/store';

import Container from 'components/container';
import { ImageDescription } from 'components/image';
import Collapse from 'components/collapse';
import Switch from 'components/switch';
import Footer from 'components/footer';
import Button from 'components/button';

import useSettingsPayments from 'containers/useSettingsPayments';

import useLayout from 'hooks/layout/useLayout';

const ContainerPayment = ({ children, collapse }) => (
  <Container padding="15px" margin="0 0 20px" hasBoxShadow={false} hasBorder>
    <Container
      orientation="horizontal"
      align="between"
      padding="0"
      margin="0"
      hasBoxShadow={false}
      hasBorder={false}
    >
      {children}
    </Container>
    {collapse}
  </Container>
);

const PaymentsSettings = () => {
  const {
    state: { mercadoPago, wirecard, pagSeguro, paypal },
    actions: { onChange }
  } = useSettingsPayments();

  return (
    <>
      <Container
        title="Meios de pagamento"
        subTitle="Selecione um meio de pagamento para receber os pagamentos."
      >
        <ContainerPayment
          collapse={
            <Collapse isOpen={mercadoPago.active}>todo mercadoPago</Collapse>
          }
        >
          <ImageDescription
            src={require('images/payments/mercadopago.svg')}
            alt="Mercado Pago logo"
            description="Mercado Pago"
            width="32px"
            height="32px"
          />
          <Switch
            id="mercado-pago"
            name="mercadoPago.active"
            checked={mercadoPago.active}
            onChange={onChange}
          />
        </ContainerPayment>
        <ContainerPayment
          collapse={<Collapse isOpen={wirecard.active}>todo wirecard</Collapse>}
        >
          <ImageDescription
            src={require('images/payments/wirecard.svg')}
            alt="Wirecard logo"
            description="Wirecard"
            width="32px"
            height="32px"
          />
          <Switch
            id="wirecard"
            name="wirecard.active"
            checked={wirecard.active}
            onChange={onChange}
          />
        </ContainerPayment>
        <ContainerPayment
          collapse={
            <Collapse isOpen={pagSeguro.active}>todo pagSeguro</Collapse>
          }
        >
          <ImageDescription
            src={require('images/payments/pagseguro.svg')}
            alt="PagSeguro logo"
            description="PagSeguro"
            width="32px"
            height="32px"
          />
          <Switch
            id="pag-seguro"
            name="pagSeguro.active"
            checked={pagSeguro.active}
            onChange={onChange}
          />
        </ContainerPayment>
        <ContainerPayment
          collapse={<Collapse isOpen={paypal.active}>todo paypal</Collapse>}
        >
          <ImageDescription
            src={require('images/payments/paypal.svg')}
            alt="PayPal logo"
            description="PayPal"
            width="32px"
            height="32px"
          />
          <Switch
            id="paypal"
            name="paypal.active"
            checked={paypal.active}
            onChange={onChange}
          />
        </ContainerPayment>
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(PaymentsSettings);
