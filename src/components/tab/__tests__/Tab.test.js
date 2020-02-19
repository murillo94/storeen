import { render } from '@testing-library/react';

import { Tab } from '../index';

import { primary700, negative700, positive700 } from 'utils/theme/colors';
import { radius600 } from 'utils/theme/radius';

describe('Tab', () => {
  test('should render', () => {
    const { getByRole } = render(<Tab />);

    expect(getByRole('tab')).toBeInTheDocument();
  });

  test('should have text and icon', () => {});

  test('should have link', () => {});

  test('should have button', () => {});

  test('should have selected', () => {});

  test('should have selected with href', () => {});

  test('should have default theme', () => {
    const { getByRole } = render(<Tab appearance="default" />);

    const item = getByRole('tab');

    expect(item).toHaveStyle(`background-color: ${primary700}`);
    expect(item).toHaveStyle(`border-radius: ${radius600}`);
  });

  test('should have default as minimal theme', () => {
    const { getByRole } = render(<Tab />);

    const item = getByRole('tab');

    expect(item).toHaveStyle('background-color: transparent');
    expect(item).toHaveStyle(`border-radius: ${radius600}`);
  });

  test('should have negative theme', () => {
    const { getByRole } = render(<Tab appearance="negative" />);

    const item = getByRole('tab');

    expect(item).toHaveStyle(`background-color: ${negative700}`);
    expect(item).toHaveStyle(`border-radius: ${radius600}`);
  });

  test('should have positive theme', () => {
    const { getByRole } = render(<Tab appearance="positive" />);

    const item = getByRole('tab');

    expect(item).toHaveStyle(`background-color: ${positive700}`);
    expect(item).toHaveStyle(`border-radius: ${radius600}`);
  });
});
