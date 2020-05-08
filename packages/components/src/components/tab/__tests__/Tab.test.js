import { render } from '@testing-library/react';

import { Tab } from '../index';

import { theming } from '../../../theme/theming';

const content = 'im content';

describe('Tab', () => {
  test('should render', () => {
    const { getByRole } = render(<Tab />);

    expect(getByRole('tab')).toBeInTheDocument();
  });

  test('should have link', () => {
    const { getByRole } = render(
      <Tab icon="plus" href="https://www.href.com.br">
        {content}
      </Tab>
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
      <Tab icon="plus" href="https://www.href.com.br" isExternal>
        {content}
      </Tab>
    );

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', 'https://www.href.com.br');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveTextContent(content);
    expect(getByRole('img')).toHaveAttribute('alt', 'plus');
  });

  test('should have selected', () => {
    const { getByRole } = render(<Tab href="mocked-path" />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(
      `background-color: ${theming.colors.gray100}; opacity: 1;`
    );
  });

  test('should have default theme', () => {
    const { getByRole, rerender } = render(
      <Tab appearance="default" href="test-href" />
    );

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${theming.colors.purple700};`);

    rerender(<Tab appearance="default" href="mocked-path" />);

    expect(tab).toHaveStyle(`background-color: ${theming.colors.purple600};`);
  });

  test('should have default as minimal theme', () => {
    const { getByRole, rerender } = render(<Tab href="test-href" />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle('background-color: transparent');

    rerender(<Tab href="mocked-path" />);

    expect(tab).toHaveStyle(`background-color: ${theming.colors.gray100};`);
  });

  test('should have negative theme', () => {
    const { getByRole, rerender } = render(
      <Tab appearance="negative" href="test-href" />
    );

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${theming.colors.red700};`);

    rerender(<Tab appearance="negative" href="mocked-path" />);

    expect(tab).toHaveStyle(`background-color: ${theming.colors.red600};`);
  });

  test('should have positive theme', () => {
    const { getByRole, rerender } = render(
      <Tab appearance="positive" href="test-href" />
    );

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${theming.colors.green700};`);

    rerender(<Tab appearance="positive" href="mocked-path" />);

    expect(tab).toHaveStyle(`background-color: ${theming.colors.green600};`);
  });
});
