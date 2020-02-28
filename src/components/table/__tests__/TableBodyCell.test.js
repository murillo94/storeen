import { render } from '@testing-library/react';

import { TableBodyCell } from '../index';

describe('TableBodyCell', () => {
  test('should render', () => {
    const content = 'im content';
    const { getByRole } = render(<TableBodyCell>{content}</TableBodyCell>);

    expect(getByRole('cell')).toContainHTML(
      '<td class="jsx-2388911909">im content</td>'
    );
  });
});
