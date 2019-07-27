import Image from '../../image';
import { TabList, Tab } from '../../tab';

const Logo = () => (
  <>
    <div>
      <Image src="/static/images/favicon.png" width={35} height={35} />
    </div>

    <style jsx>
      {`
        div {
          margin: 20px 20px 50px;
        }
      `}
    </style>
  </>
);

const Menu = () => (
  <>
    <nav>
      <div>
        <Logo />
        <TabList>
          <Tab text="Início" icon="home" />
          <Tab text="Relatórios" icon="bar-chart" />
          <Tab text="Pedidos" icon="clipboard" />
          <Tab text="Produtos" icon="box" />
          <Tab text="Promoções" icon="dollar-sign" />
          <Tab text="Categorias" icon="tag" />
        </TabList>
      </div>
    </nav>

    <style jsx>
      {`
        nav {
          background-color: white;
          border-right: 1px solid gray;
          text-align: center;
          width: 180px;
          height: 100vh;
          overflow: auto;
          position: sticky;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
        }
      `}
    </style>
  </>
);

export default Menu;
