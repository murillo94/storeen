import { render } from '@testing-library/react';

import { TableBodyCell } from '../index';

const content = 'im content';

describe('TableBodyCell', () => {
  test('should render', () => {
    const { getByRole } = render(<TableBodyCell>{content}</TableBodyCell>);

    expect(getByRole('cell')).toContainHTML(
      '<td class="jsx-2388911909">im content</td>'
    );
  });
});
