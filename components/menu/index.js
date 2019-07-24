import Image from '../image';

const Menu = () => (
  <>
    <nav>
      <div className="logo">
        <Image src="/static/images/favicon.png" width={35} height={35} />
      </div>
    </nav>

    <style jsx>
      {`
        nav {
          background-color: white;
          border-right: 1px solid gray;
          text-align: center;
          width: 90px;
          height: 100vh;
          overflow: auto;
          position: sticky;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .logo {
          margin: 20px;
        }
      `}
    </style>
  </>
);

export default Menu;
