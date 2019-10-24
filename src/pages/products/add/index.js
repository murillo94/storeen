import Router from 'next/router';

import Page from 'layouts/adminContent';

import useProductsAdd from 'containers/useProductsAdd';

import SubHeader from 'components/subHeader';
import Container from 'components/container';
import { FormGroup } from 'components/form';
import Input from 'components/input';
import Checkbox from 'components/checkbox';
import Collapse from 'components/collapse';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'hooks/layout/useLayout';

const AddProduct = () => {
  const {
    state: { product, price, shipping, stock },
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
        <Collapse
          content={
            <Checkbox
              id="shipping"
              name="shipping"
              text="Este produto necessita de frete?"
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
        </Collapse>
      </Container>
      <Container title="Estoque" isForm>
        <Collapse
          content={
            <Checkbox
              id="stock"
              name="stock"
              text="Controlar estoque do produto?"
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
        </Collapse>
      </Container>
      <Container title="Variações" isForm>
        <Collapse
          content={
            <Checkbox
              id="variations"
              name="variations"
              text="Este produto possui variações?"
            />
          }
          action="onChange"
        >
          todo
        </Collapse>
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(AddProduct);
