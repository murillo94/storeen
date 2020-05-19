import Router from 'next/router';

import Page from '../../../layouts/adminContent';

import {
  SubHeader,
  Container,
  Stack,
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
      <SubHeader
        title="Nova Promoção"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Container title="Geral">
        <Stack>
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
            isChecked={promotion.active}
            onChange={onChange}
          >
            Ativar promoção?
          </Checkbox>
        </Stack>
      </Container>
      <Container title="Aplicável">
        <Stack space="small">
          <Radio
            id="all"
            name="applicable"
            value="all"
            isChecked={applicable === 'all'}
            onChange={onChange}
          >
            Todo o pedido
          </Radio>
          <Radio
            id="categorie-specific"
            name="applicable"
            value="categorie-specific"
            isChecked={applicable === 'categorie-specific'}
            onChange={onChange}
          >
            Categorias específicas
          </Radio>
          <Radio
            id="product-specific"
            name="applicable"
            value="product-specific"
            isChecked={applicable === 'product-specific'}
            onChange={onChange}
          >
            Produtos específicas
          </Radio>
        </Stack>
      </Container>
      <Container title="Requisitos mínimos">
        <Stack space="small">
          <Radio
            id="total-value-minimum"
            name="minimumRequirements"
            value="total-value-minimum"
            isChecked={minimumRequirements === 'total-value-minimum'}
            onChange={onChange}
          >
            Valor total do pedido mínimo
          </Radio>
          <Radio
            id="quantity-itens-minimum"
            name="minimumRequirements"
            value="quantity-itens-minimum"
            isChecked={minimumRequirements === 'quantity-itens-minimum'}
            onChange={onChange}
          >
            Quantidade de itens do pedido mínimo
          </Radio>
        </Stack>
      </Container>
      <Container title="Código promocional">
        <Disclosure
          content={
            <Checkbox
              id="code"
              name="promotional.hasPromotional"
              isChecked={promotional.hasPromotional}
              onChange={onChange}
            >
              Habilitar código promocional?
            </Checkbox>
          }
          action="onChange"
        >
          <Stack>
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
              isChecked={promotional.uniqueCode}
              onChange={onChange}
            >
              Cupom de uso único por CPF?
            </Checkbox>
          </Stack>
        </Disclosure>
      </Container>
      <Container title="Agendar">
        <Disclosure
          content={
            <Checkbox
              id="schedule-has-schedule"
              name="schedule.hasSchedule"
              isChecked={schedule.hasSchedule}
              onChange={onChange}
            >
              Agendar promoção?
            </Checkbox>
          }
          action="onChange"
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

export default useLayout(Page)(AddPromotion);
