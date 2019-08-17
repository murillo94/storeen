import Router from 'next/router';

import Page from 'layouts/admin/page';

import SubHeader from 'components/subHeader';
import Button from 'components/button';

const Promotions = () => {
  const handleAddPromotion = () => Router.push('/promotions/add');

  return (
    <Page>
      <SubHeader title="Promoções">
        <Button text="Nova promoção" onClick={handleAddPromotion} />
      </SubHeader>
    </Page>
  );
};

export default Promotions;
