import { render, fireEvent } from '@testing-library/react';

import { Label } from '../index';

import { mono900, mono700, primary700 } from 'utils/theme/colors';

describe('Label', () => {
  const LabelCustom = props => (
    <>
      <Label id="id-test" htmlFor="for-test" {...props}>
        content
      </Label>
      <input id="for-test" />
    </>
  );

  test('should render', () => {
    const { container } = render(<Label />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and id', () => {
    const { getByLabelText, queryByDisplayValue } = render(<LabelCustom />);

    const label = getByLabelText('content');

    expect(label).toHaveAttribute('id', 'for-test');
    expect(queryByDisplayValue('changed')).not.toBeInTheDocument();

    fireEvent.change(label, { target: { value: 'changed' } });

    expect(queryByDisplayValue('changed')).toBeInTheDocument();
  });

  test('should have inherit color', () => {
    const { getByText } = render(<LabelCustom />);

    expect(getByText('content')).toHaveStyle('color: inherit');
  });

  test('should have default color', () => {
    const { getByText } = render(<LabelCustom color="default" />);

    expect(getByText('content')).toHaveStyle(`color: ${mono900}`);
  });

  test('should have muted color', () => {
    const { getByText } = render(<LabelCustom color="muted" />);

    expect(getByText('content')).toHaveStyle(`color: ${mono700}`);
  });

  test('should have primary color', () => {
    const { getByText } = render(<LabelCustom color="primary" />);

    expect(getByText('content')).toHaveStyle(`color: ${primary700}`);
  });

  test('should have custom style', () => {
    const { getByText } = render(
      <LabelCustom customStyle={{ padding: '10px' }} />
    );

    expect(getByText('content')).toHaveStyle('padding: 10px');
  });
});