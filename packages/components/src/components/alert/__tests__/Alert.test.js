import { render } from '@testing-library/react';

import { Alert } from '../index';

import { theming } from '../../../theme/theming';

const content = 'im content';

describe('Alert', () => {
  test('should render', () => {
    const { getByRole } = render(<Alert />);

    expect(getByRole('alert')).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<Alert>{content}</Alert>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have title and description', () => {
    const { getByRole, getByText } = render(
      <Alert title="im title" description="im description" />
    );

    const title = getByRole('heading');
    const description = getByText('im description');

    expect(title).toHaveTextContent('im title');
    expect(description).toBeInTheDocument();
  });

  test('should have default theme', () => {
    const { getByText } = render(<Alert appearance="default">{content}</Alert>);

    const text = getByText(content);

    expect(text).toHaveStyle('border-left-width: 4px;');
    expect(text).toHaveStyle('border-left-style: solid;');
    expect(text).toHaveStyle(`border-left-color: ${theming.colors.blue700};`);
  });

  test('should have minimal theme', () => {
    const { getByText } = render(<Alert appearance="minimal">{content}</Alert>);

    const text = getByText(content);

    expect(text).toHaveStyle('border-left-width: 4px;');
    expect(text).toHaveStyle('border-left-style: solid;');
    expect(text).toHaveStyle(`border-left-color: ${theming.colors.gray200};`);
  });

  test('should have negative theme', () => {
    const { getByText } = render(
      <Alert appearance="negative">{content}</Alert>
    );

    const text = getByText(content);

    expect(text).toHaveStyle('border-left-width: 4px;');
    expect(text).toHaveStyle('border-left-style: solid;');
    expect(text).toHaveStyle(`border-left-color: ${theming.colors.red700};`);
  });

  test('should have default as positive theme', () => {
    const { getByText } = render(<Alert>{content}</Alert>);

    const text = getByText(content);

    expect(text).toHaveStyle('border-left-width: 4px;');
    expect(text).toHaveStyle('border-left-style: solid;');
    expect(text).toHaveStyle(`border-left-color: ${theming.colors.green700};`);
  });
});
