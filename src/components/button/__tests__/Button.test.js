import { render } from '@testing-library/react';

import Button from '../index';

describe('Anchor', () => {
  test('should render', () => {
    const { container } = render(<Button />);

    expect(container).toBeInTheDocument();
  });
});
