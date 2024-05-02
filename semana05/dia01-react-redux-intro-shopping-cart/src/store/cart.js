import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      /* TODO: Implementar esta función para añadir nuevos productos al carrito de compras */
      // console.log('AddToCart', action)
      const newProduct = action.payload

      const productInCartIndex = state.findIndex(
        item => item.id === newProduct.id
      )

      // Entra aquó cuando el producto existe en el carrito de compras
      if (productInCartIndex >= 0) {
        const newState = state.map(product => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              quantity: product.quantity + 1
            }
          }

          return product
        })

        return newState
      }

      // Entra aquí cuando el producto es nuevo en el carrito de compras
      return [
        ...state,
        {
          ...newProduct,
          quantity: 1
        }
      ]
    },
    removeFromCart: (state, action) => {
      const productId = action.payload
      /* TODO: Implementar esta función para remover un producto del carrito de compras */
      console.log('removeFromCart')
      return state.filter(product => product.id !== productId)
    },
    clearCart: (state) => {
      console.log('clearCart')
      return initialState
    }
  }
})

// Exportando el estado inicial y a los reducers del slice
export default cartSlice.reducer 

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions