import Page from '../../layouts/adminContent';

import SubHeader from '@storeen/components/src/components/subHeader';

import useLayout from '@storeen/system/src/hooks/layout/useLayout';

const Reports = () => <SubHeader title="Relatórios" />;

export default useLayout(Page)(Reports);
