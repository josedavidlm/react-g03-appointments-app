import { useEffect, useState } from "react"
import { fetchProducts } from "../../services/products"
import ProductItem from "./ProductItem"

const ProductList = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(setProductList)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {productList.map(
        product => <ProductItem key={product.id} product={product} />
      )}
      
      {/* {JSON.stringify(productList, null, 2)} */}
      
    </div>
  )
}

export default ProductList