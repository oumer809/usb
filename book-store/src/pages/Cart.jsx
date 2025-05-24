import React from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../others/utils';
import { Link } from 'react-router-dom';  // Import Link for navigation

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-8">
        <p>Your cart is empty.</p>
        <Link to="/" className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between py-4 border-b">
          <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{formatPrice(item.price)}</p>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value);
                if (newQuantity > 0) {
                  updateQuantity(item.id, newQuantity);
                }
              }}
              className="w-20 text-center border rounded"
            />
            <button onClick={() => removeFromCart(item.id)} className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xl font-semibold">Total: {formatPrice(getTotal())}</p>
        <div>
          <button onClick={clearCart} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
            Clear Cart
          </button>
          {/* Placeholder - Implement Checkout Logic Here */}
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Checkout (Not Implemented)</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;