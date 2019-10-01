import Router from 'next/router';

import Page from 'layouts/adminContent';

import SubHeader from 'components/subHeader';
import Button from 'components/button';

const Categories = () => {
  const handleAddCategorie = () => Router.push('/categories/add');

  return (
    <Page>
      <SubHeader title="Categorias">
        <Button text="Nova categoria" onClick={handleAddCategorie} />
      </SubHeader>
    </Page>
  );
};

export default Categories;
