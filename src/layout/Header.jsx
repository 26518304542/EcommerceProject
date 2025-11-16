import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Heart as Like,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="w-full relative min-h-[360px] md:min-h-[520px] lg:min-h-[100px]">

      {/* ---------- TOP INFO BAR (Aynı) ---------- */}
      <div className="bg-[#0b3650] text-white text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span>(225) 555-0118</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          <div className="flex-1 hidden sm:flex items-center justify-center">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>

          <div className="flex items-center gap-3 text-white">
            <div className="hidden sm:flex items-center gap-2">
              <Facebook className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
              <Twitter className="w-4 h-4" />
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <Link to="/login" className="text-xs underline">Login / Register</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MAIN NAV ---------- */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          {/* --------- MOBILE HEADER (YENİ) --------- */}
          <div className="flex w-full items-center justify-between md:hidden">

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-[#252B42]">
              Bandage
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-[#23A6F0]" />
              <Link to="/cart">
                <ShoppingCart className="w-6 h-6 text-[#23A6F0]" />
              </Link>
              <Like className="w-6 h-6 text-[#23A6F0]" />
              <User className="w-6 h-6 text-[#23A6F0]" />

              {/* Mobile Menu */}
              <button onClick={() => setMobileOpen(!mobileOpen)}>
                <Menu className="w-7 h-7 text-[#252B42]" />
              </button>
            </div>
          </div>

          {/* --------- DESKTOP MENU (Aynı) --------- */}
          <nav className="hidden md:flex items-center gap-6 relative">
            <Link to="/" className="text-[#737373] text-sm">Home</Link>

            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm text-[#737373] bg-white">
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

                    <div className="flex-1">
                      <img src="/assets/mega-1.jpg" alt="mega" className="w-full h-36 object-cover rounded" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-sm text-[#737373]">About</Link>
            <Link to="/blog" className="text-sm text-[#737373]">Blog</Link>
            <Link to="/contact" className="text-sm text-[#737373]">Contact</Link>
            <Link to="/pages" className="text-sm text-[#737373]">Pages</Link>


          </nav>
                        {/* --------- DESKTOP RIGHT ICONS (YENİ) --------- */}
            <div className="hidden md:flex items-center gap-4 ml-6">
              <Search className="w-5 h-5 text-[#23A6F0]" />
              <Link to="/cart">
                <ShoppingCart className="w-6 h-6 text-[#23A6F0]" />
              </Link>
              <Like className="w-6 h-6 text-[#23A6F0]" />
              <User className="w-6 h-6 text-[#23A6F0]" />
            </div>
        </div>

        {/* --------- MOBILE DROPDOWN MENU (YENİ) --------- */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white shadow-md animate-fadeIn">
            <div className="flex flex-col px-4 py-4 gap-4 text-[#252B42] text-lg font-medium">

              <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>

              <details className="cursor-pointer">
                <summary className="text-lg">Shop</summary>
                <div className="flex flex-col pl-4 mt-2 gap-2 text-base">
                  <Link to="#">Kadın - Bags</Link>
                  <Link to="#">Kadın - Belts</Link>
                  <Link to="#">Erkek - Hats</Link>
                </div>
              </details>

              <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link to="/pages" onClick={() => setMobileOpen(false)}>Pages</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
