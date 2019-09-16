const InputGroup = ({ children, type = 'column' }) => (
  <>
    <div>{children}</div>

    <style jsx>
      {`
        div {
          display: flex;
          flex-direction: ${type};
        }

        :not(:last-child) {
          margin-bottom: 20px;
        }

        @media (max-width: 746px) {
          div {
            flex-direction: column;
          }
        }

        @media (min-width: 746px) {
          div :global(.input-form) {
            min-width: 175px;
            margin-bottom: 0px !important;
          }

          div :global(.input-form) + :global(.input-form) {
            margin-left: 20px;
          }
        }
      `}
    </style>
  </>
);

export default InputGroup;
