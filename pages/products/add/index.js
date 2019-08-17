import Router from 'next/router';

import Page from 'layouts/admin/page';

import Container from 'components/container';
import SubHeader from 'components/subHeader';
import { InputGroup, Input } from 'components/input';

const AddProduct = () => {
  const handleBack = () => Router.push('/products');

  return (
    <Page>
      <SubHeader title="Novo Produto" hasBack onClick={handleBack} />
      <Container title="Geral">
        <Input labelText="Título do produto" id="title" name="title" />
        <Input labelText="Descrição" id="description" name="description" />
        <Input labelText="Código do produto" id="code" name="code" />
      </Container>
      <Container title="Imagens">img aqui</Container>
      <Container title="Preços">
        <InputGroup type="inline">
          <Input labelText="Preço" id="price" name="price" />
          <Input labelText="Preço" id="price" name="price" />
        </InputGroup>
      </Container>
    </Page>
  );
};

export default AddProduct;
