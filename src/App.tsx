import { useEffect, useState } from 'react';
import getRestaurantsByPostcode from './api/axios';
import type { Restaurant } from './types/Restaurant';
import ResultsPage from './components/ResultsPage';
import SearchPage from './components/SearchPage';

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [postcode, setPostcode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [returnButtonVisible, setReturnButtonVisible] = useState(false);

  useEffect(() => {
    if (!postcode) return;

    setLoading(true);
    setError(null);

    getRestaurantsByPostcode(postcode)
      .then((data) => {
        setRestaurants(data);
        setReturnButtonVisible(true);
      })
      .catch((error) => {
        console.error('API error', error);
        setError('Unable to load restaurant results');
        setReturnButtonVisible(true);
      })
      .finally(() => {
        setLoading(false);
        setReturnButtonVisible(true);
      });
  }, [postcode]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-3xl border border-slate-800/50 bg-slate-900/95 p-6 shadow-lg text-center">
        <div className="mb-6 flex justify-start">
          {returnButtonVisible && (
            <button
              onClick={() => {
                setPostcode('');
                setRestaurants([]);
                setReturnButtonVisible(false);
              }}
              className="rounded-md bg-cyan-500 px-4 py-2 text-slate-950 hover:bg-cyan-400"
            >
              Go Back
            </button>
          )}
        </div>

        <h1 className="text-3xl font-bold text-slate-100 mb-6">Welcome to <span className="text-cyan-500">Bite Club</span></h1>

        {!postcode && <SearchPage onSearch={setPostcode} />}
        {loading && <p className="mt-6 text-sm text-slate-300">Loading restaurants…</p>}
        {error && <p className="mt-6 text-sm text-red-400">{error}</p>}
        {!loading && !error && <ResultsPage restaurants={restaurants} postcode={postcode} />}
      </div>
    </div>
  );
}

export default App;
