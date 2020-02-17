import { render, fireEvent } from '@testing-library/react';

import SubHeader from '../index';

const content = 'im content';

describe('SubHeader', () => {
  test('should render', () => {
    const { getByRole } = render(<SubHeader />);

    expect(getByRole('heading')).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<SubHeader>{content}</SubHeader>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have title', () => {
    const { getByRole } = render(<SubHeader title="im title" />);

    const title = getByRole('heading');

    expect(title).toHaveTextContent('im title');
  });

  test('should have click back button and style back button', () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(
      <SubHeader title="im title" hasBack onClick={onClick} />
    );

    const title = getByText('im title');
    const button = getByRole('button');

    expect(title).toHaveStyle('margin: 0 0 0 5px;');
    expect(button).toMatchInlineSnapshot(`
      <button
        aria-disabled="false"
        class="jsx-405694134 "
        style="width: auto;"
        type="button"
      >
        <svg
          class="feather feather-chevron-left "
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
            <polyline
              points="15 18 9 12 15 6"
            />
          </g>
        </svg>
        
      </button>
    `);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
