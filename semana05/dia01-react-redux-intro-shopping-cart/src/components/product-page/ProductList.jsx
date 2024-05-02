import { useProducts } from "../../hooks/useProducts"
import ProductItem from "./ProductItem"

const ProductList = () => {
  const { products } = useProducts()
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {products.map(
        product => <ProductItem
          key={product.id}
          product={product}
        />
      )}
      
      {/* {JSON.stringify(productList)} */}
    </div>
  )
}

export default ProductList