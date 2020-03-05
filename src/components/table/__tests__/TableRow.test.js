import { render, fireEvent } from '@testing-library/react';

import { TableRow } from '../index';

describe('TableRow', () => {
  test('should render', () => {
    const { getByRole } = render(<TableRow />);

    expect(getByRole('row')).toBeInTheDocument();
  });

  test('should have children ', () => {
    const content = 'im content';
    const { getByRole } = render(<TableRow>{content}</TableRow>);

    expect(getByRole('row')).toHaveTextContent(content);
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<TableRow onClick={onClick} />);

    const row = getByRole('row');

    fireEvent.click(row);

    expect(onClick).toHaveBeenCalled();
  });
});
