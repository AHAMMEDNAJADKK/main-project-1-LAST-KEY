import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container">

    
        <Link className="navbar-brand gold fw-bold" to="/">
          LastKey
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#lastKeyNavbar"
          aria-controls="lastKeyNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="lastKeyNavbar">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/how">How It Works</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/storage">Storage</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/security">Security</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-outline-warning ms-lg-2" to="/register">
                Register
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
