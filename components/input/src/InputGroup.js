const InputGroup = ({ children, type = 'normal' }) => (
  <>
    <div>{children}</div>

    <style jsx>
      {`
        div {
          display: flex;
          flex-direction: ${type === 'normal' ? 'colum' : 'row'};
        }

        div + div {
          margin-top: 20px;
        }

        div :global(div) {
          min-width: 175px;
        }

        div :global(div) + :global(div) {
          margin-top: 0px !important;
          margin-left: 20px;
        }
      `}
    </style>
  </>
);

export default InputGroup;
