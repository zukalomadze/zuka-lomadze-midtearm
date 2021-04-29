import React, { useEffect, useState } from "react";
import API_SERVICE from "../services/api"

export const ProductProvider = React.createContext(null)

function ProductProviderComponents({children}){
    const [ProductData, setProductData] = useState([])
    useEffect(() => {
        (async () => {
            const response = await API_SERVICE.getProductData({});
            setProductData(response);
        })();
    }, []);
    return (
        <ProductProvider.Provider value={{
            ProductData,
        }}>
            {children}
        </ProductProvider.Provider>
    )
}

export default ProductProviderComponents;