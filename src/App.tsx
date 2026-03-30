import { useEffect, useState } from 'react';
import getRestaurantsByPostcode from './api/axios';
import type { Restaurant } from './types/Restaurant';

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]); // will use later

  const postcode = 'SW18 4PB'; // example postcode for now, will be user input later
  const normalisedPostcode = postcode.replace(/\s/g, '').toLowerCase();

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
      <div className="card">
        <p className="text-lg text-white-700">Restaurant Name: {restaurants[0]?.restaurantName}</p>
        <p className="text-lg text-white-700">Address: {restaurants[0]?.address.firstLine}, {restaurants[0]?.address.postalCode} {restaurants[0]?.address.city}</p>
        <p className="text-lg text-white-700">Cuisines: {restaurants[0]?.cuisines.join(', ')}</p>
        <p className="text-lg text-white-700">Rating: {restaurants[0]?.rating}</p>  
      </div>
    </div>
  )
}

export default App;
