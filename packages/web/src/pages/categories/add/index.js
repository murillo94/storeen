import Router from 'next/router';

import Page from '../../../layouts/adminContent';

import {
  SubHeader,
  Container,
  Stack,
  Input,
  Radio,
  Footer,
  Button
} from '@storeen/components';

import useCategoriesAdd from '../../../containers/useCategoriesAdd';

import useLayout from '../../../hooks/layout/useLayout';

const AddCategorie = () => {
  const {
    state: { categorie, type },
    actions: { onChange }
  } = useCategoriesAdd();

  const handleBack = () => Router.push('/categories');

  return (
    <>
      <SubHeader title="Nova categoria" hasBack onClick={handleBack} />
      <Container title="Geral">
        <Stack>
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
        </Stack>
      </Container>
      <Container title="Tipo">
        <Stack space="medium">
          <Radio
            id="manual"
            name="type"
            value="manual"
            description="Escolha os produtos manualmente para essa coleção."
            isChecked={type === 'manual'}
            onChange={onChange}
          >
            Manual
          </Radio>
          <Radio
            id="automated"
            name="type"
            value="automated"
            description="Crie condições para que produtos existentes ou futuros sejam inseridos nessa coleção."
            isChecked={type === 'automated'}
            onChange={onChange}
          >
            Automatizada
          </Radio>
        </Stack>
      </Container>
      <Footer>
        <Button>Salvar</Button>
      </Footer>
    </>
  );
};

export default useLayout(Page)(AddCategorie);
