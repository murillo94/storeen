import { render } from '@testing-library/react';

import { TableHeadCell } from '../index';

describe('TableHeadCell', () => {
  test('should render', () => {
    const content = 'im content';
    const { getByRole } = render(<TableHeadCell>{content}</TableHeadCell>);

    expect(getByRole('columnheader')).toContainHTML(
      '<th class="jsx-2397789973">im content</th>'
    );
  });
});
