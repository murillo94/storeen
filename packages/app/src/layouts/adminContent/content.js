import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
  Image,
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
  Box,
  Menu,
  MenuGroup,
  MenuItem,
  MenuItemLink,
  Header,
  Button,
  SideNavigationItemLink
} from '@storeen/components';

import { matchUrl } from '@app/utils/url';

const SideSheet = dynamic(
  () => import('@storeen/components').then(mod => mod.SideSheet),
  { ssr: false }
);

const Logo = () => (
  <>
    <Image
      src={require('@app/public/images/logo-all-horizontal.svg')}
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
      src={require('@app/public/images/logo-icon.svg')}
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
  const { pathname } = useRouter();

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
            isActive={matchUrl(pathname, 'home')}
            marginY={tabMarginY}
            sx={tabStyle}
          >
            <Link href="/home" passHref>
              <SideNavigationItemLink icon="home">
                Início
              </SideNavigationItemLink>
            </Link>
          </SideNavigationItem>
          <SideNavigationItem
            isActive={matchUrl(pathname, 'reports')}
            marginY={tabMarginY}
            sx={tabStyle}
          >
            <Link href="/reports" passHref>
              <SideNavigationItemLink icon="bar-chart">
                Relatórios
              </SideNavigationItemLink>
            </Link>
          </SideNavigationItem>
          <SideNavigationItem
            isActive={matchUrl(pathname, 'orders')}
            marginY={tabMarginY}
            sx={tabStyle}
          >
            <Link href="/orders" passHref>
              <SideNavigationItemLink icon="clipboard">
                Pedidos
              </SideNavigationItemLink>
            </Link>
          </SideNavigationItem>
          <SideNavigationItem
            isActive={matchUrl(pathname, 'products')}
            marginY={tabMarginY}
            sx={tabStyle}
          >
            <Link href="/products" passHref>
              <SideNavigationItemLink icon="box">
                Produtos
              </SideNavigationItemLink>
            </Link>
          </SideNavigationItem>
          <SideNavigationItem
            isActive={matchUrl(pathname, 'promotions')}
            marginY={tabMarginY}
            sx={tabStyle}
          >
            <Link href="/promotions" passHref>
              <SideNavigationItemLink icon="dollar-sign">
                Promoções
              </SideNavigationItemLink>
            </Link>
          </SideNavigationItem>
          <SideNavigationItem
            isActive={matchUrl(pathname, 'categories')}
            marginY={tabMarginY}
            sx={tabStyle}
          >
            <Link href="/categories" passHref>
              <SideNavigationItemLink icon="tag">
                Categorias
              </SideNavigationItemLink>
            </Link>
          </SideNavigationItem>
        </SideNavigationGroup>
      </Box>
      <SideNavigationGroup>
        <SideNavigationItem
          isActive={matchUrl(pathname, 'settings')}
          marginY={tabMarginY}
          sx={tabStyle}
        >
          <Link href="/settings" passHref>
            <SideNavigationItemLink icon="settings">
              Configurações
            </SideNavigationItemLink>
          </Link>
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
        <MenuItem>
          <Link href="/account" passHref>
            <MenuItemLink>Meus dados</MenuItemLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/" passHref>
            <MenuItemLink>Sair</MenuItemLink>
          </Link>
        </MenuItem>
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
          borderRightColor: 'gray400',
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
              width: ['100%', '', '', '760px', '800px']
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
