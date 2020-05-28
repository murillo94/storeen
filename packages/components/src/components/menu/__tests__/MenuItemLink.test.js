import { render } from '@testing-library/react';

import { MenuItemLink } from '../index';

const content = 'im content';

describe('MenuItemLink', () => {
  test('should render', () => {
    const { getByRole } = render(<MenuItemLink />);

    expect(getByRole('link')).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<MenuItemLink>{content}</MenuItemLink>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have href', () => {
    const { getByRole } = render(
      <MenuItemLink href="https://www.href.com.br">{content}</MenuItemLink>
    );

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', 'https://www.href.com.br');
    expect(link).toHaveTextContent(content);
  });
});
