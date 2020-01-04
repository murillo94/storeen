import Page from 'layouts/adminSettingsContent/account';

import {
  Table,
  TableRow,
  TableBodyCell,
  TextTableCell
} from 'components/table';
import Switch from 'components/switch';
import Radio from 'components/radio';
import Container from 'components/container';
import Input from 'components/input';
import { FormGroup } from 'components/form';
import Alert from 'components/alert';
import Footer from 'components/footer';
import Button from 'components/button';

import useAccountPlans from 'containers/useAccountPlans';

import useLayout from 'hooks/layout/useLayout';

const headers = ['Plano', 'Produtos', 'Preço'];
const items = [
  {
    name: 'Grátis',
    value: 'free',
    products: '2 produtos',
    price: {
      monthly: 'R$0',
      annually: 'R$0'
    }
  },
  {
    name: 'Iniciante',
    value: 'starter',
    products: '5 produtos',
    price: {
      monthly: 'R$15',
      annually: 'R$7.5'
    }
  },
  {
    name: 'Pequeno',
    value: 'small',
    products: '15 produtos',
    price: {
      monthly: 'R$35',
      annually: 'R$17.5'
    }
  },
  {
    name: 'Médio',
    value: 'medium',
    products: '20 produtos',
    price: {
      monthly: 'R$50',
      annually: 'R$25'
    }
  },
  {
    name: 'Grande',
    value: 'platinum',
    products: 'Ilimitado',
    price: {
      monthly: 'R$109',
      annually: 'R$54.5'
    }
  }
];

const typePlan = {
  false: 'monthly',
  true: 'annually'
};

const PlansAccountSettings = () => {
  const {
    state: { plan, billing },
    actions: { onChange, onClickPlanRow }
  } = useAccountPlans();

  const selectedTypePlan = typePlan[plan.isAnnually];
  const nameSelectedTypePlan = selectedTypePlan === 'annually' ? 'ano' : 'mês';

  return (
    <>
      <Table
        title="Planos de cobrança"
        headers={headers}
        optionsTitle={
          <Switch
            id="type"
            name="plan.isAnnually"
            value="plan.isAnnually"
            leftText="mensal"
            rightText="anual"
            checked={plan.isAnnually}
            onChange={onChange}
          />
        }
      >
        {items.map(item => (
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
      {plan.value && plan.value !== 'free' && (
        <Container title="Informações de faturamento" isForm>
          <Alert
            title={`Seu plano: ${plan.name} - ${plan.price[selectedTypePlan]}/${nameSelectedTypePlan}`}
            description={`Cobraremos em seu cartão ${plan.price[selectedTypePlan]}. Enviaremos um recibo por e-mail sempre que cobrarmos. Você pode alterar seu plano ou cancelar a qualquer momento.`}
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
