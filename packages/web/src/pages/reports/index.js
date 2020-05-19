import Page from '../../layouts/adminContent';

import { SubHeader } from '@storeen/components';

import useLayout from '../../hooks/layout/useLayout';

const Reports = () => <SubHeader title="Relatórios" marginBottom={8} />;

export default useLayout(Page)(Reports);
