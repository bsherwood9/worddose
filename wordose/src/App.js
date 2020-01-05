import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Background from "./components/BackImage";
import styled from "styled-components";
import { setState } from "expect/build/jestMatchersObject";

function App() {
  const [data, setData] = useState("");
  const [def, setDef] = useState([]);
  const [example, setExample] = useState([]);
  const Body = styled.body`
    height: 100%;
    margin: 0;
    padding: 0;
  `;
  const ContentBox = styled.div`
    position: absolute;
    top: 50%;
    background: rgba(255, 255, 255, 0.5);
  `;
  useEffect(() => {
    axios
      .get(
        "http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=vy6siu06znu24ar2xam4v822l7eziuw2hwu6ho00642spm8zo"
      )
      .then(response => {
        console.log(response.data);
        setData(response.data);
        setDef(response.data.definitions);
        setExample(response.data.examples);
      })
      .catch(error => console.log(error));
  }, []);
  //using formatdate to improve my life.
  const dateformat = require("dateformat");
  let date = new Date();
  let formatDate = dateformat(date, "fullDate");
  return (
    <Body>
      <Background />
      <ContentBox>
        <h1>Word: {data.word}</h1>
        <h2>{formatDate}</h2>
        <ul>
          Definitions:
          {def.map(item => {
            console.log(item.text);
            return <li>{item.text}</li>;
          })}
        </ul>
        <ul>
          Examples:
          {example.map(item => {
            console.log(item.text);
            return <li>{item.text}</li>;
          })}
        </ul>
      </ContentBox>
    </Body>
  );
}

export default App;
