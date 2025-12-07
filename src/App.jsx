import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import OverflowChecker from "./components/OverflowChecker";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import TeamPage from "./pages/TeamPage";
import PricingPage from "./pages/PricingPage";

/* App uses a single Header and single Footer for all pages (as requested) */
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        {import.meta.env.DEV /*&& <OverflowChecker />*/}
        <PageContent>
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* add other routes as needed */}
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/productdetails" element={<ProductDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </div>
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}
