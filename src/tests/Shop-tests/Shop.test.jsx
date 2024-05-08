import { Shop } from '../../components/Shop/Shop';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mockData from '../Mock-data/mock-data';
import { vi } from 'vitest';

vi.mock('../../components/API/useFetch', () => ({
  useFetch: () => ({ products: mockData, isLoading: false, error: null })
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
  it('renders categories', async () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });
});
