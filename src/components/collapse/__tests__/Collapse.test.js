import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import Collapse from '../index';

const children = 'children';

describe('Collapse', () => {
  test('should render', () => {
    const { container } = render(<Collapse />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByText } = render(
      <Collapse content={<button>content</button>}>{children}</Collapse>
    );

    const customChildren = getByText(children);

    expect(customChildren).not.toBeVisible();

    const content = getByText('content');

    fireEvent.click(content);

    expect(customChildren).toBeVisible();
    expect(customChildren.parentNode).not.toHaveStyle('margin-bottom: 20px;');
  });

  test('should have children isOpen is true', () => {
    const { getByText } = render(<Collapse isOpen>{children}</Collapse>);

    const customChildren = getByText(children);

    expect(customChildren).toBeInTheDocument();
    expect(customChildren).toBeVisible();
  });

  test('should have margin bottom', () => {
    const { getByText } = render(
      <Collapse hasMarginBottom>{children}</Collapse>
    );

    const customChildren = getByText(children);
    expect(customChildren.parentNode).toHaveStyle('margin-bottom: 20px;');
  });

  test('should have default action click', () => {
    const onClick = jest.fn();
    const Test = () => {
      const [count, setCount] = useState(0);
      return (
        <button
          onClick={() => {
            onClick(count + 1);
            setCount(count + 1);
          }}
        >
          {count}
        </button>
      );
    };

    const { getByText } = render(
      <Collapse content={<Test />}>{children}</Collapse>
    );
    const content0 = getByText('0');

    expect(content0).toBeInTheDocument();
    expect(onClick).not.toBeCalled();

    fireEvent.click(content0);

    const content1 = getByText('1');

    expect(content1).toBeInTheDocument();
    expect(onClick).toBeCalledWith(1);
  });
});
