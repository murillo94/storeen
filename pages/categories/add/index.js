import Router from 'next/router';

import Page from 'layouts/adminContent/page';

import SubHeader from 'components/subHeader';

const AddCategorie = () => {
  const handleBack = () => Router.push('/categories');

  return (
    <Page>
      <SubHeader title="Nova categoria" hasBack onClick={handleBack} />
    </Page>
  );
};

export default AddCategorie;
