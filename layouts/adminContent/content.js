import { useState } from 'react';

import Image from 'components/image';
import { Dropdown, DropdownGroup, DropdownItem } from 'components/dropdown';
import Overlay from 'components/overlay';
import { TabList, Tab } from 'components/tab';
import Header from 'components/header';
import Button from 'components/button';

import { mono0, mono200 } from 'utils/themes/colors';
import { radius800 } from 'utils/themes/radius';

const buttonStyle = {
  border: 'none'
};

const Logo = () => (
  <>
    <div className="desktop-logo">
      <Image
        src={require('images/logo-all-horizontal.svg')}
        width="120px"
        height="100%"
      />
    </div>
    <div className="mobile-logo">
      <Image src={require('images/logo-icon.svg')} width="40%" height="100%" />
    </div>

    <style jsx>
      {`
        div {
          margin: 0 20px 40px;
        }

        .desktop-logo {
          text-align: left;
          display: block;
        }

        .mobile-logo {
          text-align: center;
          display: none;
        }

        @media (max-width: 1124px) {
          .mobile-logo {
            display: block;
          }

          .desktop-logo {
            display: none;
          }
        }
      `}
    </style>
  </>
);

const UserInfo = () => {
  const [visibleUserInfo, setVisibleUserInfo] = useState(false);

  const handleClickUserInfo = () => {
    setVisibleUserInfo(!visibleUserInfo);
  };

  return (
    <Dropdown
      id="user-info"
      visible={visibleUserInfo}
      text="Minha conta"
      onClick={handleClickUserInfo}
    >
      <DropdownGroup id="user-info" hidden={!visibleUserInfo}>
        <DropdownItem href="/account">Meus dados</DropdownItem>
        <DropdownItem href="/">Sair</DropdownItem>
      </DropdownGroup>
    </Dropdown>
  );
};

const Content = ({ children, padding }) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const handleClickMenu = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  return (
    <>
      <div className="container">
        <Overlay
          id="sidebar"
          visible={visibleSidebar}
          showChildren
          removeBodyScroll
          onClick={handleClickMenu}
        >
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
            <TabList>
              <Tab text="Configurações" icon="settings" href="/settings" />
            </TabList>
          </nav>
        </Overlay>
        <main>
          <Header>
            <div className="nav-button">
              <Button
                appearance="minimal"
                icon="menu"
                customStyle={buttonStyle}
                onClick={handleClickMenu}
              />
            </div>
            <Button
              appearance="minimal"
              icon="external-link"
              text="ver minha loja"
              customStyle={buttonStyle}
            />
            <UserInfo />
          </Header>
          <div className="main-container">
            <div className="main-children">{children}</div>
          </div>
        </main>
      </div>

      <style jsx>
        {`
          .container {
            width: 100%;
            min-height: 100%;
          }

          nav {
            background-color: ${mono0};
            border-right: 1px solid ${mono200};
            text-align: center;
            padding: 20px 0 10px;
            width: 180px;
            height: 100vh;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            position: sticky;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-shrink: 0;
          }

          main {
            flex: 1;
          }

          .nav-button {
            display: none;
          }

          .main-container {
            padding: ${padding};
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }

          .main-children {
            margin: 20px auto 0;
            width: 800px;
          }

          @media (max-width: 1124px) {
            nav {
              width: 125px;
            }

            nav :global(ul) :global(li) {
              border-radius: ${radius800};
              margin: 10px;
            }

            nav :global(ul) :global(li) :global(a) {
              flex-direction: column;
            }

            nav :global(ul) :global(li) :global(a) :global(span) {
              margin: 10px 0 0 0 !important;
            }

            .main-container {
              padding: 40px 50px;
            }

            .main-children {
              width: 100%;
              margin: 0 auto;
            }
          }

          @media (max-width: 746px) {
            nav {
              height: 100%;
              position: fixed;
              transform: ${visibleSidebar
                ? 'transform: translate3d(0, 0, 0);'
                : 'translate3d(-125px, 0, 0)'};
              will-change: transform;
              z-index: 2;
            }

            .nav-button {
              display: block;
            }

            .main-container {
              padding: 40px 30px;
            }
          }

          @media (min-width: 746px) {
            .container {
              display: flex;
              flex-grow: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default Content;
