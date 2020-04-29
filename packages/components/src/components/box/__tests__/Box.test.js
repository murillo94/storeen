import { render } from '@testing-library/react';

import { Box } from '../index';

const content = 'im content';

describe('Box', () => {
  test('should render', () => {
    const { container } = render(<Box />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and style', () => {
    const { getByText } = render(
      <Box sx={{ backgroundColor: 'red' }}>{content}</Box>
    );

    const box = getByText(content);

    expect(box).toHaveTextContent(content);
    expect(box).toHaveStyle('background-color: red;');
  });

  test('should have class name', () => {
    const { getByText } = render(
      <Box className="classname-test">{content}</Box>
    );

    const box = getByText(content);

    expect(box).toHaveClass('classname-test');
  });

  test('should have button', () => {
    const { getByRole } = render(<Box is="button">{content}</Box>);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
