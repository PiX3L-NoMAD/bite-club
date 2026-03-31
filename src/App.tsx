import { useEffect, useState } from 'react';
import getRestaurantsByPostcode from './api/axios';
import type { Restaurant } from './types/Restaurant';
import ResultsPage from './components/ResultsPage';

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]); // will use later

  const postcodeInput: string = 'sw18 4pb'; // example postcode for now, will be user input later
  const normalisedPostcode = postcodeInput.replace(/\s/g, '').toUpperCase();

  useEffect(() => {
    getRestaurantsByPostcode(normalisedPostcode)
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => console.error('API error', error));
  }, [normalisedPostcode]); // will change later to only run on postcode change

  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-red-600">Welcome to Bite Club</h1>
        <ResultsPage restaurants={restaurants} postcodeInput={postcodeInput} />
    </div>
  )
}

export default App;
