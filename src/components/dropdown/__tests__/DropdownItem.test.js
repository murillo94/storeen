import { render, fireEvent } from '@testing-library/react';

import { DropdownItem } from '../index';

const content = 'im content';

describe('DropdownItem', () => {
  test('should render', () => {
    const { getByRole } = render(<DropdownItem />);

    expect(getByRole('menuitem')).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<DropdownItem>{content}</DropdownItem>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have href', () => {
    const { getByRole } = render(
      <DropdownItem href="https://www.google.com">{content}</DropdownItem>
    );

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', 'https://www.google.com');
    expect(link).toHaveTextContent(content);
  });

  test('should have button', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <DropdownItem onClick={onClick}>{content}</DropdownItem>
    );

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
