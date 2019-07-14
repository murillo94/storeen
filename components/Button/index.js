import Icon from '../Icon';

const Button = ({
  type = 'button',
  text = '',
  icon = '',
  onClick = () => null
}) => (
  <>
    <button type={type} onClick={onClick}>
      {icon && <Icon name={icon} />}
      {text}
    </button>

    <style jsx>
      {`
        button {
          font-size: 14px;
          border-radius: 8px;
          padding: 10px;
          cursor: pointer;
        }
      `}
    </style>
  </>
);

export default Button;
