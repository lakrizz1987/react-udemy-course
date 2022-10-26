import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = (props) =>{
    const [productList,setProductList] = useState([]);

    return <ProductsContext.Provider value={{products:productList}}>{props.children}</ProductsContext.Provider>
}

export default ProductsProvider;