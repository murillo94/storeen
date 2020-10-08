import Page from '../../../layouts/adminSettingsContent/account';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TextTableCell,
  Button
} from '@storeen/components';

import useLayout from '../../../hooks/layout/useLayout';

const headers = ['Data', 'Plano', 'Valor', 'Recibo'];
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
