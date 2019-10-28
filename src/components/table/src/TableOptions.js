import Input from 'components/input';
import { FormGroup } from 'components/form';

import { mono75 } from 'utils/theme/colors';

const TableOptions = ({ children, hasSearch, placeholderSearchSuffix }) => (
  <>
    <div>
      {hasSearch && (
        <Input
          id="search"
          name="search"
          icon="search"
          placeholder={`Buscar ${placeholderSearchSuffix}`}
        />
      )}
      <FormGroup>{children}</FormGroup>
    </div>

    <style jsx>
      {`
        div {
          padding: 20px 20px 30px;
          display: flex;
          justify-content: space-between;
          align-itens: center;
        }

        div :global(input) {
          width: 300px;
        }

        div :global(input),
        div :global(button[type='submit']) {
          background-color: ${mono75};
          border-color: ${mono75};
        }

        @media (max-width: 746px) {
          div {
            flex-direction: column;
          }

          div :global(input),
          div :global(button[type='button']) {
            width: 100% !important;
          }

          div :global(.form-group) {
            margin-top: 20px;
          }
        }
      `}
    </style>
  </>
);

export default TableOptions;
