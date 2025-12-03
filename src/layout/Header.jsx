import { useState, useEffect } from "react";
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
  Youtube,
  ChevronDown,
} from "lucide-react";
import Slider from "../components/Home/Slider";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const location = useLocation();
  const isShop = location.pathname.startsWith('/shop');
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMobileOpen(true);   // sm altı → mobil header açık
      } else {
        setMobileOpen(false);  // sm ve üstü → desktop görünüm
      }
    };

    // ilk yüklemede de çalışsın
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroSlides = [
    {
      image: "/images/shop-hero-1-product-slide-1.png",
      title: "New Collection",
      subtitle: "Explore our latest styles",
    },
    {
      image: "/assets/hero-2.jpg",
      title: "Summer Sale",
      subtitle: "Up to 50% off select items",
    },
  ];

  // do not auto-open mobile menu; user should tap the hamburger to open it

  return (
    <header className="w-full relative min-h-[360px] md:min-h-[520px] lg:min-h-[100px]">



      {/* ---------- TOP INFO BAR (Aynı) ---------- */}
      <div className={`${isShop ? 'bg-[#23856D]' : 'bg-[#0b3650]'} text-white text-sm ${mobileOpen ? 'hidden' : 'block'} ${isContact ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-center px-44 py-2">
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
              <Youtube className="w-4 h-4" />
              <Twitter className="w-4 h-4" />

            </div>


          </div>
        </div>
      </div>

      {/* ---------- MAIN NAV ---------- */}
      <div className="bg-white border-b">
        {/* MOBILE HEADER - only visible on mobile */}
        {isContact ? (
          <div className="md:hidden w-full relative bg-[#F7F7F7]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {/* top band */}
            <div className="h-[160px] flex items-center justify-center relative">
              <Link to="/" className="text-[24px] font-bold text-[#252B42]">Bandage</Link>

              <div className="absolute right-4 top-4 flex items-center gap-4 text-[#737373]">
                <Search className="w-6 h-6" />
                <ShoppingCart className="w-6 h-6" />
                <Menu className="w-6 h-6" />
              </div>
            </div>

            {/* vertical nav centered */}
            <nav className="flex flex-col items-center gap-8 py-6">
              <Link to="/" className="text-3xl font-medium text-[#737373]">Home</Link>
              <Link to="/product" className="text-3xl font-medium text-[#737373]">Product</Link>
              <Link to="/pricing" className="text-3xl font-medium text-[#737373]">Pricing</Link>
              <Link to="/contact" className="text-3xl font-medium text-[#252B42]">Contact</Link>
            </nav>

            {/* contact block */}
            <div className="px-6 py-8 bg-white">
              <div className="max-w-[360px] mx-auto text-center">
                <h5 className="text-[16px] font-bold text-[#252B42]">CONTACT US</h5>
                <h1 className="text-3xl font-extrabold text-[#252B42] mt-3">Get in touch today!</h1>
                <p className="text-[16px] text-[#737373] mt-3">We know how large objects will act, but things on a small scale just do not act that way.</p>

                <div className="mt-6">
                  <div className="text-sm text-[#252B42] font-semibold">Phone : +451 215 215</div>
                  <div className="text-sm text-[#252B42] font-semibold">Fax : +451 215 215</div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-6 text-[#252B42]">
                  <Twitter className="w-6 h-6" />
                  <Facebook className="w-6 h-6" />
                  <Instagram className="w-6 h-6" />
                  <Mail className="w-6 h-6" />
                </div>

                <div className="mt-8">
                  <img src="/images/contact-hero.jpg" alt="contact" className="mx-auto w-[280px] object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="md:hidden w-full flex items-center justify-between px-4 py-3 relative" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {/* Logo - left */}
            <Link to="/" className="text-[24px] font-bold text-[#252B42] leading-8">Bandage</Link>
            {/* Hamburger - right */}
            <button aria-label="open menu" className="p-2">
              <Menu className="w-7 h-7 text-[#252B42]" />
            </button>
          </div>
        )}
        {/* DESKTOP HEADER - only visible on desktop */}
        {!isContact ? (
          <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between px-32 py-4 relative">
            <Link to="/" className="text-2xl font-bold text-[#252B42] flex-shrink-0">Bandage</Link>
            <nav className="flex items-center gap-6 relative">
              <Link to="/" className="text-[#737373] text-sm">Home</Link>
              <div className="relative" onMouseEnter={() => setShopOpen(true)} onMouseLeave={() => setShopOpen(false)}>
                <button className="flex items-center gap-1 text-sm text-[#737373] bg-white">Shop <ChevronDown className="w-4 h-4" /></button>
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

            <div className="hidden md:flex items-center gap-4 ml-6">
              <div className="hidden sm:flex items-center gap-2">
                <Link to="/login" className="text-xs underline">Login / Register</Link>
              </div>
              <Search className="w-5 h-5 text-[#23A6F0]" />
              <Link to="/cart">
                <ShoppingCart className="w-6 h-6 text-[#23A6F0]" />
              </Link>
              <Like className="w-6 h-6 text-[#23A6F0]" />
            </div>
          </div>
        ) : (
          <div className="hidden md:block relative">
            <div className="max-w-7xl mx-auto px-32 py-4 relative" style={{ height: 91 }}>
              <Link to="/" className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-[#252B42]">Bandage</Link>

              <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-6">
                <Link to="/" className="text-[#737373] font-bold text-sm">Home</Link>
                <Link to="/product" className="text-[#737373] font-bold text-sm">Product</Link>
                <Link to="/pricing" className="text-[#737373] font-bold text-sm">Pricing</Link>
                <Link to="/contact" className="text-[#737373] font-bold text-sm">Contact</Link>
              </nav>

              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-4">
                <Link to="/login" className="text-sm text-[#23A6F0]">Login</Link>
                <button className="bg-[#23A6F0] text-white px-5 py-3 rounded">Become a member</button>
              </div>
            </div>
          </div>
        )}


        {/* --------- MOBILE DROPDOWN MENU (YENİ) --------- */}
        {mobileOpen && (
          <div className="md:hidden w-full bg-white border-b" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {/* Top row */}


            {/* Menu links */}
            <nav className="flex flex-col items-center gap-2 mt-4 pb-4">
              <Link to="/" className="text-[22px] leading-[32px] font-bold text-[#252B42]">Home</Link>
              <Link to="/shop" className="text-[22px] leading-[32px] text-[#737373]">Shop</Link>
              <Link to="/about" className="text-[22px] leading-[32px] text-[#737373]">About</Link>
              <Link to="/blog" className="text-[22px] leading-[32px] text-[#737373]">Blog</Link>
              <Link to="/contact" className="text-[22px] leading-[32px] text-[#252B42]">Contact</Link>
              <Link to="/pages" className="text-[22px] leading-[32px] text-[#737373]">Pages</Link>
            </nav>

            {/* Login & icons */}
            <div className="flex flex-col items-center gap-6 mt-2 pb-4">
              <Link to="/login" className="text-[18px] flex items-center gap-2 text-[#23A6F0]">
                <User className="w-5 h-5 text-[#23A6F0]" />
                <span>Login / Register</span>
              </Link>

              <div className="flex items-center flex-column flex-wrap gap-6 text-[#23A6F0] mt-2">
                <Search className="w-full h-6" />
                <ShoppingCart className="w-full h-6" />
                <Like className="w-full h-6" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---------- HERO / PAGE-SPECIFIC HEADER ---------- */}
      {isHome && (
        <Slider slides={heroSlides} />
      )}

      {isContact && (
        <div className="hidden md:block relative w-full bg-white overflow-hidden">
          {/* decorative shapes */}
          <div className="absolute left-14 top-0 w-[484px] h-[484px] bg-[#FFE9EA] rounded-full -z-10" />
          <div className="absolute left-0 top-0 right-0 bottom-0 -z-20 bg-transparent" />

          <div className="relative max-w-7xl mx-auto px-8 py-24">
            <div className="flex items-center gap-8">
              <div className="w-1/2 pr-8">
                <h5 className="text-[16px] font-bold text-[#252B42]">CONTACT US</h5>
                <h1 className="text-[58px] leading-[80px] font-bold text-[#252B42] mt-6">Get in touch today!</h1>
                <p className="text-[20px] text-[#737373] mt-6 max-w-md">We know how large objects will act, but things on a small scale just do not act that way.</p>

                <div className="mt-8 space-y-2">
                  <div className="font-semibold text-[#252B42]">Phone : +451 215 215</div>
                  <div className="font-semibold text-[#252B42]">Fax : +451 215 215</div>
                </div>

                <div className="flex gap-4 mt-6 text-[#252B42]">
                  <Twitter className="w-6 h-6" />
                  <Facebook className="w-6 h-6" />
                  <Instagram className="w-6 h-6" />
                  <Mail className="w-6 h-6" />
                </div>
              </div>

              <div className="w-1/2 flex justify-end">
                <img src="/images/contact-hero.jpg" alt="contact" className="w-[571px] h-auto object-contain" />
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
