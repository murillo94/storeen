import { render } from '@testing-library/react';

import Portal from '../index';

const content = 'im portal';

describe('Portal', () => {
  test('should render', () => {
    const { container } = render(<Portal />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and id', () => {
    const { getByText } = render(<Portal id="id-test">{content}</Portal>);

    expect(getByText(content).parentNode).toHaveAttribute('id', 'id-test');
  });
});
