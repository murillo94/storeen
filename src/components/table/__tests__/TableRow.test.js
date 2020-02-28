import { render, fireEvent } from '@testing-library/react';

import { TableRow } from '../index';

const content = 'im content';

describe('TableRow', () => {
  test('should render', () => {
    const { getByRole } = render(<TableRow>{content}</TableRow>);

    expect(getByRole('row')).toContainHTML(
      '<tr class="jsx-4156810590">im content</tr>'
    );
  });

  test('should have children ', () => {
    const { getByText } = render(<TableRow>{content}</TableRow>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<TableRow onClick={onClick} />);

    const row = getByRole('row');

    fireEvent.click(row);

    expect(onClick).toHaveBeenCalled();
  });
});
