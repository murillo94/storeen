import Router from 'next/router';

import Page from 'layouts/adminContent';

import SubHeader from 'components/subHeader';
import Button from 'components/button';

import useLayout from 'utils/layouts/useLayout';

const Categories = () => {
  const handleAddCategorie = () => Router.push('/categories/add');

  return (
    <SubHeader title="Categorias">
      <Button text="Nova categoria" onClick={handleAddCategorie} />
    </SubHeader>
  );
};

export default useLayout(Page)(Categories);
