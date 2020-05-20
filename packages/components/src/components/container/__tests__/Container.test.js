import { render } from '@testing-library/react';

import { Container } from '../index';

const content = 'im content';

describe('Container', () => {
  test('should render', () => {
    const { container } = render(<Container />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByText } = render(<Container>{content}</Container>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have title, optionsTitle and subTitle', () => {
    const { getByRole, getByText } = render(
      <Container
        title="im title"
        optionsTitle="im options title"
        subTitle="im sub title"
      />
    );

    expect(getByRole('heading')).toHaveTextContent('im title');
    expect(getByText('im options title')).toBeInTheDocument();
    expect(getByText('im sub title')).toBeInTheDocument();
  });

  test('should have vertical orientation', () => {
    const { getByText } = render(
      <Container orientation="vertical">{content}</Container>
    );

    expect(getByText(content)).toHaveClass('vertical');
  });

  test('should have horizontal orientation', () => {
    const { getByText } = render(
      <Container orientation="horizontal">{content}</Container>
    );

    expect(getByText(content)).toHaveClass('horizontal');
  });

  test('should have left align', () => {
    const { getByText } = render(<Container align="left">{content}</Container>);

    expect(getByText(content)).toHaveClass('left');
  });

  test('should have right align', () => {
    const { getByText } = render(
      <Container align="right">{content}</Container>
    );

    expect(getByText(content)).toHaveClass('right');
  });

  test('should have between align', () => {
    const { getByText } = render(
      <Container align="between">{content}</Container>
    );

    expect(getByText(content)).toHaveClass('between');
  });
});
