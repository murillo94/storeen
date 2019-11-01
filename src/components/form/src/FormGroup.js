const FormGroup = ({ children, type = 'row' }) => (
  <>
    <div className="form-group">{children}</div>

    <style jsx>
      {`
        div {
          display: flex;
          flex-direction: ${type};
          flex-wrap: wrap;
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
            margin-bottom: 0px !important;
            flex: 0.5;
            min-width: 175px;
          }

          div :global(div) + :global(div) {
            margin-left: 10px;
          }

          div :global(.input-form) + :global(.input-form) {
            margin-left: 20px;
          }
        }
      `}
    </style>
  </>
);

export default FormGroup;
