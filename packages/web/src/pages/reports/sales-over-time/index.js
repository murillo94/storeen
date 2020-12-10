import Router from 'next/router';

import Page from '@web/layouts/adminContent';

import { SubHeader } from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const SalesOverTime = () => {
  const handleBack = () => Router.push('/reports');

  return (
    <SubHeader
      title="Venda geral"
      hasBack
      onClick={handleBack}
      marginBottom={8}
    />
  );
};

export default useLayout(Page)(SalesOverTime);
