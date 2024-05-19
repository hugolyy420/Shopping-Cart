import { render, screen } from '@testing-library/react';
import Cart from '../../components/Cart/Cart';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

vi.mock('react-router-dom', async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useOutletContext: () => ({
      cartItems: [],
      setCartItems: vi.fn()
    })
  };
});

describe('Cart', () => {
  it('renders message when cart is empty', () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});
