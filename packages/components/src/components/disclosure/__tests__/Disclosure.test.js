import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Disclosure } from '../index';
import { Checkbox } from '../../checkbox';

const children = 'im children';

describe('Disclosure', () => {
  test('should render', () => {
    const { container } = render(<Disclosure />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByRole, getByText } = render(
      <Disclosure as={<button>im content</button>}>{children}</Disclosure>
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

  test('should have children visible when isChecked as component is true', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Disclosure
        as={
          <Checkbox
            id="code"
            name="promotional.hasPromotional"
            value="hasPromotional"
            isChecked
            onChange={onChange}
          >
            im checkbox
          </Checkbox>
        }
      >
        {children}
      </Disclosure>
    );

    const customChildren = getByText(children);

    expect(customChildren).toBeVisible();
  });

  test('should have children visible when isVisible is true', () => {
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
      <Disclosure as={<Test />}>{children}</Disclosure>
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
