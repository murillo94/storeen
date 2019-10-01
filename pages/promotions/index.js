import Router from 'next/router';

import Page from 'layouts/adminContent';

import SubHeader from 'components/subHeader';
import Button from 'components/button';
import {
  Table,
  TableRow,
  TableBodyCell,
  TextTableCell
} from 'components/table';

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
    <Page>
      <SubHeader title="Promoções">
        <Button text="Nova promoção" onClick={handleAddPromotion} />
      </SubHeader>
      <Table headers={headers} hasSearch placeholderSearchSuffix="promoções">
        {items.map(item => (
          <TableRow key={item.name}>
            <TableBodyCell>
              <TextTableCell text={item.name} />
            </TableBodyCell>
            <TableBodyCell>
              <TextTableCell text={item.discount} />
            </TableBodyCell>
            <TableBodyCell>
              <TextTableCell
                text={item.date_expire ? item.date_expire : 'Não expira'}
              />
            </TableBodyCell>
          </TableRow>
        ))}
      </Table>
    </Page>
  );
};

export default Promotions;
