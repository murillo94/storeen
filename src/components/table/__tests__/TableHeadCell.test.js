import { render } from '@testing-library/react';

import { TableHeadCell } from '../index';

const content = 'im content';

describe('TableHeadCell', () => {
  test('should render', () => {
    const { getByRole } = render(<TableHeadCell>{content}</TableHeadCell>);

    expect(getByRole('columnheader')).toContainHTML(
      '<th class="jsx-2397789973">im content</th>'
    );
  });
});
