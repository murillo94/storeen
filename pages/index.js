import Button from '../components/Button';
import Input from '../components/Input';
import Container from '../components/Container';

const Home = () => (
  <>
    <Container title="Produtos">
      <Button text="Novo produto" />
      <Button text="Filtrar" icon="filter" />
      <Input id="product" name="product" placeholder="Camiseta Longa" />
      <Input labelText="Título do produto" id="title" name="title" />
      <Input id="search" name="search" placeholder="Pesquisar" icon="search" />
    </Container>
  </>
);

export default Home;
