import { render } from '@testing-library/react';

import { TabList } from '../index';

describe('Tab', () => {
  test('should render', () => {
    const { getByRole } = render(<TabList />);

    expect(getByRole('tablist')).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByRole } = render(<TabList />);

    const list = getByRole('tablist');
    expect(list).toBeInTheDocument();
    expect(list).toHaveAttribute('role', 'tablist');
    expect(list).toHaveAttribute('aria-orientation', 'vertical');
    expect(list).toHaveAttribute('aria-label', 'Menu lateral');
  });

  test('should have aria label', () => {
    const { getByRole } = render(<TabList ariaLabel="im aria label" />);

    expect(getByRole('tablist')).toHaveAttribute('aria-label', 'im aria label');
  });

  test('should have custom style', () => {
    const { getByRole } = render(<TabList customStyle={{ margin: '10px' }} />);

    expect(getByRole('tablist')).toHaveStyle('margin: 10px;');
  });
});
