import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../Utils/Utils";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const FoodContext = createContext({});

export const FoodProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    let tokenlocal = getLocalStorage("token");

    if (tokenlocal) {
      const { id } = jwtDecode(tokenlocal).user;
      axios
        .get(`http://localhost:3000/users/getOneUser/${id}`)
        .then((res) => {
          setUser(res.data);
          setToken(tokenlocal)
          console.log("RES/ TOKENLOCAL", res);
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <FoodContext.Provider value={{user, setUser, token, setToken}}>
      {children}
    </FoodContext.Provider>
  );
};
