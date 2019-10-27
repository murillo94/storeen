import Page from 'layouts/adminSettingsContent/store';

import Container from 'components/container';
import { ImageDescription } from 'components/image';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'hooks/layout/useLayout';

const PaymentsSettings = () => (
  <>
    <Container
      title="Meios de pagamento"
      subTitle="Selecione um meio de pagamento para receber os pagamentos."
    >
      <Container hasBorder>
        <ImageDescription
          src={require('images/payments/mercadopago.svg')}
          alt="Mercado Pago logo"
          description="Mercado Pago"
          width="32px"
          height="32px"
        />
      </Container>
      <Container hasBorder>
        <ImageDescription
          src={require('images/payments/wirecard.svg')}
          alt="Wirecard logo"
          description="Wirecard"
          width="32px"
          height="32px"
        />
      </Container>
      <Container hasBorder>
        <ImageDescription
          src={require('images/payments/pagseguro.svg')}
          alt="PagSeguro logo"
          description="PagSeguro"
          width="32px"
          height="32px"
        />
      </Container>
      <Container hasBorder>
        <ImageDescription
          src={require('images/payments/paypal.svg')}
          alt="PayPal logo"
          description="PayPal"
          width="32px"
          height="32px"
        />
      </Container>
    </Container>
    <Footer>
      <Button text="Salvar" />
    </Footer>
  </>
);

export default useLayout(Page)(PaymentsSettings);
