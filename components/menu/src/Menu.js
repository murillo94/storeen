import Image from '../../image';
import { TabList, Tab } from '../../tab';

const Logo = () => (
  <>
    <div>
      <Image
        src="/static/images/logo-all-horizontal.svg"
        width="120px"
        height="100%"
      />
    </div>

    <style jsx>
      {`
        div {
          text-align: left;
          margin: 20px 20px 40px;
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
          <Tab text="Início" icon="home" href="/home" />
          <Tab text="Relatórios" icon="bar-chart" href="/reports" />
          <Tab text="Pedidos" icon="clipboard" href="/orders" />
          <Tab text="Produtos" icon="box" href="/products" />
          <Tab text="Promoções" icon="dollar-sign" href="/promotions" />
          <Tab text="Categorias" icon="tag" href="/categories" />
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
