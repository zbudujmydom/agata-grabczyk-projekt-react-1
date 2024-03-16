import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import CrewSection from "./components/CrewSection/CrewSection";
import OfferSection from "./components/OfferSection/OfferSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Header />
      <CrewSection />
      <OfferSection />
      <Footer />
    </Router>
  );
}

export default App;
