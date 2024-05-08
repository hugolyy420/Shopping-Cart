// App.test.jsx

import { render, screen } from '@testing-library/react';
import { Header } from '../../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders a logo image', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByAltText(/home logo/i)).toBeInTheDocument();
  });

  it('renders a nav bar', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getAllByRole('link')).not.toHaveLength(0);
  });

  it('renders a home link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('renders a shop link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument();
  });
});
