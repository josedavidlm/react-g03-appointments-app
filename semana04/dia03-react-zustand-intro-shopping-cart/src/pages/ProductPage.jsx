import Header from '../components/product-page/Header'
import ProductList from '../components/product-page/ProductList'

const ProductPage = () => {
  return (
    <>
      <Header />

      <main className='container py-4 px-6 mx-auto border mt-20'>
        <ProductList />
      </main>
    </>
  )
}

export default ProductPage