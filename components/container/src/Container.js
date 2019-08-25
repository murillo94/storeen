import { Heading, Paragraph } from 'components/typography';

import { mono0 } from 'themes/colors';
import { radius600 } from 'themes/radius';

const subTitleStyle = {
  marginTop: '6px'
};

const Container = ({ children, title = '', subTitle = '' }) => (
  <>
    <section>
      {title && (
        <header>
          <Heading is="h2" text={title} />
          {subTitle && (
            <Paragraph
              text={subTitle}
              color="muted"
              customStyle={subTitleStyle}
            />
          )}
        </header>
      )}
      {children}
    </section>

    <style jsx>
      {`
        section {
          background-color: ${mono0};
          box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.04),
            0 1px 3px 0 rgba(63, 63, 68, 0.15);
          border-radius: ${radius600};
          padding: 20px;
          margin-bottom: 45px;
          width: 100%;
        }

        header {
          margin-bottom: 20px;
        }
      `}
    </style>
  </>
);

export default Container;
