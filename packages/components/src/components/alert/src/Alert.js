import { Heading, Paragraph } from '../../typography';

import useTheme from '@storeen/system/src/hooks/theme/useTheme';

import { mono0, mono100 } from '@storeen/system/src/utils/theme/colors';
import { radius600 } from '@storeen/system/src/utils/theme/radius';

const descriptionStyle = {
  margin: '0'
};

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
