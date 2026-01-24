// src/pages/ProductList.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import Iphone15 from '../assets/product/Iphone15.jpg'
import Acer from '../assets/product/Acer.jpg'
import Ovemb from '../assets/product/Ovemb.jpg'
import Nikon from '../assets/product/Nikon.jpg'
import OnePlus11 from '../assets/product/Oneplus11.jpg'
import Goboult from '../assets/product/Goboult.jpg'
import hp from '../assets/product/hp.jpg'
import Sonatta from '../assets/product/Sonatta.jpg'
import PocoM3 from '../assets/product/PocoM3.jpg'
import Zhiyun from '../assets/product/Zhiyun.jpg'
import OnePlus from '../assets/product/Oneplus.jpg'
import Lenovo from '../assets/product/Lenovo.jpg'

import '../components/Product.css';

// dummy product data
const PRODUCTS = [
  { id: 1, name: "Iphone15", price: "16777"  , image: Iphone15},
    { id: 2, name: "Acer", price: "39999"  , image: Acer},
    { id: 3, name: "Ovemb", price: "347" , image: Ovemb},
    { id: 4, name: "Nikon", price: "65999" ,image: Nikon},
    { id: 5, name: "OnePlus11", price: "44999" ,image: OnePlus11},
    { id: 6, name: "Goboult", price: "859" ,image: Goboult},
    { id: 7, name: "hp", price: "26809" ,image: hp},
    { id: 8, name: "Sonatta", price: "2795" ,image: Sonatta},
    { id: 9, name: "PocoM3", price: "13999" ,image: PocoM3},
    { id: 10, name: "Zhiyun", price: "53999" ,image: Zhiyun},
    { id: 11, name: "OnePlus", price: "1499" ,image: OnePlus},
    { id: 12, name: "Lenovo", price: "32999" ,image: Lenovo},
];

function ProductList() {
  return (
    <div style={{ padding: 20 }}>
      
      <h2 style={{textAlign:"center", fontWeight:"bold", fontSize:"29px"}}>Products</h2>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
