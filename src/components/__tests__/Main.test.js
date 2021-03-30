import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Main from '../Main';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
  );
});

describe('Main component', () => {
  it('Renders correctly', () => {
    expect(screen.getByText(/Game Finder/i)).toBeInTheDocument();
  });

  it('Renders Signup button', () => {
    expect(screen.getByText(/Create an Account/i)).toBeInTheDocument();
  });

  it('Renders Login button', () => {
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
  });
});
