import React from 'react';

function Header({ onToggleTheme, theme }) {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top shadow ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container d-flex align-items-center">
        <a className="navbar-brand fw-bold text-primary" href="#">
          SoftSell
        </a>

        {/* Theme toggle button */}
        <button
          className="btn btn-outline-secondary ms-auto me-3"
          onClick={onToggleTheme}
          aria-label="Toggle light/dark mode"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#how-it-works">How It Works</a></li>
            <li className="nav-item"><a className="nav-link" href="#why-choose-us">Why Choose Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
            <li className="nav-item">
              <a className="btn btn-primary ms-2" href="#contact">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
