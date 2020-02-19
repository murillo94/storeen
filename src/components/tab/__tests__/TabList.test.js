import { render, fireEvent } from '@testing-library/react';

import { TabList } from '../index';

import {
  primary700,
  mono0,
  mono900,
  mono200,
  negative700,
  positive700
} from 'utils/theme/colors';

const content = 'im content';

describe('TabList', () => {
  test('should render', () => {
    const { getByRole } = render(<TabList />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByRole } = render(<TabList>{content}</TabList>);

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveStyle(`border: 1px solid ${primary700}`);
    expect(button).toHaveStyle('width: auto');
    expect(button).not.toBeDisabled();
  });

  test('should have type submit', () => {
    const { getByRole } = render(<TabList type="submit">{content}</TabList>);

    const button = getByRole('button');

    expect(button).toHaveAttribute('type', 'submit');
  });

  test('should have text and icon', () => {
    const { getByRole } = render(<TabList text="im button" icon="plus" />);

    const text = getByRole('button');

    expect(text).toMatchInlineSnapshot(`
      <button
        aria-disabled="false"
        class="jsx-976006719 "
        style="width: auto;"
        type="button"
      >
        <svg
          class="feather feather-plus "
          fill="none"
          height="17"
          stroke="#ffffff"
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
          im button
        </span>
      </button>
    `);
  });

  test('should not have border', () => {
    const { getByRole } = render(<TabList>{content}</TabList>);

    const button = getByRole('button');

    expect(button).toHaveStyle('border: none');
  });

  test('should be disabled', () => {
    const { getByRole } = render(<TabList disabled>{content}</TabList>);

    const button = getByRole('button');

    expect(button).toBeDisabled();
  });

  test('should have custom style', () => {
    const { getByRole } = render(
      <TabList customStyle={{ margin: '10px', backgroundColor: 'red' }}>
        {content}
      </TabList>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle('margin: 10px; background-color: red');
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <TabList onClick={onClick}>{content}</TabList>
    );

    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test('should have default theme', () => {
    const { getByRole } = render(<TabList>{content}</TabList>);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0}`);
    expect(button).toHaveStyle(`background-color: ${primary700}`);
    expect(button).toHaveStyle(`border: 1px solid ${primary700}`);
  });

  test('should have minimal theme', () => {
    const { getByRole } = render(
      <TabList appearance="minimal">{content}</TabList>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono900}`);
    expect(button).toHaveStyle('background-color: transparent');
    expect(button).toHaveStyle(`border: 1px solid ${mono200}`);
  });

  test('should have negative theme', () => {
    const { getByRole } = render(
      <TabList appearance="negative">{content}</TabList>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0}`);
    expect(button).toHaveStyle(`background-color: ${negative700}`);
    expect(button).toHaveStyle(`border: 1px solid ${negative700}`);
  });

  test('should have positive theme', () => {
    const { getByRole } = render(
      <TabList appearance="positive">{content}</TabList>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0}`);
    expect(button).toHaveStyle(`background-color: ${positive700}`);
    expect(button).toHaveStyle(`border: 1px solid ${positive700}`);
  });
});
