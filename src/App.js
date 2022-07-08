import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import CareersPage from './pages/CareersPage/index.js';
import ContactPage from "./pages/ContactPage";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";




function App() {


  return (
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<AboutPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
