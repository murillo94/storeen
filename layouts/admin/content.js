import React, { useState } from 'react';

import Menu from 'components/menu';
import Header from 'components/header';
import Button from 'components/button';
import { Dropdown, DropdownGroup, DropdownItem } from 'components/dropdown';

const buttonStyle = {
  border: 'none'
};

const UserInfo = ({ id, hidden }) => (
  <DropdownGroup id={id} hidden={hidden}>
    <DropdownItem href="/settings">Configurações</DropdownItem>
    <DropdownItem href="/">Sair</DropdownItem>
  </DropdownGroup>
);

const Content = ({ children, padding = '30px' }) => {
  const [visibleUserInfo, setVisibleUserInfo] = useState(false);

  return (
    <>
      <div className="container">
        <Menu />
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

          main {
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
