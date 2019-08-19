import Router from 'next/router';

import Page from 'layouts/admin/page';

import SubHeader from 'components/subHeader';
import Button from 'components/button';
import { Table } from 'components/table';

const Products = () => {
  const handleAddProduct = () => Router.push('/products/add');

  return (
    <Page>
      <SubHeader title="Produtos">
        <Button text="Novo produto" onClick={handleAddProduct} />
      </SubHeader>
      <Table />
    </Page>
  );
};

export default Products;
