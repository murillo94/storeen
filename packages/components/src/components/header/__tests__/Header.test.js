import { render } from '@testing-library/react';

import Header from '../index';

describe('Header', () => {
  test('should render', () => {
    const { container } = render(<Header />);

    expect(container).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByText } = render(<Header>{content}</Header>);

    expect(getByText(content)).toBeInTheDocument();
  });
});
