import { Heading } from '../../typography';

const Container = ({ children, title = '', margin }) => (
  <>
    <section style={{ margin }}>
      <header>
        <Heading is="h2" text={title} />
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
      `}
    </style>
  </>
);

export default Container;
