import { render } from '@testing-library/react';

import { Inline } from '../index';

const content = 'im content';

describe('Inline', () => {
  test('should render', () => {
    const { container } = render(<Inline />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByText } = render(<Inline>{content}</Inline>);

    const text = getByText(content);

    expect(text).toHaveClass('form-group');
    expect(text).toHaveStyle('flex-direction: column;');
  });

  test('shoud have proportional children', () => {
    const { getByText } = render(
      <Inline>
        <div>{content}</div>
      </Inline>
    );

    const children = getByText(content);

    expect(children).toHaveStyle('flex-grow: 1;');
  });

  test('shoud not have proportional children', () => {
    const { getByText } = render(
      <Inline isProportional={false}>
        <div>{content}</div>
      </Inline>
    );

    const children = getByText(content);

    expect(children).toHaveStyle('flex-grow: 0;');
  });
});
