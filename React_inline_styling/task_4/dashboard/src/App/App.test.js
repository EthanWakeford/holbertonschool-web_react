import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import 'jest';

test('should render app', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John Doe');
});
