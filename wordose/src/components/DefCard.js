import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
function DefCard({ obj, bags, setBags }) {
  const handleClick = () => {
    axiosWithAuth()
      .delete(`/favs/${obj.word_id}`)
      .then((res) => {
        console.log(`We deleted word ${obj.word_id}`, res);
        let newBag = bags.filter((item) => item.word_id !== obj.word_id);
        setBags(newBag);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="defCard">
      <button onClick={() => handleClick()}>X</button>
      <h1>{obj.word}</h1>
      <div>
        <h3>Definitions:</h3>
        {obj.definitions.map((def) => (
          <p>{def}</p>
        ))}
        <h3>Examples:</h3>
        {obj.examples.map((examp) => (
          <p>{examp}</p>
        ))}
      </div>
    </div>
  );
}
export default DefCard;

//need to figure out how to post definitions
