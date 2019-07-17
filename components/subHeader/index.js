const SubHeader = ({ children, title }) => (
  <>
    <header>
      <h1>{title}</h1>
      {children && <div>{children}</div>}
    </header>

    <style jsx>
      {`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        h1 {
          font-size: 28px;
          font-weight: 600;
          margin: 0;
        }
      `}
    </style>
  </>
);

export default SubHeader;
