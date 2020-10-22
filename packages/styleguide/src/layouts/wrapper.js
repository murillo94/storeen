import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
  Image,
  Box,
  Heading,
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
  SideNavigationItemLink,
  Button
} from '@storeen/components';

/* eslint-disable-next-line import/no-unresolved */
import { frontMatter as docsPages } from '../pages/docs/*.mdx';

const headingStyle = {
  fontSize: 0,
  textAlign: 'left'
};

const SideSheet = dynamic(
  () => import('@storeen/components').then(mod => mod.SideSheet),
  { ssr: false }
);

const Logo = () => (
  <>
    <Image
      src={require('@styleguide/public/images/logo-all-horizontal.svg')}
      alt="Storeen logo com nome horizontal"
      width="120px"
      height="auto"
      marginBottom={4}
      marginX={4}
    />
  </>
);

const Hr = () => (
  <Box
    as="hr"
    marginTop={0}
    marginX={0}
    marginBottom={1}
    sx={{
      width: '100%',
      border: 'none',
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'gray300'
    }}
  />
);

const Nav = () => {
  const { pathname } = useRouter();

  const pinnedPages = docsPages
    .filter(page => page.pinned)
    .sort((a, b) => a.order - b.order);
  const componentPages = docsPages.filter(page => page.component);

  return (
    <>
      <Logo />
      <Heading marginTop={3} marginBottom={2} marginX={3} sx={headingStyle}>
        Overview
      </Heading>
      <SideNavigationGroup>
        {pinnedPages.map(page => (
          <SideNavigationItem key={page.href} isActive={pathname === page.href}>
            <Link href={page.href} passHref>
              <SideNavigationItemLink>{page.title}</SideNavigationItemLink>
            </Link>
          </SideNavigationItem>
        ))}
      </SideNavigationGroup>
      <Hr />
      <Heading marginTop={3} marginBottom={2} marginX={3} sx={headingStyle}>
        Components
      </Heading>
      <SideNavigationGroup>
        {componentPages.map(page => (
          <SideNavigationItem key={page.href} isActive={pathname === page.href}>
            <Link href={page.href} passHref>
              <SideNavigationItemLink>{page.title}</SideNavigationItemLink>
            </Link>
          </SideNavigationItem>
        ))}
      </SideNavigationGroup>
      <Hr />
      <Heading marginTop={3} marginBottom={2} marginX={3} sx={headingStyle}>
        Github links
      </Heading>
      <SideNavigationGroup>
        <SideNavigationItem>
          <SideNavigationItemLink
            href="https://github.com/murillo94/storeen/tree/master/packages/components"
            isExternal
          >
            Storeen components
          </SideNavigationItemLink>
        </SideNavigationItem>
        <SideNavigationItem>
          <SideNavigationItemLink
            href="https://github.com/murillo94/storeen/tree/master/packages/styleguide"
            isExternal
          >
            Storeen styleguide
          </SideNavigationItemLink>
        </SideNavigationItem>
        <SideNavigationItem>
          <SideNavigationItemLink
            href="https://github.com/murillo94/storeen/tree/master/packages/system"
            isExternal
          >
            Storeen system
          </SideNavigationItemLink>
        </SideNavigationItem>
        <SideNavigationItem>
          <SideNavigationItemLink
            href="https://github.com/murillo94/storeen/tree/master/packages/web"
            isExternal
          >
            Storeen web
          </SideNavigationItemLink>
        </SideNavigationItem>
      </SideNavigationGroup>
    </>
  );
};

const Wrapper = ({ children }) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const handleClickMenu = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  return (
    <>
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
            width: ['185px', '', '', '220px'],
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
          <Button
            appearance="minimal"
            icon="menu"
            hasBorder={false}
            onClick={handleClickMenu}
            marginTop={6}
            marginX={6}
            sx={{
              display: ['inline-flex', '', 'none']
            }}
          />
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
                width: ['100%', '', '', '685px']
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
        <SideSheet
          isVisible={visibleSidebar}
          width="195px"
          onClose={handleClickMenu}
        >
          <Nav />
        </SideSheet>
      </Box>

      <style jsx>
        {`
          .container {
            width: 100%;
            min-height: 100%;
          }

          nav {
          }

          hr {
          }

          main {
            flex: 1;
          }

          .main-container {
            padding: 30px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }

          .main-children {
            margin: 20px auto 0;
            width: 685px;
          }

          @media (max-width: 64em) {
            .main-container {
              padding: 40px 50px;
            }

            .main-children {
              width: 100%;
              margin: 0 auto;
            }
          }

          @media (max-width: 40em) {
            nav {
              display: none;
            }

            .main-container {
              padding: 40px 30px;
            }
          }

          @media (min-width: 40em) {
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

export default Wrapper;
