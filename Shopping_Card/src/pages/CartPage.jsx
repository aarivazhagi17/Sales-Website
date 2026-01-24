// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import './CartPage.css'

//image
import Delivery from '../assets/Items/Delivery.jpg'
import Location from "../assets/Items/Location.jpg"
import WhiteMan from "../assets/Items/WhiteMan.jpg"

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
          <div style={{display:"grid", gap:"50px"}}>
            {items.map((it) => (
              <CartItem key={it.id} item={it} />
            ))}
          </div>
          <hr />
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
    <div className='delivery'>
    <div >
      <img className='delivery_boy' src={Delivery} alt="" />
    </div>
    <div className='delivery_items'>
        <h2>30 Minutes Fast</h2>
        <h2>Delivery Challange</h2>
        <h5>Span Flexible working hours, weekly <br />
        payments and insurace cocerafe !</h5>
        <img className='Location' src={Location} alt="" />
    </div>
    <div>
      <img className='WhiteMan' src={WhiteMan} alt="" />
    </div>
    </div>
    <div className='contact'>
      <div>
        <h2>Contact : 8870032399</h2>
      </div>
      <div>
        <h2>Website : www.Shopping_Card.com</h2>
      </div>
    </div>
    </>
  );
}

export default CartPage;
