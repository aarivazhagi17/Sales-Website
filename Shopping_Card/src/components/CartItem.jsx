// src/components/CartItem.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';

function CartItem({ item }) {
  const { decrementItem, addItem, removeItem } = useCart();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
      <div flex="1">
        <img style={{height:"100px", width:"100px"}} src={item.image} alt="" />
      </div> <br /> <br />
      <div>
        ${item.price.toFixed(2)}
      </div> <br /> <br />
      <div>
        Qty: {item.quantity}
      </div> <br /> <br />
      <button onClick={() => addItem(item)}>+</button>
      <button onClick={() => decrementItem(item.id)}>-</button>
      <button onClick={() => removeItem(item.id)}>Remove</button> <br /> <br /> <br />
      <div>
        Subtotal: ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}

export default CartItem;
