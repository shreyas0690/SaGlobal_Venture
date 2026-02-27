import { useState } from 'react'
import { useCart } from '../context/CartContext'

const products = [
  {
    name: 'Oak Tree Trunk Cut',
    price: 99,
    priceMax: 115,
    image: '/images/hero-timber.png',
    inStock: true,
    tag: 'Best Seller',
    rating: 4.8,
    reviews: 24,
    desc: 'Premium quality oak trunk cut, perfect for furniture making and decorative purposes. Each piece is carefully selected and treated.'
  },
  {
    name: 'Wooden Decor Panel',
    price: 69,
    image: '/images/service-building.png',
    inStock: true,
    tag: 'New',
    rating: 4.5,
    reviews: 12,
    desc: 'Elegant wooden panel ideal for interior decoration. Adds warmth and natural texture to any living space.'
  },
  {
    name: 'Cross-cut Timber Slab',
    price: 79,
    image: '/images/hero-sawmill.png',
    inStock: false,
    tag: null,
    rating: 4.9,
    reviews: 31,
    desc: 'Beautiful cross-section timber slab showcasing natural grain patterns. Perfect for table tops and artwork.'
  },
  {
    name: 'Pine Wood Bundle',
    price: 45,
    image: '/images/hero-forest.png',
    inStock: true,
    tag: 'Popular',
    rating: 4.7,
    reviews: 18,
    desc: 'Bundle of high-quality pine wood, great for construction, crafting, and DIY projects. Sustainably sourced.'
  },
]

function StarRating({ rating, reviews }) {
  return (
    <div className="prod__stars">
      {[1, 2, 3, 4, 5].map(s => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" 
          fill={s <= Math.round(rating) ? 'currentColor' : 'none'} 
          stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span className="prod__rating-text">{rating} ({reviews})</span>
    </div>
  )
}

function QuickView({ product, onClose }) {
  const { addItem } = useCart()

  return (
    <div className="qv" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="qv__card">
        <button className="qv__close" onClick={onClose}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div className="qv__img">
          <img src={product.image} alt={product.name} />
          {product.tag && <span className="prod__tag">{product.tag}</span>}
        </div>
        <div className="qv__info">
          <StarRating rating={product.rating} reviews={product.reviews} />
          <h3 className="qv__title">{product.name}</h3>
          <div className="qv__price">
            ${product.price.toFixed(2)}
            {product.priceMax && <span> – ${product.priceMax.toFixed(2)}</span>}
          </div>
          <p className="qv__desc">{product.desc}</p>
          <div className="qv__stock">
            <span className={product.inStock ? 'qv__stock--in' : 'qv__stock--out'}>
              {product.inStock ? '● In Stock' : '● Out of Stock'}
            </span>
          </div>
          {product.inStock ? (
            <button className="qv__add" onClick={() => { addItem(product); onClose() }}>
              Add to Cart
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
              </svg>
            </button>
          ) : (
            <button className="qv__add qv__add--disabled" disabled>Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const { addItem } = useCart()
  const [wishlist, setWishlist] = useState([])
  const [hovered, setHovered] = useState(null)
  const [quickView, setQuickView] = useState(null)

  const toggleWishlist = (i) => {
    setWishlist(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])
  }

  return (
    <section id="products" className="prod">
      <div className="container">
        {/* Header */}
        <div className="prod__header">
          <div>
            <span className="section-tag">Shop</span>
            <h2 className="section-title">Popular Products</h2>
          </div>
          <a href="#" className="prod__view-all">
            Browse All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Products grid */}
        <div className="prod__grid">
          {products.map((product, i) => (
            <div
              key={i}
              className={`prod__card ${hovered !== null && hovered !== i ? 'prod__card--dim' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="prod__card-img">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.tag && <span className="prod__tag">{product.tag}</span>}
                {!product.inStock && <span className="prod__tag prod__tag--oos">Sold Out</span>}

                {/* Hover actions */}
                <div className="prod__actions">
                  <button
                    className={`prod__action-btn ${wishlist.includes(i) ? 'prod__action-btn--liked' : ''}`}
                    onClick={() => toggleWishlist(i)}
                    aria-label="Wishlist"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlist.includes(i) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                  <button className="prod__action-btn" onClick={() => setQuickView(i)} aria-label="Quick view">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>

                {/* Add to cart overlay */}
                <button
                  className={`prod__add-btn ${!product.inStock ? 'prod__add-btn--disabled' : ''}`}
                  onClick={() => product.inStock && addItem(product)}
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>

              {/* Body */}
              <div className="prod__card-body">
                <StarRating rating={product.rating} reviews={product.reviews} />
                <h3 className="prod__card-title">{product.name}</h3>
                <div className="prod__card-price">
                  ${product.price.toFixed(2)}
                  {product.priceMax && <span className="prod__card-price-max"> – ${product.priceMax.toFixed(2)}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickView !== null && (
        <QuickView product={products[quickView]} onClose={() => setQuickView(null)} />
      )}
    </section>
  )
}
