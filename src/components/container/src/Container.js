import { Form } from 'components/form';
import { Heading, Paragraph } from 'components/typography';

import { mono0, mono100 } from 'utils/theme/colors';
import { radius600 } from 'utils/theme/radius';

const subTitleStyle = {
  marginTop: '6px'
};

const Container = ({
  children,
  title = '',
  subTitle = '',
  orientation = '',
  align = '',
  padding = 'default',
  hasBoxShadow = true,
  hasBorder = false,
  isForm = false
}) => (
  <>
    <section className={`${orientation} ${align} ${padding}`}>
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
      {isForm ? <Form>{children}</Form> : children}
    </section>

    <style jsx>
      {`
        section {
          background-color: ${mono0};
          box-shadow: ${hasBoxShadow &&
            '0 0 0 1px rgba(63, 63, 68, 0.04), 0 1px 3px 0 rgba(63, 63, 68, 0.15)'};
          border: ${hasBorder && `1px solid ${mono100}`};
          border-radius: ${radius600};
          margin-bottom: 45px;
          width: 100%;
          overflow: hidden;
        }

        section:last-of-type {
          margin-bottom: 30px;
        }

        .vertical {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .horizontal {
          display: flex;
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .right {
          justify-content: flex-end;
        }

        .left {
          justify-content: flex-start;
        }

        .between {
          justify-content: space-between;
        }

        .default {
          padding: 20px;
        }

        .normal {
          padding: 0;
        }

        header {
          padding: ${padding === 'normal' && '20px'};
          padding-bottom: 20px;
        }
      `}
    </style>
  </>
);

export default Container;
