import Router from 'next/router';

import Page from '@web/layouts/adminContent';

import { SubHeader } from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const AverageOrdersOverTime = () => {
  const handleBack = () => Router.push('/reports');

  return (
    <>
      <SubHeader
        title="Média do valor dos pedidos"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
    </>
  );
};

export default useLayout(Page)(AverageOrdersOverTime);
