import React from 'react';
import './DashboardCl.css' ;




function DashboardCl() {
  return (
    <div>
        <div class="app-container">
  
  <div class="app-content">
    <div class="app-content-header">
      <h1 class="app-content-headerText">Bienvenu !</h1>

      <button class="app-content-headerButton">Add Product</button>
    </div>
    <div class="app-content-actions">
      <input class="search-bar" placeholder="Search..." type="text"></input>
      <div class="app-content-actions-wrapper">
      </div>
    </div>
    <div class="products-area-wrapper tableView">
      <div class="products-header">
        <div class="product-cell category">ID<button class="sort-button">
          </button></div>
        <div class="product-cell status-cell">Nom<button class="sort-button">
          </button></div>
        <div class="product-cell sales">Mail<button class="sort-button">
          </button></div>
        <div class="product-cell stock">Adresse<button class="sort-button">
          </button></div>
        <div class="product-cell price">Numero de téléphone<button class="sort-button">
          </button></div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product"></img>
            <span>Ocean</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>

      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product"></img>
            <span>Boheme</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
      </div>
    
 
   
    </div>
  </div>
</div>
<div>
</div>
</div>
  );
}


export default DashboardCl;
