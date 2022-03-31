import React, { useEffect, useState } from "react";
import axios from "axios";

import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";

function App() {
  const url = "https://parfirova.herokuapp.com/";
  const { user, loading, error } = useUserContext();

  useEffect(() => {
    axios.get(url).then((resp) => {
      const { data } = resp;
      console.log(data);
    });

    axios
      .post(url, {
        firstName: "Andrey",
        lastName: "Kuznetsov",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
}

export default App;
