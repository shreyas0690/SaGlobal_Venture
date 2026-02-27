import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function CartSidebar() {
  const { items, count, total, isOpen, setIsOpen, removeItem, updateQty, clearCart } = useCart()
  const [checkout, setCheckout] = useState(false)
  const [orderForm, setOrderForm] = useState({ name: '', email: '', phone: '', address: '' })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleOrderChange = (e) => {
    setOrderForm({ ...orderForm, [e.target.name]: e.target.value })
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
    setTimeout(() => {
      setOrderPlaced(false)
      setCheckout(false)
      clearCart()
      setIsOpen(false)
      setOrderForm({ name: '', email: '', phone: '', address: '' })
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="cart-overlay" onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}>
      <div className="cart">
        {/* Header */}
        <div className="cart__header">
          <h3 className="cart__title">
            {checkout ? 'Checkout' : 'Your Cart'}
            {!checkout && count > 0 && <span className="cart__count">{count}</span>}
          </h3>
          <button className="cart__close" onClick={() => { setIsOpen(false); setCheckout(false) }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Cart items or Checkout */}
        {!checkout ? (
          <>
            {items.length === 0 ? (
              <div className="cart__empty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
                <p>Your cart is empty</p>
                <button className="cart__continue" onClick={() => setIsOpen(false)}>Continue Shopping</button>
              </div>
            ) : (
              <>
                <div className="cart__items">
                  {items.map((item) => (
                    <div key={item.name} className="cart__item">
                      <div className="cart__item-img">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart__item-info">
                        <h4 className="cart__item-name">{item.name}</h4>
                        <span className="cart__item-price">${item.price.toFixed(2)}</span>
                        <div className="cart__item-qty">
                          <button onClick={() => updateQty(item.name, item.qty - 1)}>−</button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.name, item.qty + 1)}>+</button>
                        </div>
                      </div>
                      <button className="cart__item-remove" onClick={() => removeItem(item.name)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart__footer">
                  <div className="cart__total">
                    <span>Total</span>
                    <span className="cart__total-price">${total.toFixed(2)}</span>
                  </div>
                  <button className="cart__checkout-btn" onClick={() => setCheckout(true)}>
                    Proceed to Checkout
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                  <button className="cart__clear" onClick={clearCart}>Clear Cart</button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {orderPlaced ? (
              <div className="cart__order-success">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>Order Placed!</h3>
                <p>Thank you for your order. We'll send you a confirmation email shortly.</p>
              </div>
            ) : (
              <>
                {/* Order summary */}
                <div className="cart__summary">
                  <h4 className="cart__summary-title">Order Summary</h4>
                  {items.map(item => (
                    <div key={item.name} className="cart__summary-item">
                      <span>{item.name} × {item.qty}</span>
                      <span>${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="cart__summary-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout form */}
                <form className="cart__order-form" onSubmit={handlePlaceOrder}>
                  <div className="cart__field">
                    <label>Full Name *</label>
                    <input type="text" name="name" placeholder="John Doe" value={orderForm.name} onChange={handleOrderChange} required />
                  </div>
                  <div className="cart__field">
                    <label>Email *</label>
                    <input type="email" name="email" placeholder="john@example.com" value={orderForm.email} onChange={handleOrderChange} required />
                  </div>
                  <div className="cart__field">
                    <label>Phone *</label>
                    <input type="tel" name="phone" placeholder="+1 (555) 000-0000" value={orderForm.phone} onChange={handleOrderChange} required />
                  </div>
                  <div className="cart__field">
                    <label>Delivery Address *</label>
                    <textarea name="address" rows="3" placeholder="Enter your full delivery address" value={orderForm.address} onChange={handleOrderChange} required />
                  </div>
                  <button type="submit" className="cart__place-order">
                    Place Order — ${total.toFixed(2)}
                  </button>
                  <button type="button" className="cart__back" onClick={() => setCheckout(false)}>← Back to Cart</button>
                </form>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
