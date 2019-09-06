import Router from 'next/router';

import Page from 'layouts/adminContent/page';

import SubHeader from 'components/subHeader';
import Container from 'components/container';

const AddCategorie = () => {
  const handleBack = () => Router.push('/categories');

  return (
    <Page>
      <SubHeader title="Nova categoria" hasBack onClick={handleBack} />
      <Container title="Geral">todo</Container>
      <Container title="Tipo">todo</Container>
    </Page>
  );
};

export default AddCategorie;
