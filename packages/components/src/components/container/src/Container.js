import { Form } from '../../form';
import { Heading, Paragraph } from '../../typography';

import { theming } from '../../../theme/theming';

import { borderRadius6 } from '@storeen/system';

export const Container = ({
  children,
  title = '',
  optionsTitle,
  subTitle = '',
  orientation = '',
  align = '',
  padding = '20px',
  margin = '0 0 45px',
  hasBoxShadow = true,
  hasBorder = false,
  isForm = false
}) => (
  <>
    <section className={`${orientation} ${align}`} style={{ padding, margin }}>
      {title && (
        <header>
          <div>
            <Heading is="h2">{title}</Heading>
            {optionsTitle}
          </div>
          {subTitle && (
            <Paragraph color="muted" marginTop={1} marginBottom={2}>
              {subTitle}
            </Paragraph>
          )}
        </header>
      )}
      {isForm ? <Form>{children}</Form> : children}
    </section>

    <style jsx>
      {`
        section {
          background-color: ${theming.colors.gray0};
          box-shadow: ${hasBoxShadow &&
          '0 0 0 1px rgba(63, 63, 68, 0.04), 0 1px 3px 0 rgba(63, 63, 68, 0.15)'};
          border: ${hasBorder && `1px solid ${theming.colors.gray100}`};
          border-radius: ${borderRadius6};
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

        header {
          padding: ${padding === '0px' && '20px'};
          padding-bottom: 20px;
        }

        header > div {
          display: flex;
          justify-content: space-between;
        }
      `}
    </style>
  </>
);
