import { render, screen } from '@testing-library/react';
import Romans from './Romans';

test('shows the correct heading', () => {
  render(<Romans />);
  const heading = screen.getByText('animals');
  expect(heading).toBeInTheDocument();
});
