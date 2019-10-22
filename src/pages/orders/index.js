import Page from 'layouts/adminContent';

import SubHeader from 'components/subHeader';

import useLayout from 'hooks/layout/useLayout';

const Orders = () => <SubHeader title="Pedidos" />;

export default useLayout(Page)(Orders);
