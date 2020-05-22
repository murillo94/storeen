import Router from 'next/router';

import Page from '../../layouts/adminContent';

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

import useLayout from '../../hooks/layout/useLayout';

const headers = ['Nome', 'Desconto', 'Data de expiração'];
const items = [
  {
    name: 'Natal',
    discount: 90.6,
    date_expire: null
  },
  {
    name: 'Páscoa',
    discount: 30.5,
    date_expire: null
  },
  {
    name: 'Ano novo',
    discount: 59.0,
    date_expire: '31/12/2019'
  },
  {
    name: 'Dia das mães',
    discount: 89.0,
    date_expire: '05/05/2019'
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
