import React, { useRef } from 'react';

import Router from 'next/router';

import Page from 'layouts/adminContent/page';

import SubHeader from 'components/subHeader';
import Container from 'components/container';
import { InputGroup, Input } from 'components/input';
import Checkbox from 'components/checkbox';
import Collapse from 'components/collapse';
import Footer from 'components/footer';
import Button from 'components/button';

const AddProduct = () => {
  const collapseShippingRef = useRef(null);
  const collapseStockRef = useRef(null);
  const collapseVariationsRef = useRef(null);

  const handleBack = () => Router.push('/products');

  const handleChangeShipping = () => {
    collapseShippingRef.current.classList.toggle('visible');
  };

  const handleChangeStock = () => {
    collapseStockRef.current.classList.toggle('visible');
  };

  const handleChangeVariations = () => {
    collapseVariationsRef.current.classList.toggle('visible');
  };

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
        <Collapse
          content={
            <Checkbox
              id="shipping"
              name="shipping"
              text="Este produto necessita de frete?"
              onChange={handleChangeShipping}
            />
          }
          ref={collapseShippingRef}
        >
          todo
        </Collapse>
      </Container>
      <Container title="Estoque" isForm>
        <Collapse
          content={
            <Checkbox
              id="stock"
              name="stock"
              text="Controlar estoque do produto?"
              onChange={handleChangeStock}
            />
          }
          ref={collapseStockRef}
        >
          todo
        </Collapse>
      </Container>
      <Container title="Variações" isForm>
        <Collapse
          content={
            <Checkbox
              id="variations"
              name="variations"
              text="Este produto possui variações?"
              onChange={handleChangeVariations}
            />
          }
          ref={collapseVariationsRef}
        >
          todo
        </Collapse>
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </Page>
  );
};

export default AddProduct;
