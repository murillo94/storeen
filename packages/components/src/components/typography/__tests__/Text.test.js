import { render } from '@testing-library/react';

import { Text } from '../index';

import { gray900, gray800, purple700 } from '@storeen/system';

describe('Text', () => {
  const TextCustom = props => <Text text="im span" {...props} />;

  test('should render', () => {
    const { container } = render(<Text />);

    expect(container).toBeInTheDocument();
  });

  test('should be span with text', () => {
    const { container } = render(<TextCustom />);

    const span = container.querySelector('span');

    expect(span).toHaveTextContent('im span');
  });

  test('should have inherit color', () => {
    const { getByText } = render(<TextCustom />);

    expect(getByText('im span')).toHaveStyle('color: inherit;');
  });

  test('should have default color', () => {
    const { getByText } = render(<TextCustom color="default" />);

    expect(getByText('im span')).toHaveStyle(`color: ${gray900};`);
  });

  test('should have muted color', () => {
    const { getByText } = render(<TextCustom color="muted" />);

    expect(getByText('im span')).toHaveStyle(`color: ${gray800};`);
  });

  test('should have primary color', () => {
    const { getByText } = render(<TextCustom color="primary" />);

    expect(getByText('im span')).toHaveStyle(`color: ${purple700};`);
  });

  test('should have custom style', () => {
    const { getByText } = render(
      <TextCustom customStyle={{ padding: '10px' }} />
    );

    expect(getByText('im span')).toHaveStyle('padding: 10px;');
  });
});
