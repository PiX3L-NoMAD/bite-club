import { useState } from 'react';
import SearchBar from './SearchBar';

type SearchPageProps = {
  onSearch: (postcode: string) => void;
};

export default function SearchPage({ onSearch }: SearchPageProps) {
  const [postcodeInput, setPostcodeInput] = useState('');

  const handleSearch = () => {
    const normalizedPostcode = postcodeInput.replace(/\s+/g, '').toUpperCase();
    onSearch(normalizedPostcode);
  };

  return (
    <div className="search-page mb-8 max-w-md mx-auto text-center">
      <h2 className="mb-5 text-2xl font-thin text-slate-100">
        Search for a restaurant near you
      </h2>
      <div className="space-y-4">
        <SearchBar
          value={postcodeInput}
          onChange={setPostcodeInput}
          onSearch={handleSearch}
          placeholder="Enter your postcode"
        />
        <button
          onClick={handleSearch}
          className="w-full rounded-md bg-cyan-500 px-4 py-2 text-slate-950 hover:bg-cyan-400"
        >
          Search
        </button>
      </div>
    </div>
  );
}
