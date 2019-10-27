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
            appearance="minimal"
            icon="chevron-left"
            customStyle={buttonStyle}
            onClick={onClick}
          />
        )}
        <Heading
          text={title}
          customStyle={{ margin: hasBack ? '0 0 0 5px' : 0 }}
        />
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
          min-height: 39px;
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