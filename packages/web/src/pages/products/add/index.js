import Router from 'next/router';

import Page from '../../../layouts/adminContent';

import {
  SubHeader,
  Container,
  FormGroup,
  Input,
  Checkbox,
  Disclosure,
  Footer,
  Button
} from '@storeen/components';

import useProductsAdd from '../../../containers/useProductsAdd';

import useLayout from '@storeen/system/src/hooks/layout/useLayout';

const AddProduct = () => {
  const {
    state: { product, price, shipping, stock, variations },
    actions: { onChange }
  } = useProductsAdd();

  const handleBack = () => Router.push('/products');

  return (
    <>
      <SubHeader title="Novo Produto" hasBack onClick={handleBack} />
      <Container title="Geral" isForm>
        <Input
          labelText="Título do produto"
          id="product-title"
          name="product.title"
          value={product.title}
          onChange={onChange}
        />
        <Input
          labelText="Descrição"
          id="product-description"
          name="product.description"
          value={product.description}
          onChange={onChange}
        />
        <Input
          labelText="Código do produto"
          id="product-code"
          name="product.code"
          value={product.code}
          onChange={onChange}
        />
      </Container>
      <Container title="Imagens">todo</Container>
      <Container title="Preços" isForm>
        <FormGroup>
          <Input
            labelText="Preço"
            id="price-actual"
            name="price.actual"
            value={price.actual}
            mask="money"
            onChange={onChange}
          />
          <Input
            labelText="Preço a ser comparado"
            id="price-compare"
            name="price.compare"
            value={price.compare}
            mask="money"
            onChange={onChange}
          />
        </FormGroup>
      </Container>
      <Container title="Fretes" isForm>
        <Disclosure
          content={
            <Checkbox
              id="shipping"
              name="shipping.hasShipping"
              text="Este produto necessita de frete?"
              checked={shipping.hasShipping}
              onChange={onChange}
            />
          }
          action="onChange"
        >
          <FormGroup>
            <Input
              labelText="Peso (kg)"
              id="shipping-weight"
              name="shipping.weight"
              value={shipping.weight}
              mask="number"
              onChange={onChange}
            />
            <Input
              labelText="Altura (cm)"
              id="shipping-height"
              name="shipping.height"
              value={shipping.height}
              mask="number"
              onChange={onChange}
            />
            <Input
              labelText="Largura (cm)"
              id="shipping-width"
              name="shipping.width"
              value={shipping.width}
              mask="number"
              onChange={onChange}
            />
            <Input
              labelText="Comprimento (cm)"
              id="shipping-length"
              name="shipping.length"
              value={shipping.length}
              mask="number"
              onChange={onChange}
            />
          </FormGroup>
        </Disclosure>
      </Container>
      <Container title="Estoque" isForm>
        <Disclosure
          content={
            <Checkbox
              id="stock"
              name="stock.hasStock"
              text="Controlar estoque do produto?"
              checked={stock.hasStock}
              onChange={onChange}
            />
          }
          action="onChange"
        >
          <Input
            labelText="Quantidade"
            id="product-quantity"
            name="stock.quantity"
            value={stock.quantity}
            mask="number"
            onChange={onChange}
          />
        </Disclosure>
      </Container>
      <Container title="Variações" isForm>
        <Disclosure
          content={
            <Checkbox
              id="variations"
              name="variations.hasVariations"
              text="Este produto possui variações?"
              checked={variations.hasVariations}
              onChange={onChange}
            />
          }
          action="onChange"
        >
          todo
        </Disclosure>
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(AddProduct);
