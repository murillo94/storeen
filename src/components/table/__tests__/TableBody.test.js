import { render } from '@testing-library/react';

import { TableBody } from '../index';

const content = 'im content';

describe('TableBody', () => {
  test('should render', () => {
    const { getByRole } = render(<TableBody>{content}</TableBody>);

    expect(getByRole('rowgroup')).toContainHTML('<tbody>im content</tbody>');
  });
});
