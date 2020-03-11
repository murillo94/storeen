import { render } from '@testing-library/react';

import { Text } from '../index';

import { gray900, gray800, purple700 } from '@storeen/system';

describe('Text', () => {
  const SpanCustom = props => <Text text="im span" {...props} />;

  test('should render', () => {
    const { container } = render(<Text />);

    expect(container).toBeInTheDocument();
  });

  test('should be p with text', () => {
    const { getByText } = render(<SpanCustom />);

    const span = getByText('im span');

    expect(span).toContainHTML('<span class="jsx-3533282834">im span</span>');
  });

  test('should have inherit color', () => {
    const { getByText } = render(<SpanCustom />);

    expect(getByText('im span')).toHaveStyle('color: inherit;');
  });

  test('should have default color', () => {
    const { getByText } = render(<SpanCustom color="default" />);

    expect(getByText('im span')).toHaveStyle(`color: ${gray900};`);
  });

  test('should have muted color', () => {
    const { getByText } = render(<SpanCustom color="muted" />);

    expect(getByText('im span')).toHaveStyle(`color: ${gray800};`);
  });

  test('should have primary color', () => {
    const { getByText } = render(<SpanCustom color="primary" />);

    expect(getByText('im span')).toHaveStyle(`color: ${purple700};`);
  });

  test('should have custom style', () => {
    const { getByText } = render(
      <SpanCustom customStyle={{ padding: '10px' }} />
    );

    expect(getByText('im span')).toHaveStyle('padding: 10px;');
  });
});
