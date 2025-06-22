import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ currentPage }) {
  return (
    <nav aria-label="breadcrumb" className="bg-light py-2">
      <div className="container">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/" className='text-decoration-none text-secondary'>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {currentPage}
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;
