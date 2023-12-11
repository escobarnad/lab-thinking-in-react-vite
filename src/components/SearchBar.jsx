function SearchBar({ searchInput, setSearchInput, setInStock }) {
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleCheck = (e) => {
    const isChecked = e.target.checked;
    setInStock(isChecked);
  };

  return (
    <div>
      <label>Search</label>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <input type="checkbox" id="checkbox" onChange={handleCheck} />
      <label>Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
