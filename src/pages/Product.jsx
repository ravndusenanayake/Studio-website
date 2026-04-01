import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import './Product.css';

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <Link to="/store" className="btn btn-outline" style={{ marginTop: '2rem' }}>Back to Store</Link>
      </div>
    );
  }

  return (
    <div className="page-container fade-in py-6" style={{ paddingTop: '100px' }}>
      <div className="container">
        <Link to="/store" className="back-link">
          <ArrowLeft size={18} /> Back to Gallery
        </Link>
        
        <div className="product-details-layout">
          <div className="product-image-pane">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="product-info-pane">
            <div className="product-type-badge">{product.type} Guitar</div>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price-large">${product.price.toFixed(2)}</p>
            
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            
            <div className="product-specs">
              <h3>Specifications</h3>
              <ul>
                {product.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
            
            <div className="product-actions">
              <button 
                className="btn btn-lg w-full" 
                onClick={() => addToCart(product)}
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
            </div>
            
            <div className="product-guarantees">
              <div className="guarantee-item">
                <ShieldCheck size={24} className="guarantee-icon" />
                <span>2-Year Studio Warranty</span>
              </div>
              <div className="guarantee-item">
                <Truck size={24} className="guarantee-icon" />
                <span>Free Insured Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
