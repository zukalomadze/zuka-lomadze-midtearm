import { useContext } from "react";
import productList from ".";
import ProductProviderComponents, {
  ProductProvider,
} from "../../../providers/productProviders";

function ProductList(props) {
  const { ProductData } = useContext(ProductProvider);

  return (
    <div className="card">
      {ProductData.map((product) => {
        return (
          <ul className="list-group list-group-flush" key={product.id}>
            <li className="list-group-item"><strong>Name: {product.name}</strong></li>
            <li className="list-group-item">Price: {product.price}</li>
            <li className="list-group-item">
              description: {product.description}
            </li>
            <br />
            <br />
            <br />
          </ul>
        );
      })}
    </div>
  );
}

export default ProductList;
