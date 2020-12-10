import Router from 'next/router';

import Page from '@web/layouts/adminContent';

import {
  SubHeader,
  Stack,
  Container,
  Inline,
  Input,
  Checkbox,
  Disclosure,
  Heading,
  Select,
  Footer,
  Button
} from '@storeen/components';

import useProductsAdd from '@web/containers/useProductsAdd';

import useLayout from '@web/hooks/layout/useLayout';

const variationValueOptions = [
  {
    value: 'Tamanho',
    key: 'product_size'
  },
  {
    value: 'Cor',
    key: 'product_color'
  },
  {
    value: 'Material',
    key: 'product_material'
  },
  {
    value: 'Estilo',
    key: 'product_style'
  },
  {
    value: 'Título',
    key: 'product_title'
  }
];

const AddProduct = () => {
  const {
    state: { product, price, shipping, stock, variations },
    actions: { onChange, onClickAddVariation, onClickRemoveVariation }
  } = useProductsAdd();

  const hasMultipleVariations = variations.options.length > 1;

  const handleBack = () => Router.back();

  return (
    <>
      <SubHeader
        title="Novo Produto"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Stack space="xlarge">
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
                Este produto possui variações, como diferentes tamanhos ou
                cores?
              </Checkbox>
            }
          >
            <Stack>
              <Heading is="h3">Opções</Heading>
              {variations.options.map((option, index) => (
                <Inline key={index}>
                  <Select
                    ariaLabel="Opção"
                    id={`variations.options.${index}.type`}
                    name={`variations.options.${index}.type`}
                    options={variationValueOptions}
                    value={option.type}
                    placeholder="Opção"
                    onChange={onChange}
                  />
                  <Input
                    ariaLabel="Separe valores com vírgula"
                    id={`variations.options.${index}.value`}
                    name={`variations.options.${index}.value`}
                    value={option.value}
                    placeholder="Separe valores com vírgula"
                    onChange={onChange}
                  />
                  {hasMultipleVariations && (
                    <Button
                      appearance="minimal"
                      icon="trash"
                      onClick={() => onClickRemoveVariation(index)}
                    />
                  )}
                </Inline>
              ))}
              <Button appearance="minimal" onClick={onClickAddVariation}>
                Adicionar outra variação
              </Button>
            </Stack>
          </Disclosure>
        </Container>
      </Stack>
      <Footer>
        <Button>Salvar</Button>
      </Footer>
    </>
  );
};

export default useLayout(Page)(AddProduct);
