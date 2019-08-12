import Icon from 'components/icon';
import { Text } from 'components/typography';

import style from '../style';

const defaultStyle = {
  width: 'auto'
};

const Button = ({
  children,
  appearance = 'default',
  type = 'button',
  text = '',
  icon = '',
  customStyle = {},
  disabled = false,
  onClick = null,
  ...props
}) => (
  <>
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={appearance}
      style={{ ...defaultStyle, ...customStyle }}
      onClick={onClick}
      {...props}
    >
      {children ? (
        <>{children}</>
      ) : (
        <>
          {icon && (
            <Icon name={icon} size={17} color={style[appearance].color} />
          )}
          {text && (
            <Text text={text} customStyle={{ margin: icon && '0 0 0 5px' }} />
          )}
        </>
      )}
    </button>

    <style jsx>
      {`
        button {
          font-size: 14px;
          color: ${style[appearance].color};
          background-color: ${style[appearance].backgroundColor};
          border-style: solid;
          border-width: 1px;
          border-color: ${style[appearance].borderColor};
          border-radius: 8px;
          height: 39px;
          padding: 0 10px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
        }

        :hover {
          color: ${style[appearance].hover.color};
          background-color: ${style[appearance].hover.backgroundColor};
          border-color: ${style[appearance].hover.borderColor};
        }
      `}
    </style>
  </>
);

export default Button;
