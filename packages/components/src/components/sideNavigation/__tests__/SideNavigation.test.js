import { render } from '@testing-library/react';

import { SideNavigation } from '../index';

const content = 'im content';

describe('SideNavigation', () => {
  test('should render', () => {
    const { getByRole } = render(<SideNavigation />);

    expect(getByRole('navigation')).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByRole } = render(<SideNavigation>{content}</SideNavigation>);

    const navigation = getByRole('navigation');

    expect(navigation).toHaveStyle('overflow: auto;');
  });
});
