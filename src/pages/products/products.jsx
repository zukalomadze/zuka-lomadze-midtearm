import ProductList from "../../components/list/products";
import ProductProviderComponents from "../../providers/productProviders";

function Products(props) {
    return (
      <ProductProviderComponents>
        <ProductList/>
      </ProductProviderComponents>
    );
  }
  export default Products;