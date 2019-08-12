import Button from 'components/button';
import { Heading } from 'components/typography';

const buttonStyle = {
  border: 'none'
};

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
          <Button
            icon="chevron-left"
            customStyle={buttonStyle}
            onClick={onClick}
          />
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
