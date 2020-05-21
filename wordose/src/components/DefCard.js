import React from "react";
function DefCard({ obj }) {
  return (
    <div className="defCard">
      <button>X</button>
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
