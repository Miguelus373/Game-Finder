import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Session from '../Session';

describe('Session component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Session />
      </BrowserRouter>,
    );
  });

  it('Renders correctly', () => {
    expect(screen.getByRole(/heading/).textContent).toBe('Log In');
  });

  it('Renders correct message', () => {
    expect(screen.getByText(/Don't have an account/)).toBeInTheDocument();
  });

  it('Renders Login button', () => {
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
