import Chart from 'react-frappe-charts';
import Router from 'next/router';

import Page from '@web/layouts/adminContent';

import { SubHeader, Container, theming } from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const OrdersOverTime = () => {
  const handleBack = () => Router.back();

  return (
    <>
      <SubHeader
        title="Pedidos ao longo do tempo"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Container title="Total de pedidos" paddingBottom={0}>
        <Chart
          type="line"
          colors={[theming.colors.blue600]}
          axisOptions={{ xAxisMode: 'tick', xIsSeries: 1 }}
          height={250}
          animate={0}
          data={{
            labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            datasets: [{ values: [257, 80, 130, 126, 254, 137, 22, 123] }]
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

export default useLayout(Page)(OrdersOverTime);
