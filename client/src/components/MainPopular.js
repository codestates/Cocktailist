import React from "react";
import { Link } from "react-router-dom";

export default function MainPopular({ popularCocktails }) {
  return (
    <div className="main-popular">
      <div>
        <h2>Popular Cocktail</h2>

        <ul className="main-popular-containers">
          {!popularCocktails ? (
            <div>로딩중...</div>
          ) : (
            <div className="main-scroll-box">
              <ul className="main-popular-img-container">
                {popularCocktails.map((cocktail, idx) => (
                  <li key={idx}>
                    <Link to={`/cocktails/${cocktail.id}`}>
                      <figure>
                        <img
                          src={cocktail.image}
                          alt={cocktail.name}
                          className="main-popular-img"
                        />
                        <figcaption>
                          <p>{cocktail.name}</p>
                        </figcaption>
                      </figure>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
