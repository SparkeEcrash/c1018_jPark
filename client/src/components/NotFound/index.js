import React from 'react';
import './404.css';

function NotFound() {
    return (
      <div className="not_found_background d-flex align-items-center justify-content-center">
        <div className="card bg-dark text-white text-center">
          <h1 className="card-title">404 - Page Not Found</h1>
        </div>
      </div> 
    );
}

export default NotFound;
