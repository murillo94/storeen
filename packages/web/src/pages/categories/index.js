import Router from 'next/router';

import Page from '../../layouts/adminContent';

import { SubHeader, Button } from '@storeen/components';

import useLayout from '../../hooks/layout/useLayout';

const Categories = () => {
  const handleAddCategorie = () => Router.push('/categories/add');

  return (
    <SubHeader title="Categorias">
      <Button text="Nova categoria" onClick={handleAddCategorie} />
    </SubHeader>
  );
};

export default useLayout(Page)(Categories);
