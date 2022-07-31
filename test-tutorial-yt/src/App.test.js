import { render, screen } from '@testing-library/react';
import App from './App';

// 第一引数: testの内容
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});
