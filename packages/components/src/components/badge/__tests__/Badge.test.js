import { render, fireEvent } from '@testing-library/react';

import { Badge } from '../index';

import { purple700, gray200, red700, green700 } from '@storeen/system';

const content = 'im text';

describe('Badge', () => {
  test('should render', () => {
    const { container } = render(<Badge />);

    expect(container).toBeInTheDocument();
  });

  test('should have text', () => {
    const { getByText, queryByRole } = render(<Badge text={content} />);

    const text = getByText(content);
    const button = queryByRole('button');

    expect(text).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Badge text={content} onClick={onClick} />);

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test('should have default theme', () => {
    const { getByText } = render(<Badge text={content} />);

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${purple700};`);
    expect(text).toHaveStyle(`border: 1px solid ${purple700};`);
  });

  test('should have minimal theme', () => {
    const { getByText } = render(<Badge appearance="minimal" text={content} />);

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${gray200};`);
    expect(text).toHaveStyle(`border: 1px solid ${gray200};`);
  });

  test('should have negative theme', () => {
    const { getByText } = render(
      <Badge appearance="negative" text={content} />
    );

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${red700};`);
    expect(text).toHaveStyle(`border: 1px solid ${red700};`);
  });

  test('should have positive theme', () => {
    const { getByText } = render(
      <Badge appearance="positive" text={content} />
    );

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${green700};`);
    expect(text).toHaveStyle(`border: 1px solid ${green700};`);
  });
});
