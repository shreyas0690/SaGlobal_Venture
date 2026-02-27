import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (product) => {
    setItems(prev => {
      const exists = prev.find(x => x.name === product.name)
      if (exists) {
        return prev.map(x => x.name === product.name ? { ...x, qty: x.qty + 1 } : x)
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setIsOpen(true)
  }

  const removeItem = (name) => {
    setItems(prev => prev.filter(x => x.name !== name))
  }

  const updateQty = (name, qty) => {
    if (qty < 1) return removeItem(name)
    setItems(prev => prev.map(x => x.name === name ? { ...x, qty } : x))
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, x) => sum + x.price * x.qty, 0)
  const count = items.reduce((sum, x) => sum + x.qty, 0)

  return (
    <CartContext.Provider value={{ items, count, total, addItem, removeItem, updateQty, clearCart, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  )
}
