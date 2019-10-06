import Page from 'layouts/adminContent';

import SubHeader from 'components/subHeader';

import useLayout from 'utils/layouts/useLayout';

const Orders = () => <SubHeader title="Pedidos" />;

export default useLayout(Page)(Orders);
