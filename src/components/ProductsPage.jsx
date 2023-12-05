import React, { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [originalProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(originalProducts);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (input) => {
    setSearchInput(input);
    if (input.length > 0) {
      const filtered = originalProducts.filter((product) =>
        product.name.match(input)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(originalProducts);
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchInput={searchInput} setSearchInput={handleSearchInput} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
