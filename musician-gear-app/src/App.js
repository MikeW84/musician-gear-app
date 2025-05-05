import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return <div>Hello from Musician Gear App!</div>;
}

export default App;