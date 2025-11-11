import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </PageContent>
      <Footer />
    </Router>
  );
}
