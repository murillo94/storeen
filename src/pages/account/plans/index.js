import Page from 'layouts/adminSettingsContent/account';

import {
  Table,
  TableRow,
  TableBodyCell,
  TextTableCell
} from 'components/table';
import Radio from 'components/radio';
import Container from 'components/container';
import Input from 'components/input';
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
    price: 'R$0'
  },
  {
    name: 'Iniciante',
    value: 'starter',
    products: '5 produtos',
    price: 'R$15'
  },
  {
    name: 'Pequeno',
    value: 'small',
    products: '15 produtos',
    price: 'R$35'
  },
  {
    name: 'Médio',
    value: 'medium',
    products: '20 produtos',
    price: 'R$50'
  },
  {
    name: 'Grande',
    value: 'platinum',
    products: 'Ilimitado',
    price: 'R$109'
  }
];

const PlansAccountSettings = () => {
  const {
    state: { plan, billing },
    actions: { onChange, onClickPlanRow }
  } = useAccountPlans();

  return (
    <>
      <Table title="Planos de cobrança" headers={headers}>
        {items.map(item => (
          <TableRow key={item.name} onClick={() => onClickPlanRow(item.value)}>
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
              <TextTableCell text={item.price} />
            </TableBodyCell>
          </TableRow>
        ))}
      </Table>
      {plan.value && plan.value !== 'free' && (
        <Container title="Informações de faturamento" isForm>
          <Input
            labelText="Número do cartão de crédito"
            id="creditCardNumber"
            name="billing.creditCardNumber"
            value={billing.creditCardNumber}
            onChange={onChange}
          />
          <Input
            labelText="Data de validade"
            id="expirationDate"
            name="billing.expirationDate"
            value={billing.expirationDate}
            onChange={onChange}
          />
          <Input
            labelText="CVC"
            id="cvc"
            name="billing.cvc"
            value={billing.cvc}
            onChange={onChange}
          />
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
