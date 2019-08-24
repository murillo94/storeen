import React, { useState } from 'react';

import { Dropdown, DropdownGroup, DropdownItem } from 'components/dropdown';
import Menu from 'components/menu';
import Header from 'components/header';
import Button from 'components/button';
import { TabList, Tab } from 'components/tab';

const buttonStyle = {
  border: 'none'
};

const UserInfo = ({ id, hidden }) => (
  <DropdownGroup id={id} hidden={hidden}>
    <DropdownItem href="/settings">Configurações</DropdownItem>
    <DropdownItem href="/">Sair</DropdownItem>
  </DropdownGroup>
);

const Content = ({ children, sidebar, padding }) => {
  const [visibleUserInfo, setVisibleUserInfo] = useState(false);
  const hasSidebar = !!sidebar.length;

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
            <div className={`main-children ${hasSidebar && 'sidebar'}`}>
              {hasSidebar && (
                <TabList>
                  {sidebar.map(item => (
                    <Tab
                      key={item.name}
                      text={item.name}
                      icon={item.icon}
                      href={item.href}
                    />
                  ))}
                </TabList>
              )}
              {children}
            </div>
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
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }

          .main-children {
            margin: 20px auto 0;
            min-width: 800px;
          }

          .sidebar {
            display: flex;
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
