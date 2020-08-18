import axios from "axios";

// create a new "instance" of axios that will have
// all our configs on it, and we will be able to use
// it in place of axios throughout our app

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};

// axiosWithAuth() ==> returns an instance of axios
// axiosWithAuth().get()
// axiosWithAuth().post()
