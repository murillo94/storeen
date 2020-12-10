import Chart from 'react-frappe-charts';
import Router from 'next/router';

import Page from '@web/layouts/adminContent';

import { SubHeader, Container, theming } from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const AverageOrdersOverTime = () => {
  const handleBack = () => Router.back();

  return (
    <>
      <SubHeader
        title="Valor médio do pedido ao longo do tempo"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Container title="Valor médio do pedido" paddingBottom={0}>
        <Chart
          type="line"
          colors={[theming.colors.blue600]}
          axisOptions={{ xAxisMode: 'tick', xIsSeries: 1 }}
          height={250}
          animate={0}
          data={{
            labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            datasets: [{ values: [112, 2, 12, 228, 23, 15, 106, 12] }]
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

export default useLayout(Page)(AverageOrdersOverTime);
