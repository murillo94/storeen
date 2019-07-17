import Container from '../components/container';
import SubHeader from '../components/subHeader';
import Button from '../components/button';
import Input from '../components/input';

const Home = () => (
  <div>
    <SubHeader title="Produtos">
      <Button text="Novo produto" />
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
        marginBottom={0}
      />
    </Container>

    <style jsx>
      {`
        div {
          width: 800px;
          margin: 50px auto;
        }
      `}
    </style>
  </div>
);

export default Home;
