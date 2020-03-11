import { render } from '@testing-library/react';

import { Paragraph } from '../index';

import { gray900, gray800, purple700 } from '@storeen/system';

describe('Paragraph', () => {
  const ParagraphCustom = props => <Paragraph text="im p" {...props} />;

  test('should render', () => {
    const { container } = render(<Paragraph />);

    expect(container).toBeInTheDocument();
  });

  test('should be p with text', () => {
    const { getByText } = render(<ParagraphCustom />);

    const p = getByText('im p');

    expect(p).toContainHTML('<p class="jsx-3584975969">im p</p>');
  });

  test('should have inherit color', () => {
    const { getByText } = render(<ParagraphCustom />);

    expect(getByText('im p')).toHaveStyle('color: inherit;');
  });

  test('should have default color', () => {
    const { getByText } = render(<ParagraphCustom color="default" />);

    expect(getByText('im p')).toHaveStyle(`color: ${gray900};`);
  });

  test('should have muted color', () => {
    const { getByText } = render(<ParagraphCustom color="muted" />);

    expect(getByText('im p')).toHaveStyle(`color: ${gray800};`);
  });

  test('should have primary color', () => {
    const { getByText } = render(<ParagraphCustom color="primary" />);

    expect(getByText('im p')).toHaveStyle(`color: ${purple700};`);
  });

  test('should have custom style', () => {
    const { getByText } = render(
      <ParagraphCustom customStyle={{ padding: '10px' }} />
    );

    expect(getByText('im p')).toHaveStyle('padding: 10px;');
  });
});
