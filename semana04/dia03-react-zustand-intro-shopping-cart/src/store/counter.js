import { create } from 'zustand'

export const useCounterStore = create(
  (set) => ({
    // Estado INICIAL
    count: 1,
    // Actions
    increment: () => {
      set(state => {
        // Lógica adicional
        return {
          count: state.count + 1
        }
      })
    },
    decrement: () => {
      set(state => ({ count: state.count - 1 }))
    },
    incrementByValue: (value) => {
      set((state) => ({ count: state.count + value }))
    }
  })
)