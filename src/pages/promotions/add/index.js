import Router from 'next/router';

import Page from 'layouts/adminContent';

import usePromotionsAdd from 'containers/usePromotionsAdd';

import SubHeader from 'components/subHeader';
import Container from 'components/container';
import Input from 'components/input';
import Select from 'components/select';
import Radio from 'components/radio';
import Checkbox from 'components/checkbox';
import Collapse from 'components/collapse';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'hooks/layout/useLayout';

const promotionTypeOptions = [
  {
    value: 'valor fixo'
  },
  {
    value: 'porcentagem'
  },
  {
    value: 'frete grátis'
  },
  {
    value: 'compre x leve y'
  }
];

const AddPromotion = () => {
  const {
    state: { promotion, applicable, minimumRequirements, promotional },
    actions: { onChange }
  } = usePromotionsAdd();

  const handleBack = () => Router.push('/promotions');

  return (
    <>
      <SubHeader title="Nova Promoção" hasBack onClick={handleBack} />
      <Container title="Geral" isForm>
        <Input
          labelText="Título da promoção"
          id="promotion-title"
          name="promotion.title"
          value={promotion.title}
          onChange={onChange}
        />
        <Select
          labelText="Tipo"
          id="promotion-type"
          name="promotion.type"
          options={promotionTypeOptions}
          value={promotion.type}
          onChange={onChange}
        />
        <Input
          labelText="Valor do desconto"
          id="promotion-value"
          name="promotion.value"
          value={promotion.value}
          mask="money"
          onChange={onChange}
        />
        <Checkbox
          id="promotion-active"
          name="promotion.active"
          text="Ativar promoção?"
          checked={promotion.active}
          onChange={onChange}
        />
      </Container>
      <Container title="Aplicável" isForm>
        <Radio
          id="all"
          name="applicable"
          value="all"
          text="Todo o pedido"
          checked={applicable === 'all'}
          onChange={onChange}
        />
        <Radio
          id="categorie-specific"
          name="applicable"
          value="categorie-specific"
          text="Categorias específicas"
          checked={applicable === 'categorie-specific'}
          onChange={onChange}
        />
        <Radio
          id="product-specific"
          name="applicable"
          value="product-specific"
          text="Produtos específicas"
          checked={applicable === 'product-specific'}
          onChange={onChange}
        />
      </Container>
      <Container title="Requisitos mínimos" isForm>
        <Radio
          id="total-value-minimum"
          name="minimumRequirements"
          value="total-value-minimum"
          text="Valor total do pedido mínimo"
          checked={minimumRequirements === 'total-value-minimum'}
          onChange={onChange}
        />
        <Radio
          id="quantity-itens-minimum"
          name="minimumRequirements"
          value="quantity-itens-minimum"
          text="Quantidade de itens do pedido mínimo"
          checked={minimumRequirements === 'quantity-itens-minimum'}
          onChange={onChange}
        />
      </Container>
      <Container title="Código promocional" isForm>
        <Collapse
          content={
            <Checkbox
              id="code"
              name="code"
              text="Habilitar código promocional?"
            />
          }
          action="onChange"
        >
          <Input
            labelText="Código da promoção"
            id="promotional-code"
            name="promotional.code"
            value={promotional.code}
            onChange={onChange}
          />
          <Checkbox
            id="promotional-unique-code"
            name="promotional.uniqueCode"
            text="Cupom de uso único por CPF?"
            checked={promotional.uniqueCode}
            onChange={onChange}
          />
        </Collapse>
      </Container>
      <Container title="Agendar" isForm>
        <Collapse
          content={
            <Checkbox id="schedule" name="schedule" text="Agendar promoção?" />
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

export default useLayout(Page)(AddPromotion);
