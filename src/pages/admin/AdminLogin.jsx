import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ FRONTEND-ONLY ADMIN LOGIN SETUP
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "admin");

    navigate("/admin/dashboard");
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-warning mb-4">Admin Login</h2>

      <form onSubmit={handleLogin} className="col-md-4">
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Admin Email"
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          required
        />

        <button className="btn btn-warning w-100">
          Login as Admin
        </button>
      </form>
    </div>
  );
}