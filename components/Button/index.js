import Icon from '../Icon';

const Button = ({
  type = 'button',
  text = '',
  icon = '',
  onClick = () => null
}) => (
  <>
    <button type={type} onClick={onClick}>
      {icon && <Icon name={icon} size={17} />}
      <span>{text}</span>
    </button>

    <style jsx>
      {`
        button {
          font-size: 14px;
          border: 1px solid gray;
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
