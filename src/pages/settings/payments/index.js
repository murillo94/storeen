import Page from 'layouts/adminSettingsContent/store';

import Container from 'components/container';
import { ImageDescription } from 'components/image';
import Switch from 'components/switch';
import Footer from 'components/footer';
import Button from 'components/button';

import useSettingsPayments from 'containers/useSettingsPayments';

import useLayout from 'hooks/layout/useLayout';

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
        <Container
          orientation="horizontal"
          align="between"
          hasBoxShadow={false}
          hasBorder
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
        </Container>
        <Container
          orientation="horizontal"
          align="between"
          hasBoxShadow={false}
          hasBorder
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
        </Container>
        <Container
          orientation="horizontal"
          align="between"
          hasBoxShadow={false}
          hasBorder
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
        </Container>
        <Container
          orientation="horizontal"
          align="between"
          hasBoxShadow={false}
          hasBorder
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
        </Container>
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(PaymentsSettings);
