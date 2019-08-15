import { Heading } from 'components/typography';

import { mono0 } from 'themes/colors';
import { radius800 } from 'themes/radius';

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
          box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.04),
            0 1px 3px 0 rgba(63, 63, 68, 0.15);
          border-radius: ${radius800};
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
