import { render, fireEvent } from '@testing-library/react';

import { Tr } from '../index';

describe('Tr', () => {
  test('should render', () => {
    const { getByRole } = render(
      <table>
        <thead>
          <Tr />
        </thead>
      </table>
    );

    expect(getByRole('row')).toBeInTheDocument();
  });

  test('should have children ', () => {
    const content = 'im content';
    const { getByRole } = render(
      <table>
        <thead>
          <Tr>
            <th>{content}</th>
          </Tr>
        </thead>
      </table>
    );

    expect(getByRole('row')).toHaveTextContent(content);
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <table>
        <thead>
          <Tr onClick={onClick} />
        </thead>
      </table>
    );

    const row = getByRole('row');

    fireEvent.click(row);

    expect(onClick).toHaveBeenCalled();
  });
});
