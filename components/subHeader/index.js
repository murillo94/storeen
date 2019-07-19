import Button from '../button';
import { Heading } from '../typography';

const SubHeader = ({
  children,
  title = '',
  hasBack = false,
  onClick = null
}) => (
  <>
    <header>
      <div>
        {hasBack && (
          <Button icon="chevron-left" onClick={onClick} border="none" />
        )}
        <Heading text={title} margin={hasBack && '0 0 0 5px'} />
      </div>
      {children && <div>{children}</div>}
    </header>

    <style jsx>
      {`
        header {
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </>
);

export default SubHeader;
