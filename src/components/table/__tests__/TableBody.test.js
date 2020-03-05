import { render } from '@testing-library/react';

import { TableBody } from '../index';

describe('TableBody', () => {
  test('should render', () => {
    const { getByRole } = render(<TableBody />);

    expect(getByRole('rowgroup')).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByRole } = render(<TableBody>{content}</TableBody>);

    expect(getByRole('rowgroup')).toHaveTextContent(content);
  });
});
