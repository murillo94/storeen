import { render } from '@testing-library/react';

import { Tbody } from '../index';

describe('Tbody', () => {
  test('should render', () => {
    const { getByRole } = render(
      <table>
        <Tbody />
      </table>
    );

    expect(getByRole('rowgroup')).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByRole } = render(
      <table>
        <Tbody>
          <tr>
            <td>{content}</td>
          </tr>
        </Tbody>
      </table>
    );

    expect(getByRole('cell')).toHaveTextContent(content);
  });
});
