import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow products={products} />
      </tbody>
    </table>
  );
}

export default ProductTable;
