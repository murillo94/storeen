import { render } from '@testing-library/react';

import { Paragraph } from '../index';

import { theming } from '../../../theme/theming';

describe('Paragraph', () => {
  const ParagraphCustom = props => <Paragraph {...props}>im p</Paragraph>;

  test('should render', () => {
    const { container } = render(<Paragraph />);

    expect(container).toBeInTheDocument();
  });

  test('should be p with text', () => {
    const { container } = render(<ParagraphCustom />);

    const paragraph = container.querySelector('p');

    expect(paragraph).toHaveTextContent('im p');
  });

  test('should have inherit color', () => {
    const { getByText } = render(<ParagraphCustom />);

    expect(getByText('im p')).toHaveStyle('color: inherit;');
  });

  test('should have default color', () => {
    const { getByText } = render(<ParagraphCustom color="default" />);

    expect(getByText('im p')).toHaveStyle(`color: ${theming.colors.gray900};`);
  });

  test('should have muted color', () => {
    const { getByText } = render(<ParagraphCustom color="muted" />);

    expect(getByText('im p')).toHaveStyle(`color: ${theming.colors.gray800};`);
  });

  test('should have primary color', () => {
    const { getByText } = render(<ParagraphCustom color="primary" />);

    expect(getByText('im p')).toHaveStyle(`color: ${theming.colors.purple700};`);
  });

  test('should have custom style', () => {
    const { getByText } = render(<ParagraphCustom sx={{ padding: '10px' }} />);

    expect(getByText('im p')).toHaveStyle('padding: 10px;');
  });
});
