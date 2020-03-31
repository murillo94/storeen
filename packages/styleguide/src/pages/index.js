/* eslint-disable import/no-unresolved */
import { Image, TabList, Tab } from '@storeen/components';

import { gray0, gray200, borderRadius8 } from '@storeen/system';

import { frontMatter as docsPages } from './docs/*.mdx';

const Logo = () => (
  <>
    <div className="desktop-logo">
      <Image
        src={require('../public/logo-all-horizontal.svg')}
        alt="Storeen logo com nome horizontal"
        width="120px"
        height="100%"
      />
    </div>

    <style jsx>
      {`
        div {
          text-align: left;
          margin: 0 20px 40px;
          display: block;
        }
      `}
    </style>
  </>
);

const App = ({ children }) => (
  <>
    <div className="container">
      <nav className="side-sheet">
        <Logo />
        <TabList>
          {docsPages.map(page => (
            <Tab key={page.href} text={page.title} href={page.href} />
          ))}
        </TabList>
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
          background-color: ${gray0};
          border-right: 1px solid ${gray200};
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
          width: 800px;
        }

        @media (max-width: 1124px) {
          :global(.side-sheet) :global(ul) :global(li) {
            border-radius: ${borderRadius8};
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
            display: none;
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

export default App;
