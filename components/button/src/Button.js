import Icon from 'components/icon';
import { Text } from 'components/typography';

const Button = ({
  children,
  type = 'button',
  text = '',
  icon = '',
  border = '1px solid gray',
  margin = null,
  width = 'auto',
  disabled = false,
  onClick = null,
  ...props
}) => (
  <>
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      style={{ margin, width }}
      {...props}
    >
      {children ? (
        <>{children}</>
      ) : (
        <>
          {icon && <Icon name={icon} size={17} />}
          {text && <Text text={text} margin={icon && '0 0 0 5px'} />}
        </>
      )}
    </button>

    <style jsx>
      {`
        button {
          font-size: 14px;
          background-color: white;
          border: ${border};
          border-radius: 8px;
          height: 39px;
          padding: 0 10px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
        }
      `}
    </style>
  </>
);

export default Button;
