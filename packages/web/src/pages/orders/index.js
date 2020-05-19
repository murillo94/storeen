import Page from '../../layouts/adminContent';

import { SubHeader } from '@storeen/components';

import useLayout from '../../hooks/layout/useLayout';

const Orders = () => <SubHeader title="Pedidos" marginBottom={8} />;

export default useLayout(Page)(Orders);
