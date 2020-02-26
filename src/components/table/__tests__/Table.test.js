import { render } from '@testing-library/react';

import { Table } from '../index';

describe('Table', () => {
  test('should render', () => {
    const { getByRole } = render(<Table />);

    expect(getByRole('table')).toBeInTheDocument();
  });
});
