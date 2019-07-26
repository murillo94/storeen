import React, { useState } from 'react';

import Menu from '../components/menu';
import Header from '../components/header';
import Button from '../components/button';
import { Dropdown, DropdownGroup, DropdownItem } from '../components/dropdown';

const UserInfo = ({ id, hidden }) => (
  <DropdownGroup id={id} hidden={hidden}>
    <DropdownItem>Configurações</DropdownItem>
    <DropdownItem>Sair</DropdownItem>
  </DropdownGroup>
);

const Content = ({ children, title, padding = '30px' }) => {
  const [visibleUserInfo, setVisibleUserInfo] = useState(false);

  return (
    <>
      <div className="container">
        <Menu />
        <main>
          <Header title={title}>
            <Button text="ver minha loja" border="none" icon="external-link" />
            <Dropdown
              id="user-info"
              visible={visibleUserInfo}
              content={<UserInfo id="user-info" hidden={!visibleUserInfo} />}
              onClick={() => setVisibleUserInfo(!visibleUserInfo)}
            >
              Minha conta
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

          main {
            background-color: white;
            flex: 1;
          }

          .main-container {
            padding: ${padding};
          }

          .main-children {
            width: 800px;
            margin: 20px auto 0;
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
