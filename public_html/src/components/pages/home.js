import React from 'react';
import axios from 'axios';

function HomePage() {
  const [data, setData] = React.useState(null);
  const handleEvent = () => {
    axios.get('/api/home').then((result) => {
      const {
        data: { name },
      } = result;
      console.log(name);
      setData(name);
    });
  };

  return (
    <>
      <div>Home, World!!</div>
      <p>{data}</p>
      <h2 onClick={handleEvent}>Home</h2>
    </>
  );
}

export default HomePage;
