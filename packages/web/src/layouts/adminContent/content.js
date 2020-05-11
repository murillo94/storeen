import { useState } from 'react';

import {
  Image,
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
  Box,
  Menu,
  MenuGroup,
  MenuItem,
  SideSheet,
  Header,
  Button
} from '@storeen/components';

const Logo = () => (
  <>
    <Image
      src={require('../../public/static/images/logo-all-horizontal.svg')}
      alt="Storeen logo com nome horizontal"
      width="120px"
      height="auto"
      marginBottom={9}
      marginX={4}
      sx={{
        textAlign: 'left',
        display: ['none', '', '', 'block']
      }}
    />
    <Image
      src={require('../../public/static/images/logo-icon.svg')}
      alt="Storeen logo icone"
      width="34px"
      height="34px"
      marginBottom={9}
      marginX="auto"
      sx={{
        display: ['block', '', '', 'none']
      }}
    />
  </>
);

const Nav = () => {
  const tabMarginY = { _: 2, large: 1 };
  const tabStyle = {
    a: {
      flexDirection: ['column', '', '', 'row'],
      span: {
        marginTop: [2, '', '', 0],
        marginLeft: [0, '', '', 2]
      }
    }
  };

  return (
    <>
      <Box>
        <Logo />
        <SideNavigationGroup>
          <SideNavigationItem
            icon="home"
            href="/home"
            marginY={tabMarginY}
            sx={tabStyle}
          >
            Início
          </SideNavigationItem>
          <SideNavigationItem
            icon="bar-chart"
            href="/reports"
            marginY={tabMarginY}
            sx={tabStyle}
          >
            Relatórios
          </SideNavigationItem>
          <SideNavigationItem
            icon="clipboard"
            href="/orders"
            marginY={tabMarginY}
            sx={tabStyle}
          >
            Pedidos
          </SideNavigationItem>
          <SideNavigationItem
            icon="box"
            href="/products"
            marginY={tabMarginY}
            sx={tabStyle}
          >
            Produtos
          </SideNavigationItem>
          <SideNavigationItem
            icon="dollar-sign"
            href="/promotions"
            marginY={tabMarginY}
            sx={tabStyle}
          >
            Promoções
          </SideNavigationItem>
          <SideNavigationItem
            icon="tag"
            href="/categories"
            marginY={tabMarginY}
            sx={tabStyle}
          >
            Categorias
          </SideNavigationItem>
        </SideNavigationGroup>
      </Box>
      <SideNavigationGroup>
        <SideNavigationItem
          icon="settings"
          href="/settings"
          marginY={tabMarginY}
          sx={tabStyle}
        >
          Configurações
        </SideNavigationItem>
      </SideNavigationGroup>
    </>
  );
};

const UserInfo = () => {
  const [visibleUserInfo, setVisibleUserInfo] = useState(false);

  const handleClickUserInfo = () => {
    setVisibleUserInfo(!visibleUserInfo);
  };

  return (
    <Menu
      id="user-info"
      isVisible={visibleUserInfo}
      text="Minha conta"
      onClick={handleClickUserInfo}
    >
      <MenuGroup id="user-info" isVisible={!visibleUserInfo}>
        <MenuItem href="/account">Meus dados</MenuItem>
        <MenuItem href="/">Sair</MenuItem>
      </MenuGroup>
    </Menu>
  );
};

const Content = ({ children }) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const handleClickMenu = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100%',
        display: ['block', 'flex'],
        flexGrow: [0, 1]
      }}
    >
      <SideNavigation
        paddingTop={4}
        paddingBottom={2}
        sx={{
          backgroundColor: 'gray0',
          borderRightWidth: '1px',
          borderRightStyle: 'solid',
          borderRightColor: 'gray200',
          textAlign: 'center',
          width: ['125px', '', '', '180px'],
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0,
          display: ['none', '', 'flex'],
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexShrink: 0
        }}
      >
        <Nav />
      </SideNavigation>
      <Box as="main" sx={{ flex: 1 }}>
        <Header>
          <Button
            appearance="minimal"
            icon="menu"
            hasBorder={false}
            onClick={handleClickMenu}
            sx={{
              display: ['inline-flex', '', 'none']
            }}
          />
          <Button appearance="minimal" icon="external-link" hasBorder={false}>
            ver minha loja
          </Button>
          <UserInfo />
        </Header>
        <Box
          paddingY={{ _: 8, large: 6 }}
          paddingX={{ _: 6, small: 9 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}
        >
          <Box
            marginTop={{ _: 0, large: 4 }}
            marginBottom={0}
            marginX="auto"
            sx={{
              width: ['100%', '', '', '800px']
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
      <SideSheet
        isVisible={visibleSidebar}
        width="180px"
        onClose={handleClickMenu}
      >
        <Nav />
      </SideSheet>
    </Box>
  );
};

export default Content;
