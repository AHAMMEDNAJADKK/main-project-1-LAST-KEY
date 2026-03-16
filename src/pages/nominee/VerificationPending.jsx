import { useNavigate } from "react-router-dom";

export default function VerificationPending() {
  const navigate = useNavigate();

  const approve = () => {
    // simulate admin approval
    localStorage.setItem("deathVerified", "true");
    navigate("/nominee/access");
  };

  return (
    <div className="container mt-5 pt-5 text-light text-center">
      <h3>Verification in Progress</h3>
      <p className="text-secondary">
        Your document is under verification. You will get access once approved.
      </p>

      {/* DEMO BUTTON */}
      <button className="btn btn-outline-warning mt-3" onClick={approve}>
        (Demo) Approve Now
      </button>
    </div>
  );
}
