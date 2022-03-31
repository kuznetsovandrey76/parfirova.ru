import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';

import Header from './components/Header';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const url = 'https://parfirova.herokuapp.com/';
  // const url = 'http://localhost:3000/';

  useEffect(() => {
    axios.get(url).then((resp) => {
      const { data } = resp;
      setTabs(data);
      setIsLoading(false);
    });

    axios
      .post(url, {
        firstName: 'Andrey',
        lastName: 'Kuznetsov',
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
          }}
        >
          <RotatingLines width='100' strokeColor='#6495ED' strokeWidth='1' animationDuration='3' />
        </div>
      ) : (
        <Header tabs={tabs} />
      )}
    </>
  );
}

export default App;
