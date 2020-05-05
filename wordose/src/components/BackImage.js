import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "../assets/401073.jpg";

function Background() {
  const [image, setImage] = useState("");
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

  return (
    <div
      className="image-block"
      style={{ backgroundImage: "url(" + Image + ")" }}
    />
  );
}

export default Background;
