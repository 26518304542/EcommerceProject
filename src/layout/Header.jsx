import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow">
      <Link to="/" className="text-xl font-bold">
        BrandName
      </Link>
      <nav className="flex items-center gap-4">
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>
        <button>
          <ShoppingCart className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}
