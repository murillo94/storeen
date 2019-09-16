const TableCell = ({ children, flexBasis = '' }) => (
  <>
    <div className={flexBasis && 'cellWidth'}>{children}</div>

    <style jsx>
      {`
        div {
          padding-right: 20px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          display: flex;
          align-items: center;
          flex: 1 1 0%;
        }

        .cellWidth {
          flex-basis: ${flexBasis};
          flex-shrink: 0;
          flex-grow: 0;
        }
      `}
    </style>
  </>
);

export default TableCell;
