import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contacts from "./pages/Contacts";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>

      <div className="app-container">

        <nav className="navbar">

          <div className="logo">
            UNIVERSITIES UA
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Головна
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Про сайт
            </NavLink>

            <NavLink
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Галерея
            </NavLink>

            <NavLink
              to="/news"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Новини
            </NavLink>

            <NavLink
              to="/contacts"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Контакти
            </NavLink>

          </div>

        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2026 Всі права захищені</p>
        </footer>

      </div>

    </BrowserRouter>
  );
}

export default App;