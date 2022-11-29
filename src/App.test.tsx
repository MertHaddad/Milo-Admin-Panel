import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './pages/App';

test('Check if MAP word exists', () => {
  render(<App />);
  const linkElement = screen.getByText(/(MAP)/i);
  expect(linkElement).toBeInTheDocument();
});


test('background color should be dark blue', () => {
  render(<App />);

  const app = screen.getByTestId("header")
  expect(app).not.toHaveStyle(`backgroundColor:#282c34`);
})
