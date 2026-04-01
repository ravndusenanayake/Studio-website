import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Search, Filter } from 'lucide-react';
import './Store.css';

const Store = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'All' || product.type === filter;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="page-container fade-in">
      <div className="store-header">
        <div className="container">
          <h1>The <span className="text-highlight">Guitar</span> Gallery</h1>
          <p>Premium instruments for artists who demand the best in the studio and on stage.</p>
        </div>
      </div>

      <div className="container py-6">
        <div className="store-controls">
          <div className="search-box">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search guitars..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-box">
            <Filter size={20} className="filter-icon" />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All Types</option>
              <option value="Electric">Electric</option>
              <option value="Acoustic">Acoustic</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <h3>No guitars found.</h3>
            <p>Try adjusting your search or filter.</p>
            <button className="btn btn-outline" onClick={() => {setSearch(''); setFilter('All');}}>Reset Filters</button>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <Link to={`/store/${product.id}`} className="product-image-container">
                  <div className="product-overlay">
                    <span>View Details</span>
                  </div>
                  <img src={product.image} alt={product.name} loading="lazy" />
                </Link>
                <div className="product-info">
                  <div className="product-type">{product.type}</div>
                  <Link to={`/store/${product.id}`}>
                    <h3 className="product-name">{product.name}</h3>
                  </Link>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
