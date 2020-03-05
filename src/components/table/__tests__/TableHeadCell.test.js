import { render } from '@testing-library/react';

import { TableHeadCell } from '../index';

describe('TableHeadCell', () => {
  test('should render', () => {
    const { getByRole } = render(
      <table>
        <thead>
          <tr>
            <TableHeadCell />
          </tr>
        </thead>
      </table>
    );

    expect(getByRole('columnheader')).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByRole } = render(
      <table>
        <thead>
          <tr>
            <TableHeadCell>{content}</TableHeadCell>
          </tr>
        </thead>
      </table>
    );

    expect(getByRole('columnheader')).toHaveTextContent(content);
  });
});
