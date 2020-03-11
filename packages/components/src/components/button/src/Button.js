import Icon from '../../icon';
import { Text } from '../../typography';

import useTheme from '@storeen/system/src/hooks/theme/useTheme';

import { radius600 } from '@storeen/system/src/utils/theme/radius';

const defaultStyle = {
  width: 'auto'
};

const Button = ({
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
              <Text
                text={text}
                customStyle={{ margin: icon ? '0 0 0 5px' : 0 }}
              />
            )}
          </>
        )}
      </button>

      <style jsx>
        {`
          button {
            font-size: 14px;
            font-weight: ${appearance !== 'minimal' ? 500 : 400};
            color: ${theme.color};
            background-color: ${theme.backgroundColor};
            border: ${hasBorder ? `1px solid ${theme.borderColor}` : 'none'};
            border-radius: ${radius600};
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

export default Button;