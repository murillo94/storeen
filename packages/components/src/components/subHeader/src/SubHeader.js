import { Button } from '../../button';
import { Heading } from '../../typography';

export const SubHeader = ({
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
            hasBorder={false}
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
