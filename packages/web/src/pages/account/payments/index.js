import Page from '@web/layouts/adminSettingsContent/account';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TextTableCell,
  Button
} from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

import { formatDateToString } from '@web/utils/date';
import { formatBRL } from '@web/utils/currency';

const headers = ['Data', 'Plano', 'Valor', 'Recibo'];
const items = [
  {
    date: formatDateToString('2020-10-15T06:34:00+0000'),
    name: 'Iniciante',
    price: formatBRL(15.0)
  },
  {
    date: formatDateToString('2020-09-20T07:24:03+0000'),
    name: 'Iniciante',
    price: formatBRL(15.0)
  },
  {
    date: formatDateToString('2020-08-03T02:35:05+0000'),
    name: 'Iniciante',
    price: formatBRL(15.0)
  },
  {
    date: formatDateToString('2020-07-10T01:43:10+0000'),
    name: 'Iniciante',
    price: formatBRL(15.0)
  }
];

const PaymentsAccountSettings = () => (
  <Table title="Histórico de pagamentos">
    <Thead headers={headers} />
    <Tbody>
      {items.map(item => (
        <Tr key={item.name}>
          <Td>
            <TextTableCell text={item.date} />
          </Td>
          <Td>
            <TextTableCell text={item.name} />
          </Td>
          <Td>
            <TextTableCell text={item.price} />
          </Td>
          <Td>
            <Button appearance="minimal" icon="download" hasBorder={false} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default useLayout(Page)(PaymentsAccountSettings);
