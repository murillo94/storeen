import { render } from '@testing-library/react';

import { SideNavigationItemLink } from '../index';

const content = 'im content';

describe('SideNavigationItemLink', () => {
  test('should render', () => {
    const { getByRole } = render(<SideNavigationItemLink />);

    expect(getByRole('link')).toBeInTheDocument();
  });

  test('should have link', () => {
    const { getByRole } = render(
      <SideNavigationItemLink icon="plus" href="https://www.href.com.br">
        {content}
      </SideNavigationItemLink>
    );

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', 'https://www.href.com.br');
    expect(link).not.toHaveAttribute('target', '_blank');
    expect(link).not.toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveTextContent(content);
    expect(getByRole('img')).toHaveAttribute('alt', 'plus');
  });

  test('should have link external', () => {
    const { getByRole } = render(
      <SideNavigationItemLink
        icon="plus"
        href="https://www.href.com.br"
        isExternal
      >
        {content}
      </SideNavigationItemLink>
    );

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', 'https://www.href.com.br');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveTextContent(content);
    expect(getByRole('img')).toHaveAttribute('alt', 'plus');
  });
});
