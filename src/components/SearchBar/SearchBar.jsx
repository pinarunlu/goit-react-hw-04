import React, { useState } from 'react';
import styles from './Searchbar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a search term.');
      return;
    }
    onSubmit(query); // Burada onSubmit fonksiyonu kullanılıyor
  };

  return (
    <form className={styles.searchForm}  onSubmit={handleSubmit}>
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
