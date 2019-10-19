import Router from 'next/router';

import Page from 'layouts/adminContent';

import SubHeader from 'components/subHeader';
import Container from 'components/container';
import Input from 'components/input';
import Radio from 'components/radio';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'hooks/layouts/useLayout';

const AddCategorie = () => {
  const handleBack = () => Router.push('/categories');

  return (
    <>
      <SubHeader title="Nova categoria" hasBack onClick={handleBack} />
      <Container title="Geral" isForm>
        <Input
          labelText="Título da categoria"
          id="categorie-title"
          name="categorie-title"
        />
        <Input
          labelText="Descrição"
          id="categorie-description"
          name="categorie-description"
        />
      </Container>
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
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(AddCategorie);
