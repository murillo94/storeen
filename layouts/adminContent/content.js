import React, { useState } from 'react';

import Image from 'components/image';
import { Dropdown, DropdownGroup, DropdownItem } from 'components/dropdown';
import { TabList, Tab } from 'components/tab';
import Header from 'components/header';
import Button from 'components/button';

import { mono0, mono200 } from 'themes/colors';

const buttonStyle = {
  border: 'none'
};

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
          margin: 0 20px 40px;
        }
      `}
    </style>
  </>
);

const UserInfo = ({ id, hidden }) => (
  <DropdownGroup id={id} hidden={hidden}>
    <DropdownItem href="/settings/profile">Sua conta</DropdownItem>
    <DropdownItem href="/">Sair</DropdownItem>
  </DropdownGroup>
);

const Content = ({ children, padding }) => {
  const [visibleUserInfo, setVisibleUserInfo] = useState(false);

  return (
    <>
      <div className="container">
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
        <main>
          <Header>
            <Button
              appearance="minimal"
              icon="external-link"
              text="ver minha loja"
              customStyle={buttonStyle}
            />
            <Dropdown
              id="user-info"
              visible={visibleUserInfo}
              text="Minha conta"
              onClick={() => setVisibleUserInfo(!visibleUserInfo)}
            >
              <UserInfo id="user-info" hidden={!visibleUserInfo} />
            </Dropdown>
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
            display: flex;
            flex-grow: 1;
          }

          nav {
            background-color: ${mono0};
            border-right: 1px solid ${mono200};
            text-align: center;
            padding: 20px 0 10px;
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

          main {
            flex: 1;
          }

          .main-container {
            padding: ${padding};
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }

          .main-children {
            margin: 20px auto 0;
            min-width: 800px;
          }

          @media (max-width: 991px) {
            .main-children {
              width: 100%;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </>
  );
};

export default Content;
