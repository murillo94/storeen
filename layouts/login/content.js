const Page = ({ children }) => (
  <>
    <section>
      <main>
        <div>{children}</div>
      </main>
    </section>

    <style jsx>
      {`
        section {
          text-align: center;
          min-height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 30px;
        }

        div {
          width: 300px;
        }
      `}
    </style>
  </>
);

export default Page;
