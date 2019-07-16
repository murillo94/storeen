import Icon from '../Icon';

const Button = ({
  type = 'button',
  text = '',
  icon = '',
  border = '1px solid gray',
  onClick = null
}) => (
  <>
    <button type={type} onClick={onClick}>
      {icon && <Icon name={icon} size={17} />}
      {text && <span>{text}</span>}
    </button>

    <style jsx>
      {`
        button {
          font-size: 14px;
          border: ${border};
          border-radius: 8px;
          padding: 10px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        span {
          margin-left: 5px;
        }
      `}
    </style>
  </>
);

export default Button;
