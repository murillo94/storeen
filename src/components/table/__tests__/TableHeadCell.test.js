import { render } from '@testing-library/react';

import { TableHeadCell } from '../index';

describe('TableHeadCell', () => {
  test('should render', () => {
    const { getByRole } = render(<TableHeadCell />);

    expect(getByRole('columnheader')).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByRole } = render(<TableHeadCell>{content}</TableHeadCell>);

    expect(getByRole('columnheader')).toHaveTextContent(content);
  });
});
