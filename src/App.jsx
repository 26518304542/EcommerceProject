import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import OverflowChecker from "./components/OverflowChecker";

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
            </Routes>
          </div>
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}
