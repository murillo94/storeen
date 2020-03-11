import { render, fireEvent } from '@testing-library/react';

import { MenuItem } from '../index';

const content = 'im content';

describe('MenuItem', () => {
  test('should render', () => {
    const { getByRole } = render(<MenuItem />);

    expect(getByRole('menuitem')).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<MenuItem>{content}</MenuItem>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have href', () => {
    const { getByRole } = render(
      <MenuItem href="https://www.href.com.br">{content}</MenuItem>
    );

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', 'https://www.href.com.br');
    expect(link).toHaveTextContent(content);
  });

  test('should have button', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <MenuItem onClick={onClick}>{content}</MenuItem>
    );

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
