import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  // Estado INCIAL
  cart: [],

  // Actions
  addToCart: (newProduct) => {
    // Aquí estrá la lógica para añadir un producto al estado 'cart'

    // ¿Existe ese producto en el carrito de compras?
    const productInCartIndex = get().cart.findIndex(
      product => product.id === newProduct.id
    )
    
    if (productInCartIndex >= 0) {
      // Aquí es cuando el producto ya existe en el carrito de compras y solo incrementamos el campo quantity
      const newProducts = get().cart.map(product => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })

      set(state => ({ cart: newProducts }))

      return
    }

    // Aquí es cuando el producto es nuevo en el carrito de compras
    set(state => ({
      cart: [...state.cart, { ...newProduct, quantity: 1 }]
    }))
  },
  removeFromCart: (id) => {
    set(state => {
      const newProducts = state.cart.filter(product => product.id !== id)

      return { cart: newProducts }
    })
  },
  cleanCart: () => {
    set(() => ({ cart: [] }))
  }
}))