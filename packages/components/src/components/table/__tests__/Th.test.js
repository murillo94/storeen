import { render } from '@testing-library/react';

import { Th } from '../index';

describe('Th', () => {
  test('should render', () => {
    const { getByRole } = render(
      <table>
        <thead>
          <tr>
            <Th />
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
            <Th>{content}</Th>
          </tr>
        </thead>
      </table>
    );

    expect(getByRole('columnheader')).toHaveTextContent(content);
  });
});
