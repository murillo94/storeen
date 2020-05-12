import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Disclosure } from '../index';

const children = 'im children';

describe('Disclosure', () => {
  test('should render', () => {
    const { container } = render(<Disclosure />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByRole, getByText } = render(
      <Disclosure content={<button>im content</button>}>{children}</Disclosure>
    );

    const customChildren = getByText(children);

    expect(customChildren).not.toBeVisible();

    const content = getByText('im content');

    expect(content).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(content);

    const region = getByRole('region');

    expect(content).toHaveAttribute('aria-expanded', 'true');

    expect(region).toBeVisible();
  });

  test('should have children isVisible is true', () => {
    const { getByText } = render(<Disclosure isVisible>{children}</Disclosure>);

    const customChildren = getByText(children);

    expect(customChildren).toBeVisible();
  });

  test('should have margin bottom', () => {
    const { getByText } = render(
      <Disclosure hasMarginBottom>{children}</Disclosure>
    );

    const customChildren = getByText(children);
    expect(customChildren.parentNode).toHaveStyle('margin-bottom: 4px;');
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
      <Disclosure content={<Test />}>{children}</Disclosure>
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
