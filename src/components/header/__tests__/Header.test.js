import { render } from '@testing-library/react';

import Header from '../index';

const content = 'im content';

describe('Anchor', () => {
  test('should render', () => {
    const { container } = render(<Header />);

    expect(container).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<Header>{content}</Header>);

    expect(getByText(content)).toBeInTheDocument();
  });
});
