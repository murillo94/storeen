import { render } from '@testing-library/react';

import { TableOptions } from '../index';

describe('TableOptions', () => {
  test('should render', () => {
    const { container } = render(<TableOptions />);

    expect(container).toBeInTheDocument();
  });
});
