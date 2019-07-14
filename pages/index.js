import Button from '../components/Button';
import Input from '../components/Input';
import Container from '../components/Container';

const Home = () => (
  <>
    <Container title="Produtos">
      <Button text="Novo produto" />
      <Button text="Filtrar" icon="filter" />
      <Input placeholder="Camiseta Longa" />
      <Input labelText="Título do produto" />
    </Container>
  </>
);

export default Home;
