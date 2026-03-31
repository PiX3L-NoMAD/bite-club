import { type ChangeEvent, type KeyboardEvent } from 'react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = 'Search postcode...',
}: SearchBarProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      className="w-full rounded-md border border-slate-600 bg-slate-800 px-4 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/50"
    />
  );
}
