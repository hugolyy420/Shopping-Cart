import Card from '../../components/Shop/Card';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mockData from '../Mock-data/mock-data';

const mockObj = mockData[0];

describe('Card', () => {
  it('renders card details correctly', () => {
    render(
      <BrowserRouter>
        <Card {...mockObj} />
      </BrowserRouter>
    );
    const cardImage = screen.getByRole('img');
    const cardName = screen.getByText('iPhone 9');
    const cardPrice = screen.getByText(/549/);
    const cardRating = screen.getByText(/4.69/);
    const cardButton = screen.getByRole('button', { name: /Add to Cart/i });
    expect(cardImage.src).toContain(mockObj.thumbnail);
    expect(cardName.textContent).toBe(mockObj.title);
    expect(cardPrice.textContent).toBe(`$${mockObj.price}`);
    expect(Number(cardRating.textContent)).toBe(mockObj.rating);
    expect(cardButton).toBeInTheDocument();
  });
});
