import { render, screen } from '@testing-library/react';
import App from './App';

test('shows the right welcome message', () => {
  render(<App />);
  const messageText = screen.getByText("Anisa's SATS Practise Website");
  expect(messageText).toBeInTheDocument();
});
