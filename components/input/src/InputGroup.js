const InputGroup = ({ children, type = 'normal' }) => (
  <>
    <div>{children}</div>

    <style jsx>
      {`
        div {
          display: flex;
          flex-direction: ${type === 'normal' ? 'colum' : 'row'};
        }

        :not(:last-child) {
          margin-bottom: 20px;
        }

        div :global(.input-form) {
          margin-bottom: 0 !important;
          min-width: 175px;
        }

        div :global(.input-form) + :global(.input-form) {
          margin-left: 20px;
        }
      `}
    </style>
  </>
);

export default InputGroup;
