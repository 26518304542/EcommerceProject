import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Search,
  ShoppingCart,
  ChevronDown,
  User,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="w-full relative min-h-[360px] md:min-h-[520px] lg:min-h-[640px]">
      {/* Top info bar */}
      <div className="bg-[#0b3650] text-white text-sm">
        {/* align top info bar with main nav by using max-w-7xl */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span className="text-white">(225) 555-0118</span>
            </div>
            <div className="visible sm:flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>michelle.rivera@example.com</span>
            </div>

          </div>

          <div className="flex-1  sm:flex items-center justify-center">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a href="#" aria-label="facebook"><Facebook className="w-4 h-4" /></a>
              <a href="#" aria-label="instagram"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="twitter"><Twitter className="w-4 h-4" /></a>
            </div>

            <div className=" sm:flex items-center gap-2">
              <Link to="/login" className="text-xs underline">Login / Register</Link>
            </div>
          </div>
        </div>
      </div>

          {/* Main navigation */}
          <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              aria-label="open menu"
              className="md:hidden"
              onClick={() => setMobileOpen((s) => !s)}
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link to="/" className="text-2xl font-bold">Bandage</Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 relative">
            <Link to="/" className="text-sm">Home</Link>

            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm">
                Shop <ChevronDown className="w-4 h-4" />
              </button>

              {shopOpen && (
                <div className="relative z-50 left-0 top-full mt-2 w-[620px] bg-white shadow-lg border rounded-md p-4">
                  <div className="flex gap-6">
                    <div className="flex-1 flex flex-col gap-2">
                      <h4 className="text-sm font-semibold">Kadın</h4>
                      <Link to="#" className="text-sm text-gray-600">Bags</Link>
                      <Link to="#" className="text-sm text-gray-600">Belts</Link>
                      <Link to="#" className="text-sm text-gray-600">Cosmetics</Link>
                      <Link to="#" className="text-sm text-gray-600">Hats</Link>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <h4 className="text-sm font-semibold">Erkek</h4>
                      <Link to="#" className="text-sm text-gray-600">Bags</Link>
                      <Link to="#" className="text-sm text-gray-600">Belts</Link>
                      <Link to="#" className="text-sm text-gray-600">Cosmetics</Link>
                      <Link to="#" className="text-sm text-gray-600">Hats</Link>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <img src="/assets/mega-1.jpg" alt="mega" className="w-full h-36 object-cover rounded" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-sm">About</Link>
            <Link to="/blog" className="text-sm">Blog</Link>
            <Link to="/contact" className="text-sm">Contact</Link>
            <Link to="/pages" className="text-sm">Pages</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="search" className="hidden sm:flex items-center">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            <Link to="/account" className="hidden sm:flex items-center gap-1 text-sm text-gray-700">
              <User className="w-5 h-5" />
              <span className="text-xs">Account</span>
            </Link>

            <Link to="/cart" className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              <span className="hidden sm:inline text-sm">0</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden border-t">
            <div className="flex flex-col px-4 py-4 gap-3">
              <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <details>
                <summary className="cursor-pointer">Shop</summary>
                <div className="flex flex-col pl-4 mt-2 gap-2">
                  <Link to="#">Kadın - Bags</Link>
                  <Link to="#">Erkek - Bags</Link>
                </div>
              </details>
              <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>

      {/* Header hero (turquoise background with right image) */}
{/* Header hero (turquoise background with right image) */}
<div className="w-full relative bg-[#12b0c8] overflow-hidden">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-12 md:py-20 lg:py-28 relative">
    {/* Left side text */}
    <div className="w-full md:w-1/2 text-white z-10">
      <p className="text-sm uppercase tracking-wide mb-4">Summer 2025</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        NEW COLLECTION
      </h1>
      <p className="text-sm sm:text-base text-white/90 mb-6">
        We know how large objects will act, but things on a small scale.
      </p>
      <button className="inline-block bg-[#2fb86a] text-white px-5 py-3 rounded-md font-medium">
        SHOP NOW
      </button>
    </div>

    {/* Right side image */}
    <div className="hidden md:flex md:w-full md:h-full relative z-0">
      <img
        src="public\images\shop-hero-1-product-slide-1.png"
        alt="hero"
        className="object-cover w-full h-full rounded-md shadow-lg"
      />
    </div>
  </div>
</div>

    </header>
  );
}
