import { render } from '@testing-library/react';

import Footer from '../index';

const content = 'im content';

describe('Footer', () => {
  test('should render', () => {
    const { container } = render(<Footer />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByText } = render(<Footer>{content}</Footer>);

    const text = getByText(content);

    expect(text).toHaveClass('left');
    expect(text).toHaveStyle('justify-content: flex-start');
    expect(text).toBeInTheDocument();
  });

  test('should have type', () => {
    const { getByText } = render(<Footer align="right">{content}</Footer>);

    const text = getByText(content);

    expect(text).toHaveClass('right');
    expect(text).toHaveStyle('justify-content: flex-end');
  });
});
