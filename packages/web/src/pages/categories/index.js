import Router from 'next/router';

import Page from '../../layouts/adminContent';

import SubHeader from '@storeen/components/src/components/subHeader';
import Button from '@storeen/components/src/components/button';

import useLayout from '@storeen/system/src/hooks/layout/useLayout';

const Categories = () => {
  const handleAddCategorie = () => Router.push('/categories/add');

  return (
    <SubHeader title="Categorias">
      <Button text="Nova categoria" onClick={handleAddCategorie} />
    </SubHeader>
  );
};

export default useLayout(Page)(Categories);
