const Form = ({ children }) => (
  <>
    <div>{children}</div>

    <style jsx>
      {`
        div :global(.input-normal):not(:last-child) {
          margin-bottom: 20px;
        }

        div :global(.input-check):not(:last-child) {
          margin-bottom: 5px;
        }

        div :global(.with-description):not(:last-child) {
          margin-bottom: 15px;
        }
      `}
    </style>
  </>
);

export default Form;
