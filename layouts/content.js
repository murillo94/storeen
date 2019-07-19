import Menu from '../components/menu';
import Header from '../components/header';

const Content = ({ children, title, padding = '20px' }) => (
  <>
    <div className="container">
      <Menu />
      <main>
        <Header title={title} />
        <div className="main-container">{children}</div>
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
      `}
    </style>
  </>
);

export default Content;
