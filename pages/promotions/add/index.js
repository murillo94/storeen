import Router from 'next/router';

import Page from 'layouts/admin/page';

import SubHeader from 'components/subHeader';

const AddPromotion = () => {
  const handleBack = () => Router.push('/promotions');

  return (
    <Page>
      <SubHeader title="Nova Promoção" hasBack onClick={handleBack} />
    </Page>
  );
};

export default AddPromotion;
