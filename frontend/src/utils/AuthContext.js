import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  let [loading] = useState(true);
  let [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        {
          email: e.target.email.value,
          password: e.target.password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = response.data;

      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        {
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          confirm_password: e.target.confirm_password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = response.data;

      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };

  let updateToken = async () => {
    console.log("Updating token");
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens.refresh,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  const contextData = {
    user: user,
    errorMessage: errorMessage,
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    clearErrorMessage: () => setErrorMessage(null),
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
