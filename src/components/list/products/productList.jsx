import { useContext } from 'react'
import {ProductProvider } from "../../../providers/productProviders";

function ProductList(props) {
    const { ProductData} = useContext(ProductProvider);
    return (
        <div className='card'>
            <h1>product</h1>
        </div>
    )
}

export default ProductList;