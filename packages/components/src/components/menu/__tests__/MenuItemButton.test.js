import { render, fireEvent } from '@testing-library/react';

import { MenuItemButton } from '../index';

const content = 'im content';

describe('MenuItemButton', () => {
  test('should render', () => {
    const { getByRole } = render(<MenuItemButton />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<MenuItemButton>{content}</MenuItemButton>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have button', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <MenuItemButton onClick={onClick}>{content}</MenuItemButton>
    );

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
