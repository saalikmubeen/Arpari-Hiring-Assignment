import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AboutPage from "./AboutPage";
import CareersPage from './CareersPage';
import ContactPage from "./ContactPage";
import "./App.css";




function App() {
  return (
      <BrowserRouter>
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
