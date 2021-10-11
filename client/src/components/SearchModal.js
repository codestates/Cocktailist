import React from 'react';

export default function SearchModal({ cocktails, searchTerm }) {
  console.log('searchTerm');
  console.log(searchTerm);
  console.log('cocktails');
  console.log(cocktails);
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
            <li key={idx}>
              <img src={cocktail.image} alt={cocktail.name} />
              <p>{cocktail.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
