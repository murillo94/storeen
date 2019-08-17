import Router from 'next/router';

import Page from 'layouts/admin/page';

import Container from 'components/container';
import SubHeader from 'components/subHeader';
import Input from 'components/input';

const inputSearchStyle = {
  marginBottom: 0
};

const AddProduct = () => {
  const handleBack = () => Router.push('/products');

  return (
    <Page>
      <SubHeader title="Novo Produto" hasBack onClick={handleBack} />
      <Container title="Geral">
        <Input labelText="Título do produto" id="title" name="title" />
        <Input labelText="Descrição" id="description" name="description" />
        <Input labelText="Preço" id="price" name="price" />
        <Input
          labelText="Código do produto"
          id="code"
          name="code"
          customStyle={inputSearchStyle}
        />
      </Container>
      <Container title="Imagens">img aqui</Container>
    </Page>
  );
};

export default AddProduct;
