import { render } from '@testing-library/react';

import { Td } from '../index';

describe('Td', () => {
  test('should render', () => {
    const { getByRole } = render(
      <table>
        <tbody>
          <tr>
            <Td />
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
            <Td>{content}</Td>
          </tr>
        </tbody>
      </table>
    );

    expect(getByRole('cell')).toHaveTextContent(content);
  });
});
