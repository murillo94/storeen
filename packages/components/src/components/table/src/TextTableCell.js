import { Text } from '../../typography';

export const TextTableCell = ({ children, text = '', textCustomStyle }) => (
  <>
    <div>
      {text && <Text customStyle={textCustomStyle}>{text}</Text>}
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
          text-overflow: ellipsis;
        }
      `}
    </style>
  </>
);
