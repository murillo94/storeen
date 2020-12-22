import Router from 'next/router';

import Page from '@app/layouts/adminContent';

import {
  SubHeader,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TextTableCell
} from '@storeen/components';

import useLayout from '@app/hooks/layout/useLayout';

import { formatDate } from '@app/utils/date';
import { formatBRL } from '@app/utils/currency';

const headers = ['Nome', 'Desconto', 'Data de expiração'];
const items = [
  {
    name: 'Natal',
    discount: formatBRL(90.6),
    date_expire: formatDate(null)
  },
  {
    name: 'Páscoa',
    discount: formatBRL(30.5),
    date_expire: formatDate(null)
  },
  {
    name: 'Ano novo',
    discount: formatBRL(59.0),
    date_expire: formatDate('2019-12-31T05:24:00+0000')
  },
  {
    name: 'Dia das mães',
    discount: formatBRL(89.0),
    date_expire: formatDate('2019-05-05T02:39:00+0000')
  }
];

const Promotions = () => {
  const handleAddPromotion = () => Router.push('/promotions/add');

  return (
    <>
      <SubHeader title="Promoções" marginBottom={8}>
        <Button onClick={handleAddPromotion}>Nova promoção</Button>
      </SubHeader>
      <Table
        headers={headers}
        hasSearch
        ariaLabel="Promoções"
        placeholderSearchSuffix="promoções"
      >
        <Thead headers={headers} />
        <Tbody>
          {items.map(item => (
            <Tr key={item.name}>
              <Td>
                <TextTableCell text={item.name} />
              </Td>
              <Td>
                <TextTableCell text={item.discount} />
              </Td>
              <Td>
                <TextTableCell
                  text={item.date_expire ? item.date_expire : 'Não expira'}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default useLayout(Page)(Promotions);
