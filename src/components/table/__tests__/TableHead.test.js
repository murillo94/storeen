import { render } from '@testing-library/react';

import { TableHead } from '../index';

describe('TableHead', () => {
  test('should render', () => {
    const { getByRole } = render(<TableHead />);

    expect(getByRole('rowgroup')).toContainHTML(
      '<thead><tr class="jsx-1311368395" /></thead>'
    );
  });
});
