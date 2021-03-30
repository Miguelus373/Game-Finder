import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Navbar title="Test nav" backArrow />
    </BrowserRouter>,
  );
});

describe('Navbar component', () => {
  it('Renders correctly', () => {
    expect(screen.getByText(/Test nav/i)).toBeInTheDocument();
  });

  it('Renders back arrow button', () => {
    expect(screen.getByAltText(/Go back/)).toBeInTheDocument();
  });

  it('Renders Login button', () => {
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
