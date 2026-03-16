import { useNavigate } from "react-router-dom";

export default function NomineeLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // FRONTEND-ONLY FAKE LOGIN
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "nominee");
    localStorage.setItem("deathVerified", "false");

    navigate("/nominee/upload-death-certificate");
  };

  return (
    <div className="container mt-5 pt-5 text-light">
      <h2>Nominee Login</h2>

      <form onSubmit={handleLogin} className="mt-4">
        <input
          className="form-control mb-3"
          placeholder="Email"
          type="email"
          required
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          required
        />

        <button className="btn btn-warning w-100">
          Login
        </button>
      </form>
    </div>
  );
}
