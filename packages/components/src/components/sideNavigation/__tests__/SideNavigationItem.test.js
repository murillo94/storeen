import { render } from '@testing-library/react';

import { SideNavigationItem } from '../index';

import { theming } from '../../../theme/theming';

const content = 'im content';

describe('SideNavigationItem', () => {
  test('should render', () => {
    const { getByRole } = render(<SideNavigationItem />);

    expect(getByRole('listitem')).toBeInTheDocument();
  });

  test('should have link', () => {
    const { getByRole } = render(
      <SideNavigationItem icon="plus" href="https://www.href.com.br">
        {content}
      </SideNavigationItem>
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
      <SideNavigationItem icon="plus" href="https://www.href.com.br" isExternal>
        {content}
      </SideNavigationItem>
    );

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', 'https://www.href.com.br');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveTextContent(content);
    expect(getByRole('img')).toHaveAttribute('alt', 'plus');
  });

  test('should have selected', () => {
    const { getByRole } = render(<SideNavigationItem href="mocked-path" />);

    const listitem = getByRole('listitem');

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.gray300}; opacity: 1;`
    );
  });

  test('should have default theme', () => {
    const { getByRole, rerender } = render(
      <SideNavigationItem appearance="default" href="test-href" />
    );

    const listitem = getByRole('listitem');

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.blue700};`
    );

    rerender(<SideNavigationItem appearance="default" href="mocked-path" />);

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.blue600};`
    );
  });

  test('should have default as minimal theme', () => {
    const { getByRole, rerender } = render(
      <SideNavigationItem href="test-href" />
    );

    const listitem = getByRole('listitem');

    expect(listitem).toHaveStyle('background-color: transparent');

    rerender(<SideNavigationItem href="mocked-path" />);

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.gray300};`
    );
  });

  test('should have negative theme', () => {
    const { getByRole, rerender } = render(
      <SideNavigationItem appearance="negative" href="test-href" />
    );

    const listitem = getByRole('listitem');

    expect(listitem).toHaveStyle(`background-color: ${theming.colors.red700};`);

    rerender(<SideNavigationItem appearance="negative" href="mocked-path" />);

    expect(listitem).toHaveStyle(`background-color: ${theming.colors.red600};`);
  });

  test('should have positive theme', () => {
    const { getByRole, rerender } = render(
      <SideNavigationItem appearance="positive" href="test-href" />
    );

    const listitem = getByRole('listitem');

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.green700};`
    );

    rerender(<SideNavigationItem appearance="positive" href="mocked-path" />);

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.green600};`
    );
  });
});
