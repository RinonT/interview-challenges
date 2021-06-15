import React from 'react';

export default function SearchInput() {
  return (
    <div class="search_container">
      <form class="search_form">
        <input
          class="search_input"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
