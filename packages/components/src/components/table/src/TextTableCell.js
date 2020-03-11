import { Text } from '../../typography';

const TextTableCell = ({ children, text = '', textCustomStyle }) => (
  <>
    <div>
      {text && <Text text={text} customStyle={textCustomStyle} />}
      {children}
    </div>

    <style jsx>
      {`
        div {
          overflow: hidden;
          display: flex;
          align-items: center;
          flex: 1 1 0%;
        }

        div :global(span) {
          overflow: hidden;
          stext-overflow: ellipsis;
        }
      `}
    </style>
  </>
);

export default TextTableCell;
