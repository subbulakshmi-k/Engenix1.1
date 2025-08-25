import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartIcon = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link
      to="/cart"
      className="relative flex items-center justify-center w-10 h-10 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors duration-300 group"
    >
      {/* Shopping Cart Icon */}
      <svg
        className="w-6 h-6 glow-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
        />
      </svg>

      {/* Item Count Badge */}
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform group-hover:scale-110 transition-transform">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}

      {/* Tooltip */}
      <div className="absolute top-full right-0 mt-2 w-32 bg-slate-800 text-white text-sm rounded-lg py-2 px-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg z-50">
        View Cart ({totalItems} items)
      </div>
    </Link>
  );
};

export default CartIcon;
