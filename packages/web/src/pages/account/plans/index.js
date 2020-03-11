import Page from '../../../layouts/adminSettingsContent/account';

import {
  Table,
  TableRow,
  TableBodyCell,
  TextTableCell
} from '@storeen/components/src/components/table';
import Switch from '@storeen/components/src/components/switch';
import Radio from '@storeen/components/src/components/radio';
import Container from '@storeen/components/src/components/container';
import Input from '@storeen/components/src/components/input';
import { FormGroup } from '@storeen/components/src/components/form';
import Alert from '@storeen/components/src/components/alert';
import Footer from '@storeen/components/src/components/footer';
import Button from '@storeen/components/src/components/button';

import useAccountPlans, {
  TYPE,
  PLANS
} from '../../../containers/useAccountPlans';

import useLayout from '@storeen/system/src/hooks/layout/useLayout';

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
        headers={headers}
        optionsTitle={
          <Switch
            id="type"
            name="isAnnually"
            value="isAnnually"
            leftText="mensal"
            rightText="anual"
            checked={isAnnually}
            onChange={onClickTypePlan}
          />
        }
      >
        {PLANS.map(item => (
          <TableRow key={item.name} onClick={() => onClickPlanRow(item)}>
            <TableBodyCell>
              <Radio
                id={item.value}
                name="plan.value"
                value={item.value}
                text={item.name}
                checked={plan.value === item.value}
                onChange={onChange}
              />
            </TableBodyCell>
            <TableBodyCell>
              <TextTableCell text={item.products} />
            </TableBodyCell>
            <TableBodyCell>
              <TextTableCell
                text={`${item.price[selectedTypePlan]}/${nameSelectedTypePlan}`}
              />
            </TableBodyCell>
          </TableRow>
        ))}
      </Table>
      {plan.value && plan.value !== PLANS[0].value && (
        <Container title="Informações de faturamento" isForm>
          <Alert
            title={`Seu plano: ${plan.name} - ${plan.price}/${nameSelectedTypePlan}`}
            description={`Cobraremos em seu cartão ${plan.price}. Enviaremos um recibo por e-mail sempre que cobrarmos. Você pode alterar seu plano ou cancelar a qualquer momento.`}
          />
          <Input
            labelText="Número do cartão de crédito"
            id="creditCardNumber"
            name="billing.creditCardNumber"
            value={billing.creditCardNumber}
            mask="creditCardNumber"
            onChange={onChange}
          />
          <FormGroup>
            <Input
              labelText="Data de validade"
              id="expirationDate"
              name="billing.expirationDate"
              value={billing.expirationDate}
              mask="expirationDate"
              onChange={onChange}
            />
            <Input
              labelText="CVC"
              id="cvc"
              name="billing.cvc"
              value={billing.cvc}
              mask="cvc"
              onChange={onChange}
            />
          </FormGroup>
          <Input
            labelText="Nome no cartão"
            id="name"
            name="billing.name"
            value={billing.name}
            onChange={onChange}
          />
        </Container>
      )}
      <Footer>
        <Button text="Atualizar plano" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(PlansAccountSettings);
