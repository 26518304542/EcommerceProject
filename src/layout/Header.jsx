import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <button aria-label="open menu" className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>

        <Link to="/" className="text-lg font-bold">
          BrandName
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button aria-label="search" className="hidden sm:flex items-center">
          <Search className="w-5 h-5" />
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm">Home</Link>
          <Link to="/shop" className="text-sm">Shop</Link>
          <Link to="/about" className="text-sm">About</Link>
        </nav>

        <button aria-label="cart">
          <ShoppingCart className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
