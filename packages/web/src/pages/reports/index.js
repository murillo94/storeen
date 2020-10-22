import Page from '@web/layouts/adminContent';

import { SubHeader } from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const Reports = () => <SubHeader title="Relatórios" marginBottom={8} />;

export default useLayout(Page)(Reports);
