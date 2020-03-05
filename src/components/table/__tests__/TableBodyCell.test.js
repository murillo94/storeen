import { render } from '@testing-library/react';

import { TableBodyCell } from '../index';

describe('TableBodyCell', () => {
  test('should render', () => {
    const { getByRole } = render(<TableBodyCell />);

    expect(getByRole('cell')).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByRole } = render(<TableBodyCell>{content}</TableBodyCell>);

    expect(getByRole('cell')).toHaveTextContent(content);
  });
});
