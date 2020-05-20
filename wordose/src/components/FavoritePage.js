import React, { useState, useEffect } from "react";
import DefCard from "./DefCard";

export function MyFavorites({ saved }) {
  const [bags, setBags] = useState(saved || null);
  return (
    <div className="fav-page">
      <h1>My Favorites:</h1>
      {!bags ? (
        <h1>You have no favorites</h1>
      ) : (
        <div className="fav-grid">
          {bags.map((obj) => (
            <DefCard obj={obj} />
          ))}
        </div>
      )}
    </div>
  );
}
