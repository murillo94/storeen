import { render } from '@testing-library/react';

import { TableBody } from '../index';

describe('TableBody', () => {
  test('should render', () => {
    const { getByRole } = render(
      <table>
        <TableBody />
      </table>
    );

    expect(getByRole('rowgroup')).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByRole } = render(
      <table>
        <TableBody>
          <tr>
            <td>{content}</td>
          </tr>
        </TableBody>
      </table>
    );

    expect(getByRole('cell')).toHaveTextContent(content);
  });
});
