import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from './Searchbar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term.', {
        position: 'top-center',
      });
      return;
    }
    onSubmit(query); // onSubmit fonksiyonunu çağır
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
