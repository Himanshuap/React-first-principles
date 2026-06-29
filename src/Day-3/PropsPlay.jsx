import { useState, useMemo } from 'react';

const items = Array.from({ length: 1000 }, (_, i) => `Item number ${i}`);

// CHILD — receives a function via the onClear prop (you know props now)
function ClearButton({ onClear }) {
  console.log("ClearButton rendered");   // our spy
  return <button onClick={onClear}>Clear search</button>;
}

function SearchableList() {               // PARENT
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return items.filter(item => {
      let x = 0;
      for (let i = 0; i < 1000; i++) { x += i; }
      return item.toLowerCase().includes(query.toLowerCase()) && x >= 0;
    });
  }, [query]);

  const handleClear = () => setQuery('');   // function recreated every render

  return (
    <div>
      <ClearButton onClear={handleClear} />
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <p>{filtered.length} results</p>
      <ul>
        {filtered.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchableList;