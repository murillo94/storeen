export const Form = ({ children }) => (
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

        div :global(.with-description):not(:last-child) {
          margin-bottom: 15px;
        }

        div :global(button):not(:last-child) {
          margin-bottom: 20px;
        }

        div :global(.disclosure) > :global(.input-normal),
        div :global(.disclosure) > :global(.input-check),
        div :global(.disclosure) > :global(.with-description),
        div :global(.disclosure) > :global(button) {
          margin: 0;
        }
      `}
    </style>
  </>
);
