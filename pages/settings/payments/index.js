import Page from 'layouts/adminSettingsContent/page';

import Container from 'components/container';
import Footer from 'components/footer';
import Button from 'components/button';

const PaymentsSettings = () => (
  <Page>
    <Container
      title="Meios de pagamento"
      subTitle="Selecione um meio de pagamento para receber os pagamentos."
    >
      todo
    </Container>
    <Footer>
      <Button appearance="positive" text="Salvar" />
    </Footer>
  </Page>
);

export default PaymentsSettings;
