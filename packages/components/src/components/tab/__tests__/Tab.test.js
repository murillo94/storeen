import { render, fireEvent } from '@testing-library/react';

import { Tab } from '../index';

import {
  purple700,
  purple600,
  gray100,
  red700,
  red600,
  green700,
  green600,
  borderRadius6
} from '@storeen/system';

const content = 'im content';

describe('Tab', () => {
  test('should render', () => {
    const { getByRole } = render(<Tab />);

    expect(getByRole('tab')).toBeInTheDocument();
  });

  test('should have link', () => {
    const { getByRole } = render(
      <Tab text={content} icon="plus" href="https://www.href.com.br" />
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
      <Tab
        text={content}
        icon="plus"
        href="https://www.href.com.br"
        isExternal
      />
    );

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', 'https://www.href.com.br');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveTextContent(content);
    expect(getByRole('img')).toHaveAttribute('alt', 'plus');
  });

  test('should have button', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Tab text={content} icon="plus" onClick={onClick} />
    );

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);
    expect(onClick).not.toBeCalled();

    fireEvent.click(button);

    expect(onClick).toBeCalled();
    expect(getByRole('img')).toHaveAttribute('alt', 'plus');
  });

  test('should have selected', () => {
    const { getByRole } = render(<Tab selected />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${gray100}; opacity: 1;`);
  });

  test('should have selected with href', () => {
    const { getByRole } = render(<Tab href="mocked-path" />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${gray100}; opacity: 1;`);
  });

  test('should have default theme', () => {
    const { getByRole, rerender } = render(<Tab appearance="default" />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${purple700};`);
    expect(tab).toHaveStyle(`border-radius: ${borderRadius6};`);

    rerender(<Tab appearance="default" selected />);

    expect(tab).toHaveStyle(`background-color: ${purple600};`);
  });

  test('should have default as minimal theme', () => {
    const { getByRole, rerender } = render(<Tab />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle('background-color: transparent');
    expect(tab).toHaveStyle(`border-radius: ${borderRadius6};`);

    rerender(<Tab selected />);

    expect(tab).toHaveStyle(`background-color: ${gray100};`);
  });

  test('should have negative theme', () => {
    const { getByRole, rerender } = render(<Tab appearance="negative" />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${red700};`);
    expect(tab).toHaveStyle(`border-radius: ${borderRadius6};`);

    rerender(<Tab appearance="negative" selected />);

    expect(tab).toHaveStyle(`background-color: ${red600};`);
  });

  test('should have positive theme', () => {
    const { getByRole, rerender } = render(<Tab appearance="positive" />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${green700};`);
    expect(tab).toHaveStyle(`border-radius: ${borderRadius6};`);

    rerender(<Tab appearance="positive" selected />);

    expect(tab).toHaveStyle(`background-color: ${green600};`);
  });
});
