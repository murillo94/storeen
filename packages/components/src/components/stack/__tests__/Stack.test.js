import { render } from '@testing-library/react';

import { Stack } from '../index';

describe('Stack', () => {
  test('should render', () => {
    const { container } = render(<Stack />);

    expect(container).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByText } = render(<Stack>{content}</Stack>);

    expect(getByText(content)).toBeInTheDocument();
  });
});
