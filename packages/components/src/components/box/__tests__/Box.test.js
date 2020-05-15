import { render } from '@testing-library/react';

import { Box } from '../index';

import { ThemeProvider } from '../../../theme/ThemeProvider';

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
    const { getByRole } = render(<Box as="button">{content}</Box>);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('should have props theme provider', () => {
    const Test = props => (
      <ThemeProvider>
        <Box
          as="button"
          margin={1}
          padding={2}
          styleConfig={{
            variants: {
              variant: {
                negative: {
                  backgroundColor: 'red100'
                },
                positive: {
                  backgroundColor: 'green100'
                }
              }
            }
          }}
          {...props}
        >
          {content}
        </Box>
      </ThemeProvider>
    );
    const { getByRole } = render(<Test variant="negative" />);

    const button = getByRole('button');

    expect(button).toHaveStyle(
      'margin: 5px; padding: 10px; background-color: #f4b6af;'
    );
  });
});
