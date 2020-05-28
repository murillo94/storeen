import { render } from '@testing-library/react';

import { MenuItem } from '../index';

const content = 'im content';

describe('MenuItem', () => {
  test('should render', () => {
    const { getByRole } = render(<MenuItem />);

    expect(getByRole('menuitem')).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<MenuItem>{content}</MenuItem>);

    expect(getByText(content)).toBeInTheDocument();
  });
});
