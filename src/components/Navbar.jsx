import { NavLink } from "react-router-dom";

export default function Navbar() {

  /*
    role meanings:
    null      → not logged in
    "user"    → normal user
    "nominee" → nominee
  */
  const role = null; // change to "user" or "nominee" to test

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container">

        {/* LOGO */}
        <NavLink className="navbar-brand gold fw-bold" to="/">
          LastKey
        </NavLink>

        {/* HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#lastKeyNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="lastKeyNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* PUBLIC LINKS */}
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/how" className="nav-link">How It Works</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/security" className="nav-link">Security</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>

            {/* USER LINKS (NO DASHBOARD) */}
            {role === "user" && (
              <>
                <li className="nav-item">
                  <NavLink to="/user/home" className="nav-link">
                    My Vault
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/user/add-data" className="nav-link">
                    Add Data
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/user/select-nominee" className="nav-link">
                    Nominee
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/user/view-data" className="nav-link">
                    View Data
                  </NavLink>
                </li>
              </>
            )}

            {/* NOMINEE LINKS */}
            {role === "nominee" && (
              <li className="nav-item">
                <NavLink to="/nominee/access" className="nav-link">
                  My Access
                </NavLink>
              </li>
            )}

            {/* AUTH (ONLY WHEN LOGGED OUT) */}
            {!role && (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>

                <li className="nav-item ms-lg-2">
                  <NavLink to="/register" className="btn btn-warning">
                    Register
                  </NavLink>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
