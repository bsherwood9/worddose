import React, { useState, useEffect } from "react";
import DefCard from "./DefCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export function MyFavorites({ saved }) {
  const [bags, setBags] = useState(saved || null);
  useEffect(() => {
    axiosWithAuth()
      .get("/favs/")
      .then((res) => {
        console.log("Did we get data", res);
        setBags(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
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
