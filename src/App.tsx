import { useEffect, useState } from 'react';
import getRestaurantsByPostcode from './api/axios';

function App() {
  const [count, setCount] = useState(0) // will remove later

  const postcode = 'SW18 4PB'; // example postcode for now
  
  useEffect(() => {
    console.log('fetching restaurants') // will remove later
    getRestaurantsByPostcode(postcode)
      .then((data) => console.log(data))
      .catch((error) => console.error('API error', error));
  }, []);

  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-red-600">Hello world</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App;
