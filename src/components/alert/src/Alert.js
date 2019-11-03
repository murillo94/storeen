import { Heading, Paragraph } from 'components/typography';

import useTheme from 'hooks/theme/useTheme';

import { mono0, mono100 } from 'utils/theme/colors';
import { radius600 } from 'utils/theme/radius';

const descriptionStyle = {
  margin: '0'
};

const Alert = ({
  children,
  appearance = 'positive',
  title = '',
  description = ''
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <div className="container">
        {title && <Heading is="h4" text={title} />}
        {description && (
          <div className="description">
            <Paragraph
              text={description}
              color="muted"
              customStyle={descriptionStyle}
            />
          </div>
        )}
        {children}
      </div>

      <style jsx>
        {`
          .container {
            background-color: ${mono0};
            border: 1px solid ${mono100};
            border-left: 4px solid ${theme.borderColor};
            border-radius: ${radius600};
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

export default Alert;
