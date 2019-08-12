import Page from 'layouts/admin/page';

import Container from 'components/container';
import SubHeader from 'components/subHeader';
import Button from 'components/button';
import { Heading, Paragraph } from 'components/typography';

const headingStyle = {
  margin: '0 0 20px'
};

const Promotions = () => (
  <Page>
    <SubHeader title="Promoções" hasBack>
      <Button text="Novo produto" />
    </SubHeader>
    <Container title="Geral">
      <Heading is="h3" text="R$ 90,60 de desconto" customStyle={headingStyle} />
      <Paragraph text="Não expira" />
      <Paragraph text="Não tem valor de pedido" />
    </Container>
  </Page>
);

export default Promotions;
