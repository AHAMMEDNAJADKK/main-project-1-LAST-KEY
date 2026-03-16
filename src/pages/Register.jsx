import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Create Your LastKey Account</h2>

      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Create Account</button>
      </form>

      <p className="note">
        Nominees will be added later from your vault
      </p>
    </div>
  );
}
