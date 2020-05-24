import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar";
import Image from "../src/assets/401073.jpg";
import { MyFavorites } from "./components/FavoritePage";
import LoginForm from "./components/Login";
import PRoute from "./protected/PrivateRoute";
import { axiosWithAuth } from "./utils/axiosWithAuth";

function App() {
  const [data, setData] = useState("");
  const [def, setDef] = useState([]);
  const [example, setExample] = useState([]);
  const [image, setImage] = useState(Image);
  const [saved, setSaved] = useState([]);
  const [wordNumber, setWordNumber] = useState(null);
  const [userId, setUserId] = useState(null);
  const bag = { word: "", definitions: [], examples: [] };
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
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/random?query=waves&client_id=f543881da182c3d44c1ec264a24e0af595d7196cc3e734099b534a04358388cb"
      )
      .then((response) => {
        console.log("This is the response", response);
        setImage(response.data.urls.regular);
      });
  }, [image]);
  useEffect(() => {
    if (wordNumber) {
      def.map((item) => {
        axiosWithAuth()
          .post(`/favs/def/${wordNumber}`, { text: item.text })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("This is the word number.", wordNumber);
            console.log(err);
          });
      });
      example.map((item) => {
        axiosWithAuth()
          .post(`/favs/examp/${wordNumber}`, { text: item.text })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, [wordNumber]);
  //using formatdate to improve my life.
  const dateformat = require("dateformat");
  let date = new Date();
  let formatDate = dateformat(date, "fullDate");

  const saveToDatabase = (bag) => {
    axiosWithAuth().post();
  };
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <section className="card">
              <div className="card-side card-front">
                <h1>{data.word}</h1>
                <h2 className="header">{formatDate}</h2>
              </div>
              <div className="card-side card-back">
                <div
                  className="image-box"
                  style={{ backgroundImage: "url(" + image + ")" }}
                >
                  <div className="definitions">
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
                </div>
              </div>
            </section>
          </div>
          <div className="btn-box">
            <button
              onClick={async () => {
                let wordObj = { word: data.word };
                axiosWithAuth()
                  .post("/favs/word/", wordObj)
                  .then((res) => {
                    console.log(res);
                    setWordNumber(res.data);
                  })
                  .catch((err) => {
                    console.log(err);
                    console.log(wordObj);
                  });

                // bag.definitions = def.map((item) => item.text);
                // bag.examples = example.map((item) => item.text);
                // console.log(bag);
                // await setSaved([...saved, bag]);
              }}
              className="save"
            >
              Save
            </button>
          </div>
        </Route>
        <PRoute
          path="/favorites"
          component={() => <MyFavorites saved={saved} />}
        />
        <Route exact path="/login">
          <LoginForm setUserId={setUserId} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;

//What to add next? Maybe figure out a better background?
//Need to add a save feature?
//how to utilize unsplash api?
