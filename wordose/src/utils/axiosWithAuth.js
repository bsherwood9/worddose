import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    baseURL: "http://localhost:5000/api",
  });
};
