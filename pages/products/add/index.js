import Router from 'next/router';

import Page from 'layouts/adminContent/page';

import SubHeader from 'components/subHeader';
import Container from 'components/container';
import { InputGroup, Input } from 'components/input';

const AddProduct = () => {
  const handleBack = () => Router.push('/products');

  return (
    <Page>
      <SubHeader title="Novo Produto" hasBack onClick={handleBack} />
      <Container title="Geral" isForm>
        <Input
          labelText="Título do produto"
          id="product-title"
          name="product-title"
        />
        <Input
          labelText="Descrição"
          id="product-description"
          name="product-description"
        />
        <Input
          labelText="Código do produto"
          id="product-code"
          name="product-code"
        />
      </Container>
      <Container title="Imagens">img aqui</Container>
      <Container title="Preços">
        <InputGroup type="inline">
          <Input labelText="Preço" id="product-price" name="product-price" />
          <Input labelText="Preço" id="product-price" name="product-price" />
        </InputGroup>
      </Container>
    </Page>
  );
};

export default AddProduct;
