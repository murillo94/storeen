import Page from 'layouts/adminContent';

import SubHeader from 'components/subHeader';

import useLayout from 'utils/layouts/useLayout';

const Reports = () => <SubHeader title="Relatórios" />;

export default useLayout(Page)(Reports);
