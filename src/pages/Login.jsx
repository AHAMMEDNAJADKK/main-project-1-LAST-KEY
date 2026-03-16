import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // COMMON LOGIN FLAG
    localStorage.setItem("isLoggedIn", "true");

    // FRONTEND-ONLY ROLE LOGIC
    if (email.toLowerCase().includes("nominee")) {
      localStorage.setItem("role", "nominee");
      localStorage.setItem("deathVerified", "false");

      navigate("/nominee/upload-death-certificate");
    } else {
      localStorage.setItem("role", "user");

      navigate("/user/home");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to LastKey</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
