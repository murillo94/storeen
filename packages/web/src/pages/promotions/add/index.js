import Router from 'next/router';

import Page from '../../../layouts/adminContent';

import {
  SubHeader,
  Container,
  Input,
  Select,
  Radio,
  Checkbox,
  Disclosure,
  Footer,
  Button
} from '@storeen/components';

import usePromotionsAdd from '../../../containers/usePromotionsAdd';

import useLayout from '../../../hooks/layout/useLayout';

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
          checked={promotion.active}
          onChange={onChange}
        >
          Ativar promoção?
        </Checkbox>
      </Container>
      <Container title="Aplicável" isForm>
        <Radio
          id="all"
          name="applicable"
          value="all"
          checked={applicable === 'all'}
          onChange={onChange}
        >
          Todo o pedido
        </Radio>
        <Radio
          id="categorie-specific"
          name="applicable"
          value="categorie-specific"
          checked={applicable === 'categorie-specific'}
          onChange={onChange}
        >
          Categorias específicas
        </Radio>
        <Radio
          id="product-specific"
          name="applicable"
          value="product-specific"
          checked={applicable === 'product-specific'}
          onChange={onChange}
        >
          Produtos específicas
        </Radio>
      </Container>
      <Container title="Requisitos mínimos" isForm>
        <Radio
          id="total-value-minimum"
          name="minimumRequirements"
          value="total-value-minimum"
          checked={minimumRequirements === 'total-value-minimum'}
          onChange={onChange}
        >
          Valor total do pedido mínimo
        </Radio>
        <Radio
          id="quantity-itens-minimum"
          name="minimumRequirements"
          value="quantity-itens-minimum"
          checked={minimumRequirements === 'quantity-itens-minimum'}
          onChange={onChange}
        >
          Quantidade de itens do pedido mínimo
        </Radio>
      </Container>
      <Container title="Código promocional" isForm>
        <Disclosure
          content={
            <Checkbox
              id="code"
              name="promotional.hasPromotional"
              checked={promotional.hasPromotional}
              onChange={onChange}
            >
              Habilitar código promocional?
            </Checkbox>
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
            checked={promotional.uniqueCode}
            onChange={onChange}
          >
            Cupom de uso único por CPF?
          </Checkbox>
        </Disclosure>
      </Container>
      <Container title="Agendar" isForm>
        <Disclosure
          content={
            <Checkbox
              id="schedule-has-schedule"
              name="schedule.hasSchedule"
              checked={schedule.hasSchedule}
              onChange={onChange}
            >
              Agendar promoção?
            </Checkbox>
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
