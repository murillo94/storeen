import Router from 'next/router';

import Page from '@web/layouts/adminContent';

import { SubHeader } from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const OrdersOverTime = () => {
  const handleBack = () => Router.back();

  return (
    <SubHeader
      title="Total de pedido"
      hasBack
      onClick={handleBack}
      marginBottom={8}
    />
  );
};

export default useLayout(Page)(OrdersOverTime);
