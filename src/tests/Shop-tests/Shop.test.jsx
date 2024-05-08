import { Shop } from '../../components/Shop/Shop';
import Categories from '../../components/Shop/Categories';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mockData from '../Mock-data/mock-data';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

const categories = mockData.map((data) => data.category);

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

  it('filters products based on category', async () => {
    const user = userEvent.setup();
    const filterProducts = vi.fn();
    render(
      <BrowserRouter>
        <Categories filterProducts={filterProducts} categories={categories} />
      </BrowserRouter>
    );
    const filterButton = await screen.findByRole('button', { name: /smartphones/i });
    await user.click(filterButton);
    expect(filterProducts).toHaveBeenCalled();
  });
});
