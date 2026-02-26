// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

function CartPage() {
  const { items, total } = useCart();

  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Product List</h2>
        {items.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <>
            <div style={{ display: "grid", gap: "50px" }}>
              {items.map((it) => (
                <CartItem key={it.id} item={it} />
              ))}
            </div>
            <hr />
            <h3>Total: ${total}</h3>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;
