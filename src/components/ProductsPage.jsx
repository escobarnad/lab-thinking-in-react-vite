import React, { useEffect, useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [originalProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(originalProducts);
  const [searchInput, setSearchInput] = useState("");
  const [inStock, setInStock] = useState(false);

  const handleSearchInput = (input) => {
    setSearchInput(input);
    updateFilteredProducts(input, inStock);
  };

  const handleCheck = (isChecked) => {
    setInStock(isChecked);
    updateFilteredProducts(searchInput, isChecked);
  };

  const updateFilteredProducts = (input, inStock) => {
    const updatedFilteredProducts = originalProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(input.toLowerCase()) &&
        (inStock ? product.inStock : true)
    );
    setFilteredProducts(updatedFilteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={handleSearchInput}
        setInStock={handleCheck}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
