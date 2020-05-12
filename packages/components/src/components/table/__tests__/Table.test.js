import { render } from '@testing-library/react';

import { Table } from '../index';

const content = 'im content';

describe('Table', () => {
  test('should render', () => {
    const { getByRole } = render(<Table />);

    expect(getByRole('table')).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByText } = render(
      <Table>
        <tr>
          <td>{content}</td>
        </tr>
      </Table>
    );

    const children = getByText(content);

    expect(children.closest('div').parentNode).toHaveStyle(
      'box-shadow: 0 0 0 1px rgba(63,63,68,0.04),0 1px 3px 0 rgba(63,63,68,0.15); border: false;'
    );
  });

  test('should have title', () => {
    const { getByText, getByRole } = render(
      <Table title={content} optionsTitle="im options title" />
    );

    expect(getByText(content)).toBeInTheDocument();
    expect(getByText('im options title')).toBeInTheDocument();
    expect(getByRole('table')).toHaveAttribute('aria-label', content);
  });

  test('should have headers', () => {
    const { getByText } = render(
      <Table
        headers={['im header1', 'im header2']}
        optionsHeader="im options header"
      />
    );

    expect(getByText('im header1')).toBeInTheDocument();
    expect(getByText('im header2')).toBeInTheDocument();
    expect(getByText('im options header')).toBeInTheDocument();
  });

  test('should have style props', () => {
    const { getByText } = render(
      <Table hasBoxShadow={false} hasBorder>
        <tr>
          <td>{content}</td>
        </tr>
      </Table>
    );

    const children = getByText(content).closest('div').parentNode;

    expect(children).not.toHaveStyle(
      'box-shadow: 0 0 0 1px rgba(63,63,68,0.04),0 1px 3px 0 rgba(63,63,68,0.15);'
    );
    expect(children).toHaveStyle(
      `border-width: 1px; border-style: solid; border-color: gray100;`
    );
  });

  test('should have aria label', () => {
    const { getByRole } = render(<Table ariaLabel="im aria label" />);

    expect(getByRole('table')).toHaveAttribute('aria-label', 'im aria label');
  });

  test('should have input search', () => {
    const { getByPlaceholderText } = render(
      <Table hasSearch placeholderSearchSuffix="suffix test" />
    );

    expect(getByPlaceholderText('Buscar suffix test')).toHaveAttribute(
      'type',
      'text'
    );
  });
});
