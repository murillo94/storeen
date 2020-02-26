import { render } from '@testing-library/react';

import { TableRow } from '../index';

const content = 'im content';

describe('TableRow', () => {
  test('should render', () => {
    const { getByRole } = render(<TableRow>{content}</TableRow>);

    expect(getByRole('row')).toContainHTML(
      '<tr class="jsx-4156810590">im content</tr>'
    );
  });
});
