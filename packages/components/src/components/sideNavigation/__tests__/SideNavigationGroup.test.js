import { render } from '@testing-library/react';

import { SideNavigationGroup } from '../index';

const content = 'im content';

describe('SideNavigationGroup', () => {
  test('should render', () => {
    const { getByRole } = render(<SideNavigationGroup />);

    expect(getByRole('list')).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByRole } = render(
      <SideNavigationGroup>{content}</SideNavigationGroup>
    );

    const list = getByRole('list');

    expect(list).toHaveAttribute('aria-label', 'Menu lateral');
  });

  test('should have aria label', () => {
    const { getByRole } = render(
      <SideNavigationGroup ariaLabel="im aria label" />
    );

    expect(getByRole('list')).toHaveAttribute('aria-label', 'im aria label');
  });

  test('should have custom style', () => {
    const { getByRole } = render(
      <SideNavigationGroup sx={{ backgroundColor: 'red' }} />
    );

    expect(getByRole('list')).toHaveStyle('background-color: red;');
  });
});
