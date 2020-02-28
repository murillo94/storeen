import { render } from '@testing-library/react';

import { TextTableCell } from '../index';

const content = 'im content';

describe('TextTableCell', () => {
  test('should render', () => {
    const { container } = render(<TextTableCell />);

    expect(container).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<TextTableCell>{content}</TextTableCell>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have text and custom style', () => {
    const { getByText } = render(
      <TextTableCell text={content} textCustomStyle={{ margin: '10px' }} />
    );

    expect(getByText(content)).toHaveStyle('margin: 10px;');
  });
});
