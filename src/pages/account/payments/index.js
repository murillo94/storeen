import Page from 'layouts/adminSettingsContent/account';

import {
  Table,
  TableRow,
  TableBodyCell,
  TextTableCell
} from 'components/table';
import Button from 'components/button';

import useLayout from 'hooks/layout/useLayout';

const headers = ['Data do pagamento', 'Plano', 'Valor', 'Recibo'];
const items = [
  {
    date: 'Qui, 10 Jul 2019',
    name: 'Iniciante',
    price: 'R$15'
  },
  {
    date: 'Seg, 15 Ago 2019',
    name: 'Iniciante',
    price: 'R$15'
  },
  {
    date: 'Sex, 06 Set 2019',
    name: 'Iniciante',
    price: 'R$15'
  },
  {
    date: 'Ter, 29 Out 2019',
    name: 'Iniciante',
    price: 'R$15'
  }
];

const PaymentsAccountSettings = () => (
  <Table title="Histórico de pagamentos" headers={headers}>
    {items.map(item => (
      <TableRow key={item.name}>
        <TableBodyCell>
          <TextTableCell text={item.date} />
        </TableBodyCell>
        <TableBodyCell>
          <TextTableCell text={item.name} />
        </TableBodyCell>
        <TableBodyCell>
          <TextTableCell text={item.price} />
        </TableBodyCell>
        <TableBodyCell>
          <Button appearance="minimal" icon="download" hasBorder={false} />
        </TableBodyCell>
      </TableRow>
    ))}
  </Table>
);

export default useLayout(Page)(PaymentsAccountSettings);
