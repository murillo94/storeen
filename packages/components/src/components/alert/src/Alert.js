import { Heading, Paragraph } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

import { theming } from '../../../theme/theming';

import { borderRadius6 } from '@storeen/system';

export const Alert = ({
  children,
  appearance = 'positive',
  title = '',
  description = ''
}) => {
  const theme = useTheme(appearance);

  return (
    <div role="alert" className="container">
      {title && <Heading is="h4">{title}</Heading>}
      {description && (
        <Paragraph color="muted" marginTop={2}>
          {description}
        </Paragraph>
      )}
      {children}

      <style jsx>
        {`
           {
            background-color: ${theming.colors.gray0};
            border: 1px solid ${theming.colors.gray100};
            border-left: 4px solid ${theme.borderColor};
            border-radius: ${borderRadius6};
            padding: 15px;
            margin-bottom: 20px;
          }
        `}
      </style>
    </div>
  );
};
