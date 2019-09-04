const Form = ({ children }) => (
  <>
    <div>{children}</div>

    <style jsx>
      {`
        div :global(.input-normal):not(:last-child) {
          margin-bottom: 20px;
        }

        div :global(.input-check):not(:last-child) {
          margin-bottom: 10px;
        }
      `}
    </style>
  </>
);

export default Form;
