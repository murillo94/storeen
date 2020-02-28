import { render } from '@testing-library/react';

import Input from '../index';

describe('Input', () => {
  test('should render', () => {
    const { container } = render(<Input />);

    expect(container).toBeInTheDocument();
  });
});
