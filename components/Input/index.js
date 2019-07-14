import Label from '../Label';

const Input = ({
  type = 'text',
  id = null,
  name = '',
  placeholder = '',
  labelText = ''
}) => (
  <>
    {labelText && <Label htmlFor={id} text={labelText} />}
    <input type={type} id={id} name={name} placeholder={placeholder} />

    <style jsx>
      {`
        input {
          font-size: 14px;
          border: 1px solid gray;
          border-radius: 8px;
          padding: 10px;
          display: block;
        }
      `}
    </style>
  </>
);

export default Input;
