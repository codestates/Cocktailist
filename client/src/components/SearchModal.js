import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchModal({ cocktails, searchTerm }) {
  return (
    <div className='auto-search-modal-container'>
      <ul>
        {cocktails
          .filter((cocktail) =>
            searchTerm === ''
              ? null
              : cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((cocktail, idx) => (
            <Link to='/cocktails/:id'>
              <li key={idx}>
                <img src={cocktail.image} alt={cocktail.name} />
                <p>{cocktail.name}</p>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
