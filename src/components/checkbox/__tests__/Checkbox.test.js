import { render } from '@testing-library/react';

import Checkbox from '../index';

describe('Anchor', () => {
  test('should render', () => {
    const { container } = render(<Checkbox />);

    expect(container).toBeInTheDocument();
  });
});
