import { render, fireEvent } from '@testing-library/react';

import { Badge } from '../index';

import { theming } from '../../../theme/theming';

const content = 'im text';

describe('Badge', () => {
  test('should render', () => {
    const { container } = render(<Badge />);

    expect(container).toBeInTheDocument();
  });

  test('should have text', () => {
    const { getByText, queryByRole } = render(<Badge>{content}</Badge>);

    const text = getByText(content);
    const button = queryByRole('button');

    expect(text).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Badge onClick={onClick}>{content}</Badge>);

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test('should have default theme', () => {
    const { getByText } = render(<Badge>{content}</Badge>);

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${theming.colors.blue700};`);
    expect(text).toHaveStyle(`border: 1px solid ${theming.colors.blue700};`);
  });

  test('should have minimal theme', () => {
    const { getByText } = render(<Badge appearance="minimal">{content}</Badge>);

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${theming.colors.gray200};`);
    expect(text).toHaveStyle(`border: 1px solid ${theming.colors.gray200};`);
  });

  test('should have negative theme', () => {
    const { getByText } = render(
      <Badge appearance="negative">{content}</Badge>
    );

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${theming.colors.red700};`);
    expect(text).toHaveStyle(`border: 1px solid ${theming.colors.red700};`);
  });

  test('should have positive theme', () => {
    const { getByText } = render(
      <Badge appearance="positive">{content}</Badge>
    );

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${theming.colors.green700};`);
    expect(text).toHaveStyle(`border: 1px solid ${theming.colors.green700};`);
  });
});
