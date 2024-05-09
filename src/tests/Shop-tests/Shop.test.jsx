import { Shop } from '../../components/Shop/Shop';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mockData from '../Mock-data/mock-data';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

vi.mock('../../components/API/useFetch', () => ({
  useFetch: () => ({
    products: mockData,
    isLoading: false,
    error: null
  })
}));

describe('Shop', () => {
  it('renders fetched items', async () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    const cards = await screen.findAllByRole('img');
    expect(cards.length).toBe(3);
  });

  it('filters products according to category', async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    const filterButton = await screen.findByRole('button', { name: /smartphones/i });
    await user.click(filterButton);
    expect(screen.getAllByRole('img').length).toBe(1);
  });

  it('clears category onclick', async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    const filterButton = await screen.findByRole('button', { name: /smartphones/i });
    await user.click(filterButton);
    expect(screen.getAllByRole('img').length).toBe(1);
    const clearFilterButton = await screen.findByRole('button', { name: /Clear Category/i });
    await user.click(clearFilterButton);
    expect(screen.getAllByRole('img').length).toBe(3);
  });

  it('sorts products according to rating', async () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    const cards = await screen.findAllByRole('img');
    expect(cards[0].src).toContain(mockData[2].thumbnail);
  });
});
