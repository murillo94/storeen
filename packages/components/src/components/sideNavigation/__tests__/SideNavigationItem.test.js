import { render } from '@testing-library/react';

import { SideNavigationItem } from '../index';

import { theming } from '../../../theme/theming';

describe('SideNavigationItem', () => {
  test('should render', () => {
    const { getByRole } = render(<SideNavigationItem />);

    expect(getByRole('listitem')).toBeInTheDocument();
  });

  test('should have selected', () => {
    const { getByRole } = render(<SideNavigationItem isActive />);

    const listitem = getByRole('listitem');

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.gray200}; opacity: 1;`
    );
  });

  test('should have default theme', () => {
    const { getByRole, rerender } = render(
      <SideNavigationItem appearance="default" />
    );

    const listitem = getByRole('listitem');

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.blue700};`
    );

    rerender(<SideNavigationItem appearance="default" isActive />);

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.blue600};`
    );
  });

  test('should have default as minimal theme', () => {
    const { getByRole, rerender } = render(<SideNavigationItem />);

    const listitem = getByRole('listitem');

    expect(listitem).toHaveStyle('background-color: transparent');

    rerender(<SideNavigationItem isActive />);

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.gray200};`
    );
  });

  test('should have negative theme', () => {
    const { getByRole, rerender } = render(
      <SideNavigationItem appearance="negative" />
    );

    const listitem = getByRole('listitem');

    expect(listitem).toHaveStyle(`background-color: ${theming.colors.red700};`);

    rerender(<SideNavigationItem appearance="negative" isActive />);

    expect(listitem).toHaveStyle(`background-color: ${theming.colors.red600};`);
  });

  test('should have positive theme', () => {
    const { getByRole, rerender } = render(
      <SideNavigationItem appearance="positive" />
    );

    const listitem = getByRole('listitem');

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.green700};`
    );

    rerender(<SideNavigationItem appearance="positive" isActive />);

    expect(listitem).toHaveStyle(
      `background-color: ${theming.colors.green600};`
    );
  });
});
