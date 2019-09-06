import Router from 'next/router';

import Page from 'layouts/adminContent/page';

import SubHeader from 'components/subHeader';
import Container from 'components/container';

const AddPromotion = () => {
  const handleBack = () => Router.push('/promotions');

  return (
    <Page>
      <SubHeader title="Nova Promoção" hasBack onClick={handleBack} />
      <Container title="Geral">todo</Container>
      <Container title="Aplicável">todo</Container>
      <Container title="Requisitos mínimos">todo</Container>
      <Container title="Código promocional">todo</Container>
      <Container title="Agendar">todo</Container>
    </Page>
  );
};

export default AddPromotion;
