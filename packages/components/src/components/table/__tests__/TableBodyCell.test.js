import { render } from '@testing-library/react';

import { TableBodyCell } from '../index';

describe('TableBodyCell', () => {
  test('should render', () => {
    const { getByRole } = render(
      <table>
        <tbody>
          <tr>
            <TableBodyCell />
          </tr>
        </tbody>
      </table>
    );

    expect(getByRole('cell')).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByRole } = render(
      <table>
        <tbody>
          <tr>
            <TableBodyCell>{content}</TableBodyCell>
          </tr>
        </tbody>
      </table>
    );

    expect(getByRole('cell')).toHaveTextContent(content);
  });
});
