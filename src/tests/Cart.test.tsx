import { RouterProvider, createMemoryRouter } from 'react-router';

import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import routes from '../routes';
import '@testing-library/jest-dom';


describe('Cart functionality', () => {
  it('Click cart goes to /cart', async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop", "/cart"]
    });

    render(<RouterProvider router={router} />);

    const cartLink = screen.getByTestId("cart-link");
    expect(cartLink.textContent).toMatch(/Cart/i);

    await user.click(cartLink);

    expect(screen.getByTestId("cart-heading")).toBeInTheDocument();
  });
  it('Test removing item from cart', async () => {
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
    await user.click(cartLink);

    await waitFor(() => {
      expect(screen.getAllByTestId("remove-from-cart")[0]).toBeInTheDocument();
    });

    const removeFromCartButton = screen.getAllByTestId("remove-from-cart")[0];

    expect(removeFromCartButton.textContent).toMatch(/Remove/i);

    await user.click(removeFromCartButton);

    expect(removeFromCartButton).not.toBeInTheDocument();
    expect(cartLink.textContent).toMatch("My Cart (0)");
  });
});