import Router from 'next/router';

import Page from 'layouts/adminContent/page';

import Container from 'components/container';
import SubHeader from 'components/subHeader';
import { InputGroup, Input } from 'components/input';
import Select from 'components/select';
import Checkbox from 'components/checkbox';
import Radio from 'components/radio';

const AddProduct = () => {
  const handleBack = () => Router.push('/products');

  return (
    <Page>
      <SubHeader title="Novo Produto" hasBack onClick={handleBack} />
      <Container title="Geral">
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
        <Select labelText="teste1" />
        <Select labelText="teste2" />
        <Checkbox value="teste3" />
        <Checkbox value="teste3" />
        <Radio value="teste4" />
        <Radio value="teste4" />
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
