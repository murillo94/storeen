import { Input } from '../../input';
import { FormGroup } from '../../form';

import { theming } from '../../../theme/theming';

export const TableOptions = ({
  children,
  hasSearch,
  placeholderSearchSuffix
}) => (
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
          background-color: ${theming.colors.gray75};
          border-color: ${theming.colors.gray75};
        }

        div :global(.form-group) :global(div) > :global(button) {
          padding: 8.5px;
        }

        @media (max-width: 40em) {
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
