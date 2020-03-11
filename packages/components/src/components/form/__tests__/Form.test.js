import { render } from '@testing-library/react';

import { Form } from '../index';

describe('Form', () => {
  test('should render', () => {
    const { container } = render(<Form />);

    expect(container).toBeInTheDocument();
  });

  test('should have children', () => {
    const content = 'im content';
    const { getByText } = render(<Form>{content}</Form>);

    expect(getByText(content)).toBeInTheDocument();
  });
});
