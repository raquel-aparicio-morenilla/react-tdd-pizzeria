import { render, screen } from '@testing-library/react';
import App from './App';

test('renders menu', () => {
  render(<App />);
  const menu = screen.getByText("Menu");
  expect(menu).toBeInTheDocument();
});
