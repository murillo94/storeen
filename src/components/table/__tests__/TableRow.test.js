import { render, fireEvent } from '@testing-library/react';

import { TableRow } from '../index';

describe('TableRow', () => {
  test('should render', () => {
    const { getByRole } = render(
      <table>
        <thead>
          <TableRow />
        </thead>
      </table>
    );

    expect(getByRole('row')).toBeInTheDocument();
  });

  test('should have children ', () => {
    const content = 'im content';
    const { getByRole } = render(
      <table>
        <thead>
          <TableRow>
            <th>{content}</th>
          </TableRow>
        </thead>
      </table>
    );

    expect(getByRole('row')).toHaveTextContent(content);
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <table>
        <thead>
          <TableRow onClick={onClick} />
        </thead>
      </table>
    );

    const row = getByRole('row');

    fireEvent.click(row);

    expect(onClick).toHaveBeenCalled();
  });
});
