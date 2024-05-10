import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mockData from '../Mock-data/mock-data';
import Product from '../../components/Shop/Product';
import { vi } from 'vitest';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useLocation: () => ({
      state: mockData[0]
    }),
    useParams: () => ({
      id: mockData[0].id
    })
  };
});

describe('Product', () => {
  it('renders product details', () => {
    render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    );
    const productImages = screen.getAllByRole('img');
    const productTitle = screen.getByRole('heading', { level: 2 });
    const productRating = screen.getByText('4.69');
    const productPrice = screen.getByText('549');
    const productDescription = screen.getByText('An apple mobile which is nothing like apple');
    const AddToCartButton = screen.getByRole('button', { name: /Add to Cart/i });
    const BackLink = screen.getByRole('link', { name: /back/i });
    expect(productImages.length).toBe(5);
    expect(productTitle.textContent).toBe(mockData[0].title);
    expect(productRating).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(AddToCartButton).toBeInTheDocument();
    expect(BackLink).toBeInTheDocument();
  });
});
