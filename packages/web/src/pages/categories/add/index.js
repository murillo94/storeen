import Router from 'next/router';

import Page from '../../../layouts/adminContent';

import SubHeader from '@storeen/components/src/components/subHeader';
import Container from '@storeen/components/src/components/container';
import Input from '@storeen/components/src/components/input';
import Radio from '@storeen/components/src/components/radio';
import Footer from '@storeen/components/src/components/footer';
import Button from '@storeen/components/src/components/button';

import useCategoriesAdd from '../../../containers/useCategoriesAdd';

import useLayout from '@storeen/system/src/hooks/layout/useLayout';

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
