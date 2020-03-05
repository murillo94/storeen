import { render } from '@testing-library/react';

import { TableHead } from '../index';

describe('TableHead', () => {
  test('should render', () => {
    const { getByRole } = render(<TableHead />);

    expect(getByRole('rowgroup')).toBeInTheDocument();
  });

  test('should have headers', () => {
    const { getByRole } = render(<TableHead headers={['im header1']} />);

    expect(getByRole('columnheader')).toHaveTextContent('im header1');
  });
});
