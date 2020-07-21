import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders about link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});