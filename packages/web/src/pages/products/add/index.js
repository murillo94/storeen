import Router from 'next/router';

import Page from '../../../layouts/adminContent';

import {
  SubHeader,
  Container,
  Stack,
  Inline,
  Input,
  Checkbox,
  Disclosure,
  Footer,
  Button
} from '@storeen/components';

import useProductsAdd from '../../../containers/useProductsAdd';

import useLayout from '../../../hooks/layout/useLayout';

const AddProduct = () => {
  const {
    state: { product, price, shipping, stock, variations },
    actions: { onChange }
  } = useProductsAdd();

  const handleBack = () => Router.push('/products');

  return (
    <>
      <SubHeader
        title="Novo Produto"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Container title="Geral">
        <Stack>
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
        </Stack>
      </Container>
      <Container title="Imagens">todo</Container>
      <Container title="Preços">
        <Inline>
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
        </Inline>
      </Container>
      <Container title="Fretes">
        <Disclosure
          as={
            <Checkbox
              id="shipping-has-shipping"
              name="shipping.hasShipping"
              value="hasShipping"
              isChecked={shipping.hasShipping}
              onChange={onChange}
            >
              Este produto necessita de frete?
            </Checkbox>
          }
        >
          <Inline>
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
          </Inline>
        </Disclosure>
      </Container>
      <Container title="Estoque">
        <Disclosure
          as={
            <Checkbox
              id="stock-has-stock"
              name="stock.hasStock"
              value="hasStock"
              isChecked={stock.hasStock}
              onChange={onChange}
            >
              Controlar estoque do produto?
            </Checkbox>
          }
        >
          <Stack>
            <Input
              labelText="Quantidade"
              id="stock-quantity"
              name="stock.quantity"
              value={stock.quantity}
              mask="number"
              onChange={onChange}
            />
          </Stack>
        </Disclosure>
      </Container>
      <Container title="Variações">
        <Disclosure
          as={
            <Checkbox
              id="variations-has-variations"
              name="variations.hasVariations"
              value="hasVariations"
              isChecked={variations.hasVariations}
              onChange={onChange}
            >
              Este produto possui variações?
            </Checkbox>
          }
        >
          <Stack>todo</Stack>
        </Disclosure>
      </Container>
      <Footer>
        <Button>Salvar</Button>
      </Footer>
    </>
  );
};

export default useLayout(Page)(AddProduct);
