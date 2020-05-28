/* eslint-disable import/no-unresolved */
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
  Image,
  Heading,
  SideNavigationGroup,
  SideNavigationItem,
  SideNavigationItemLink,
  theming
} from '@storeen/components';

import { frontMatter as docsPages } from '../pages/docs/*.mdx';

const headingStyle = {
  fontSize: 0,
  textAlign: 'left'
};

const Logo = () => (
  <>
    <Image
      src={require('../public/images/logo-all-horizontal.svg')}
      alt="Storeen logo com nome horizontal"
      width="120px"
      height="auto"
      marginBottom={4}
      marginX={4}
    />
  </>
);

const Wrapper = ({ children }) => {
  const { pathname } = useRouter();

  const pinnedPages = docsPages
    .filter(page => page.pinned)
    .sort((a, b) => a.order - b.order);

  const componentPages = docsPages.filter(page => page.component);

  return (
    <>
      <div className="container">
        <nav className="side-sheet">
          <Logo />
          <Heading marginTop={3} marginBottom={2} marginX={3} sx={headingStyle}>
            Overview
          </Heading>
          <SideNavigationGroup>
            {pinnedPages.map(page => (
              <SideNavigationItem
                key={page.href}
                isActive={pathname === page.href}
              >
                <Link href={page.href} passHref>
                  <SideNavigationItemLink>{page.title}</SideNavigationItemLink>
                </Link>
              </SideNavigationItem>
            ))}
          </SideNavigationGroup>
          <hr />
          <Heading marginTop={3} marginBottom={2} marginX={3} sx={headingStyle}>
            Components
          </Heading>
          <SideNavigationGroup>
            {componentPages.map(page => (
              <SideNavigationItem
                key={page.href}
                isActive={pathname === page.href}
              >
                <Link href={page.href} passHref>
                  <SideNavigationItemLink>{page.title}</SideNavigationItemLink>
                </Link>
              </SideNavigationItem>
            ))}
          </SideNavigationGroup>
          <hr />
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
        </nav>
        <main>
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
            background-color: ${theming.colors.gray0};
            border-right: 1px solid ${theming.colors.gray400};
            text-align: center;
            padding: 20px 0 10px;
            width: 220px;
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

          hr {
            width: 100%;
            border: none;
            border-top: 1px solid ${theming.colors.gray300};
            margin: 0px 0px 5px;
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
