import { render, fireEvent } from '@testing-library/react';

import { Tab } from '../index';

import {
  primary700,
  primary600,
  mono100,
  negative700,
  negative600,
  positive700,
  positive600
} from 'utils/theme/colors';
import { radius600 } from 'utils/theme/radius';

const content = 'im content';

describe('Tab', () => {
  test('should render', () => {
    const { getByRole } = render(<Tab />);

    expect(getByRole('tab')).toBeInTheDocument();
  });

  test('should have text and icon when button', () => {
    const { getByRole } = render(<Tab text={content} icon="plus" />);

    expect(getByRole('button')).toMatchInlineSnapshot(`
      <button
        aria-disabled="false"
        aria-label=""
        class="jsx-774241038 "
        style="width: 100%;"
        type="button"
      >
        <svg
          alt="plus"
          aria-label="plus"
          class="feather feather-plus "
          fill="none"
          height="20"
          role="img"
          stroke="#717171"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="20"
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
          style="margin: 0px 0px 0px 10px; font-weight: 500;"
        >
          im content
        </span>
      </button>
    `);
  });

  test('should have text and icon when link', () => {
    const { getByRole } = render(
      <Tab text={content} icon="plus" href="https://www.href.com.br" />
    );

    expect(getByRole('link')).toMatchInlineSnapshot(`
      <a
        aria-label="im content"
        class="jsx-2031944086"
        href="https://www.href.com.br"
      >
        <svg
          alt="plus"
          aria-label="plus"
          class="feather feather-plus "
          fill="none"
          height="20"
          role="img"
          stroke="#717171"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="20"
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
          style="margin: 0px 0px 0px 10px; font-weight: 500;"
        >
          im content
        </span>
      </a>
    `);
  });

  test('should have link', () => {
    const { getByRole } = render(
      <Tab text={content} href="https://www.href.com.br" />
    );

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', 'https://www.href.com.br');
    expect(link).toHaveTextContent(content);
  });

  test('should have button', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Tab text={content} onClick={onClick} />);

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);
    expect(onClick).not.toBeCalled();

    fireEvent.click(button);

    expect(onClick).toBeCalled();
  });

  test('should have selected', () => {
    const { getByRole } = render(<Tab selected />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${mono100}; opacity: 1;`);
  });

  test('should have selected with href', () => {
    const { getByRole } = render(<Tab href="mocked-path" />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${mono100}; opacity: 1;`);
  });

  test('should have default theme', () => {
    const { getByRole, rerender } = render(<Tab appearance="default" />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${primary700};`);
    expect(tab).toHaveStyle(`border-radius: ${radius600};`);

    rerender(<Tab appearance="default" selected />);

    expect(tab).toHaveStyle(`background-color: ${primary600};`);
  });

  test('should have default as minimal theme', () => {
    const { getByRole, rerender } = render(<Tab />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle('background-color: transparent');
    expect(tab).toHaveStyle(`border-radius: ${radius600};`);

    rerender(<Tab selected />);

    expect(tab).toHaveStyle(`background-color: ${mono100};`);
  });

  test('should have negative theme', () => {
    const { getByRole, rerender } = render(<Tab appearance="negative" />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${negative700};`);
    expect(tab).toHaveStyle(`border-radius: ${radius600};`);

    rerender(<Tab appearance="negative" selected />);

    expect(tab).toHaveStyle(`background-color: ${negative600};`);
  });

  test('should have positive theme', () => {
    const { getByRole, rerender } = render(<Tab appearance="positive" />);

    const tab = getByRole('tab');

    expect(tab).toHaveStyle(`background-color: ${positive700};`);
    expect(tab).toHaveStyle(`border-radius: ${radius600};`);

    rerender(<Tab appearance="positive" selected />);

    expect(tab).toHaveStyle(`background-color: ${positive600};`);
  });
});
