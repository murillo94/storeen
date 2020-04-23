import { Heading, Paragraph } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

import { gray0, gray100, borderRadius6 } from '@storeen/system';

export const Alert = ({
  children,
  appearance = 'positive',
  title = '',
  description = ''
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <div role="alert" className="container">
        {title && <Heading is="h4">{title}</Heading>}
        {description && (
          <div className="description">
            <Paragraph color="muted" margin={0}>
              {description}
            </Paragraph>
          </div>
        )}
        {children}
      </div>

      <style jsx>
        {`
          .container {
            background-color: ${gray0};
            border: 1px solid ${gray100};
            border-left: 4px solid ${theme.borderColor};
            border-radius: ${borderRadius6};
            padding: 15px;
            margin-bottom: 20px;
          }

          .description {
            margin-top: 10px;
          }
        `}
      </style>
    </>
  );
};
