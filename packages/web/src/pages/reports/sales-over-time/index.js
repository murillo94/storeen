import Chart from 'react-frappe-charts';
import Router from 'next/router';

import Page from '@web/layouts/adminContent';

import { SubHeader, Container, theming } from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const SalesOverTime = () => {
  const handleBack = () => Router.back();

  return (
    <>
      <SubHeader
        title="Vendas ao longo do tempo"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Container title="Total de vendas" paddingBottom={0}>
        <Chart
          type="line"
          colors={[theming.colors.blue600]}
          axisOptions={{ xAxisMode: 'tick', xIsSeries: 1 }}
          height={250}
          animate={0}
          data={{
            labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }]
          }}
          lineOptions={{
            spline: 1,
            hideDots: 1
          }}
        />
      </Container>
    </>
  );
};

export default useLayout(Page)(SalesOverTime);
