import Router from 'next/router';

import Page from '../../../layouts/adminContent';

import SubHeader from '@storeen/components/src/components/subHeader';
import Container from '@storeen/components/src/components/container';
import Input from '@storeen/components/src/components/input';
import Select from '@storeen/components/src/components/select';
import Radio from '@storeen/components/src/components/radio';
import Checkbox from '@storeen/components/src/components/checkbox';
import Disclosure from '@storeen/components/src/components/disclosure';
import Footer from '@storeen/components/src/components/footer';
import Button from '@storeen/components/src/components/button';

import usePromotionsAdd from '../../../containers/usePromotionsAdd';

import useLayout from '@storeen/system/src/hooks/layout/useLayout';

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
    state: {
      promotion,
      applicable,
      minimumRequirements,
      promotional,
      schedule
    },
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
        <Disclosure
          content={
            <Checkbox
              id="code"
              name="promotional.hasPromotional"
              text="Habilitar código promocional?"
              checked={promotional.hasPromotional}
              onChange={onChange}
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
        </Disclosure>
      </Container>
      <Container title="Agendar" isForm>
        <Disclosure
          content={
            <Checkbox
              id="schedule-has-schedule"
              name="schedule.hasSchedule"
              text="Agendar promoção?"
              checked={schedule.hasSchedule}
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

export default useLayout(Page)(AddPromotion);
