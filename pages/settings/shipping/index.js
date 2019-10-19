import Page from 'layouts/adminSettingsContent/store';

import Container from 'components/container';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'hooks/layouts/useLayout';

const ShippingSettings = () => (
  <>
    <Container
      title="Opções de frete"
      subTitle="Escolha as maneiras de levar seus produtos até seus clientes."
    >
      todo
    </Container>
    <Footer>
      <Button text="Salvar" />
    </Footer>
  </>
);

export default useLayout(Page)(ShippingSettings);
