import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const isShop = location.pathname.startsWith('/shop');
  const isHome = location.pathname === '/';

  return (
    <header className="w-full relative min-h-[360px] md:min-h-[520px] lg:min-h-[100px]">



      {/* ---------- TOP INFO BAR (Aynı) ---------- */}
      <div className={isShop ? "bg-[#23856D] text-white text-sm" : "bg-[#0b3650] text-white text-sm"}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span>(225) 555-0118</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
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
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 relative">

                {/* Logo - centered on mobile */}
          <Link
            to="/"
            className={isShop ? 'absolute left-4 md:static text-2xl font-bold text-[#252B42] flex-shrink-0' : 'absolute left-4 md:static text-2xl font-bold text-[#252B42] flex-shrink-0'}
          >
            Bandage
          </Link>

          {/* --------- MOBILE HEADER (YENİ) --------- */}
          <div className="flex w-full items-center justify-end md:hidden">



            {/* Right icons */}
              <div className="flex items-center gap-4">
                <Search className="w-5 h-5 text-[#23A6F0]" />
                <Link to="/cart">
                  <ShoppingCart className="w-6 h-6 text-[#23A6F0]" />
                </Link>
                <Like className="w-6 h-6 text-[#23A6F0]" />
                <User className="w-6 h-6 text-[#23A6F0]" />

                {/* Mobile Menu toggle (hamburger) */}
                <button aria-label="open menu" onClick={() => setMobileOpen(!mobileOpen)} className="ml-2">
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
                <div className="absolute z-50 left-0 top-full mt-2 w-[620px] bg-white shadow-lg border rounded-md p-4">
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
            {/* --------- DESKTOP RIGHT ICONS  --------- */}
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
          <div className="md:hidden fixed inset-0 z-50 bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="w-full h-full flex flex-col items-center justify-start pt-24 gap-8 text-center">
              <button aria-label="close menu" className="absolute top-6 right-6 text-gray-500 text-2xl" onClick={() => setMobileOpen(false)}>✕</button>

              <Link to="/" onClick={() => setMobileOpen(false)} className={`text-[30px] leading-[45px] ${isHome ? 'font-bold text-[#252B42]' : 'font-normal text-[#252B42]'}`}>Home</Link>
              <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-[30px] leading-[45px] font-normal text-[#737373]">Shop</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="text-[30px] leading-[45px] font-normal text-[#737373]">About</Link>
              <Link to="/blog" onClick={() => setMobileOpen(false)} className="text-[30px] leading-[45px] font-normal text-[#737373]">Blog</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-[30px] leading-[45px] font-bold text-[#252B42]">Contact</Link>

              <Link to="/login" className="mt-6 text-[30px] font-normal text-[#23A6F0]" onClick={() => setMobileOpen(false)}>Login / Register</Link>

              <div className="flex flex-col items-center gap-4 mt-8 text-2xl text-gray-600">
                <button className="relative">
                  <span className="text-2xl">🔍</span>
                </button>
                <button className="relative">
                  <span className="text-2xl">🛒</span>
                  <span className="absolute -top-1 -right-3 text-[12px] text-[#23A6F0]">1</span>
                </button>
                <button className="relative">
                  <span className="text-2xl">♡</span>
                  <span className="absolute -top-1 -right-3 text-[12px] text-[#23A6F0]">1</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---------- HERO / PAGE-SPECIFIC HEADER ---------- */}
      {isHome && (
        <div className="w-full overflow-hidden">
          <div className="relative bg-[#12b0c8] h-[360px] md:h-[520px] lg:h-[640px] overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block overflow-hidden">
              <img src="/images/shop-hero-1-product-slide-1.png" alt="hero" className="object-cover w-full h-full" />
            </div>
            <div className="relative z-10 h-full">
              <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                <div className="w-full md:w-1/2 text-white py-12">
                  <p className="text-sm uppercase tracking-wide mb-4">Summer 2025</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">NEW COLLECTION</h1>
                  <p className="text-sm sm:text-base text-white/90 mb-6">We know how large objects will act, but things on a small scale.</p>
                  <button className="inline-block bg-[#2fb86a] text-white px-5 py-3 rounded-md font-medium">SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*isShop && (
        <div className="w-full overflow-hidden">
          <div className="relative bg-white">
            <div className="absolute inset-0 -z-10">
              <img src="/assets/shop-hero.jpg" alt="shop-hero" className="object-cover w-full h-[520px] md:h-[680px]" />
              <div className="absolute inset-0 bg-black opacity-30" />
            </div>
            <div className="max-w-7xl mx-auto px-4 h-[520px] md:h-[680px] flex items-center">
              <div className="md:w-1/2 text-white py-12">
                <p className="text-sm uppercase tracking-wide mb-4">Summer 2025</p>
                <h1 className="text-4xl md:text-[58px] font-extrabold leading-tight mb-4">NEW COLLECTION</h1>
                <p className="text-base text-white/90 mb-6">We know how large objects will act, but things on a small scale.</p>
                <button className="inline-block bg-[#2DC071] text-white px-6 py-3 rounded-md font-medium">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      )*/}
    </header>
  );
}
