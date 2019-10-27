import Router from 'next/router';

import Page from 'layouts/adminContent';

import useCategoriesAdd from 'containers/useCategoriesAdd';

import SubHeader from 'components/subHeader';
import Container from 'components/container';
import Input from 'components/input';
import Radio from 'components/radio';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'hooks/layout/useLayout';

const AddCategorie = () => {
  const {
    state: { categorie, type },
    actions: { onChange }
  } = useCategoriesAdd();

  const handleBack = () => Router.push('/categories');

  return (
    <>
      <SubHeader title="Nova categoria" hasBack onClick={handleBack} />
      <Container title="Geral" isForm>
        <Input
          labelText="Título da categoria"
          id="categorie-title"
          name="categorie.title"
          value={categorie.title}
          onChange={onChange}
        />
        <Input
          labelText="Descrição"
          id="categorie-description"
          name="categorie.description"
          value={categorie.description}
          onChange={onChange}
        />
      </Container>
      <Container title="Tipo" isForm>
        <Radio
          id="manual"
          name="type"
          value="manual"
          text="Manual"
          description="Escolha os produtos manualmente para essa coleção."
          checked={type === 'manual'}
          onChange={onChange}
        />
        <Radio
          id="automated"
          name="type"
          value="automated"
          text="Automatizada"
          description="Crie condições para que produtos existentes ou futuros sejam inseridos nessa coleção."
          checked={type === 'automated'}
          onChange={onChange}
        />
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(AddCategorie);