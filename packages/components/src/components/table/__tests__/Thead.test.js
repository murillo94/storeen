import { render } from '@testing-library/react';

import { Thead } from '../index';

describe('Thead', () => {
  test('should render', () => {
    const { getByRole } = render(
      <table>
        <Thead />
      </table>
    );

    expect(getByRole('rowgroup')).toBeInTheDocument();
  });

  test('should have headers', () => {
    const { getByRole } = render(
      <table>
        <Thead headers={['im header1']} />
      </table>
    );

    expect(getByRole('columnheader')).toHaveTextContent('im header1');
  });
});
