import { render } from '@testing-library/react';

import { TableHead } from '../index';

describe('TableHead', () => {
  test('should render', () => {
    const { getByRole } = render(
      <table>
        <TableHead />
      </table>
    );

    expect(getByRole('rowgroup')).toBeInTheDocument();
  });

  test('should have headers', () => {
    const { getByRole } = render(
      <table>
        <TableHead headers={['im header1']} />
      </table>
    );

    expect(getByRole('columnheader')).toHaveTextContent('im header1');
  });
});
