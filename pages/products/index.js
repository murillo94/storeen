import Router from 'next/router';

import Page from 'layouts/admin/page';

import SubHeader from 'components/subHeader';
import Button from 'components/button';

const buttonStyle = {
  margin: '0 10px 0 0'
};

const Products = () => {
  const handleAddProduct = () => Router.push('/products/add');

  return (
    <Page>
      <SubHeader title="Produtos">
        <Button
          text="Novo produto"
          customStyle={buttonStyle}
          onClick={handleAddProduct}
        />
      </SubHeader>
    </Page>
  );
};

export default Products;
