import { RouterProvider, createMemoryRouter } from 'react-router';

import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import routes from '../routes';
import '@testing-library/jest-dom';


describe('Shop functionality', () => {
  it('Click shop goes to /shop', async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"]
    });

    render(<RouterProvider router={router} />);

    const shopLink = screen.getByTestId("shop-link");
    expect(shopLink.textContent).toMatch(/Shop/i);

    await user.click(shopLink);

    expect(screen.getByText(/My Shop/i)).toBeInTheDocument();
  });
  it('Clicking on an add to cart button adds item to cart', async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop", "/cart"]
    });

    render(<RouterProvider router={router} />);

    const shopLink = screen.getByTestId("shop-link");
    const cartLink = screen.getByTestId("cart-link");

    await user.click(shopLink);

    // wait for the API content to load
    await waitFor(() => {
      expect(screen.getAllByTestId("add-to-cart")[0]).toBeInTheDocument();
    });

    const addToCartButton = screen.getAllByTestId("add-to-cart")[0];
    expect(addToCartButton.textContent).toMatch(/Add to Cart/i);

    await user.click(addToCartButton);

    expect(cartLink.textContent).toMatch("My Cart (1)");
  });
});