import products from "../../data/products";
import "./ProductsTable.css";

const productsTable = (props) => {
  const productsList = products.map((prod, i) => {
    return (
      <tr key={prod.id} className={i % 2 === 0 ? "Par" : "Impar"}>
        <td>{prod.id}</td>
        <td>{prod.name}</td>
        <td>{prod.price.toFixed(2)}</td>
      </tr>
    );
  });
  return (
    <div className="ProductsTable">
      <table>
        <thead>
          <tr>
            <th>Product id</th>
            <th>Product name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productsList}</tbody>
      </table>
    </div>
  );
};

export default productsTable;
