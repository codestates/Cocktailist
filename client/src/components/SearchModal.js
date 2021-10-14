import React from "react";
import { Link } from "react-router-dom";

export default function SearchModal({ cocktails, searchTerm }) {
  return (
    <div className="auto-search-modal-container">
      <ul>
        {cocktails
          .filter((cocktail) =>
            searchTerm === ""
              ? null
              : cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((cocktail, idx) => (
            <Link to={`/cocktails/${cocktail.id}`}>
              <li key={idx}>
                <img src={cocktail.image} alt={cocktail.name} />
                <span>{cocktail.name}</span>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
