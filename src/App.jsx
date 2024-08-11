import HomePage from "./pages/Homepage";
import NewsPage from "./pages/NewsPage"; // افترض أنك قمت بإنشاء هذه الصفحة
import AboutUsPage from "./pages/AboutUsPage"; // افترض أنك قمت بإنشاء هذه الصفحة
import ContactPage from "./pages/ContactPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
