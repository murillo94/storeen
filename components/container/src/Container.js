import { Heading } from 'components/typography';

import { mono0 } from 'themes/colors';

const Container = ({ children, title = '' }) => (
  <>
    <section>
      <header>
        <Heading is="h2" text={title} />
      </header>
      {children}
    </section>

    <style jsx>
      {`
        section {
          background-color: ${mono0};
          border: 1px solid gray;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 70px;
        }

        header {
          margin-bottom: 20px;
        }
      `}
    </style>
  </>
);

export default Container;
