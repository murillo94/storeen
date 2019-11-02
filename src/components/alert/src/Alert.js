import { Heading } from 'components/typography';

import useTheme from 'hooks/theme/useTheme';

import { mono0, mono100 } from 'utils/theme/colors';
import { radius600 } from 'utils/theme/radius';

const Alert = ({ children, appearance = 'positive', title = '' }) => {
  const theme = useTheme(appearance);

  return (
    <>
      <div>
        {title && <Heading is="h4" text={title} />}
        {children}
      </div>

      <style jsx>
        {`
          div {
            background-color: ${mono0};
            border: 1px solid ${mono100};
            border-left: 4px solid ${theme.borderColor};
            border-radius: ${radius600};
            padding: 15px;
            margin-bottom: 20px;
          }
        `}
      </style>
    </>
  );
};

export default Alert;
