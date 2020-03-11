import { render, fireEvent } from '@testing-library/react';

import { Menu } from '../index';

import {
  primary700,
  mono0,
  mono900,
  mono200,
  negative700,
  positive700
} from '@storeen/system/src/utils/theme/colors';

const content = 'im content';

describe('Menu', () => {
  test('should render', () => {
    const { getByRole } = render(<Menu />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<Menu>{content}</Menu>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have id', () => {
    const { getByRole } = render(<Menu id="id-test" />);

    expect(getByRole('button')).toHaveAttribute('aria-controls', 'id-test');
  });

  test('should have icon and text', () => {
    const { getByRole } = render(<Menu icon="plus" text="im text" />);

    expect(getByRole('button')).toMatchInlineSnapshot(`
      <button
        aria-disabled="false"
        aria-expanded="false"
        aria-haspopup="menu"
        aria-label="im text"
        class="jsx-405694134 "
        style="width: auto;"
        type="button"
      >
        <svg
          alt="plus"
          aria-label="plus"
          class="feather feather-plus "
          fill="none"
          height="17"
          role="img"
          stroke="#333333"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="17"
        >
          <g>
            <line
              x1="12"
              x2="12"
              y1="5"
              y2="19"
            />
            <line
              x1="5"
              x2="19"
              y1="12"
              y2="12"
            />
          </g>
        </svg>
        <span
          class="jsx-3533282834"
          style="margin: 0px 0px 0px 5px;"
        >
          im text
        </span>
      </button>
    `);
  });

  test('should have visible', () => {
    const { getByRole } = render(<Menu visible />);

    expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });

  test('should have border', () => {
    const { getByRole } = render(<Menu hasBorder />);

    expect(getByRole('button')).toHaveStyle(`border: 1px solid ${mono200};`);
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Menu onClick={onClick} />);

    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test('should have default theme', () => {
    const { getByRole } = render(<Menu appearance="default" />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0};`);
    expect(button).toHaveStyle(`background-color: ${primary700};`);
  });

  test('should have default as minimal theme', () => {
    const { getByRole } = render(<Menu />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono900};`);
    expect(button).toHaveStyle('background-color: transparent;');
  });

  test('should have negative theme', () => {
    const { getByRole } = render(<Menu appearance="negative" />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0};`);
    expect(button).toHaveStyle(`background-color: ${negative700};`);
  });

  test('should have positive theme', () => {
    const { getByRole } = render(<Menu appearance="positive" />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0};`);
    expect(button).toHaveStyle(`background-color: ${positive700};`);
  });
});
