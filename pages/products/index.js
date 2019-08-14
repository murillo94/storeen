import Page from 'layouts/admin/page';

import Container from 'components/container';
import SubHeader from 'components/subHeader';
import Button from 'components/button';
import Input from 'components/input';

const buttonStyle = {
  margin: '0 10px 0 0'
};

const inputSearchStyle = {
  marginBottom: 0
};

const Products = () => (
  <Page>
    <SubHeader title="Produtos">
      <Button text="Novo produto" customStyle={buttonStyle} />
      <Button text="Filtrar" icon="filter" />
    </SubHeader>
    <Container title="Geral">
      <Input labelText="Título do produto" id="title" name="title" />
      <Input id="product" name="product" placeholder="Camiseta Longa" />
      <Input
        id="search"
        name="search"
        placeholder="Pesquisar"
        icon="search"
        customStyle={inputSearchStyle}
      />
    </Container>
  </Page>
);

export default Products;
