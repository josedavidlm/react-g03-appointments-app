import { useEffect, useState } from "react"

import { fetchProducts } from "../services/products"

export const useProducts = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(setProductList)
  }, [])

  return {
    products: productList
  }
}

