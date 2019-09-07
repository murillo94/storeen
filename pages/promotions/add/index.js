import Router from 'next/router';

import Page from 'layouts/adminContent/page';

import SubHeader from 'components/subHeader';
import Container from 'components/container';
import Checkbox from 'components/checkbox';

const AddPromotion = () => {
  const handleBack = () => Router.push('/promotions');

  return (
    <Page>
      <SubHeader title="Nova Promoção" hasBack onClick={handleBack} />
      <Container title="Geral">todo</Container>
      <Container title="Aplicável">todo</Container>
      <Container title="Requisitos mínimos">todo</Container>
      <Container title="Código promocional" isForm>
        <Checkbox
          id="promotional-code"
          name="promotional-code"
          text="Habilitar código promocional?"
        />
      </Container>
      <Container title="Agendar">
        <Checkbox id="schedule" name="schedule" text="Agendar promoção?" />
      </Container>
    </Page>
  );
};

export default AddPromotion;
