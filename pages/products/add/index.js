import Router from 'next/router';

import Page from 'layouts/adminContent/page';

import SubHeader from 'components/subHeader';
import Container from 'components/container';
import { InputGroup, Input } from 'components/input';
import Checkbox from 'components/checkbox';
import Footer from 'components/footer';
import Button from 'components/button';

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
      <Container title="Fretes" isForm>
        <Checkbox
          id="shipping"
          name="shipping"
          text="Este produto necessita de frete?"
        />
      </Container>
      <Container title="Estoque" isForm>
        <Checkbox
          id="stock"
          name="stock"
          text="Controlar estoque do produto?"
        />
      </Container>
      <Container title="Variações" isForm>
        <Checkbox
          id="variations"
          name="variations"
          text="Este produto possui variações?"
        />
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </Page>
  );
};

export default AddProduct;
