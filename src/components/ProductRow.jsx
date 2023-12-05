function ProductRow({ products }) {
  return (
    <>
      {products?.map((product) => (
        <tr
          key={product.id}
          style={{ color: product.inStock ? "black" : "red" }}
        >
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </>
  );
}

export default ProductRow;
