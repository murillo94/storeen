import Router from 'next/router';

import Page from 'layouts/adminContent/page';

import SubHeader from 'components/subHeader';
import Container from 'components/container';
import Radio from 'components/radio';

const AddCategorie = () => {
  const handleBack = () => Router.push('/categories');

  return (
    <Page>
      <SubHeader title="Nova categoria" hasBack onClick={handleBack} />
      <Container title="Geral">todo</Container>
      <Container title="Tipo" isForm>
        <Radio
          id="manual"
          name="type"
          value="manual"
          text="Manual"
          description="Escolha os produtos manualmente para essa coleção."
        />
        <Radio
          id="automated"
          name="type"
          value="automated"
          text="Automatizada"
          description="Crie condições para que produtos existentes ou futuros sejam inseridos nessa coleção."
        />
      </Container>
    </Page>
  );
};

export default AddCategorie;
