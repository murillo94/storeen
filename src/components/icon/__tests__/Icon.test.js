import { render } from '@testing-library/react';

import Icon from '../index';

describe('Anchor', () => {
  test('should render', () => {
    const { container } = render(<Icon />);

    expect(container).toBeInTheDocument();
  });

  test('should have default values', () => {
    const { container } = render(<Icon />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <svg
          class="feather feather-help-circle "
          fill="none"
          height="18"
          stroke="#727272"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="18"
        >
          <g>
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <path
              d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
            />
            <line
              x1="12"
              x2="12"
              y1="17"
              y2="17"
            />
          </g>
        </svg>
      </div>
    `);
  });

  test('should have name, size and color', () => {
    const { container } = render(<Icon name="plus" size={20} color="red" />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <svg
          class="feather feather-plus "
          fill="none"
          height="20"
          stroke="red"
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
      </div>
    `);
  });
});
