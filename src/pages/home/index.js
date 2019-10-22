import Page from 'layouts/adminContent';

import SubHeader from 'components/subHeader';

import useLayout from 'hooks/layout/useLayout';

const Home = () => <SubHeader title="Início" />;

export default useLayout(Page)(Home);
