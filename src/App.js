import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  const url = 'https://parfirova.herokuapp.com/';

  useEffect(() => {
    axios.get(url).then((resp) => {
      const { data } = resp;
      console.log(data);
    });

    axios
      .post(url, {
        firstName: 'Andrey',
        lastName: 'Kuznetsov',
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div className='App'>Hello, World!</div>;
}

export default App;
