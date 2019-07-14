const Container = ({ children, title = '' }) => (
  <>
    <section>
      <header>
        <h2>{title}</h2>
      </header>
      {children}
    </section>

    <style jsx>
      {`
        section {
          border: 1px solid gray;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
        }

        header {
          margin-bottom: 20px;
        }

        h2 {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }
      `}
    </style>
  </>
);

export default Container;
