import Menu from '../components/menu';
import Header from '../components/header';

const Content = ({ children, title, padding = '30px' }) => (
  <>
    <div className="container">
      <Menu />
      <main>
        <Header title={title} />
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

export default Content;
