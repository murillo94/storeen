import Page from '../../../layouts/adminSettingsContent/account';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TextTableCell,
  Switch,
  Radio,
  Container,
  Stack,
  Input,
  Inline,
  Alert,
  Footer,
  Button
} from '@storeen/components';

import useAccountPlans, {
  TYPE,
  PLANS
} from '../../../containers/useAccountPlans';

import useLayout from '../../../hooks/layout/useLayout';

const headers = ['Plano', 'Produtos', 'Preço'];

const PlansAccountSettings = () => {
  const {
    state: { plan, billing, isAnnually },
    actions: { onChange, onClickTypePlan, onClickPlanRow }
  } = useAccountPlans();

  const selectedTypePlan = TYPE[isAnnually];
  const nameSelectedTypePlan = selectedTypePlan === 'annually' ? 'ano' : 'mês';

  return (
    <>
      <Table
        title="Planos de cobrança"
        optionsTitle={
          <Switch
            id="type"
            name="isAnnually"
            value="isAnnually"
            leftText="mensal"
            rightText="anual"
            isChecked={isAnnually}
            onChange={onClickTypePlan}
          />
        }
      >
        <Thead headers={headers} />
        <Tbody>
          {PLANS.map(item => (
            <Tr key={item.name} onClick={() => onClickPlanRow(item)}>
              <Td>
                <Radio
                  id={item.value}
                  name="plan.value"
                  value={item.value}
                  isChecked={plan.value === item.value}
                  onChange={onChange}
                >
                  {item.name}
                </Radio>
              </Td>
              <Td>
                <TextTableCell text={item.products} />
              </Td>
              <Td>
                <TextTableCell
                  text={`${item.price[selectedTypePlan]}/${nameSelectedTypePlan}`}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {plan.value && plan.value !== PLANS[0].value && (
        <Container title="Informações de faturamento">
          <Stack>
            <Alert
              title={`Seu plano: ${plan.name} - ${plan.price}/${nameSelectedTypePlan}`}
              description={`Cobraremos em seu cartão ${plan.price}. Enviaremos um recibo por e-mail sempre que cobrarmos. Você pode alterar seu plano ou cancelar a qualquer momento.`}
              marginBottom={5}
            />
            <Input
              labelText="Número do cartão de crédito"
              id="billing-credit-card-number"
              name="billing.creditCardNumber"
              value={billing.creditCardNumber}
              mask="creditCardNumber"
              onChange={onChange}
            />
            <Inline>
              <Input
                labelText="Data de validade"
                id="billing-expiration-date"
                name="billing.expirationDate"
                value={billing.expirationDate}
                mask="expirationDate"
                onChange={onChange}
              />
              <Input
                labelText="CVC"
                id="billing-cvc"
                name="billing.cvc"
                value={billing.cvc}
                mask="cvc"
                onChange={onChange}
              />
            </Inline>
            <Input
              labelText="Nome no cartão"
              id="billing-name"
              name="billing.name"
              value={billing.name}
              onChange={onChange}
            />
          </Stack>
        </Container>
      )}
      <Footer>
        <Button>Atualizar plano</Button>
      </Footer>
    </>
  );
};

export default useLayout(Page)(PlansAccountSettings);
