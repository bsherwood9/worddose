import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import useLocalStorage from "../hooks/useLocalStorage";

const LoginForm = (props) => {
  const [prevUser, setPrevUser] = useLocalStorage("prevUser", null);
  const [location, setLocation] = useState("register");

  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (prevUser) {
      setLocation("login");
    }
  }, [prevUser]);

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/auth/${location}`, creds)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setPrevUser(true);
        // // if (location === "login") {
        // //   props.history.push("/favorites");
        // }
      })
      .catch((err) => {
        localStorage.removeItem("token");
      });
  };
  return (
    <div className="login_box">
      <form>
        <h1>{location === "login" ? "Login" : "Register"}</h1>
        <div>
          <label htmlFor="username">username</label>
          <input
            name="username"
            type="text"
            onChange={handleChange}
            value={creds.username}
          ></input>
          <label htmlFor="password">password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={creds.password}
          ></input>

          <div>
            <button onClick={handleLogin}>Login</button>
            <button
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
