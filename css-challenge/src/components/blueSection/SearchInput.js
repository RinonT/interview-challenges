import React from 'react';

export default function SearchInput() {
  return (
    <div className="search_container">
      <form className="search_form">
        <input
          className="search_input"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
