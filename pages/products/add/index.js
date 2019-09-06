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
          mask="phone"
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
      <Container title="Imagens">todo</Container>
      <Container title="Preços">
        <InputGroup type="inline">
          <Input
            labelText="Preço"
            id="product-price"
            name="product-price"
            mask="money"
          />
          <Input
            labelText="Preço a ser comparado"
            id="product-compare-price"
            name="product-compare-price"
            mask="money"
          />
        </InputGroup>
      </Container>
      <Container title="Fretes">todo</Container>
      <Container title="Estoque">todo</Container>
      <Container title="Variações">todo</Container>
    </Page>
  );
};

export default AddProduct;
