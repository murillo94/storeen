import { render } from '@testing-library/react';

import { Form } from '../index';

const content = 'im content';

describe('Anchor', () => {
  test('should render', () => {
    const { container } = render(<Form />);

    expect(container).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<Form>{content}</Form>);

    expect(getByText(content)).toBeInTheDocument();
  });
});
