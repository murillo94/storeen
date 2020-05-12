import { render } from '@testing-library/react';

import { Inline } from '../index';

const content = 'im content';

describe('Inline', () => {
  test('should render', () => {
    const { container } = render(<Inline />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByText } = render(<Inline>{content}</Inline>);

    const text = getByText(content);

    expect(text).toHaveClass('form-group');
    expect(text).toHaveStyle('flex-direction: column;');
  });
});
