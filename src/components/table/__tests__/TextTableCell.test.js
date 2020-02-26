import { render } from '@testing-library/react';

import { TextTableCell } from '../index';

describe('TextTableCell', () => {
  test('should render', () => {
    const { container } = render(<TextTableCell />);

    expect(container).toBeInTheDocument();
  });
});
