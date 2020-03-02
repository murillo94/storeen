import { render, fireEvent } from '@testing-library/react';

import { Dropdown } from '../index';

import {
  primary700,
  mono0,
  mono900,
  mono200,
  negative700,
  positive700
} from 'utils/theme/colors';

const content = 'im content';

describe('Dropdown', () => {
  test('should render', () => {
    const { getByRole } = render(<Dropdown />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<Dropdown>{content}</Dropdown>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have id', () => {
    const { getByRole } = render(<Dropdown id="id-test" />);

    expect(getByRole('button')).toHaveAttribute('aria-controls', 'id-test');
  });

  test('should have icon and text', () => {
    const { getByRole } = render(<Dropdown icon="plus" text="im text" />);

    expect(getByRole('button')).toMatchInlineSnapshot(`
      <button
        aria-disabled="false"
        aria-expanded="false"
        aria-haspopup="menu"
        class="jsx-405694134 "
        style="width: auto;"
        type="button"
      >
        <svg
          class="feather feather-plus "
          fill="none"
          height="17"
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
          class="jsx-2151508852"
          style="margin: 0px 0px 0px 5px;"
        >
          im text
        </span>
      </button>
    `);
  });

  test('should have visible', () => {
    const { getByRole } = render(<Dropdown visible />);

    expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });

  test('should have border', () => {
    const { getByRole } = render(<Dropdown hasBorder />);

    expect(getByRole('button')).toHaveStyle(`border: 1px solid ${mono200}`);
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Dropdown onClick={onClick} />);

    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test('should have default theme', () => {
    const { getByRole } = render(<Dropdown appearance="default" />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0}`);
    expect(button).toHaveStyle(`background-color: ${primary700}`);
  });

  test('should have default as minimal theme', () => {
    const { getByRole } = render(<Dropdown />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono900}`);
    expect(button).toHaveStyle('background-color: transparent');
  });

  test('should have negative theme', () => {
    const { getByRole } = render(<Dropdown appearance="negative" />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0}`);
    expect(button).toHaveStyle(`background-color: ${negative700}`);
  });

  test('should have positive theme', () => {
    const { getByRole } = render(<Dropdown appearance="positive" />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0}`);
    expect(button).toHaveStyle(`background-color: ${positive700}`);
  });
});
