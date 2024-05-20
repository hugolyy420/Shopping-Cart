import { render, screen } from '@testing-library/react';
import Cart from '../../components/Cart/Cart';
import { BrowserRouter } from 'react-router-dom';
import { expect, vi } from 'vitest';
import mockData from '../Mock-data/mock-data';

vi.mock('react-router-dom', async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useOutletContext: () => ({
      cartItems: [mockData[0]],
      setCartItems: vi.fn()
    })
  };
});

describe('Cart', () => {
  it('renders items', () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(2);
    expect(screen.getAllByRole('img').length).toBe(1);
    expect(screen.getAllByTestId('price').length).toBe(1);
    expect(screen.getAllByRole('spinbutton').length).toBe(1);
    expect(screen.getAllByRole('button', { name: '+' }).length).toBe(1);
    expect(screen.getAllByRole('button', { name: '-' }).length).toBe(1);
  });

  it('calculates total', () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );
    expect(screen.getByText('$1098')).toBeInTheDocument();
  });

  it('renders current quantity of items', () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );
    const result = screen.getAllByRole('spinbutton').map((item) => item.value);
    expect(result).toStrictEqual(['2']);
  });
});
