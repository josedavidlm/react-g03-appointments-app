import axios from 'axios'

export const fetchProducts = async () => {
  // With AXIOS
  const url = 'https://dummyjson.com/products'

  const response = await axios.get(url)

  return response.data.products
}

// export const fetchProductsWithAPIFetch = async () => {
//   const url = 'https://dummyjson.com/products'

//   const response = await fetch(url)

//   const data = await response.json()

//   return data.products
// }