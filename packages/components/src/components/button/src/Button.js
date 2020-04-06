import { Icon } from '../../icon';
import { Text } from '../../typography';

import useTheme from '../../../utils/theme/useTheme';

import {
  fontSize14,
  fontWeight500,
  borderRadius6,
  fontWeight400
} from '@storeen/system';

const defaultStyle = {
  width: 'auto'
};

export const Button = ({
  children,
  appearance = 'default',
  type = 'button',
  text = '',
  icon = '',
  hasBorder = true,
  disabled = false,
  customStyle = {},
  onClick = null,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={text || icon}
        style={{ ...defaultStyle, ...customStyle }}
        onClick={onClick}
        {...props}
      >
        {children ? (
          <>{children}</>
        ) : (
          <>
            {icon && <Icon name={icon} size={17} color={theme.color} />}
            {text && (
              <Text customStyle={{ margin: icon ? '0 0 0 5px' : 0 }}>
                {text}
              </Text>
            )}
          </>
        )}
      </button>

      <style jsx>
        {`
          button {
            font-size: ${fontSize14};
            font-weight: ${appearance !== 'minimal'
              ? fontWeight500
              : fontWeight400};
            color: ${theme.color};
            background-color: ${theme.backgroundColor};
            border: ${hasBorder ? `1px solid ${theme.borderColor}` : 'none'};
            border-radius: ${borderRadius6};
            padding: 10px;
            outline: 0;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
          }

          :hover {
            color: ${theme.hover.color};
            background-color: ${theme.hover.backgroundColor};
            border-color: ${theme.hover.borderColor};
          }

          :focus {
            box-shadow: ${theme.focus.boxShadow};
            border-color: ${theme.focus.borderColor};
          }
        `}
      </style>
    </>
  );
};
