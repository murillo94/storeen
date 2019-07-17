import Icon from '../icon';

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
          height: 39px;
          padding: 0 10px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
        }

        span {
          margin-left: ${icon ? '5px' : 0};
        }
      `}
    </style>
  </>
);

export default Button;
