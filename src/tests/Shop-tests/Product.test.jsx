import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mockData from '../Mock-data/mock-data';
import Product from '../../components/Shop/Product';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import React from 'react';

vi.mock('react-router-dom', async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useParams: () => ({
      id: mockData[0].id
    }),
    useOutletContext: () => ({
      cartItems: [],
      setCartItems: vi.fn()
    })
  };
});

vi.mock('../API/useFetch', () => {
  return {
    products: mockData[0],
    isLoading: false,
    error: null
  };
});

vi.mock('../Carousel/Emblacarousel', () => ({
  __esModule: true,
  default: ({ images }) => (
    <div>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Slide ${index + 1}`} />
      ))}
    </div>
  )
}));

describe('Product', () => {
  beforeAll(() => {
    // Mock React useState and useEffect
    const setSlidesMock = vi.fn();
    vi.spyOn(React, 'useState').mockImplementation((initial) => [initial, setSlidesMock]);
    vi.spyOn(React, 'useEffect').mockImplementation((fn) => fn());
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

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

  it('add item to cart', () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    );
    const AddToCartButton = screen.getByRole('button', { name: /Add to Cart/i });
  });
});
