import { Heading } from '../typography';

const SubHeader = ({ children, title }) => (
  <>
    <header>
      <Heading text={title} />
      {children && <div>{children}</div>}
    </header>

    <style jsx>
      {`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
        }
      `}
    </style>
  </>
);

export default SubHeader;
