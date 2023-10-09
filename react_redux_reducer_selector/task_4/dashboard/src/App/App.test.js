import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// Mock the getLatestNotification function
jest.mock('../Utils/utils', () => ({
  getLatestNotification: jest.fn(() => 'This is a test notification'),
}));

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('displays login form when user is not logged in', () => {
    const { getByText, getByLabelText } = render(<App />);
    const loginForm = getByText('Log in to continue');
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');

    expect(loginForm).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('logs in the user', () => {
    const { getByText, getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const loginButton = getByText('Submit');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    // You may need to adjust this part depending on your implementation
    // For example, you might want to check if the user is now logged in
    // or if a specific component is rendered.
    // Here, we check if the login form is no longer in the document.
    expect(loginButton).not.toBeInTheDocument();
  });

  it('displays notifications when user is logged in', () => {
    const { getByText } = render(<App />);
    const notification = getByText('This is a test notification');
    expect(notification).toBeInTheDocument();
  });

  // Add more test cases for interactions, state changes, etc.
});
