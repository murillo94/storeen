import Page from 'layouts/adminSettingsContent/account';

import {
  Table,
  TableRow,
  TableBodyCell,
  TextTableCell
} from 'components/table';

import useLayout from 'hooks/layout/useLayout';

const headers = ['Plano', 'Produtos', 'Preço'];
const items = [
  {
    name: 'Grátis',
    products: '2 produtos',
    price: 'R$0'
  },
  {
    name: 'Iniciante',
    products: '5 produtos',
    price: 'R$15'
  },
  {
    name: 'Pequeno',
    products: '15 produtos',
    price: 'R$35'
  },
  {
    name: 'Médio',
    products: '20 produtos',
    price: 'R$50'
  },
  {
    name: 'Grande',
    products: 'Ilimitado',
    price: 'R$109'
  }
];

const PlansAccountSettings = () => (
  <Table title="Planos de cobrança" headers={headers}>
    {items.map(item => (
      <TableRow key={item.name}>
        <TableBodyCell>
          <TextTableCell text={item.name} />
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
);

export default useLayout(Page)(PlansAccountSettings);
