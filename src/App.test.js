import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site assistant demo', () => {
  render(<App />);
  const headerElement = screen.getByText(/Site Assistant Demo/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to the Site Assistant Demo/i);
  expect(welcomeElement).toBeInTheDocument();
});
