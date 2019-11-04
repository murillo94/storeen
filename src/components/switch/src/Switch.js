import { Label } from 'components/typography';

/* 
import useTheme from 'hooks/theme/useTheme';

appearance = 'minimal'
id = null,
name = '',
value = '',
checked = false,
onChange = null
*/

const Switch = () => {
  // const theme = useTheme(appearance);

  return (
    <>
      <Label>
        <input type="checkbox" />
        <div className="container">todo</div>
      </Label>

      <style jsx>
        {`
          .container {
            position: relative;
          }
        `}
      </style>
    </>
  );
};

export default Switch;
