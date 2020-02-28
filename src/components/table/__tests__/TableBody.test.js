import { render } from '@testing-library/react';

import { TableBody } from '../index';

describe('TableBody', () => {
  test('should render', () => {
    const content = 'im content';
    const { getByRole } = render(<TableBody>{content}</TableBody>);

    expect(getByRole('rowgroup')).toContainHTML('<tbody>im content</tbody>');
  });
});
