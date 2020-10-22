import Page from '@web/layouts/adminContent';

import { SubHeader } from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const Home = () => <SubHeader title="Início" marginBottom={8} />;

export default useLayout(Page)(Home);
