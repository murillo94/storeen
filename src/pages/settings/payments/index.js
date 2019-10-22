import Page from 'layouts/adminSettingsContent/store';

import Container from 'components/container';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'hooks/layout/useLayout';

const PaymentsSettings = () => (
  <>
    <Container
      title="Meios de pagamento"
      subTitle="Selecione um meio de pagamento para receber os pagamentos."
    >
      todo
    </Container>
    <Footer>
      <Button text="Salvar" />
    </Footer>
  </>
);

export default useLayout(Page)(PaymentsSettings);
