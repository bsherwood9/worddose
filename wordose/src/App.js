import React, { useState, useEffect } from "react";
import axios from "axios";
import Background from "./components/BackImage";
import { setState } from "expect/build/jestMatchersObject";

function App() {
  const [data, setData] = useState("");
  const [def, setDef] = useState([]);
  const [example, setExample] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=vy6siu06znu24ar2xam4v822l7eziuw2hwu6ho00642spm8zo"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setDef(response.data.definitions);
        setExample(response.data.examples);
      })
      .catch((error) => console.log(error));
  }, []);
  //using formatdate to improve my life.
  const dateformat = require("dateformat");
  let date = new Date();
  let formatDate = dateformat(date, "fullDate");
  return (
    <div className="container">
      <section className="card">
        <div className="card-side card-front">
          <h1>{data.word}</h1>
          <h2 className="header">{formatDate}</h2>
        </div>
        <div className="card-side card-back">
          <ul>
            <h3>Definitions:</h3>
            <div>
              {def.map((item) => {
                console.log(item.text);
                return <li>{item.text}</li>;
              })}
            </div>
          </ul>
          <ul>
            <h3>Examples:</h3>
            <div>
              {example.map((item) => {
                console.log(item.text);
                return <li>{item.text}</li>;
              })}
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
